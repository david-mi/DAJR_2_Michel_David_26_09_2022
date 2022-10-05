import { resetForm } from "./actions.js";
import * as dom from "../domSelectors.js";
import { formModel } from "./model.js";

/** Displays form modal on click */
export function showForm() {
  dom.modalbg.classList.remove("select-hide");
}

/** hide form modal on click */
export function closeForm() {
  dom.modalbg.classList.add("select-hide");
  const confirmationDiv = document.querySelector(".confirmation");
  if (confirmationDiv) {
    confirmationDiv.remove();
  }
  resetForm();
}

/**
 * Handle displaying/hiding css error classes
 * 
 * @param {HTMLInputElement} inputNode 
 * @param {boolean} isValid 
 */

export function handleErrorClasslists(inputNode, isValid) {
  const addOrRemove = isValid ? "remove" : "add";

  if (inputNode.type === "checkbox") {
    const checkBoxIcon = inputNode.nextElementSibling.querySelector(".checkbox-icon");
    checkBoxIcon.classList[addOrRemove]("invalid");
  } else if (inputNode.type === "radio") {
    dom.checkboxIcons.forEach(radio => {
      const label = radio.parentElement;
      if (label.previousElementSibling.type === "radio") {
        radio.classList[addOrRemove]("invalid");
      }
    });
  } else {
    inputNode.classList[addOrRemove]("invalid");
  }
}

/**
 *  - Add error & errorVisible dataset properties to the input and its container
 *  - Applies css classes to adequates elements to add or remove error style
 * 
 * @param {HTMLDivElement} inputNodeContainer - input container
 * @param {HTMLInputElement} inputNodeContainer - targeted input
 * @param {string} errorMessage - Error message to display
 */

function displayError(inputNodeContainer, errorMessage) {

  inputNodeContainer.dataset.error = errorMessage;
  inputNodeContainer.dataset.errorVisible = true;
}

/**
 * Remove error & errorVisible dataset properties from the input
 * 
 * @param {HTMLInputElement} inputNodeContainer - Selected input
 */

export function displayValid(inputNodeContainer) {
  inputNodeContainer.removeAttribute("data-error");
  inputNodeContainer.removeAttribute("data-error-visible");
}

/**
 * Calls displayValid or displayError function based on isValid value
 * 
 * @param {HTMLInputElement} inputNode 
 * @param {boolean} isValid 
 */

export function handleDisplayValidity(inputNode, isValid) {
  const inputNodeContainer = inputNode.closest(".formData");

  if (isValid) {
    displayValid(inputNodeContainer, inputNode);
  } else {
    const errorMessage = formModel[inputNode.name].errorMessage;
    displayError(inputNodeContainer, errorMessage);
  }

  handleErrorClasslists(inputNode, isValid);
}
