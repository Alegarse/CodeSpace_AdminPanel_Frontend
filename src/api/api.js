import { apiConfig } from "./api-config";
import { createAdminPanel } from "../pages/admin-panel";
import { createUserProfile } from "../pages/user-profile";
import { createLoginPage } from "../pages/login";
import { loginListener } from "../events/login-events";

async function callApi(method, url, data = null) {
  try {
    return await makeAuthorizedRequest(method, url, data);
  } catch (error) {
    if (error.status === 401) {
      try {
        await refreshToken();
        return await makeAuthorizedRequest(method, url, data);
      } catch (refreshError) {
        throw refreshError;
      }
    }
    throw error;
  }
}

async function makeAuthorizedRequest(method, url, data = null) {

  const token = localStorage.getItem("access_token");
  if (!token) throw new Error("Token no existe");
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

async function refreshToken() {
  const refresh = localStorage.getItem("refresh_token");
  if (!refresh) throw new Error("Token de resfresco no existe");

  const urlLogin = apiConfig.baseUrl;

  try {
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
    if (error.status === 401) { // Correccion realizada
      goToLogin();
    }
  }
}

function goToLogin() {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  localStorage.clear();
  createLoginPage();
  loginListener();
}

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

    // SAVE DATA TO LOCAL STORAGE
    localStorage.setItem("access_token", dataUserLogged.token);
    localStorage.setItem("refresh_token", dataUserLogged.token_refresh);

    // Try to get Data User
    getUserProfile();
  } catch (error) {
    throw error;
  }
}

//callApi(method, url, data = null)
async function getUserProfile() {
  try {
    const urlToProfile = apiConfig.profileUrl;
    const user = await callApi("GET", urlToProfile); // Falla aqui

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
