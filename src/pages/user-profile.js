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

  const userPhoto = document.createElement("img");
  userPhoto.classList = "photo-profile";
  userPhoto.src =
    userData.profilePictureUrl === ""
      ? "/src/imgs/empty-photo-profile.png"
      : userData.profilePictureUrl;

  const userLastAccessLabel = document.createElement("p");
  userLastAccessLabel.textContent = "Ultimo acceso:";
  userLastAccessLabel.classList = "user-lastaccess-label";

  const userLastAccess = document.createElement("p");
  userLastAccess.textContent = getFormattedDate(userData.lastAccess, true);
  userLastAccess.classList = "user-lastaccess";

  const userNameLabel = document.createElement("p");
  userNameLabel.textContent = "Nombre:";
  userNameLabel.classList = "user-name-label";

  const userName = document.createElement("p");
  userName.textContent = userData.name;
  userName.classList = "name-user";

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

  profileContainerElement.appendChild(userPhoto);
  profileContainerElement.appendChild(userLastAccessLabel);
  profileContainerElement.appendChild(userLastAccess);
  profileContainerElement.appendChild(userNameLabel);
  profileContainerElement.appendChild(userName);
  profileContainerElement.appendChild(userLastnameLabel);
  profileContainerElement.appendChild(userLastname);
  profileContainerElement.appendChild(userAddressLabel);
  profileContainerElement.appendChild(userAddress);
  profileContainerElement.appendChild(userPhoneLabel);
  profileContainerElement.appendChild(userPhone);
  profileContainerElement.appendChild(userBirthdateLabel);
  profileContainerElement.appendChild(userBirthdate);
  profileContainerElement.appendChild(userEmailLabel);
  profileContainerElement.appendChild(userEmail);

  return profileContainerElement;
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

  userPanelElement.appendChild(sidebarElement);
  userPanelElement.appendChild(usersPanelElement);

  appContainerElement.appendChild(userPanelElement);

  // LOGOUT Listener
  clearSessionListener();
}
