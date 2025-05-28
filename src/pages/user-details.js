import { callApi, getUserDetails } from "../api/api";
import { updateModalElement } from "../complements/modal-structure";
import {
  createDateUser,
  createImgUser,
  createNameUser,
} from "../complements/user-helper-methods";

//Creo el modal anidando todo
export async function createUserModal(userId = null) {
  const modalContent = document.createElement("div");
  modalContent.classList = "modal-container";

  const modalPrincipalInfoElement = document.createElement("div");
  modalPrincipalInfoElement.classList = "modal-principalInfo";

  // Llamamos al backend para traer detalles de usuario
  //const testUserId = "682795eb78fdfc8b6e247647"; // borrar es solo para test
  const userData = (await getUserDetails(userId))?.data;

  modalPrincipalInfoElement.appendChild(
    createImgUser(userData.profilePictureUrl, "photo-user-details")
  );
  modalPrincipalInfoElement.appendChild(
    createNameUser(userData.name, userData.lastName, "h1")
  );

  modalContent.appendChild(modalPrincipalInfoElement);

  modalContent.appendChild(createPersonalData(userData));

  modalContent.appendChild(createUserResgistration(userData));

  modalContent.appendChild(createUserFavorites(userData));

  updateModalElement("Detalles de usuario", modalContent, [
    createUserModalSaveButton(),
  ]);

  return modal;
}

function createUserModalSaveButton() {
  const modalFooterButton = document.createElement("button");
  modalFooterButton.classList = "btn btn-primary";
  modalFooterButton.id = "saveButton";
  modalFooterButton.setAttribute("type", "button");
  modalFooterButton.textContent = "Guardar cambios";


  return modalFooterButton;
}

//Creo el apartado para los datos personales y sus minifunciones adheridas
function createPersonalData(userData) {
  const personalDataContainer = document.createElement("div");
  personalDataContainer.classList = "personal-data-container";

  const personalDataTitle = document.createElement("h2");
  personalDataTitle.textContent = "DATOS PERSONALES";
  personalDataTitle.classList = "personal-data-title";

  personalDataContainer.appendChild(personalDataTitle);

  personalDataContainer.appendChild(createPersonalEmailElement(userData.email));
  personalDataContainer.appendChild(createPersonalPhoneElement(userData.phone));
  personalDataContainer.appendChild(
    createPersonalAddressElement(userData.address)
  );

  return personalDataContainer;
}

function createPersonalEmailElement(email) {
  const personalEmailContainer = document.createElement("div");
  personalEmailContainer.classList = "email-container";

  const personalTitleEmail = document.createElement("label");
  personalTitleEmail.textContent = "Correo electrónico:";
  personalTitleEmail.setAttribute("for", "email");

  const personalDataEmail = document.createElement("input");
  personalDataEmail.setAttribute("type", "text");
  personalDataEmail.setAttribute("id", "email");
  personalDataEmail.setAttribute("name", "email");
  personalDataEmail.setAttribute("value", email);

  personalEmailContainer.appendChild(personalTitleEmail);
  personalEmailContainer.appendChild(personalDataEmail);

  return personalEmailContainer;
}

function createPersonalPhoneElement(phone) {
  const personalPhoneContainer = document.createElement("div");
  personalPhoneContainer.classList = "phone-container";

  const personalTitlePhone = document.createElement("label");
  personalTitlePhone.textContent = "Teléfono:";
  personalTitlePhone.setAttribute("for", "phone");

  const personalDataPhone = document.createElement("input");
  personalDataPhone.setAttribute("type", "number");
  personalDataPhone.setAttribute("id", "phone");
  personalDataPhone.setAttribute("name", "phone");
  personalDataPhone.setAttribute("value", phone);

  personalPhoneContainer.appendChild(personalTitlePhone);
  personalPhoneContainer.appendChild(personalDataPhone);

  return personalPhoneContainer;
}

function createPersonalAddressElement(address) {
  const personalAddressContainer = document.createElement("div");
  personalAddressContainer.classList = "address-container";

  const personalTitleAddress = document.createElement("label");
  personalTitleAddress.textContent = "Dirección:";
  personalTitleAddress.setAttribute("for", "address");

  const personalDataAddress = document.createElement("input");
  personalDataAddress.setAttribute("type", "text");
  personalDataAddress.setAttribute("id", "address");
  personalDataAddress.setAttribute("name", "address");
  personalDataAddress.setAttribute("value", address);

  personalAddressContainer.appendChild(personalTitleAddress);
  personalAddressContainer.appendChild(personalDataAddress);

  return personalAddressContainer;
}

//Creo el apartado de los datos de registro y sus mini funciones anidadas
function createUserResgistration(userData) {
  const userRegistrationContainer = document.createElement("div");
  userRegistrationContainer.classList = "registration-container";

  const userRegistrationTitle = document.createElement("h2");
  userRegistrationTitle.textContent = "DATOS DE REGISTRO";
  userRegistrationTitle.classList = "registration-data-title";

  userRegistrationContainer.appendChild(userRegistrationTitle);

  userRegistrationContainer.appendChild(createDateUserElement(userData.date));
  userRegistrationContainer.appendChild(
    createOrderCountElement(userData.orderCount)
  );
  userRegistrationContainer.appendChild(
    createPasswordElement(userData.password)
  );
  userRegistrationContainer.appendChild(
    createSubscriptionTypeElement(userData.subscription)
  );
  userRegistrationContainer.appendChild(
    createBankAccountNumberElement(userData.bankAccountNumber)
  );

  return userRegistrationContainer;
}

function createDateUserElement(date) {
  const dateUserContainer = document.createElement("div");
  dateUserContainer.classList = "date-container";

  const dateUserTitle = document.createElement("label");
  dateUserTitle.textContent = "Fecha de registro:";
  dateUserTitle.setAttribute("for", "date");

  const dateUser = createDateUser(date, "span");

  dateUserContainer.appendChild(dateUserTitle);
  dateUserContainer.appendChild(dateUser);

  return dateUserContainer;
}

function createOrderCountElement(orderCountData) {
  const orderCountContainer = document.createElement("div");
  orderCountContainer.classList = "order-count-container";

  const orderCountTitle = document.createElement("label");
  orderCountTitle.textContent = "Número de pedidos:";
  orderCountTitle.setAttribute("for", "orderCount");

  const orderCount = document.createElement("input");
  orderCount.setAttribute("type", "number");
  orderCount.setAttribute("id", "orderCount");
  orderCount.setAttribute("name", "orderCount");
  orderCount.setAttribute("value", orderCountData);

  orderCountContainer.appendChild(orderCountTitle);
  orderCountContainer.appendChild(orderCount);

  return orderCountContainer;
}

function createPasswordElement(passwordData) {
  const passwordContainer = document.createElement("div");
  passwordContainer.classList = "password-container";

  const passwordTitle = document.createElement("label");
  passwordTitle.textContent = "Contraseña:";
  passwordTitle.setAttribute("for", "password");

  const password = document.createElement("input");
  password.setAttribute("type", "password");
  password.setAttribute("id", "password");
  password.setAttribute("name", "password");
  password.setAttribute("value", passwordData);

  const buttonPassword = document.createElement("button");
  buttonPassword.setAttribute("type", "button");
  buttonPassword.classList = "btn";
  buttonPassword.id = "buttonPassword";
  buttonPassword.textContent = "Mostrar";

  buttonPassword.addEventListener("click", () => {
    const isPassword = password.type === "password";
    password.type = isPassword ? "text" : "password";
  });

  passwordContainer.appendChild(passwordTitle);
  passwordContainer.appendChild(password);
  passwordContainer.appendChild(buttonPassword);

  return passwordContainer;
}

function createSubscriptionTypeElement(subscriptionData) {
  const subscriptionTypeContainer = document.createElement("div");
  subscriptionTypeContainer.classList = "subscription-container";

  const subscriptionTypeTitle = document.createElement("label");
  subscriptionTypeTitle.textContent = "Tipo de suscripción:";
  subscriptionTypeTitle.setAttribute("for", "subscription");

  const subscriptionType = document.createElement("select");
  subscriptionType.setAttribute("id", "subscription");
  subscriptionType.setAttribute("name", "subscription");

  const options = [
    { value: "basic", label: "Básica" },
    { value: "premium", label: "Premium" },
    { value: "gold", label: "Gold" },
  ];

  options.forEach((optionData) => {
    const option = document.createElement("option");
    option.value = optionData.value;
    option.textContent = optionData.label;

    if (optionData.value === subscriptionData) {
      option.selected = true;
    }

    subscriptionType.appendChild(option);
  });

  subscriptionTypeContainer.appendChild(subscriptionTypeTitle);
  subscriptionTypeContainer.appendChild(subscriptionType);

  return subscriptionTypeContainer;
}

function createBankAccountNumberElement(bankAccountNumberData) {
  const bankAccountNumberContainer = document.createElement("div");
  bankAccountNumberContainer.classList = "bank-account-container";

  const bankAccountNumberTitle = document.createElement("label");
  bankAccountNumberTitle.textContent = "Cuenta bancaria:";
  bankAccountNumberTitle.setAttribute("for", "bankAccountNumber");

  const bankAccountNumber = document.createElement("input");
  bankAccountNumber.setAttribute("type", "number");
  bankAccountNumber.setAttribute("id", "bankAccountNumber");
  bankAccountNumber.setAttribute("name", "bankAccountNumber");
  bankAccountNumber.setAttribute("value", bankAccountNumberData);

  bankAccountNumberContainer.appendChild(bankAccountNumberTitle);
  bankAccountNumberContainer.appendChild(bankAccountNumber);

  return bankAccountNumberContainer;
}

//Creo la sección de Favoritos del usuario y sus minifunciones anidadas
function createUserFavorites(userData) {
  const userFavoritesContainer = document.createElement("div");
  userFavoritesContainer.classList = "favorites-container";

  const userFavoritesTitle = document.createElement("h2");
  userFavoritesTitle.textContent = "FAVORITOS DEL USUARIO";
  userFavoritesTitle.classList = "favorites-title";

  userFavoritesContainer.appendChild(userFavoritesTitle);

  const userFavoritePlants = document.createElement("h3");
  userFavoritePlants.textContent = "PLANTAS FAVORITAS";
  userFavoritePlants.classList = "favorite-plants";
  userFavoritesTitle.appendChild(userFavoritePlants);
  userFavoritePlants.appendChild(createPlantFavorites(userData.favPlants));

  const userFavoriteProducts = document.createElement("h3");
  userFavoriteProducts.textContent = "PRODUCTOS FAVORITOS";
  userFavoriteProducts.classList = "favorite-products";
  userFavoritesTitle.appendChild(userFavoriteProducts);
  userFavoriteProducts.appendChild(
    createProductFavorites(userData.favProducts)
  );

  const userFavoriteTools = document.createElement("h3");
  userFavoriteTools.textContent = "HERRAMIENTAS FAVORITAS";
  userFavoriteTools.classList = "favorite-tools";
  userFavoritesTitle.appendChild(userFavoriteTools);
  userFavoriteTools.appendChild(createToolFavorites(userData.favTools));

  const userFavoriteAccessories = document.createElement("h3");
  userFavoriteAccessories.textContent = "ACCESORIOS FAVORITOS";
  userFavoriteAccessories.classList = "favorite-accesories";
  userFavoritesTitle.appendChild(userFavoriteAccessories);
  userFavoriteAccessories.appendChild(
    createAccessoryFavorites(userData.favAccessories)
  );

  return userFavoritesContainer;
}

function createPlantFavorites(plants) {
  const plantFavoritesContainer = document.createElement("ul");
  plantFavoritesContainer.classList = "plant-favorites";

  plants.forEach((plant) => {
    const itemPlant = document.createElement("li");
    itemPlant.textContent = plant;
    plantFavoritesContainer.appendChild(itemPlant);
  });

  return plantFavoritesContainer;
}

function createProductFavorites(products) {
  const productFavoritesContainer = document.createElement("ul");
  productFavoritesContainer.classList = "product-favorites";

  products.forEach((product) => {
    const itemProduct = document.createElement("li");
    itemProduct.textContent = product;
    productFavoritesContainer.appendChild(itemProduct);
  });

  return productFavoritesContainer;
}

function createToolFavorites(tools) {
  const toolFavoritesContainer = document.createElement("ul");
  toolFavoritesContainer.classList = "tool-favorites";

  tools.forEach((tool) => {
    const itemTool = document.createElement("li");
    itemTool.textContent = tool;
    toolFavoritesContainer.appendChild(itemTool);
  });

  return toolFavoritesContainer;
}

function createAccessoryFavorites(accessories) {
  const accessoryFavoritesContainer = document.createElement("ul");
  accessoryFavoritesContainer.classList = "accessory-favorites";

  accessories.forEach((accesory) => {
    const itemAccessory = document.createElement("li");
    itemAccessory.textContent = accesory;
    accessoryFavoritesContainer.appendChild(itemAccessory);
  });

  return accessoryFavoritesContainer;
}
