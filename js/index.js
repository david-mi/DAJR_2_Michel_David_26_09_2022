import * as validate from "./form/validators/validator.js";
import { resetForm, handleFormSubmit } from "./form/formActions.js";
// instanciated of DomSelectors class
import dom from "./domSelectors.js";

/** Handle topNav style */
function handleTopNavStyle() {
  const topNav = dom.getOne("myTopnav");
  if (topNav.className === "topnav") {
    topNav.className += " responsive";
  } else {
    topNav.className = "topnav";
  }
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






