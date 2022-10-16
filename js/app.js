import * as validate from "./form/validators/validator.js";
import { handleFormSubmit } from "./form/actions.js";
import { showForm, closeForm } from "./form/formAttributesHandler.js";
import { handleTopNavStyle } from "./attributesHandler.js";
import { pressOnlyNumbers } from "./form/actions.js";
import * as dom from "./constants.js";

/** Adding every needed event listeners on initialization */
dom.formTournamentCountsInput.addEventListener("keydown", pressOnlyNumbers);
dom.navToggleButton.addEventListener("click", handleTopNavStyle);
dom.modalBtn.forEach((btn) => btn.addEventListener("click", showForm));
dom.closeModalButton.addEventListener("click", closeForm);
dom.form.addEventListener("submit", handleFormSubmit);
dom.formInputs.forEach(input => input.addEventListener("input", validate[input.name]));






