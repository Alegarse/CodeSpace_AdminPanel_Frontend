import { goToLogin, registerUser } from "../api/api";

export function registerButtonListener() {
  const formElement = document.querySelector("#form-register");
  const emailElement = document.querySelector("#input-email");
  const passwordElement = document.querySelector("#input-password");
  const nameElement = document.querySelector("#input-name");
  const lastNameElement = document.querySelector("#input-lastname");
  const addressElement = document.querySelector("#input-telephone");
  const phoneElement = document.querySelector("#input-address");

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = emailElement.value;
    const password = passwordElement.value;
    const name = nameElement.value;
    const lastName = lastNameElement.value;
    const phone = phoneElement.value;
    const address = addressElement.value;
    const birthDate = "1980-09-16";
    registerUser(name, lastName, email, address, phone, password, birthDate);
  });
}

export function backToLoginPageButtonListener() {
  const buttonBackToLogin = document.querySelector(".button-backtologin");

  buttonBackToLogin.addEventListener("click", (event) => {
    event.preventDefault();
    //GO TO LOGIN PAGE
    goToLogin();
  });
}
