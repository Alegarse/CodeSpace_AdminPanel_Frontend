export function createModalElement() {
  const app = document.querySelector("#app");

  const modalContainer = document.createElement("div");
  modalContainer.classList = "modal fade";
  modalContainer.id = "modal";
  modalContainer.setAttribute("tabindex", "-1");
  modalContainer.setAttribute("aria-labelledby", "modalTitle");
  modalContainer.setAttribute("aria-hidden", "true");
  modalContainer.setAttribute("data-bs-backdrop", "static");
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
  modalTitle.classList = "modal-title";
  modalTitle.id = "modal-title";
  modalHeader.appendChild(modalTitle);

  const modalBody = document.createElement("div");
  modalBody.classList = "modal-body";
  modalBody.id = 'modal-body';
  modalContent.appendChild(modalBody);

  const modalFooter = document.createElement("div");
  modalFooter.classList = "modal-footer";
  modalFooter.id = "modal-footer";
  modalContent.appendChild(modalFooter);

  const modalButton = document.createElement("button");
  modalButton.classList = "btn-close";
  modalButton.setAttribute("type", "button");
  modalButton.setAttribute("data-bs-dismiss", "modal");
  modalButton.setAttribute("aria-label", "Close");
  //en el cierre , vacio el modal para que no se dupliquen los datos
  resetModalFooter(modalButton, modalBody, modalFooter);
  modalHeader.appendChild(modalButton);

  return modalContainer;
}

export function updateModalElement(title, content, buttons) {
  const modalTitle = document.querySelector('#modal-title');
  modalTitle.textContent = title;

  const modalBody = document.querySelector('#modal-body');
  modalBody.appendChild(content);

  const modalFooter = document.querySelector('#modal-footer');
  buttons.forEach((button) => {
    modalFooter.appendChild(button);
  })
}

//Creo una función para que elimine los botones y el contenido cuando cierre la ventana modal y así al volver a pulsar no se dupliquen los datos, 
export function resetModalFooter(closeElement, modalBody, modalFooter, preCloseAction=null, id_=null) {
  closeElement.addEventListener("click", async () => {
    if (preCloseAction && typeof preCloseAction === 'function') {
      await preCloseAction();
    }
    
    modalBody.textContent = "";
    Array.from(modalFooter.children).forEach((button) => {
      if (button.id !== id_) {
        button.remove()
      }})
  })
}