import { apiConfig } from "../api/api-config";
import { callApi, removeUserFavourite } from "../api/api";

export function modifyProfileImgListener() {
  const imgElement = document.querySelector(".photo-profile");
  const fileInput = document.querySelector("#photo-fileInput");

  imgElement.addEventListener("click", (event) => {
    fileInput.click();
  });

  fileInput.addEventListener("change", async (event) => {
    const photo = fileInput.files[0];
    if (!photo) return;

    const validTypes = ["image/png"];
    if (!validTypes.includes(photo.type)) {
      throw Error("Solo se permiten imagenes PNG");
    }

    // FormData create
    const formData = new FormData();
    formData.append("profileImage", photo);

    const uploadUrl = apiConfig.uploadProfileImgUrl;
    const response = await callApi("POST", uploadUrl, formData, true);
    imgElement.src = response.data;
  });
}

export async function removeFavouritesUserListener() {

  const clickContainer = document.querySelector('.favourites-general-container')

  clickContainer.addEventListener("click", async (event) => {
    const target = event.target;
    let favouriteId = ""
    let favouriteType = ""
    if (target.hasAttribute("data-favourite-id")) {
      favouriteId = target.getAttribute("data-favourite-id");
    }
    if (target.hasAttribute("data-favourite-type")) {
      favouriteType = target.getAttribute("data-favourite-type");
    }
    if (favouriteId !== "" && favouriteType !== "") removeUserFavourite(favouriteId,favouriteType);
  });
}
