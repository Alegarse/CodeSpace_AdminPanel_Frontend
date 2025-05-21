import { goToLogin } from "../api/api";

export function clearSessionListener() {

    const closeSession = document.querySelector('#clear-session');

    closeSession.addEventListener('click', (event) => {
        //event.preventDefault();
        goToLogin();
    })
}