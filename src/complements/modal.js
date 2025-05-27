import { updateModalElement } from "./modal-structure";

export function createModalMini(data, action) {
  const app = document.querySelector("#app");

  const modalContainer = document.createElement("div");
  modalContainer.classList = "modal fade";
  modalContainer.id = "modal";
  modalContainer.setAttribute("tabindex", "-1");
  modalContainer.setAttribute("aria-labelledby", "modalTitle");
  modalContainer.setAttribute("aria-hidden", "true");
  //app.appendChild(modalContainer);

  const modalDialog = document.createElement("div");
  modalDialog.classList = "modal-dialog";
  modalDialog.setAttribute("role", "document");
  modalContainer.appendChild(modalDialog);

  const modalContent = document.createElement("div");
  modalContent.classList = "modal-content";
  modalDialog.appendChild(modalContent);

  const modalHeader = document.createElement("div");
  modalHeader.classList = "modal-header";
  modalContent.appendChild(modalHeader);

  const modalTitle = document.createElement("h1");
  modalTitle.classList = "modal-title";
  modalTitle.id = "modal-title";
  modalTitle.textContent = "Advertencia";
  modalHeader.appendChild(modalTitle);

  const modalBody = document.createElement("div");
  modalBody.classList = "modal-body";
  modalBody.id = "modal-body";

  const textQuestionModal = document.createElement("p");
  textQuestionModal.classList = "text-modal";
  textQuestionModal.textContent = `¿Está seguro que desea ${action} este usuario?`;

  modalBody.appendChild(textQuestionModal);

  modalContent.appendChild(modalBody);

  const modalFooter = document.createElement("div");
  modalFooter.classList = "modal-footer";
  modalFooter.id = "modal-footer";
  modalContent.appendChild(modalFooter);

  const buttonYesModal = document.createElement("button");
  buttonYesModal.classList = "button-modal-middle";
  buttonYesModal.id = "button-modal-middle-yes";
  buttonYesModal.textContent = "Si";

  const buttonNoModal = document.createElement("button");
  buttonYesModal.classList = "button-modal-middle";
  buttonYesModal.id = "button-modal-middle-not";
  buttonYesModal.textContent = "No";

  modalFooter.appendChild(buttonYesModal);
  modalFooter.appendChild(buttonNoModal);

  return modalContainer;
}
