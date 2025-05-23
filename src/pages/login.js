import { errorMessage } from "../../utils/general";



export function createLoginPage() {

  const domContainer = document.querySelector("#app");

  const loginElement = document.createElement("div");
  loginElement.classList = "login-container";

  const loginTitle = document.createElement("h2");
  loginTitle.textContent = "Iniciar sesion";

  const formContainer = document.createElement("form");
  formContainer.classList = "form-login";
  formContainer.id = "form-login";

  const labelEmail = document.createElement("label");
  labelEmail.textContent = "Usuario";
  labelEmail.htmlFor = "input-email";

  const inputEmail = document.createElement("input");
  inputEmail.setAttribute("required", true);
  inputEmail.placeholder = "example@dominio.com";
  inputEmail.id = "input-email";
  inputEmail.type = "text";

  const labelPassword = document.createElement("label");
  labelPassword.textContent = "Contraseña";
  labelPassword.htmlFor = "input-password";

  const inputPassword = document.createElement("input");
  inputPassword.setAttribute("required", true);
  inputPassword.placeholder = "********";
  inputPassword.id = "input-password";
  inputPassword.type = "password";

  const buttonLogin = document.createElement("button");
  buttonLogin.type = "submit";
  buttonLogin.classList = "button-login";
  buttonLogin.textContent = "Entrar";

  formContainer.appendChild(labelEmail);
  formContainer.appendChild(inputEmail);
  formContainer.appendChild(labelPassword);
  formContainer.appendChild(inputPassword);
  formContainer.appendChild(buttonLogin);

  loginElement.appendChild(loginTitle);
  loginElement.appendChild(formContainer);

  domContainer.appendChild(loginElement);
  
}
