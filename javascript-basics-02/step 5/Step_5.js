let myImages = document.querySelectorAll(".container > img");

// for (let i = 1; i < myImages.length; i++) {
//     myImages[i].src = `images/image${i}_2.jpg`;
// }

myImages[0].addEventListener("mouseover", () => {
    myImages[0].src = "images/image1_2.jpg";
});
myImages[1].addEventListener("mouseover", () => {
    myImages[1].src = "images/image2_2.jpg";
});
myImages[2].addEventListener("mouseover", () => {
    myImages[2].src = "images/image3_2.jpg";
});
myImages[3].addEventListener("mouseover", () => {
    myImages[3].src = "images/image4_2.jpg";
});
myImages[4].addEventListener("mouseover", () => {
    myImages[4].src = "images/image5_2.jpg";
});
