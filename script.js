const passwordInputField = document.querySelector("#password");
const confirmPasswordInputField = document.querySelector("#confirm-password");
const passwordContainer = document.querySelector(".password-container")
const submitButton = document.querySelector(".submit-button")

submitButton.addEventListener("click", validatePassword);

function validatePassword(event) {
    if (passwordInputField.value === "" && confirmPasswordInputField.value === "") {
        event.preventDefault();
        passwordInputField.classList.add("error");
        passwordContainer.classList.add("no-password");
    } else if (passwordInputField.value !== confirmPasswordInputField.value) {
        event.preventDefault();
        passwordInputField.classList.add("error");
        confirmPasswordInputField.classList.add("error");
        passwordContainer.classList.remove("no-password");
        passwordContainer.classList.add("no-match");
    }
}
