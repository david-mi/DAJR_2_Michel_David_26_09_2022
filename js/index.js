import * as validate from "./form/validators/validator.js";
import { resetForm, handleFormSubmit } from "./form/formActions.js";
// instanciated of DomSelectors class
import dom from "./domSelectors.js";

/** Toggle responsive className on click to navToogleButton */
function handleTopNavStyle() {
  const topNav = dom.getOne("#myTopnav");
  topNav.classList.toggle("responsive");
}

dom.navToggleButton.addEventListener("click", handleTopNavStyle);

/** Displays form modal on click */
function launchModal() {
  dom.modalbg.classList.remove("select-hide");
}

dom.modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Adding click listener to closeModalButton
dom.closeModalButton.addEventListener("click", handlecloseModalButton);

/** hide form modal on click */
function handlecloseModalButton() {
  dom.modalbg.classList.add("select-hide");
  resetForm();
}

dom.form.addEventListener("submit", handleFormSubmit);
dom.formInputs.forEach(input => input.addEventListener("input", validate[input.name]));






