export function createSidebarElement() {
  const userSidebarContainer = document.createElement("nav");
  userSidebarContainer.classList = "sidebar-container";

  const logoElement = createLogoElement();

  const userName = document.createElement("h2");

  const user = JSON.parse(localStorage.getItem("userData"));
  userName.textContent = user.name;
  userName.classList = "user-name";

  const userPanelLine = document.createElement("hr");
  userPanelLine.classList = "line";

  const userSidebarItems = document.createElement("div");
  userSidebarItems.classList = "sidebar-items";

  const navbarElement = createNavbarItemsElements();

  userSidebarContainer.appendChild(logoElement);
  userSidebarContainer.appendChild(userName);
  userSidebarContainer.appendChild(userPanelLine);
  userSidebarItems.appendChild(navbarElement);
  userSidebarContainer.appendChild(userSidebarItems);

  return userSidebarContainer;
}

function createNavbarItemsElements() {
  const userNavbarElement = document.createElement("ul");
  userNavbarElement.classList = "user-navbar";

  const userData = JSON.parse(localStorage.getItem("userData"));

  const navItems = [{ name: "PERFIL", href: "#" }];

  if (userData.role === "admin") {
    navItems.push(
      { name: "USUARIOS", href: "#users" },
      { name: "CONFIGURACIÓN", href: "#config" }
    );
  }
  navItems.push({
    name: "CERRAR SESIÓN",
    href: "#logOut",
    id: "clear-session",
  });

  navItems.forEach((item) => {
    const liElement = document.createElement("li");
    liElement.classList = "navbar-item";

    const aElement = document.createElement("a");
    aElement.classList = "navbar-link";
    aElement.textContent = item.name;
    aElement.href = item.href;
    aElement.target = "_self";
    if (item.href === "#logOut") aElement.id = item.id;

    liElement.appendChild(aElement);
    userNavbarElement.appendChild(liElement);
  });

  return userNavbarElement;
}

function createLogoElement() {
  const logoElement = document.createElement("img");
  logoElement.classList = "logo-user";
  logoElement.src = "./src/imgs/logo-plants.png";
  logoElement.alt = "logo";

  return logoElement;
}
