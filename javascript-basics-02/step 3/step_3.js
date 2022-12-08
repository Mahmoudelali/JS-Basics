let userName = document.getElementById("name");
let target = document.getElementById("target");


let targetDiv = document.createElement('div')
targetDiv.id = "target"
document.forms[0].appendChild(targetDiv)




document.forms[0].onsubmit = (e) => {
    e.preventDefault()
}
userName.addEventListener("change", (e) => {
    console.log('fires')
    targetDiv.innerHTML = userName.value;
});
