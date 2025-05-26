import { getUserProfile, goToLogin } from "../api/api";

export async function checkIsLogged() {
  const token = localStorage.getItem("access_token");
  if (!token) {
    goToLogin();
  } else {
    getUserProfile();
  }
}

export function getFormattedDate(date,includeTime = false) {

  const constDate  = new Date(date);
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let options = {day:'2-digit',month:'2-digit',year:'numeric',hour12: false, timeZone: timeZone}
  if (includeTime) {
    const options2 = { hour:'2-digit',minute:'2-digit',second:'2-digit'};
    options = { ...options2, ...options }
  }
  return constDate.toLocaleString('es-ES', options).replace(',','');
}
