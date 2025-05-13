function createCardUser(userData) {
  //Creo el div para cada card
  const cardContainer = document.createElement("div");
  cardContainer.classList = "user-card";

  // Div de los datos del usuario
  const dataUser = document.createElement("div");
  dataUser.classList = "user-data"
  // Aqui appendchild de los datos
  dataUser.appendChild(createNameUser(userData.name));
  dataUser.appendChild(createMailUser(userData.mail));
  dataUser.appendChild(createDateUser(userData.date));

  //Creo un div para los botones
  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList = "button-container";
  // Aqui appenchild 3 botones
  buttonsContainer.createButtonforDeleteUser();
  buttonsContainer.createButtonforUpdateUser();
  buttonsContainer.createButtonforDisableUser();

  // Metemos todo en el contenedor de la card
  cardContainer.appendChild(createImgUser(userData.url));
  cardContainer.appendChild(dataUser);
  cardContainer.appendChild(buttonsContainer);

  return cardContainer;
}

//Creacion de hueco para la foto
function createImgUser(url) {
  const imgUser = document.createElement("img");
  imgUser.setAttribute("src", url);
  imgUser.setAttribute("alt", "user photo");
  imgUser.classList = "photo-user";
  return imgUser;
}

//creacion del nombre
function createNameUser(name) {
  const nameUser = document.createElement("h4");
  nameUser.textContent = name;
  nameUser.classList = "name-user";
  return nameUser;
}

//creacion de mail
function createMailUser(mail) {
  const mailUser = document.createElement("h5");
  mailUser.textContent = mail;
  mailUser.classList = "mail-user";
  return mailUser;
}

//Creacion de la fecha del usuario
function createDateUser(date) {
  const dateUser = document.createElement("p");
  dateUser.classList = "user-date";
  dateUser.textContent = new Date(date).getFullYear();
  return dateUser;
}

//Creacion boton modificar
function createButtonforUpdateUser(){
  
}


//Creacion boton borrar
function createButtonforDeleteUser(){
  
}

//Creacion boton deshabilitar
function createButtonforDisableUser(){
  
}

export function createCardsUsersContainer(dataUsers) {

  /*
  EJEMPLO PARA VER SI ESTA BIEN O NO
  dataUsers = [
    {
      name: "Pepito",
      email: "aaa@aaa.es",
      date: "20-05-2021",
      url: ""
    },
  ]*/

  const anchorElement = document.querySelector('#elements-panel-container')

  //Creo un div para englobar todo
  const userListContainer = document.createElement("div");
  userListContainer.classList = "list-card-container";

  //El titulo del div
  const cardTitle = document.createElement("h2");
  cardTitle.textContent = "Lista de Usuarios";

  //Creo el div donde van a ir todas las card
  const cardsContainer = document.createElement("div");
  cardsContainer.classList = "cards-container";

  dataUsers.forEach(user => {
    cardsContainer.appendChild(createCardUser(user))
  })

  userListContainer.appendChild(cardTitle);
  userListContainer.appendChild(cardsContainer);

  anchorElement.appendChild(userListContainer);
}