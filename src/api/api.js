import axios from "axios";

export async function loginPanel(userEmail, userPassword) {

    try {
        let loginUrl = 'http://localhost:3000/api/login';
        loginUrl += `?userEmail=${userEmail}`;
        loginUrl += `?userPassword=${userPassword}`;
        console.log(loginUrl);
        return (await axios(loginUrl))?.data;
    } catch (error) {
        console.error(error.message);
    }
}