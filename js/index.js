import * as validate from "./form/validators/validator.js";
import { handleFormSubmit } from "./form/actions.js";
import { showForm, closeForm } from "./form/attributesHandler.js";
// instanciated of DomSelectors class
import dom from "./domSelectors.js";

/** Toggle responsive className on click to navToogleButton */
function handleTopNavStyle() {
  const topNav = dom.getNode("#myTopnav");
  topNav.classList.toggle("responsive");
}

/** Adding every needed event listeners on initialization */

dom.navToggleButton.addEventListener("click", handleTopNavStyle);
dom.modalBtn.forEach((btn) => btn.addEventListener("click", showForm));
dom.closeModalButton.addEventListener("click", closeForm);
dom.form.addEventListener("submit", handleFormSubmit);
dom.formInputs.forEach(input => input.addEventListener("input", validate[input.name]));






