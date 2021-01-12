# New-fancy-todo-REST-API
----

**Register**
----
	Return json data (id, username, token)
* **URL**
	/users/register
* **Method:**
	`POST`
* **URL Params**
	None
* **Data Params**
	**Required**
	`username:[String]`
	`password:[String]`
* **Success Response**
	* **Code : ** 201 <br />
	**Content : **
	``` 
	{
  	id: "5ff3f91166b04779d0bffe2e",
    	username: "mustaqin",
	  	token: 		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZjNmOTExNjZiMDQ3NzlkMGJmZmUyZSIsImlhdCI6MTYxMDE2MDMxNH0.HJXEH1NJWix1gg_WGC080zYx9NQ06vuf4rso5LOZ5NY"
	}
	```
* **Error Response**
	* **Code : ** 400 BAD REQUEST<br />
		**Content : **`{message: username cannot empty}`
	OR
	* **Code : ** 400 BAD REQUEST <br />
		**Content : **`message: password cannot empty`
* **Sample Call**

```Javascript
    $.ajax({
        url:"users/registe",
        dataType: "json",
        type: "POST",
        data: {username:"username", password:"password"},
        success: function(data){
                    console.log(data)
        }
    })
```

**Login**
----
	return json data (id, username, token)
* **URL**
	/users/register
* **Method**
	`POST`
* **URL Params**
None
* **Data Params**
	**Required**
	`Username: [String]`
	`Password: [String]`
* **Success Response**
	* **Code : ** 200 <br />
	  **Content : **
	  ```
	{	
        id: "5ff3f91166b04779d0bffe2e",
        username: "mustaqin",
        token: 				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZjNmOTExNjZiMDQ3NzlkMGJmZmUyZSIsImlhdCI6MTYxMDE2MDMxNH0.HJXEH1NJWix1gg_WGC080zYx9NQ06vuf4rso5LOZ5NY"
	} 
	  ```
* **Error Response**
	* **Code : ** 401 <br />
	  **Content : ** `{message: username/password is wrong}`
* **Sample Call**
```Javascript
	$.ajax({
        url:"users/register",
        dataType: "json",
        type: "POST",
        data: {username:"username", password:"password"},
        success: function(data){
                    console.log(data)
    	}
	})
```

**Create Todo**
----
	return json message about todo is success create
* **URL**
	/todos/create?idUser=""
* **Method**
	`POST`
* **URL Params**
	**Required**
	`userId=[String]`
* **Data Params**
	`date: [Date]`
    `todo: [String]`
* **Headers**
	**Required**
	`Authorization: Bearer Token`
* **Success Response**
	* **Code : **201 <br />
	**Content : ** `{message: "create todo success"}`
* **Error Response**
	* **Code : **401 <br />
	**Content : *`{message: "id user is required"}
* **Sampel Call**
```Javascript
	var token = localStorage.getItem('token')
	$.ajax({
		url:"todo/create",
		dataType: "json",
		type: "POST",
		headers: {
			"Authorization": "Bearer " + token  
		}
		data: {
			date: "7/23/2021",
			todo: "hello world"
		},
		success: function (data) {
			console.log data
		}
	})
```

**Read All Todo**
----
	return json data abaout all todos user
* **URL**
	/todos/getAll
* **Method**
	`GET`
* **URL Params**
	NonE
* **Data Params**
	None
* **Headers**
	**Required**
	`Authorization = Bearer token`
* **Success Respons**
	* **Code : **200 <br />
	**Content: ** 
	```
	[
		{
            "status": "not",
            "_id": "5ffd04ebc11f9f2610340653",
            "date": "2021-07-22T16:00:00.000Z",
            "todo": "buy papers",
            "userId": "5ff3f91166b04779d0bffe2e",
            "__v": 0
        },
        {
            "status": "not",
            "_id": "5ffd04ebc11f9f2610340653",
            "date": "2021-07-22T16:00:00.000Z",
            "todo": "work homework",
            "userId": "5ff3f91166b04779d0bffe2e",
            "__v": 0
        },
	]
	```
* **Error Respons**
	* **Code : **400 <br />
	**Content :** `{ message: data not found }`
*  **Sample Call**
```Javascript
	var token = localStorage.getItem('token')
	$.ajax({
		url:"todos/",
		dataType: "json",
		type: "GET",
		headers: {
			"Authorization": "Bearer " + token  
		}
		success: function (data) {
			console.log data
		}
	})
```

**Read One Todo**
----
	return json data about specifik
* **URL**
	/todos/getOne?todoId=""
* **Method**
	`GET`
* **URL Params**
	**required**
	`todoUser = [String]`
* **Data Params**
	None
* **Headers**
	**Required**
	`Authorization = Bearer token`
* **Success Response**
	* **Code : **200 <br />
	**Content : **
	```
        {
            "status": "not",
            "_id": "5ffd04ebc11f9f2610340653",
            "date": "2021-07-22T16:00:00.000Z",
            "todo": "buy papers",
            "userId": "5ff3f91166b04779d0bffe2e",
            "__v": 0
        }
	```
* **Error Response**
	* **code : **400 <br />
	**Content : ** `{ message: "data not found" }`
* **Sample Call**
```Javascript
	var token = localStorage.getItem('token')
	var todoId = "5ffd04ebc11f9f2610340653"
	$.ajax({
		url: `/todos?todoId=${todoId}`,
		dataType: json ,
		type: 'GET',
		headers: {
			"Authorization": "Bearer" + token
		},
		success: function(data) {
			console.log(data)
		}
		
	})
```

**Update Todo**
----
	update siggle todo and return json data about todo success update
* **URL**
	/todos/update?todoId=" "
* **URL Params**
	Required
	`todoId = [String]`
* **Data Params**
	Required
	`date= [String]`
	`todo= [String]`
	`status= [String, none/done]`
* **Success Response**
	* **code : **200 <br />
	**Content : **`{ message: "update success" }
* **Error Response**
	* **Code : **404 <br />
	**Content : **`{ message: "data not found" }`
	Or
	* **Code : **400 <br />
	**Content : **`{ message: "parameter must be not/done" }`
* **Sample Call**
```Javascript
	var token = localStorage.getItem('token')
	var todoId = "5ffd04ebc11f9f2610340653"
	$.ajax({
		url: `/todos/update?todoId=${todoId}`,
		dataType: json,
		type:'PUT',
		headers: {
			"Authorization" : "Bearer" + token
		},
		data: {
			date: "1/23/2021",
			todo: "hello world",
			status: "done"
		},
		success: function(data){
			console.log(data)
		}
	})
```

**Update Status Todo**
----
	update specific todo status and return json data about update status success
* **URL**
	/todos/updateStatus?todoId=""
* **URL Params**
	required
	`todoId= [String]`
* **Data Params**
	required
	`status= [String, none/done]`
* **Headers**
	requires
	`Authorization= Bearer token`
* **Success Response**
	* **Code : **200 <br />
	**Content : **`{ message: "update status success"}`
* **Error Response**
	* **code : ** <br />
	**Content : **`{ message: "data not found" }`
	Or
	* **Code : **400 <br />
	**Content : **`{ message: "parameter must be not/done" }`
* **Sample Call**
```Javascript
	var token = localStorage.getItem('token')
	var todoId = "5ffd04ebc11f9f2610340653"
	$.ajax({
		url: `/todos/updateStatus?todoId=${todoId}`,
		dataType: json,
		type:'PUT',
		headers: {
			"Authorization" : "Bearer" + token
		},
		data: {
			status: "done"
		}
		success: function(data){
			console.log(data)
		}
	})
```
**Delete Todo**
----
	delete specific todo and return json data about delete todo success
* **URL**
	/todos/delete?todoId=""
* **URL Params**
	required
	`todoId= [String]`
* **Data Params**
	None
* **Headers**
	requires
	`Authorization= Bearer token`
* **Success Response**
	* **Code : **200 <br />
	**Content : **`{ message: "delete success"}`
* **Error Response**
	* **code : ** <br />
	**Content : **`{ message: "data not found" }`
* **Sample Call**
```Javascript
	var token = localStorage.getItem('token')
	var todoId = "5ffd04ebc11f9f2610340653"
	$.ajax({
		url: `/todos/delete?todoId=${todoId}`,
		dataType: json,
		type:'DELETE',
		headers: {
			"Authorization" : "Bearer" + token
		},
		success: function(data){
			console.log(data)
		}
	})
```
	
