let firstNumber = document.getElementById("first_number");
let secondNumber = document.getElementById("second_number");
let result = document.getElementById("result");

document.forms[0].onsubmit = (e) => {
    e.preventDefault();

    result.innerText = `result : ${
        Number(firstNumber.value) / Number(secondNumber.value)
    }`;
};
