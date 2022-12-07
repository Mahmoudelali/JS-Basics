



function sizeEdit(e) {
    let shoeSize = +document.getElementById("shoe_size").value;
    let birthYear = +document.getElementById("year").value;
    let result = document.getElementById("result");
    e.preventDefault();
    let mathCalc ;
    mathCalc = shoeSize * 2;
    console.log(mathCalc , shoeSize)
    mathCalc += 5;
    mathCalc *= 50;
    mathCalc -= birthYear;
    mathCalc += 1766;
    result.innerHTML = mathCalc;
    // return result;
}

document.forms[0].onsubmit = sizeEdit