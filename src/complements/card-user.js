//import { user } from "../pages/user-details";
import { createUserModal } from "../pages/user-details";
import { createImgUser, createEMailUser, createNameUser, createDateUser } from "./user-helper-methods";


function createCardUser(userData) {
  //Creo el div para cada card
  const cardContainer = document.createElement("div");
  cardContainer.classList = "user-card";

  // Div de los datos del usuario
  const dataUser = document.createElement("div");
  dataUser.classList = "user-data";
  // Aqui appendchild de los datos
  dataUser.appendChild(createNameUser(userData.name, userData.lastName));
  dataUser.appendChild(createEMailUser(userData.email));
  dataUser.appendChild(createDateUser(userData.birthDate));

  //Creo un div para los botones
  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList = "button-container";
  // Aqui appenchild 3 botones
  buttonsContainer.appendChild(createButtonforUpdateUser(userData._id)); // añadido id
  buttonsContainer.appendChild(createButtonforDeleteUser()); // necesita id
  buttonsContainer.appendChild(createButtonforDisableUser()); // necesita id

  // Metemos todo en el contenedor de la card
  cardContainer.appendChild(createImgUser(userData.profilePictureUrl));
  cardContainer.appendChild(dataUser);
  cardContainer.appendChild(buttonsContainer);

  return cardContainer;
}

//Creacion boton modificar
export function createButtonforUpdateUser(userId) {
  const buttonUpdate = document.createElement("button");
  buttonUpdate.setAttribute("id", "update-btn");
  buttonUpdate.setAttribute("type", "button");
  buttonUpdate.classList = "btn-update";
  buttonUpdate.textContent = "Modificar";
  buttonUpdate.setAttribute("data-bs-toggle", "modal");
  buttonUpdate.setAttribute("data-bs-target", "#modal");

  buttonUpdate.addEventListener('click', (event) => { // añadido
    //event.preventDefault();
    const modal = createUserModal(userId);
  })

  return buttonUpdate;
}

//Creacion boton borrar
function createButtonforDeleteUser() {
  const buttonDelete = document.createElement("button");
  buttonDelete.setAttribute("id", "delete-btn");
  buttonDelete.setAttribute("type", "button");
  buttonDelete.classList = "btn-delete";
  buttonDelete.textContent = "Eliminar"
   buttonDelete.setAttribute("data-bs-toggle", "modal");
  buttonDelete.setAttribute("data-bs-target", "#modal");

  buttonDelete.addEventListener('click', (event) => { 
    
    const modal = createUserModal(userId);
  })

  return buttonDelete;
}

//Creacion boton deshabilitar
function createButtonforDisableUser() {
  const buttonDisable = document.createElement("button");
  buttonDisable.setAttribute("id", "disable-btn");
  buttonDisable.setAttribute("type", "button");
  buttonDisable.classList = "btn-disable";
  buttonDisable.textContent = "Desahibilitar"

  return buttonDisable;
}

export function createCardsUsersContainer(dataUsers) {

  const anchorElement = document.querySelector("#elements-panel-container");

  //Creo un div para englobar todo
  const userListContainer = document.createElement("div");
  userListContainer.classList = "list-card-container";

  //El titulo del div
  const cardTitle = document.createElement("h2");
  cardTitle.classList = "title-list"
  cardTitle.textContent = "Lista de Usuarios";

  //Creo el div donde van a ir todas las card
  const cardsContainer = document.createElement("div");
  cardsContainer.classList = "cards-container";

  dataUsers.forEach((user) => {
    cardsContainer.appendChild(createCardUser(user));
  });
  
  userListContainer.appendChild(cardTitle);
  userListContainer.appendChild(cardsContainer);

  anchorElement.appendChild(userListContainer);
}
