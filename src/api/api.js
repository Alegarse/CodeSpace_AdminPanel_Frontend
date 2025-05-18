import { apiConfig } from "./apiConfig";
import { createAdminPanel } from "../pages/admin-panel";
import { createCardsUsersContainer } from '../complements/cardUser';

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
    getUserProfile();
  } catch (error) {
    console.error(error.message);
  }
}

async function getUserProfile() {
  try {
    const urlToProfile = apiConfig.profileUrl;
    const userProfileData = await fetch(urlToProfile, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "token-auth": localStorage.getItem("access_token"),
      },
    });
    const user = await userProfileData.json();
    console.log(user);
    // SAVE DATA TO LOCAL STORAGE
    localStorage.setItem("userData", JSON.stringify(user.data));

    // GOT TO ADMIN PANEL
    if (user.data.role === "admin") {
      const appContainerElement = document.querySelector("#app");
      appContainerElement.textContent = "";
      createAdminPanel();
      createCardsUsersContainer(); // esto debe ir dentro de createAdminPanel
    }
  } catch (error) {
    console.error(error.message);
  }
}
