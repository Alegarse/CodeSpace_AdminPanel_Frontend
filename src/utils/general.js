import { getUserProfile, goToLogin } from "../api/api";
import { codeError } from "./errors";

export async function checkIsLogged() {
  const token = localStorage.getItem("access_token");
  if (!token) {
    goToLogin();
  } else {
    getUserProfile();
  }
}

export function errorMessage(code) {
    const errorContainer = document.createElement('div');

    errorContainer.classList = "error-message-container"

    const messageError = document.createElement("p");
    messageError.classList = "error-message";
    messageError.textContent = codeError[code];

    errorContainer.appendChild(messageError);

    return errorContainer;
}
