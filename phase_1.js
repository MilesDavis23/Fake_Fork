const birthDate = document.querySelector("#birthDate")
const form = document.querySelector("form")



function fillInDashes(event){
    let value = event.target.value
    if(value.length == 2 || value.length == 5){
        event.target.value += "/"
    }
}

form.addEventListener("submit", function(event){
    event.preventDefault()
    const formElements = Array.from(form.elements)
    storage.setItem("name", formElements[0].value)
    storage.setItem("email", formElements[1].value)
    storage.setItem("birthdate", formElements[2].value)
})

birthDate.addEventListener("keyup", fillInDashes)
