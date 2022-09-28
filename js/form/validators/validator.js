import { emailRegex, nameRegex, birthDateRegex, tournamentCountRegex } from "./regex.js";
import { formModel } from "../formModel.js";
import { hydrateFormModel } from "../formActions.js";

function displayError(inputNodeContainer, errorMessage) {
  inputNodeContainer.dataset.error = errorMessage;
  inputNodeContainer.dataset.errorVisible = true;
}

function displayValid(inputNodeContainer) {
  inputNodeContainer.removeAttribute("data-error");
  inputNodeContainer.removeAttribute("data-error-visible");
}

function handleDisplayValidity(inputNode, isValid) {
  const inputNodeContainer = inputNode.closest(".formData");

  if (isValid) {
    displayValid(inputNodeContainer);
  } else {
    const errorMessage = formModel[inputNode.name].errorMessage;
    displayError(inputNodeContainer, errorMessage);
  }
}

export function firstName({ target: inputNode }) {
  const regexTestValid = nameRegex.test(inputNode.value);
  const firstName = regexTestValid ? inputNode.value : null;

  handleDisplayValidity(inputNode, regexTestValid);
  hydrateFormModel("firstName", firstName, regexTestValid);
}

export function lastName({ target: inputNode }) {
  const regexTestValid = nameRegex.test(inputNode.value);
  const lastName = regexTestValid ? inputNode.value : null;

  handleDisplayValidity(inputNode, regexTestValid);
  hydrateFormModel("lastName", lastName, regexTestValid);
}

export function email({ target: inputNode }) {
  const regexTestValid = emailRegex.test(inputNode.value);
  const email = regexTestValid ? inputNode.value : null;

  handleDisplayValidity(inputNode, regexTestValid);
  hydrateFormModel("email", email, regexTestValid);
}

export function birthDate({ target: inputNode }) {
  const regexTestValid = birthDateRegex.test(inputNode.value);
  const birthDate = regexTestValid ? inputNode.value : null;

  handleDisplayValidity(inputNode, regexTestValid);
  hydrateFormModel("birthDate", birthDate, regexTestValid);
}

export function tournamentsCount({ target: inputNode }) {
  const regexTestValid = tournamentCountRegex.test(inputNode.value);
  const tournamentsCount = regexTestValid ? Number(inputNode.value) : null;

  handleDisplayValidity(inputNode, regexTestValid);
  hydrateFormModel("tournamentsCount", tournamentsCount, regexTestValid);
}

export function acceptCgu({ target: inputNode }) {
  const acceptCgu = inputNode.checked;
  const isCguValid = acceptCgu;

  handleDisplayValidity(inputNode, acceptCgu);
  hydrateFormModel("acceptCgu", acceptCgu, isCguValid);
}

export function acceptNewsletter({ target: inputNode }) {
  hydrateFormModel("acceptNewsletter", inputNode.checked, true);
}

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
