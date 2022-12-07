let myForm = document.forms[0];
let resetBtn = document.querySelector("button");
let userName = document.getElementById("name");
let surname = document.getElementById("surname");
let city = document.getElementById("city");

resetBtn.onclick = (e) => {
    if (confirm("do you really want to erase all your data ?!")) {
        // resetBtn.setAttribute("type", "submit");
        userName.value = "";
        surname.value = "";
        city.value = "";
    } 
};
