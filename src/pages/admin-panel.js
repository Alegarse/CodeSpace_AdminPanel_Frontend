function createSidebarElement() {
  const adminSidebarContainer = document.createElement("nav");
  adminSidebarContainer.classList = "sidebar-container";

  const logoElement = createLogoElement();

  const adminName = document.createElement("h2");

  const user = JSON.parse(localStorage.getItem("userData"));
  adminName.textContent = user.name;
  adminName.classList = "admin-name"

  const adminUserPanelLine = document.createElement("hr");
  adminUserPanelLine.classList = "line";

  const adminSidebarItems = document.createElement("div");
  adminSidebarItems.classList = "sidebar-items"

  const navbarElement = createNavbarItemsElements();

  adminSidebarContainer.appendChild(logoElement);
  adminSidebarContainer.appendChild(adminName);
  adminSidebarContainer.appendChild(adminUserPanelLine);
  adminSidebarItems.appendChild(navbarElement);
  adminSidebarContainer.appendChild(adminSidebarItems);

  return adminSidebarContainer;
}

function createLogoElement() {
  const logoElement = document.createElement("img");
  logoElement.classList = "logo-admin";
  logoElement.src = "/src/imgs/logo-plants.png";
  logoElement.alt = "logo";

  return logoElement;
}

function createNavbarItemsElements() {
  const adminNavbarElement = document.createElement("ul");
  adminNavbarElement.classList = "admin-navbar";

  const navItems = [
    { name: "PERFIL", href: "#profile" },
    { name: "USUARIOS", href: "#users" },
    { name: "CONFIGURACIÓN", href: "#config" },
    { name: "CERRAR SESIÓN", href: "#logOut" },
  ];

  navItems.forEach((item) => {
    const liElement = document.createElement("li");
    liElement.classList = "navbar-item";

    const aElement = document.createElement("a");
    aElement.classList = "navbar-link";
    aElement.textContent = item.name;
    aElement.href = item.href;
    aElement.target = "_self";

    liElement.appendChild(aElement);
    adminNavbarElement.appendChild(liElement);
  });

  return adminNavbarElement;
}

export function createAdminPanel() {
  const bodyElement = document.querySelector("body");
  bodyElement.classList.add("opacity-bg-img");

  const appContainerElement = document.querySelector("#app");

  const adminPanelElement = document.createElement("div");
  adminPanelElement.classList = "adminPanel-container";
  //ESTE DIV PUEDE SER INNECESARIO, LO VEMOS EN EL SPRINT

  const sidebarElement = createSidebarElement();

  const adminUsersPanelElement = document.createElement("div");
  adminUsersPanelElement.id = "elements-panel-container";

  adminPanelElement.appendChild(sidebarElement);
  adminPanelElement.appendChild(adminUsersPanelElement);

  appContainerElement.appendChild(adminPanelElement);
}
