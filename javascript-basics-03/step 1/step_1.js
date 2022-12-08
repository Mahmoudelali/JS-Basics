let img = document.getElementById('image1')


img.onmouseover = () => {
    img.style.border = '3px solid red'
}
img.onmouseleave = () => {
    img.style.border = ''
}