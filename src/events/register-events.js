import { registerPanel } from "../api/api";

export function registerListener() {

    const formElement = document.querySelector('#form-register');
    const emailElement = document.querySelector('#input-email');
    const passwordElement = document.querySelector('#input-password');

    formElement.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = emailElement.value;
        const password = passwordElement.value;
        registerPanel(email, password);
    })
}