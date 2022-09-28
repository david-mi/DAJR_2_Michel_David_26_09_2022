import dom from "../domSelectors.js";
import { formModel, defaultFormModel } from "./formModel.js";
import { appendConfirmation } from "../confirmation.js";
import { displayValid } from "./validators/validator.js";

/** Trigger input type Event to all form input nodes, except submit */

function triggerInputEvents() {
  dom.formInputs.forEach(input => input.dispatchEvent(new Event("input")));
}

/**
 * Replace given property in {@link formModel}
 * 
 * @param {string} property property to target on `formModel`
 * @param {string | number | boolean | null} value the new value to add on `formModel`
 * @param {boolean} isValid if the value is considered valid or not to validate the form
 */

export const hydrateFormModel = (property, value, isValid) => {
  formModel[property] = {
    ...formModel[property],
    value,
    isValid
  };
};

/** 
 * Checks if there is any any isValid properties set to true 
 * in {@link formModel}
 * 
 * @return {boolean}
 */

export function checkFormModelInvalid() {
  return (
    Object
      .values(formModel)
      .some(({ isValid }) => isValid === false)
  );
}

/**
* @typedef formBodyType
* @type {{
 *  firstName: string,
 *  lastName: string,
 *  email: string,
 *  birthDate: string,
 *  tournamentsCount: number,
 *  location: string,
 *  acceptCgu: true,
 *  acceptNewsletter: true | false,
 * }}
 */

/**
 * Make a new {@link formBodyType}
 * based on {@link formModel}
 */

export function makeFormBodyData() {

  /** @type {formBodyType}  */

  const formBody = {};
  for (const key in formModel) {
    formBody[key] = formModel[key].value;
  }
  console.log(formBody);
}


/**
 * - Remove displayed errors from form
 * - Reset `value` and `isValid` in {@link formModel}
 * based on {@link defaultFormModel}
 * - Applies reset method on form
 */

export function resetForm() {
  dom.formData.forEach(displayValid);

  for (const key in formModel) {
    formModel[key].value = defaultFormModel[key].value;
    formModel[key].isValid = defaultFormModel[key].isValid;
  }

  dom.form.reset();
}

/** 
 * - Triggers input type event on all inputs field except submit
 * - Checks if {@link formModel} has every of his isValid keys set to `true` 
 * - if `isFormModelInvalid` is true, show confirmation node and construct 
 * {@link formBodyType}
*/
export function handleFormSubmit(event) {
  event.preventDefault();
  triggerInputEvents();

  const isFormModelInvalid = checkFormModelInvalid();
  if (isFormModelInvalid === false) {
    appendConfirmation();
    makeFormBodyData();
  }
}
