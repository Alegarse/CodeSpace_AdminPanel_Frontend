import { getUserProfile, goToLogin } from "../src/api/api";

export async function checkIsLogged() {
  const token = localStorage.getItem("access_token");
  if (!token) {
    goToLogin();
  } else {
    getUserProfile();
  }
}
