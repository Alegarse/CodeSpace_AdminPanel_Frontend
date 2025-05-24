export function createRegisterPage() {
  const domContainer = document.querySelector("#app");

  const registerElement = document.createElement("div");
  registerElement.classList = "register-container";

  const registerTitle = document.createElement("h2");
  registerTitle.textContent = "Registrar usuario";

  const formContainer = document.createElement("form");
  formContainer.classList = "form-register";
  formContainer.id = "form-register";

  const labelNombre = document.createElement("label");
  labelNombre.textContent = "Nombre";
  labelNombre.htmlFor = "input-name";

  const inputNombre = document.createElement("input");
  inputNombre.setAttribute("required", true);
  inputNombre.id = "input-name";
  inputNombre.type = "text";

  const labelApellidos = document.createElement("label");
  labelApellidos.textContent = "Apellidos";
  labelApellidos.htmlFor = "input-lastname";

  const inputApellidos = document.createElement("input");
  inputApellidos.setAttribute("required", true);
  inputApellidos.id = "input-lastname";
  inputApellidos.type = "text";

  const labelTelefono = document.createElement("label");
  labelTelefono.textContent = "Telefono";
  labelTelefono.htmlFor = "input-telephone";

  const inputTelefono = document.createElement("input");
  inputTelefono.setAttribute("required", true);
  inputTelefono.id = "input-telephone";
  inputTelefono.type = "number";

  const labelDireccion = document.createElement("label");
  labelDireccion.textContent = "Direccion";
  labelDireccion.htmlFor = "input-Direction";

  const inputDireccion = document.createElement("input");
  inputDireccion.setAttribute("required", true);
  inputDireccion.id = "input-Direction";
  inputDireccion.type = "text";

  const labelEmail = document.createElement("label");
  labelEmail.textContent = "Email";
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

  const buttonRegister = document.createElement("button");
  buttonRegister.type = "submit";
  buttonRegister.classList = "button-register";
  buttonRegister.textContent = "Registrar";

  formContainer.appendChild(labelNombre);
  formContainer.appendChild(inputNombre);
  formContainer.appendChild(labelApellidos);
  formContainer.appendChild(inputApellidos);
  formContainer.appendChild(labelTelefono);
  formContainer.appendChild(inputTelefono);
  formContainer.appendChild(labelDireccion);
  formContainer.appendChild(inputDireccion);
  formContainer.appendChild(labelEmail);
  formContainer.appendChild(inputEmail);
  formContainer.appendChild(labelPassword);
  formContainer.appendChild(inputPassword);
  formContainer.appendChild(buttonRegister);

  registerElement.appendChild(registerTitle);
  registerElement.appendChild(formContainer);

  domContainer.appendChild(registerElement);
}
