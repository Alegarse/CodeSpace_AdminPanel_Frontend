import { apiConfig } from "./api-config";
import { createAdminPanel } from "../pages/admin-panel";
import { createUserProfile } from "../pages/user-profile";
import { createLoginPage } from "../pages/login";
import { goToRegisterPageListener, loginListener } from "../events/login-events";
import { errorMessage } from "../utils/general";

// All endpoints call
export async function callApi(method, url, data = null) {
  try {
    return await makeAuthorizedRequest(method, url, data);
  } catch (error) {
    if (error.status === 401) {
      try {
        await refreshToken();
        return await makeAuthorizedRequest(method, url, data);
      } catch (refreshError) {
        goToLogin();
      }
    }
    throw error;
  }
}

// Verify Authorized petition
async function makeAuthorizedRequest(method, url, data = null) {
  const token = localStorage.getItem("access_token");
  if (!token) {
    throw new Error("Token no existe");
  }
  const headers = { "Content-Type": "application/json", "auth-token": token };

  const response = await fetch(url, {
    method,
    headers,
    body: data ? JSON.stringify(data) : null,
  });

  if (!response.ok) {
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
    const urlLogin = apiConfig.baseUrl;
    const renoveTokens = await fetch(urlLogin, {
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
      const errorContainer = document.querySelector(".login-container");
      const messageElement = errorMessage(dataUserLogged.status);
      errorContainer.appendChild(messageElement);
      setTimeout(() => {
        errorContainer.removeChild(messageElement);
        document.querySelector("#form-login").reset();
      },5000);
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
export async function registerUser(userName, userLastName, userEmail, userAddress, userPhone, userPassword) { 
  try {
    const dataUserRegister = {
      name: userName,
      lastName: userLastName,
      email: userEmail,
      address: userAddress,
      phone: userPhone,
      password: userPassword,
    };
    const urlRegister = apiConfig.registerUrl;
    const userRegistered = await fetch(urlRegister, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataUserRegister),
    });
    const dataUserRegistered = await userRegistered.json();
    console.log(dataUserRegistered);

    if (dataUserRegistered.status !== "Success") {
      const errorContainer = document.querySelector(".register-container");
      const messageElement = errorMessage(dataUserRegistered.status);
      errorContainer.appendChild(messageElement);
      setTimeout(() => {
        errorContainer.removeChild(messageElement);
        //document.querySelector("#form-register").reset();
      },5000);
    } else {
      //GO TO LOGIN PAGE
      //goToLogin()
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

// Function to get user details
export async function getUserDetails(userId) {
  try {
    const userDetailsUrl = apiConfig.userDetailsUrl + userId;
    console.log(userDetailsUrl)
    const user = await callApi("GET", userDetailsUrl);
    console.log('prueba')
    console.log(user);
    
    return user;
  } catch (error) {
    throw error;
  }
}
