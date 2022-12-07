let userName = document.getElementById("name");
let target = document.getElementById("target");

document.forms[0].onsubmit = (e) => {
    e.preventDefault()
}
userName.addEventListener("change", (e) => {
    console.log('fires')
    target.innerHTML = userName.value;
});
