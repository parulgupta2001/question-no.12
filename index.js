const inputPassword = document.querySelector("#input")
const button = document.querySelector("#checkbtn")
const outPut = document.querySelector("#output")


button.addEventListener("click", checkPassword)


function checkPassword() {
    let value = inputPassword.value;

    if (value.length < 10) {
        button.disabled = true;
        outPut.innerText = 'error'

    } else {
        button.disabled = false;
        outPut.innerText = 'successful'
        inputPassword.style.border =  " 1px solid green "
    }
}
inputPassword.addEventListener("input", btnDisabled)

     function btnDisabled() {
    let value = inputPassword.value;
    if (value.length < 10) {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}