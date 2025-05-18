export function createModalElement() {
  const app = document.querySelector("#app");

  const modalContainer = document.createElement("div");
  modalContainer.classList = "modal fade";
  modalContainer.id = "modal";
  modalContainer.setAttribute("tabindex", "-1");
  modalContainer.setAttribute("aria-labelledby", "modalTitle");
  modalContainer.setAttribute("aria-hidden", "true");
  app.appendChild(modalContainer);

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
  modalTitle.classList = "modal-title fs-5";
  modalTitle.id = "modal-title";
  modalHeader.appendChild(modalTitle);

  const modalbutton = document.createElement("button");
  modalbutton.classList = "btn-close";
  modalbutton.setAttribute("type", "button");
  modalbutton.setAttribute("data-bs-dismiss", "modal");
  modalbutton.setAttribute("aria-label", "Close");
  modalHeader.appendChild(modalbutton);

  const modalBody = document.createElement("div");
  modalBody.classList = "modal-body";
  modalBody.id = 'modal-body';
  modalContent.appendChild(modalBody);

  const modalFooter = document.createElement("div");
  modalFooter.classList = "modal-footer";
  modalContent.appendChild(modalFooter);

  const modalFooterCloseButton = document.createElement("button");
  modalFooterCloseButton.classList = "btn btn-secondary";
  modalFooterCloseButton.setAttribute("type", "button");
  modalFooterCloseButton.setAttribute("data-bs-dismiss", "modal");
  modalFooterCloseButton.textContent = "Close";
  modalFooter.appendChild(modalFooterCloseButton);

  return modalContainer;
}

export function updateModalElement(title, content, buttons) {
  console.log('updateModalElement');
  const modalTitle = document.querySelector('#modal-title');
  console.log(modalTitle)
  modalTitle.textContent = title;

  const modalBody = document.querySelector('#modal-body');
  console.log(modalBody)
  modalBody.appendChild(content);

  const modalFooter = document.querySelector('#modal-footer');
  console.log(modalFooter)
  buttons.forEach((button) => {
    console.log(modalFooter);
    console.log(button);
    modalFooter.appendChild(button);
  })
}
