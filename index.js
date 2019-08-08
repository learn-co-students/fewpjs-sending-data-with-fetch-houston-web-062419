// Add your code here
function submitData(name, email) {

let form_data = {
  name,
  email
}

let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(form_data)
}

return fetch("http://localhost:3000/users", configObj)
  .then(response => response.json())
  .then(object => document.body.innerHTML = object.id)
  .catch(error => document.body.innerHTML = error.message)

}
