let password = document.querySelector("#password");
let pwd_repeat = document.querySelector(".error"); 
let pwdRepeatError = document.querySelector(".errorMessage");

pwd_repeat.addEventListener("input", (e) => {
    password = document.querySelector("#password");
    if (e.target.value === password.value && e.target.value !== "") {
        e.target.style.border = "2px solid green"
        pwdRepeatError.textContent = ""
    }

    else if (e.target.value === "") {
        e.target.style.border = "2px solid black"
        pwdRepeatError.textContent = ""
    }

    else { 
        e.target.style.border = "2px solid orangered"
        pwdRepeatError.textContent = "*passwords do not match"
    }
})
