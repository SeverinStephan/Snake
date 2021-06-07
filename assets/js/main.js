let body = document.querySelector("body")
let snakeField = document.createElement("section")
snakeField.id = "snakeField"
body.appendChild(snakeField)

let colors = [
    "blue",
    "green",
    "red",
    "pink",
    "purple",
    "yellow"
]

for (let i = 0; i < 100; i++) {
    let div = document.createElement("div")
    div.classList.add("item")
    div.addEventListener("mouseover", function () {
        div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]

        const changeBg = () => {
            div.style.backgroundColor = "lightblue"
        }
        setTimeout(changeBg, 1000)
    })

    snakeField.appendChild(div)

}

