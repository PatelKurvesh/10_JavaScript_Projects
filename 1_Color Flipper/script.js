const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ["red", "pink", "green", "orange", "white", "gray", "#fff4", "blue", "yellow", "#f4f5", "brown" ]

// body.style.backgroundColor = aquamarine;

button.addEventListener("click", changeBg)

function changeBg(){
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
}

