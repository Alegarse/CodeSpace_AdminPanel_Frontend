import { getFormattedDate } from "../utils/general";

//Creacion de hueco para la foto
export function createImgUser(url, classList = "photo-user") {
  const imgUser = document.createElement("img");
  imgUser.src =
    url === ""
      ? "./src/imgs/empty-photo-profile.png"
      : url;
  imgUser.setAttribute("alt", "user photo");
  imgUser.classList = classList;
  return imgUser;
}

//creacion del nombre CON EL APELLIDO
export function createNameUser(
  name,
  lastname,
  htmlTag = "h4",
  classList = "name-user"
) {
  const nameUser = document.createElement(htmlTag);
  nameUser.textContent = name + " " + lastname;
  nameUser.classList = classList;
  return nameUser;
}

//creacion de mail ,aquí ponemos el userdata como parametro?? o solo email>?
export function createEMailUser(email, htmlTag = "h5") {
  const emailUser = document.createElement(htmlTag);
  emailUser.textContent = email;
  emailUser.classList = "mail-user";
  return emailUser;
}

//Creacion de la fecha del usuario
export function createDateUser(date, htmlTag = "p") {
  const dateUser = document.createElement(htmlTag);
  dateUser.classList = "user-date";
  dateUser.textContent = getFormattedDate(date);
  return dateUser;
}
