// Add your code here
function submitData(firstName, email){
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "name": firstName,
            "email": email,
        })
    }
    return fetch('http://localhost:3000/users', configurationObject)
    .then(response => response.json())
    .then(body => addNewContact(body.id))

    .catch(error => document.querySelector("body").innerHTML = error)
    }


function addNewContact(newID){
    document.getElementsByTagName("body")[0].innerHTML = newID
}
submitData("name", "name@name.com")