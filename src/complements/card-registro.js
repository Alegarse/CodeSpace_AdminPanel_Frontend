document.addEventListener("DOMContentLoaded"), () => {
  const container = document.createElement("div");
  container.className = "ficha-usuario";
}
  // Creo label + input
  function addUserDetail(id, labelText, type = "text") {
    const label = document.createElement("label");
    label.htmlFor = id;
    label.textContent = labelText;

    const input = document.createElement("input");
    input.type = type;
    input.id = id;

    container.appendChild(label);
    container.appendChild(input);
  }

  //Creo campos
  createName("nombre", "Nombre:");
  createApellido("apellido", "Apellido:");
  createTelefono("telefono", "Teléfono:");
  createEmail("email", "Email:", "email");

  // Creo botón para guardar
  const button = document.createElement("button");
  button.textContent = "Guardar";
  button.id = "button";

  container.appendChild(button);

  const resultado = document.createElement("div");
  resultado.id = "resultado";

  container.appendChild(resultado);

  // Añado contenedor
  document.body.appendChild(container);

  // Hacemos click y guardamos
  button.addEventListener("click"), () => {
    const name = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
  }
     resultado.innerHTML = `
    <string>Datos guardados:</string>
    <ul>
      <li><string>Nombre:</string> ${nombre}</li>
      <li><string>Apellido:</string> ${apellido}</li>
      <li><string>Teléfono:</string> ${telefono}</li>
      <li><string>Email:</string> ${email}</li>
    </ul>
;