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
  const buttonsContainer = document.createButtom("div");
  buttonsContainer.classList = "button-container";
  // Aqui appenchild 3 botones

  // Metemos todo en el contenedor de la card
  cardContainer.appendChild(createImgUser(userData.url));
  cardContainer.appendChild(dataUser);
  cardContainer.appendChild(buttonsContainer);

  return cardContainer;
}

//Creacion de hueco para la foto
function createImgUser(url) {
  const imgUser = document.createImgUser("img");
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

function createCardsUsersContainer(dataUsers) {

  

  //Creo un div para englobar todo
  const createContainer = document.createElement("div");
  createContainer.classList = "list-card-container";

  //El titulo del div
  const cardTitle = document.createElement("h2");
  cardTitle.textContent = "Lista de Usuarios";

  //Creo el div donde van a ir todas las card
  const cardsContainer = document.createElement("div");
  cardsContainer.classList = "cards-container";

  dataUsers.forEach(user => {
    cardsContainer.appendChild(createCardUser(user))
  })


}
