import "./scss/style.scss";
import * as bootstrap from "bootstrap";
import { checkIsLogged } from "./utils/general";
import { createRegisterPage } from './pages/register';

createRegisterPage();

document.addEventListener("DOMContentLoaded", () => {
  checkIsLogged();
});