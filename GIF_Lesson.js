let key = "Sl5akwqddrCF5a8GV1qYibidzbBu620K"

document.addEventListener("DOMContentLoaded", () => {

    let form = document.querySelector(".form")
    let select = document.querySelector(".select")
    let input = document.querySelector("#userInput")
    let submit = document.querySelector("#submit")
    let content = document.querySelector(".content")
    
    let h1 = document.createElement("h1")

    const populateSelect = (n) => {
        for (let i=1; i <=n; i++){
            let option = document.createElement("option")
            option.innerText = i
            option.value = i
            select.appendChild(option)
        }
    }
    populateSelect(25)

    





})