import { loginUser } from "../api/api";
import { createRegisterPage } from "../pages/register";
import { backToLoginPageButtonListener, registerButtonListener } from "./register-events";

export function loginListener() {

    const formElement = document.querySelector('#form-login');
    const emailElement = document.querySelector('#input-email');
    const passwordElement = document.querySelector('#input-password');

    formElement.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = emailElement.value;
        const password = passwordElement.value;
        loginUser(email, password);
    })
}

export function goToRegisterPageListener() {
  const buttonGoToRegisterPage = document.querySelector(".button-register");

  buttonGoToRegisterPage.addEventListener("click", (event) => {
    event.preventDefault();
    // GO TO REGISTER PAGE
    const appContainerElement = document.querySelector("#app");
    appContainerElement.innerHTML = "";
    createRegisterPage();
    registerButtonListener();
    backToLoginPageButtonListener();
  });
}