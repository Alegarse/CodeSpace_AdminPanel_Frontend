export function createAdminPanel() {
  const bodyElement = document.querySelector("body");
  bodyElement.classList.add("opacity-bg-img");

  const appContainerElement = document.querySelector("#app");

  const adminPanelElement = document.createElement("div");
  adminPanelElement.classList = "adminPanel-container";
  //ESTE DIV PUEDE SER INNECESARIO, LO VEMOS EN EL SPRINT

  const sidebarElement = createSidebarElement();

  const adminUsersPanelElement = document.createElement("div");
  adminUsersPanelElement.id = 'elements-panel-container'

  adminPanelElement.appendChild(sidebarElement);
  adminPanelElement.appendChild(adminUsersPanelElement);

  appContainerElement.appendChild(adminPanelElement);
}

function createSidebarElement() {
  const adminSidebar = document.createElement("nav");
  adminSidebar.classList = "sidebar-container";

  const logoElement = createLogoElement();

  const adminName = document.createElement("h2");
  adminName.textContent = "CodeSpace";

  const navbarElement = createNavbarItemsElements();

  adminSidebar.appendChild(logoElement);
  adminSidebar.appendChild(adminName);
  adminSidebar.appendChild(navbarElement);

  return adminSidebar;
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
    { name: "Perfil", href: "#profile" },
    { name: "Usuarios", href: "#users" },
    { name: "Configuración", href: "#config" },
    { name: "Cerrar sesión", href: "#logOut" },
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
