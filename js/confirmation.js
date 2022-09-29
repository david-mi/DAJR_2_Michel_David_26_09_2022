import dom from "./domSelectors.js";
import { closeForm } from "./form/formDisplay.js";

const confirmationElement = createConfirmationNodes();

/**
 * Construct confirmation Element with 
 * all child nodes
 * 
 * @returns {HTMLDivElement}
 */

function createConfirmationNodes() {
  const confirmationContainerNode = document.createElement("div");
  confirmationContainerNode.classList.add("confirmation");

  const confirmationParagraphNode = document.createElement("p");
  confirmationParagraphNode.innerText = "Merci pour votre inscription";

  const confirmationCloseButton = document.createElement("button");
  confirmationCloseButton.classList.add("button");
  confirmationCloseButton.innerText = "Fermer";
  confirmationCloseButton.addEventListener("click", closeForm);

  confirmationContainerNode.append(confirmationParagraphNode, confirmationCloseButton);

  return confirmationContainerNode;
}

/**
 * Add {@link confirmationElement} to 
 * {@link dom.modalBody}
 */

export function appendConfirmation() {
  dom.modalBody.append(confirmationElement);
}
