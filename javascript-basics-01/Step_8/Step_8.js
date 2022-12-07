document.forms[0].onsubmit = (e) => {
    e.preventDefault();
    let age = document.getElementById("age");
    let result = document.getElementById("result");
    result.innerHTML = age >= 18 ? "you are over 18" : "you are under 18";
};
