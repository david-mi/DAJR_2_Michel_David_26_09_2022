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
  const firstName = regexTestValid ? inputNode.value : null;

  handleDisplayValidity(inputNode, regexTestValid);
  hydrateFormModel("firstName", firstName, regexTestValid);
}

/**
 * Handle lastname input
 * Verify input with a regex
 * 
 * @param {InputEvent} inputNode
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
 * @param {InputEvent} inputNode
 */

export function email({ target: inputNode }) {
  const regexTestValid = emailRegex.test(inputNode.value);
  const email = regexTestValid ? inputNode.value.trim() : null;

  handleDisplayValidity(inputNode, regexTestValid);
  hydrateFormModel("email", email, regexTestValid);
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
  const birthDate = isDateValid ? inputNode.value : null;

  handleDisplayValidity(inputNode, isDateValid);
  hydrateFormModel("birthDate", birthDate, isDateValid);
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
  let tournamentsCount = isValidNumber ? inputValueNumber : formModel.tournamentsCount.value;

  if (isValidNumber === false && event.data !== null) {
    inputNode.value = formModel.tournamentsCount.value;
  }

  handleDisplayValidity(inputNode, isValidNumber);
  hydrateFormModel("tournamentsCount", tournamentsCount, isValidNumber);
}

/**
 * Handle acceptCgu input
 * Verify checkbox value
 * 
 * @param {InputEvent} inputNode
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
 * @param {InputEvent} inputNode
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
 * @param {InputEvent} inputNode
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
