const red = document.querySelector('.red')
const green = document.querySelector('.green')
const blue = document.querySelector('.blue')

const targetText = document.getElementById('text')

const color_switch = (color1, color2, color3, target) => {
    color1.onclick = () => {
        target.style.color = "green";
    }
    color2.onclick = () => {
        target.style.color = "red";
    }
    color3.onclick = () => {
        target.style.color = "blue";
    }
}

color_switch(green, red, blue, targetText)