import { formModel } from "../model.js";
import { hydrateFormModel } from "../actions.js";
import { handleDisplayValidity } from "../formAttributesHandler.js";
import { isUserTooYoungOrTooOld } from "../formHelpers.js";

const nameRegex = /^[a-zÀ-ö]{1}[a-z-À-ö ]*[a-zÀ-ö]{1}$/i;
const emailRegex = /^[a-zA-Z]+[a-z-A-Z.-_\d]+?@[a-zA-Z]+\.[a-z]{2,4}$/;
const birthDateRegex = /^\d{4}-\d{2}-\d{2}$/;

/**
 * Handle firstName input
 * Verify input with a regex
 * 
 * @param {InputEvent} inputNode
 */

export function firstName({ target: inputNode }) {
  const regexTestValid = nameRegex.test(inputNode.value);
  const firstNameValue = regexTestValid ? inputNode.value : null;

  handleDisplayValidity(inputNode, regexTestValid);
  hydrateFormModel("firstName", firstNameValue, regexTestValid);
}

/**
 * Handle lastname input
 * Verify input with a regex
 * 
 * @param {InputEvent} inputNode
 */

export function lastName({ target: inputNode }) {
  const regexTestValid = nameRegex.test(inputNode.value);
  const lastNameValue = regexTestValid ? inputNode.value : null;

  handleDisplayValidity(inputNode, regexTestValid);
  hydrateFormModel("lastName", lastNameValue, regexTestValid);
}

/**
 * Handle email input
 * Verify input with a regex
 * 
 * @param {InputEvent} inputNode
 */

export function email({ target: inputNode }) {
  const regexTestValid = emailRegex.test(inputNode.value);
  const emailValue = regexTestValid ? inputNode.value.trim() : null;

  handleDisplayValidity(inputNode, regexTestValid);
  hydrateFormModel("email", emailValue, regexTestValid);
}

/**
 * Handle birthDate input
 * Verify input with a regex
 * Verify is user is younger than 18 years old or older than 122 years old
 * 
 * @param {InputEvent} inputNode
 */

export function birthDate({ target: inputNode }) {
  let isDateValid = (
    birthDateRegex.test(inputNode.value) &&
    isUserTooYoungOrTooOld(inputNode.value) === false
  );
  const birthDateValue = isDateValid ? inputNode.value : null;

  handleDisplayValidity(inputNode, isDateValid);
  hydrateFormModel("birthDate", birthDateValue, isDateValid);
}

/**
 * Handle tournamentsCount input
 * Verify if input value is a valid number and if its >= 0 and < 100
 * Prevent filling input if input value is not validated
 * 
 * @param {InputEvent} inputNode
 */

export function tournamentsCount(event) {
  const inputNode = event.target;
  const inputValue = inputNode.value;
  const inputValueNumber = parseInt(inputValue, 10);
  const isValidNumber = (
    isNaN(inputValueNumber) === false &&
    inputValueNumber >= 0 &&
    inputValueNumber < 100
  );
  let tournamentsCountValue = isValidNumber ? inputValueNumber : null;

  handleDisplayValidity(inputNode, isValidNumber);
  hydrateFormModel("tournamentsCount", tournamentsCountValue, isValidNumber);
}

/**
 * Handle acceptCgu input
 * Verify checkbox value
 * 
 * @param {InputEvent} inputNode
 */

export function acceptCgu({ target: inputNode }) {
  const acceptCguValue = inputNode.checked;
  const isCguValid = acceptCguValue;

  handleDisplayValidity(inputNode, acceptCguValue);
  hydrateFormModel("acceptCgu", acceptCguValue, isCguValid);
}

/**
 * Handle nextEventWarning input
 * Verify checkbox value
 * 
 * @param {InputEvent} inputNode
 */

export function nextEventWarning({ target: inputNode }) {
  hydrateFormModel("nextEventWarning", inputNode.checked, true);
}

/**
 * Handle location input
 * Verify radio value
 * 
 * If radio is not checked, check if there is any value stored in 
 * {@link formModel} on location key
 * 
 * @param {InputEvent} inputNode
 */

export function location({ target: inputNode }) {
  const hasChosenLocation = inputNode.checked || formModel.location.value !== null;
  let locationValue = null;

  if (inputNode.checked) {
    locationValue = inputNode.value;
  } else if (formModel.location.value !== null) {
    locationValue = formModel.location.value;
  }

  const isLocationValid = hasChosenLocation && locationValue !== null;

  handleDisplayValidity(inputNode, hasChosenLocation);
  hydrateFormModel("location", locationValue, isLocationValid);
}
