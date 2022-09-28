import { resetForm } from "./formActions.js";
import dom from "../domSelectors.js";

/** Displays form modal on click */
export function showForm() {
  dom.modalbg.classList.remove("select-hide");
}

/** hide form modal on click */
export function closeForm() {
  dom.modalbg.classList.add("select-hide");
  const confirmationDiv = dom.getNode(".confirmation");
  if (confirmationDiv) {
    confirmationDiv.remove();
  }
  resetForm();
}
