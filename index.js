
function submitData(form_name, form_email){
	let formData = {
  		name: form_name,
  		email: form_email
	};
	let configObj = {
		method: "POST",
  		headers: {
   		 "Content-Type": "application/json",
  		  "Accept": "application/json"
		  },
 		 body: JSON.stringify(formData)
	};

	const d = document.querySelector("#div")

	return fetch("http://localhost:3000/users", configObj)
		.then(function(response) {
   			 return response.json();
 		 })
 		 .then(function(object) {

 		 	// let p = document.createElement("p")
 		 	// p.innerText = object.id
 		 	// d.appendChild(p)

 		 	document.body.innerHTML = object.id

 			console.log(object);
 		 })
 		 .catch(function(error) {
			// const p = document.createElement("p")
 		//  	p.innerText = error.message
 		//  	d.appendChild(p)   		
 		 		 	document.body.innerHTML = error.message
	
 		 	console.log(error.message);
  		});
}