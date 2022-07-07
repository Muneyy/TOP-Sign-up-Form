// function confirmPassword() {
//     const password = document.querySelector("input[name=user-password]");
//     const confirm = document.querySelector("input[name=confirm-password]");
//     console.table(`This is the password: {password}`);
//     console.log(`This is confirm: {confirm.value}`);
//     if (password.value == confirm.value) {
//         confirm.setCustomValidity("");
//         confirm.classList.remove("wrong-password");
//         confirm.classList.add("right-password");
//     } else if (password == ""){
//         confirm.setCustomValidity("");
//         confirm.classList.remove("wrong-password");
//     } else {
//         confirm.setCustomValidity("Invalid field.");
//         confirm.classList.add("wrong-password");
//     } 
// }
const confirm = document.querySelector("input[name=confirm-password]");
confirm.setCustomValidity("");
console.log(confirm.checkValidity());

function confirmPassword() {
    const password = document.querySelector("input[name=user-password]");
    const confirm = document.querySelector("input[name=confirm-password]");
    const textAlert = document.querySelector(".to-confirm");
    if (password.value == confirm.value) {
        confirm.setCustomValidity("");
        confirm.classList.remove("wrong-password");
        confirm.classList.add("right-password");
        textAlert.textContent = "Matching."
    } else if (confirm.value == "") {
        confirm.setCustomValidity("");
        confirm.classList.remove("wrong-password");
        confirm.classList.remove("right-password");
        textAlert.textContent = ""
    }
    else {
        confirm.setCustomValidity("Invalid field.");
        confirm.classList.remove("right-password");
        confirm.classList.add("wrong-password");
        textAlert.textContent = "Passwords do not match."
    } 
}

confirm.addEventListener('focusout', () => {
    confirm.classList.remove("right-password");
})