import { apiConfig } from "./api-config";
import { createAdminPanel } from "../pages/admin-panel";
import { createUserProfile } from "../pages/user-profile";
import { createLoginPage } from "../pages/login";
import {
  goToRegisterPageListener,
  loginListener,
} from "../events/login-events";
import { codeError } from "../utils/errors";

// All endpoints call
export async function callApi(method, url, data = null, upload = false) {
  try {
    return await makeAuthorizedRequest(method, url, data, upload);
  } catch (error) {
    if (error.status === 401) {
      try {
        await refreshToken();
        return await makeAuthorizedRequest(method, url, data, upload);
      } catch (refreshError) {
        goToLogin();
      }
    }
    throw error;
  }
}

// Verify Authorized petition
async function makeAuthorizedRequest(method, url, data = null, upload) {
  const token = localStorage.getItem("access_token");
  if (!token) {
    throw new Error("Token no existe");
  }
  let headers = {};
  if (!upload) {
    headers = { "Content-Type": "application/json", "auth-token": token };
  } else {
    headers = { "auth-token": token };
  }

  const response = await fetch(url, {
    method,
    headers,
    body: data ? (upload ? data : JSON.stringify(data)) : null,
  });

  if (!response.ok) {
    console.log("Error en la petición");
    const error = new Error("Error en la petición");
    error.status = response.status;
    throw error;
  }
  return response.json();
}

// Get Token refresh
async function refreshToken() {
  try {
    const refresh = localStorage.getItem("refresh_token");
    if (!refresh) throw new Error("Token de resfresco no existe");
    const urlRefreshToken = apiConfig.refreshTokenUrl;
    const renoveTokens = await fetch(urlRefreshToken, {
      method: "GET",
      headers: { "Content-Type": "application/json", "auth-token": refresh },
    });
    const dataTokens = await renoveTokens.json();
    if (dataTokens) {
      // SAVE DATA TO LOCAL STORAGE
      localStorage.setItem("access_token", dataTokens.token);
      localStorage.setItem("refresh_token", dataTokens.token_refresh);
    }
  } catch (error) {
    if (error.status === 401) {
      goToLogin();
    }
  }
}

// Function to close session and route to login page
export function goToLogin() {
  const bodyElement = document.querySelector("body");
  bodyElement.classList.remove("opacity-bg-img");
  const appContainerElement = document.querySelector("#app");
  appContainerElement.innerHTML = "";

  // EMPTY LOCAL STORAGE
  localStorage.clear();
  createLoginPage();
  loginListener();
  goToRegisterPageListener();
}

// Function to Make Login
export async function loginUser(userEmail, userPassword) {
  try {
    const dataUserLogin = {
      email: userEmail,
      password: userPassword,
    };
    const urlLogin = apiConfig.baseUrl;
    const userLogged = await fetch(urlLogin, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataUserLogin),
    });
    const dataUserLogged = await userLogged.json();

    if (dataUserLogged.status !== "Success") {
      const errorContainer = document.querySelector(".error-message-container");
      errorContainer.textContent = codeError[dataUserLogged.status];
      setTimeout(() => {
        errorContainer.textContent = "\u00A0";
        //document.querySelector("#form-login").reset();
      }, 5000);
    } else {
      // SAVE DATA TO LOCAL STORAGE
      localStorage.setItem("access_token", dataUserLogged.token);
      localStorage.setItem("refresh_token", dataUserLogged.token_refresh);

      // Try to get Data User
      getUserProfile();
    }
  } catch (error) {
    throw error;
  }
}

// Fucntion to register new user
export async function registerUser(
  userName,
  userLastName,
  userEmail,
  userAddress,
  userPhone,
  userPassword,
  userBirthdate
) {
  try {
    const dataUserRegister = {
      name: userName,
      lastName: userLastName,
      email: userEmail,
      address: userAddress,
      phone: userPhone,
      password: userPassword,
      birthDate: userBirthdate,
    };
    const urlRegister = apiConfig.registerUrl;
    const userRegistered = await fetch(urlRegister, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataUserRegister),
    });
    const dataUserRegistered = await userRegistered.json();

    if (dataUserRegistered.status !== "Success") {
      const errorContainer = document.querySelector(".error-message-container");
      errorContainer.textContent = codeError[dataUserRegistered.status];
      setTimeout(() => {
        errorContainer.textContent = "\u00A0";
      }, 5000);
    } else {
      //GO TO LOGIN PAGE AFTER MESSAGE
      const errorContainer = document.querySelector(".error-message-container");
      errorContainer.textContent = dataUserRegistered.message;
      setTimeout(() => {
        errorContainer.textContent = "\u00A0";
        goToLogin();
      }, 3000);
    }
  } catch (error) {
    throw error;
  }
}

// Function to get Profile [Admin And User]
export async function getUserProfile() {
  try {
    const urlToProfile = apiConfig.profileUrl;
    const user = await callApi("GET", urlToProfile);

    // SAVE DATA TO LOCAL STORAGE
    localStorage.setItem("userData", JSON.stringify(user.data));

    // GOT TO ADMIN PANEL OR USER PROFILE
    const appContainerElement = document.querySelector("#app");
    appContainerElement.innerHTML = "";

    if (user.data.role === "admin") {
      createAdminPanel();
    } else {
      createUserProfile();
    }
  } catch (error) {
    throw error;
  }
}

//Function to obtain user favourites
export async function getUserFavourite(idFavourite, type) {
  try {
    let urlFavourites = apiConfig.favouritesUrl;
    urlFavourites += `/${type}/${idFavourite}`;
    const favourite = await callApi("GET", urlFavourites);
    return favourite.data;
  } catch (error) {
    throw error;
  }
}

// Function to get user details
export async function getUserDetails(userId) {
  try {
    const userDetailsUrl = apiConfig.userDetailsUrl + userId;
    const user = await callApi("GET", userDetailsUrl);
    return user;
  } catch (error) {
    throw error;
  }
}

//Fucntion to delete user favourite
export async function removeUserFavourite(favouriteId, favouriteType) {
  let urlRemoveFAvourite = apiConfig.removeFavouritesUrl;
  urlRemoveFAvourite += `/${favouriteId}/${favouriteType}`;

  const result = await callApi("PATCH", urlRemoveFAvourite);

  if (result.status !== "Success") {
    throw Error("No se ha podido borrar el favorito");
  }
  localStorage.setItem("userData", JSON.stringify(result.data));
  const appContainerElement = document.querySelector("#app");
  appContainerElement.innerHTML = "";
  createUserProfile();
}

export async function getAllUsers() {
  const urlGetAllUsers = apiConfig.baseUserUrl;

  const users = await callApi("GET", urlGetAllUsers);

  return users.data;
}

export async function deactiveUser() {
  try {
    const urlDeactiveUser = apiConfig.botonDisableUserUrl;
    const users = await callApi("PATCH", urlDeactiveUser);
    return users.data;
  } catch (error) {
    throw error;
  }
}

export async function updateUser(userId, newUserData) {
  try {
    const urlUpdateUser = apiConfig.botonUpdateUserUrl + '/' + userId;
    const users = await callApi("PATCH", urlUpdateUser, newUserData);
    return users.data;
  } catch (error) {
    throw error;
  }
}
