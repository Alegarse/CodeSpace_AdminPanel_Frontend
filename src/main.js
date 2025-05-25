import "./scss/style.scss";
import * as bootstrap from "bootstrap";
import { checkIsLogged } from "./utils/general";

document.addEventListener("DOMContentLoaded", () => {
  checkIsLogged();
});