# New-fancy-todo-REST-API
----

**Register**
----
	Return json data (id, username, token)
* **URL**
	/user/register
* **Method:**
	`POST`
* **URL Params**
	None
* **Data Params**
	**Required**
	`username:[String]`
	`password:[String]`
* **Success Response**
	
	* **Code: ** 201 <br />
	**Content: **
	``` 
	{
  	id: "5ff3f91166b04779d0bffe2e",
    	username: "mustaqin",
	  	token: 		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZjNmOTExNjZiMDQ3NzlkMGJmZmUyZSIsImlhdCI6MTYxMDE2MDMxNH0.HJXEH1NJWix1gg_WGC080zYx9NQ06vuf4rso5LOZ5NY"
	}
	```
```
	
* **Error Response**
	* **Code: ** 400 BAD REQUEST<br />
		**Content: **`{message: username cannot empty}`
	OR
	* **Code: ** 400 BAD REQUEST <br />
		**Content: **`message: password cannot empty`
* **Sample Call**

​```javascript
    $.ajax({
        url:"user/registe",
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
	/user/register
* **Method**
	`POST`
* **URL Params**
None
* **Data Params**
	**Required**
	`Username: [String]`
	`Password: [String]`
* **Success Response**
	* **Code: ** 200 <br />
	  **Content: **
	  ```
	{	
        id: "5ff3f91166b04779d0bffe2e",
        username: "mustaqin",
        token: 				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZjNmOTExNjZiMDQ3NzlkMGJmZmUyZSIsImlhdCI6MTYxMDE2MDMxNH0.HJXEH1NJWix1gg_WGC080zYx9NQ06vuf4rso5LOZ5NY"
	} 
	  ```
* **Error Response**
	* **Code: ** 401 <br />
	  **Content: ** `{message: username/password is wrong}`
* **Sample Call**
```Javascript
	$.ajax({
        url:"user/register",
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
	/todo/create?idUser=""
* **Method**
	`POST`
* **URL Params**
	**Required**
	`userId=[String]`
* **Headers**
	**Required**
	`Authorization: Bearer Token`
* **Data Params**
	`title: [String]`
	`date: [Date]`
    `note: [String]`
* **Success Response**
	* **Code: **201 <br />
	**Content: ** `{message: "create todo success"}`
* **Error Response**
	* **Code: **401 <br />
	**Content: *`{message: "id user is required"}
* **Sampel Call**
```Javascript
	const id= 
	$.ajax({
		url:"todo/create",
		
	})
```
	