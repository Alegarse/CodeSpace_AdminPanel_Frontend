import { createModalElement } from "../complements/modal-structure";
import { createCardsUsersContainer } from "../complements/cardUser";
import { clearSessionListener } from "../events/general-events";
import { createSidebarElement } from "../complements/sidebar";

export function createAdminPanel() {
  const bodyElement = document.querySelector("body");
  bodyElement.classList.add("opacity-bg-img");

  const appContainerElement = document.querySelector("#app");

  const adminPanelElement = document.createElement("div");
  adminPanelElement.classList = "adminPanel-container";

  const sidebarElement = createSidebarElement();

  const adminUsersPanelElement = document.createElement("div");
  adminUsersPanelElement.id = "elements-panel-container";

  adminPanelElement.appendChild(sidebarElement);
  adminPanelElement.appendChild(adminUsersPanelElement);

  appContainerElement.appendChild(adminPanelElement);
  appContainerElement.appendChild(createModalElement());

  createCardsUsersContainer();
  clearSessionListener();
}
