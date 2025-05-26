import { getUserFavourite } from "../api/api";
import { createSidebarElement } from "../complements/sidebar";
import { clearSessionListener } from "../events/general-events";
import { getFormattedDate } from "../utils/general";

function createSubscriptionInfo(subscription) {
  const subscriptionElement = document.createElement("div");
  subscriptionElement.classList = "subscription-info-container";

  const titleSubscription = document.createElement("p");
  titleSubscription.classList = "title-subscription";
  titleSubscription.textContent = "Subscripción:";

  const subscriptionTypeActive = document.createElement("p");
  subscriptionTypeActive.classList = "active-subscription";
  subscriptionTypeActive.textContent = subscription.toUpperCase();

  subscriptionElement.appendChild(titleSubscription);
  subscriptionElement.appendChild(subscriptionTypeActive);

  return subscriptionElement;
}

function createProfileInfo(userData) {
  const profileContainerElement = document.createElement("div");
  profileContainerElement.classList = "profile-container";

  const photoContainerElement = document.createElement("div");
  photoContainerElement.classList = "photo-container";

  const userPhoto = document.createElement("img");
  userPhoto.classList = "photo-profile";
  userPhoto.src =
    userData.profilePictureUrl === ""
      ? "./src/imgs/empty-photo-profile.png"
      : userData.profilePictureUrl;

  const userLastAccessLabel = document.createElement("p");
  userLastAccessLabel.textContent = "Ultimo acceso:";
  userLastAccessLabel.classList = "user-lastaccess-label";

  const userLastAccess = document.createElement("p");
  userLastAccess.textContent = getFormattedDate(userData.lastAccess, true);
  userLastAccess.classList = "user-lastaccess";

  photoContainerElement.appendChild(userPhoto);
  photoContainerElement.appendChild(userLastAccessLabel);
  photoContainerElement.appendChild(userLastAccess);

  const infoUserContainerElement = document.createElement("div");
  infoUserContainerElement.classList = "info-container";

  const firstDataContainer = document.createElement("div");
  firstDataContainer.classList = "data-user-container";
  const secondDataContainer = document.createElement("div");
  secondDataContainer.classList = "data-user-container";
  const thirdDataContainer = document.createElement("div");
  thirdDataContainer.classList = "data-user-container";

  const userNameLabel = document.createElement("p");
  userNameLabel.textContent = "Nombre:";
  userNameLabel.classList = "user-name-label";

  const userName = document.createElement("p");
  userName.textContent = userData.name;
  userName.classList = "name-user_";

  const userLastnameLabel = document.createElement("p");
  userLastnameLabel.textContent = "Apellidos:";
  userLastnameLabel.classList = "user-lastname-label";

  const userLastname = document.createElement("p");
  userLastname.textContent = userData.lastName;
  userLastname.classList = "lastname-user";

  const userAddressLabel = document.createElement("p");
  userAddressLabel.textContent = "Direccion:";
  userAddressLabel.classList = "user-address-label";

  const userAddress = document.createElement("p");
  userAddress.textContent = userData.address;
  userAddress.classList = "address.user";

  const userPhoneLabel = document.createElement("p");
  userPhoneLabel.textContent = "Teléfono:";
  userPhoneLabel.classList = "user-phone-label";

  const userPhone = document.createElement("p");
  userPhone.textContent = userData.phone;
  userPhone.classList = "phone-user";

  const userBirthdateLabel = document.createElement("p");
  userBirthdateLabel.textContent = "Fecha de nacimiento:";
  userBirthdateLabel.classList = "user-birthdate-label";

  const userBirthdate = document.createElement("p");
  userBirthdate.textContent = getFormattedDate(userData.birthDate);
  userBirthdate.classList = "birthdate-user";

  const userEmailLabel = document.createElement("p");
  userEmailLabel.textContent = "Email:";
  userEmailLabel.classList = "user-email-label";

  const userEmail = document.createElement("p");
  userEmail.textContent = userData.email;
  userEmail.classList = "email-user";

  firstDataContainer.appendChild(userNameLabel);
  firstDataContainer.appendChild(userName);
  firstDataContainer.appendChild(userLastnameLabel);
  firstDataContainer.appendChild(userLastname);
  secondDataContainer.appendChild(userAddressLabel);
  secondDataContainer.appendChild(userAddress);
  secondDataContainer.appendChild(userBirthdateLabel);
  secondDataContainer.appendChild(userBirthdate);
  thirdDataContainer.appendChild(userPhoneLabel);
  thirdDataContainer.appendChild(userPhone);
  thirdDataContainer.appendChild(userEmailLabel);
  thirdDataContainer.appendChild(userEmail);

  infoUserContainerElement.appendChild(firstDataContainer);
  infoUserContainerElement.appendChild(secondDataContainer);
  infoUserContainerElement.appendChild(thirdDataContainer);

  profileContainerElement.appendChild(photoContainerElement);
  profileContainerElement.appendChild(infoUserContainerElement);

  return profileContainerElement;
}

function createToolsAndFavouritesInfo(userData) {
  const preFavsContainer = document.createElement("div");
  preFavsContainer.classList = "pre-favourites-container";

  const titleFavourites = document.createElement("p");
  titleFavourites.classList = "title-prefavourites";
  titleFavourites.textContent = `Favoritos de ${userData.name}`;

  const favsContainerElement = document.createElement("div");
  favsContainerElement.classList = "favourites-general-container";

  favsContainerElement.appendChild(
    createGroupedFavsContainer("Plantas", userData.favPlants, "plant")
  );
  favsContainerElement.appendChild(
    createGroupedFavsContainer(
      "Accesorios",
      userData.favAccessories,
      "accesory"
    )
  );
  favsContainerElement.appendChild(
    createGroupedFavsContainer(
      "Productos",
      userData.favProducts,
      "product"
    )
  );
  favsContainerElement.appendChild(
    createGroupedFavsContainer(
      "Herramientas",
      userData.favTools,
      "tool"
    )
  );

  preFavsContainer.appendChild(titleFavourites);
  preFavsContainer.appendChild(favsContainerElement);

  return preFavsContainer;
}

function createGroupedFavsContainer(title, content, type) {
  const favouritesContainer = document.createElement("div");
  favouritesContainer.classList = "favourites-container";

  const titleElement = document.createElement("p");
  titleElement.classList = "favourites-title";
  titleElement.textContent = title;

  const contentContainer = document.createElement("div");
  contentContainer.classList = "favourites-content";

  content.forEach(async (fav) => {
    const pElement = document.createElement("p");
    pElement.classList = "fav-item";
    const favourite = await getUserFavourite(fav, type);
    pElement.textContent = favourite.name;
    contentContainer.appendChild(pElement);
  });

  favouritesContainer.appendChild(titleElement);
  favouritesContainer.appendChild(contentContainer);

  return favouritesContainer;
}

export function createUserProfile() {
  const bodyElement = document.querySelector("body");
  bodyElement.classList.add("opacity-bg-img");

  const userData = JSON.parse(localStorage.getItem("userData"));

  const appContainerElement = document.querySelector("#app");

  const userPanelElement = document.createElement("div");
  userPanelElement.classList = "userPanel-container";

  const sidebarElement = createSidebarElement();

  const usersPanelElement = document.createElement("div");
  usersPanelElement.id = "elements-panel-container";

  //Subscription Info
  usersPanelElement.appendChild(createSubscriptionInfo(userData.subscription));

  //Data user Info
  usersPanelElement.appendChild(createProfileInfo(userData));

  // Tools user and favourites
  usersPanelElement.appendChild(createToolsAndFavouritesInfo(userData));

  userPanelElement.appendChild(sidebarElement);
  userPanelElement.appendChild(usersPanelElement);

  appContainerElement.appendChild(userPanelElement);

  // LOGOUT Listener
  clearSessionListener();
}
