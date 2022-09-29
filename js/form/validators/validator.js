import { emailRegex, nameRegex, birthDateRegex, tournamentCountRegex } from "./regex.js";
import { formModel } from "../formModel.js";
import { hydrateFormModel } from "../formActions.js";
import { handleDisplayValidity } from "../formDisplay.js";


/**
 * Handle firstName input
 * Verify input with a regex
 * 
 * @param {HTMLInputElement} inputNode
 */

export function firstName({ target: inputNode }) {
  const regexTestValid = nameRegex.test(inputNode.value);
  const firstName = regexTestValid ? inputNode.value : null;

  handleDisplayValidity(inputNode, regexTestValid);
  hydrateFormModel("firstName", firstName, regexTestValid);
}

/**
 * Handle lastname input
 * Verify input with a regex
 * 
 * @param {HTMLInputElement} inputNode
 */

export function lastName({ target: inputNode }) {
  const regexTestValid = nameRegex.test(inputNode.value);
  const lastName = regexTestValid ? inputNode.value : null;

  handleDisplayValidity(inputNode, regexTestValid);
  hydrateFormModel("lastName", lastName, regexTestValid);
}

/**
 * Handle email input
 * Verify input with a regex
 * 
 * @param {HTMLInputElement} inputNode
 */

export function email({ target: inputNode }) {
  const regexTestValid = emailRegex.test(inputNode.value);
  const email = regexTestValid ? inputNode.value : null;

  handleDisplayValidity(inputNode, regexTestValid);
  hydrateFormModel("email", email, regexTestValid);
}

/**
 * Handle birthDate input
 * Verify input with a regex
 * 
 * @param {HTMLInputElement} inputNode
 */

export function birthDate({ target: inputNode }) {
  const regexTestValid = birthDateRegex.test(inputNode.value);
  const birthDate = regexTestValid ? inputNode.value : null;

  handleDisplayValidity(inputNode, regexTestValid);
  hydrateFormModel("birthDate", birthDate, regexTestValid);
}

/**
 * Handle tournamentsCount input
 * Verify input with a regex
 * 
 * @param {HTMLInputElement} inputNode
 */

export function tournamentsCount({ target: inputNode }) {
  const regexTestValid = tournamentCountRegex.test(inputNode.value);
  const tournamentsCount = regexTestValid ? Number(inputNode.value) : null;

  handleDisplayValidity(inputNode, regexTestValid);
  hydrateFormModel("tournamentsCount", tournamentsCount, regexTestValid);
}

/**
 * Handle acceptCgu input
 * Verify checkbox value
 * 
 * @param {HTMLInputElement} inputNode
 */

export function acceptCgu({ target: inputNode }) {
  const acceptCgu = inputNode.checked;
  const isCguValid = acceptCgu;

  handleDisplayValidity(inputNode, acceptCgu);
  hydrateFormModel("acceptCgu", acceptCgu, isCguValid);
}

/**
 * Handle acceptNewsletter input
 * Verify checkbox value
 * 
 * @param {HTMLInputElement} inputNode
 */

export function acceptNewsletter({ target: inputNode }) {
  hydrateFormModel("acceptNewsletter", inputNode.checked, true);
}

/**
 * Handle location input
 * Verify radio value
 * 
 * If radio is not checked, check if there is any value stored in 
 * {@link formModel} on location key
 * 
 * @param {HTMLInputElement} inputNode
 */

export function location({ target: inputNode }) {
  const hasChosenLocation = inputNode.checked || formModel.location.value !== null;
  let location = null;

  if (inputNode.checked) {
    location = inputNode.value;
  } else if (formModel.location.value !== null) {
    location = formModel.location.value;
  }

  const isLocationValid = hasChosenLocation && location !== null;

  handleDisplayValidity(inputNode, hasChosenLocation);
  hydrateFormModel("location", location, isLocationValid);

}
