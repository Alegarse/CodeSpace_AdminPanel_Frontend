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
  dataUser.appendChild(createNameUser(userData.name, userData.lastname));
  dataUser.appendChild(createEMailUser(userData.email));
  dataUser.appendChild(createDateUser(userData.date));

  //Creo un div para los botones
  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList = "button-container";
  // Aqui appenchild 3 botones

  buttonsContainer.appendChild(createButtonforUpdateUser(userData.id)); // añadido id
  buttonsContainer.appendChild(createButtonforDeleteUser()); // necesita id
  buttonsContainer.appendChild(createButtonforDisableUser()); // necesita id

  // Metemos todo en el contenedor de la card
  cardContainer.appendChild(createImgUser(userData.url));
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

 dataUsers = [
    {
      id: '6832ddc8b4e9dd83b536ac3b',
      name: "Pepito",
      email: "aaa@aaa.es",
      date: "20-05-2021",
      url: ""
    },
    {
      id: '6832de11b4e9dd83b536ac41',
      name: "Pepito",
      email: "aaa@aaa.es",
      date: "20-05-2021",
      url: ""
    },
    {
      id: 'id3',
      name: "Pepito",
      email: "aaa@aaa.es",
      date: "20-05-2021",
      url: ""
    },
    {
      id: 'id4',
      name: "Pepito",
      email: "aaa@aaa.es",
      date: "20-05-2021",
      url: ""
    },
    {
      id: 'id5',
      name: "Pepito",
      email: "aaa@aaa.es",
      date: "20-05-2021",
      url: ""
    },
  ]

  const anchorElement = document.querySelector("#elements-panel-container");

  //Creo un div para englobar todo
  const userListContainer = document.createElement("div");
  userListContainer.classList = "list-card-container";

  //El titulo del div
  const cardTitle = document.createElement("h2");
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
