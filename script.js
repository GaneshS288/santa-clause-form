let password = document.querySelector("#password");
let pwd_repeat = document.querySelector(".error");

pwd_repeat.addEventListener("input", (e) => {
    password = document.querySelector("#password");
    if (e.target.value === password.value && e.target.value !== "") {
        e.target.style.border = "2px solid green"
    }

    else if (e.target.value === "") {
        e.target.style.border = "2px solid black"
    }

    else { e.target.style.border = "2px solid orangered"}
})
