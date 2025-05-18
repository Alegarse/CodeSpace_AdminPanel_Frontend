import {
  createDateUser,
  createImgUser,
  createNameUser,
} from "../complements/user-helper-methods";

export const user = {
  _id: {
    $oid: "682795eb78fdfc8b6e247647",
  },
  name: "Elena",
  lastName: "Obregón",
  email: "elena@vivero.com",
  date: "2024-08-22",
  address: "Calle Vivero nº22",
  password: "$2b$10$U8T5L29FIdnWysCvEjI8q.uOnHR.LMr11CkYomHeOGfRHMydU9cBm",
  role: "admin",
  __v: 0,
};

//añadir: número de pedidos, contraseña, número de cuenta, tipo de suscripcion

//Creo el Overlay anidando todo
function createOverlay() {
  const overlayContainer = document.createElement("div");
  overlayContainer.classList = "overlay-container";

  const overlayPrincipalInfoElement = document.createElement("div");
  overlayPrincipalInfoElement.classList = "overlay-principalInfo";

  overlayPrincipalInfoElement.appendChild(
    createImgUser(userData.url, "photo-user-details")
  );
  overlayPrincipalInfoElement.appendChild(
    createNameUser(userData.name, userData.lastName, "h1")
  );

  overlayContainer.appendChild(overlayPrincipalInfoElement);

  overlayContainer.appendChild(createPersonalData(userData));

  overlayContainer.appendChild(createUserResgistration(userData));

  overlayContainer.appendChild(createUserFavorites(userData));

  return overlayContainer;
}

//Creo el apartado para los datos personales y sus minifunciones adheridas
function createPersonalData(userData) {
  const personalDataContainer = document.createElement("div");
  personalDataContainer.classList = "personal-data-container";

  const personalDataTitle = document.createElement("h2");
  personalDataTitle.textContent = "DATOS PERSONALES";
  personalDataTitle.classList = "personal-data-title";

  personalDataContainer.appendChild(personalDataTitle);

  personalDataTitle.appendChild(createPersonalEmailElement(userData.email));
  personalDataTitle.appendChild(createPersonalPhoneElement(userData.phone));
  personalDataTitle.appendChild(createPersonalAddressElement(userData.address));

  return personalDataContainer;
}

function createPersonalEmailElement(userData) {
  const personalEmailContainer = document.querySelector("div");
  personalEmailContainer.classList = "email-container";

  const personalTitleEmail = document.createElement("label");
  personalTitleEmail.textContent = "Correo electrónico:";
  personalTitleEmail.setAttribute("for", "Email");

  const personalDataEmail = document.createElement("span");
  personalDataEmail.textContent = userData.email;

  personalEmailContainer.appendChild(personalTitleEmail);
  personalEmailContainer.appendChild(personalDataEmail);

  return personalEmailContainer;
}

function createPersonalPhoneElement(userData) {
  const personalPhoneContainer = document.querySelector("div");
  personalPhoneContainer.classList = "phone-container";

  const personalTitlePhone = document.createElement("label");
  personalTitlePhone.textContent = "Teléfono:";
  personalTitlePhone.setAttribute("for", "Phone");

  const personalDataPhone = document.createElement("span");
  personalDataPhone.textContent = userData.phone;

  personalPhoneContainer.appendChild(personalTitlePhone);
  personalPhoneContainer.appendChild(personalDataPhone);

  return personalPhoneContainer;
}

function createPersonalAddressElement(userData) {
  const personalAddressContainer = document.querySelector("div");
  personalAddressContainer.classList = "address-container";

  const personalTitleAddress = document.createElement("label");
  personalTitleAddress.textContent = "Dirección:";
  personalTitleAddress.setAttribute("for", "Address");

  const personalDataAddress = document.createElement("span");
  personalDataAddress.textContent = userData.address;

  personalAddressContainer.appendChild(personalTitleAddress);
  personalAddressContainer.appendChild(personalDataAddress);

  return personalAddressContainer;
}

//Creo el apartado de los datos de registro y sus mini funciones anidadas
function createUserResgistration (userData) {
  const userRegistrationContainer = document.querySelector("div");
  userRegistrationContainer.classList = "registration-container";

  const userRegistrationTitle = document.createElement("h2");
  userRegistrationTitle.textContent = "DATOS DE REGISTRO";
  userRegistrationTitle.classList = "registration-data-title";

  userRegistrationContainer.appendChild(userRegistrationTitle);

  userRegistrationTitle.appendChild(createDateUserElement(userData.date));
  userRegistrationTitle.appendChild(createOrderCountElement(userData.orderCount));
  userRegistrationTitle.appendChild(createPasswordElement(userData.password));
  userRegistrationTitle.appendChild(createSubscriptionTypeElement(userData.subscription));
  userRegistrationTitle.appendChild(createBankAccountNumberElement(userData.bankAccountNumber));

  return userRegistrationContainer;
}

function createDateUserElement (userData) {
  const dateUserContainer = document.querySelector("div");
  dateUserContainer.classList = "date-container";

  const dateUserTitle = document.createElement("label");
  dateUserTitle.textContent = "Fecha de registro:";
  dateUserTitle.setAttribute("for", "date");

  const dateUser = createDateUser(userData.date, "span");

  dateUserContainer.appendChild(dateUserTitle);
  dateUserContainer.appendChild(dateUser);

  return dateUserContainer;
}

function createOrderCountElement (userData) {
  const orderCountContainer = document.querySelector("div");
  orderCountContainer.classList ="order-count-container";

  const orderCountTitle = document.createElement("label");
  orderCountTitle.textContent = "Número de pedidos:";
  orderCountTitle.setAttribute("for", "ordercount"); //iría así o separado?

  const orderCount = document.createElement("span");
  orderCount.textContent = userData.orderCount;

  orderCountContainer.appendChild(orderCountTitle);
  orderCountContainer.appendChild(orderCount);

  return orderCountContainer;
}

function createPasswordElement (userData) {
  const passwordContainer = document.querySelector("div");
  passwordContainer.classList ="password-container";

  const passwordTitle = document.createElement("label");
  passwordTitle.textContent = "Contraseña:";
  passwordTitle.setAttribute("for", "password"); 

  const password = document.createElement("span");
  password.textContent = userData.password;

  passwordContainer.appendChild(passwordTitle);
  passwordContainer.appendChild(password);

  return passwordContainer;
}

function createSubscriptionTypeElement (userData) {
  const subscriptionTypeContainer = document.querySelector("div");
  subscriptionTypeContainer.classList ="subscription-container";

  const subscriptionTypeTitle = document.createElement("label");
  subscriptionTypeTitle.textContent = "Tipo de suscripción:";
  subscriptionTypeTitle.setAttribute("for", "subscription"); 

  const subscriptionType = document.createElement("span");
  subscriptionType.textContent = userData.subscription;

  subscriptionTypeContainer.appendChild(subscriptionTypeTitle);
  subscriptionTypeContainer.appendChild(subscriptionType);

  return subscriptionTypeContainer;
}

function createBankAccountNumberElement (userData) {
  const bankAccountNumberContainer = document.querySelector("div");
  bankAccountNumberContainer.classList ="bank-account-container";

  const bankAccountNumberTitle = document.createElement("label");
  bankAccountNumberTitle.textContent = "Cuenta bancaria:";
  bankAccountNumberTitle.setAttribute("for", "bankAccountNumber"); 

  const bankAccountNumber = document.createElement("span");
  bankAccountNumber.textContent = userData.bankAccountNumber;

  bankAccountNumberContainer.appendChild(bankAccountNumberTitle);
  bankAccountNumberContainer.appendChild(bankAccountNumber);

  return bankAccountNumberContainer;
}

//Creo la sección de Favoritos del usuario y sus minifunciones anidadas
function createUserFavorites (userData) {
  const userFavoritesContainer = document.querySelector("div");
  userFavoritesContainer.classList = "favorites-container";

  const userFavoritesTitle = document.createElement("h2");
  userFavoritesTitle.textContent = "FAVORITOS DEL USUARIO";
  userFavoritesTitle.classList = "favorites-title";

  userFavoritesContainer.appendChild(userFavoritesTitle);

  const userFavoritePlants = document.createElement("h3");
  userFavoritePlants.textContent = "PLANTAS FAVORITAS";
  userFavoritesTitle.appendChild(userFavoritePlants)
  userFavoritePlants.appendChild(createPlantFavorites(userData.plants));

  const userFavoriteProducts = document.createElement("h3");
  userFavoriteProducts.textContent = "PRODUCTOS FAVORITOS";
  userFavoritesTitle.appendChild(userFavoriteProducts)
  userFavoriteProducts.appendChild(createProductFavorites(userData.products));

  const userFavoriteTools = document.createElement("h3");
  userFavoriteTools.textContent = "HERRAMIENTAS FAVORITAS";
  userFavoritesTitle.appendChild(userFavoriteTools);
  userFavoriteTools.appendChild(createToolFavorites(userData.tools));

  const userFavoriteAccessories = document.createElement("h3");
  userFavoriteAccessories.textContent = "ACCESORIOS FAVORITAS";
  userFavoritesTitle.appendChild(userFavoriteAccessories);
  userFavoriteAccessories.appendChild(createAccessoryFavorites(userData.accessories));

  return userFavoritesContainer;
}

function createPlantFavorites (userData) {
  const plantFavoritesContainer = document.createElement("ul");
  plantFavoritesContainer.classList = "plant-favorites";

    plants.forEach(plant => {
    const itemPlant = document.createElement("li");
    itemPlant.textContent = plant;
    plantFavoritesContainer.appendChild(itemPlant);
  });

  return plantFavoritesContainer;
}

function createProductFavorites (userData) {

}

function createToolFavorites (userData) {

}

function createAccessoryFavorites (userData) {

}
