let first_number = document.getElementById("first_number");
let second_number = document.getElementById("second_number");
let button = document.getElementById("validate");
let result = document.getElementById("result");
let form = document.forms[0];

form.onsubmit = (e) => {
    e.preventDefault();
    let multiplication =
        Number(first_number.value) * Number(second_number.value);
    result.innerText = `result  : ${multiplication}`;
};
