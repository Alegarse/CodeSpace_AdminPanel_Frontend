import { deleteUser, deactiveUser, getAllUsers } from "../api/api";
import { createCardsUsersContainer } from "./card-user";

export function createModalYesNoQuestion(userData, action) {
  const modalContainer = document.createElement("div");
  modalContainer.classList = "modal-container";

  const titleBodyModal = document.createElement("h4");
  titleBodyModal.classList = "title-body-modal";
  titleBodyModal.textContent = `¿Esta seguro que desea ${action.toLowerCase()} el usuario ${
    userData.name
  }?`;

  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList = "modal-buttons";

  const buttonYes = document.createElement("button");
  buttonYes.classList = "btn-yes";
  buttonYes.textContent = "Sí";
  buttonYes.id = "btn-yes";

  const buttonNot = document.createElement("button");
  buttonNot.classList = "btn-not";
  buttonNot.textContent = "No";
  buttonNot.setAttribute("data-bs-dismiss", "modal");
  buttonNot.id = "btn-not";

  buttonNot.addEventListener("click", (event) => {
    resetContentModal(modalContainer, buttonsContainer);
  });

  buttonYes.addEventListener("click", async (event) => {
    switch (action) {
      case "eliminar": //
        const result = await deleteUser(userData._id);
        if (result.status === "Success") {
          const close = document.querySelector("#btn-not");
          close.click();
          createCardsUsersContainer(await getAllUsers());
        }
        break;
      case "Deshabilitar":
      case "Habilitar":
        const result_ = await deactiveUser(userData._id, action);
        if (result_.status === "Success") {
          const close = document.querySelector("#btn-not");
          close.click();
          createCardsUsersContainer(await getAllUsers());
        }
        break;
    }
  });

  buttonsContainer.appendChild(buttonYes);
  buttonsContainer.appendChild(buttonNot);

  modalContainer.appendChild(titleBodyModal);

  updateModal("Advertencia", modalContainer, buttonsContainer);
}

function updateModal(title, content, buttons) {
  const modalTitle = document.querySelector("#modal-title");
  modalTitle.textContent = title;

  const modalBody = document.querySelector("#modal-body");
  modalBody.appendChild(content);

  const modalFooter = document.querySelector("#modal-footer");
  modalFooter.appendChild(buttons);
}

function resetContentModal(content, buttons) {
  const modalTitle = document.querySelector("#modal-title");
  modalTitle.textContent = "";

  const modalBody = document.querySelector("#modal-body");
  modalBody.removeChild(content);

  const modalFooter = document.querySelector("#modal-footer");
  modalFooter.removeChild(buttons);
}
