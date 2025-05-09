import { loginPanel } from "../api/api";

export function loginListener() {

    const formElement = document.querySelector('#form-login');
    const emailElement = document.querySelector('#input-email');
    const passwordElement = document.querySelector('#input-password');

    formElement.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = emailElement.value;
        const password = passwordElement.value;
        loginPanel(email, password);
    })
}