import { apiConfig } from "../api/api-config";
import { callApi } from "../api/api";

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
    imgElement.src = response.data
  });
}
