
export async function loginPanel(userEmail, userPassword) {
  console.log(userEmail, userPassword);
  try {
    const dataUserLogin = {
      email: userEmail,
      password: userPassword
    }
    const urlLogin = "http://localhost:3000/api/auth/login/"
    const userLogged = await fetch(urlLogin, {
      method: "POST",
      headers: { "Content-Type": "application-json"},
      body: JSON.stringify(dataUserLogin)
    })
    console.log(userLogged);
  } catch (error) {
    console.error(error.message);
  }
}
