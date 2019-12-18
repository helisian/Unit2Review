let key = "Sl5akwqddrCF5a8GV1qYibidzbBu620K"

document.addEventListener("DOMContentLoaded", () => {

    let form = document.querySelector(".form")
    let select = document.querySelector(".select")
    let input = document.querySelector("#userInput")
    let submit = document.querySelector("#submit")
    let content = document.querySelector(".content")

    // let limit = 10
    // let search = "Rainbows"
    
    let h1 = document.createElement("h1")

    const showGif = (data) => {
        data.forEach(gif => {
        let url = gif.images.downsized.url
        let image = document.createElement("img")
        image.src = url
        content.appendChild(image)
        })
    }

    const giphySearch = async (userInput, limit) => {
        content.innerHTML = ""
        try {    
            let res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${userInput}&limit=${limit}`)
            showGif(res.data.data)
        } catch(err){
            console.log(err)
        }
    }

    const populateSelect = (n) => {
        for (let i=1; i <=n; i++){
            let option = document.createElement("option")
            option.innerText = i
            option.value = i
            select.appendChild(option)
        }
    }
    populateSelect(25)

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        let userInput = input.value
        let limit = select.value
        giphySearch(userInput,limit)
        form.reset()
    })

})