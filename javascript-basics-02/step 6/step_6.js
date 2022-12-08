let myImages = document.querySelectorAll("img")

myImages.forEach(element => {
    element.addEventListener('mouseover', (element) => {
        element.target.src = `images/${element.target.id}_2.jpg`
    })
    element.addEventListener('mouseleave' , element => {
        element.target.src = `images/${element.target.id}.jpg`
    })
});