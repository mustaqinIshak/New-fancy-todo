import axios from "axios"


//Create axios client, pre-configured with baseURL
let APIKit = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000,
})

//Set JSON web token in client to be included in all calls
export const setClientToken = async(token) => {
    console.log(`ini data token di APIkit ${token}`)
    return APIKit.interceptors.request.use(function(config) {
        config.headers.Authorization = `Bearer ${token}`
        return config
    })
}

export default APIKit