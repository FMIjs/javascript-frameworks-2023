import axios from "axios";

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.url = config.url?.replace("api", "https://jsonplaceholder.typicode.com");
    // config.baseURL = "https://jsonplaceholder.typicode.com";
    console.log('Request interceptor')
    return config;

}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log('Response interceptor')
    return response;



}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});
