const requestURl = "https://jsonplaceholder.typicode.com/users";


function sendRequest(method,url){
    return new Promise((resolve,reject) => {
const xhr = new XMLHttpRequest()
xhr.open(method, url) 
xhr.responseType= "json" //объекты (по умолч строка)

xhr.onload = () => {
    if(xhr.status>=400){
        reject(xhr.response)
    }else{
    resolve(xhr.response)
}
}
xhr.onerror = () =>{
    resolve.log(xhr.response)  
}
xhr.send()
})
}

sendRequest("GET",requestURl)
.then(data => console.log(data))
.catch(err => console.log(err));