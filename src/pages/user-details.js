import { getAllUsers, getUserDetails, updateUser } from "../api/api";
import { createCardsUsersContainer } from "../complements/card-user";
import {
  resetModalFooter,
  updateModalElement,
} from "../complements/modal-structure";
import {
  createDateUser,
  createImgUser,
  createNameUser,
} from "../complements/user-helper-methods";
import { createGroupedFavsContainer } from "./user-profile";

let selectedUserId;

//Creo el modal anidando todo
export async function createUserModal(userId = null) {
  const modalContent = document.createElement("div");
  modalContent.classList = "modal-container";

  const modalPrincipalInfoElement = document.createElement("div");
  modalPrincipalInfoElement.classList = "modal-principalInfo";

  // Llamamos al backend para traer detalles de usuario
  const userData = (await getUserDetails(userId))?.data;
  selectedUserId = userId;

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

async function saveActions() {
  updateUser(selectedUserId, getFormData());
  createCardsUsersContainer(await getAllUsers());
}

function createUserModalSaveButton() {
  const modalFooterButton = document.createElement("button");
  modalFooterButton.classList = "btn btn-primary";
  modalFooterButton.setAttribute("data-bs-dismiss", "modal");
  modalFooterButton.id = "saveButton";
  modalFooterButton.setAttribute("type", "button");
  modalFooterButton.textContent = "Guardar cambios";

  const modalBody = document.querySelector("#modal-body");
  const modalFooter = document.querySelector("#modal-footer");
  resetModalFooter(modalFooterButton, modalBody, modalFooter, saveActions);

  return modalFooterButton;
}

function getFormData() {
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  const address = document.querySelector("#address").value;
  const subscription = document.querySelector("#subscription").value;

  const userData = {
    email: email,
    phone: phone,
    address: address,
    subscription: subscription,
  };

  return userData;
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

  userRegistrationContainer.appendChild(
    createDateUserElement(userData.birthDate)
  );

  userRegistrationContainer.appendChild(
    createSubscriptionTypeElement(userData.subscription)
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

//Creo la sección de Favoritos del usuario y sus minifunciones anidadas
function createUserFavorites(userData) {
  const userFavoritesContainer = document.createElement("div");
  userFavoritesContainer.classList = "favorites-container";

  const userFavoritesTitle = document.createElement("h2");
  userFavoritesTitle.textContent = "FAVORITOS DEL USUARIO";
  userFavoritesTitle.classList = "favorites-title";

  userFavoritesContainer.appendChild(userFavoritesTitle);

  userFavoritesContainer.appendChild(
    createGroupedFavsContainer("Plantas", userData.favPlants, "plant", false)
  );
  userFavoritesContainer.appendChild(createGroupedFavsContainer("Productos", userData.favProducts, "product", false));
  userFavoritesContainer.appendChild(createGroupedFavsContainer("Herramientas", userData.favTools, "tool", false));
  userFavoritesContainer.appendChild(createGroupedFavsContainer("Accesorios", userData.favAccessories, "accesory", false));

  //Comentado temporalmente hasta ver si gusta esta estetica
/*   const userFavoritePlants = document.createElement("h3");
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
  ); */

  return userFavoritesContainer;
}

function createPlantFavorites(plants) {
  const plantFavoritesContainer = document.createElement("ul");
  plantFavoritesContainer.classList = "plant-favorites";

  plants.forEach((plant) => {
    const itemPlant = document.createElement("li");
    itemPlant.textContent = plant.name;
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
