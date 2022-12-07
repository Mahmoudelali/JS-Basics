let name = document.getElementById("name");
let surName = document.getElementById("surname");
let city = document.getElementById("city");
let result = document.getElementById("result");

document.forms[0].onsubmit = (e) => {
    e.preventDefault();

    result.innerText = `name : ${name.value}
    surname : ${surName.value}
    city : ${city.value}`;
};
