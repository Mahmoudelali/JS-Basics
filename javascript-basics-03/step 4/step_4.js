

let password = document.getElementById('password')
let passwordConfirm = document.getElementById('confirmation')
let confirmationBtn = document.querySelector('button')
console.log(confirmationBtn)

const error = (pass, confirmation, submitBtn) => {
        submitBtn.onclick = () => {

        if (pass.value !== confirmation.value) {
            confirmation.style.border = "2px solid red";
            pass.style.border = "2px solid red";
        }
        else {
            confirmation.style.border = "2px solid green";
            pass.style.border = "2px solid green";
        }
    }
}

error(password, passwordConfirm, confirmationBtn)