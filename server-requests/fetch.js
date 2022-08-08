const requestURl = "https://jsonplaceholder.typicode.com/users";


function sendRequest(method,url, body = null){
    return fetch(url).then(response => {
        return response.json()
    })
}

sendRequest("GET",requestURl)
.then(data => console.log(data))
.catch(err => console.log(err))

const body = {
    name: "Mary",
    age: 24
}
