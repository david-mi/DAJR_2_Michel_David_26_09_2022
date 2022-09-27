import dom from "../domSelectors.js";
import { formModel, defaultFormModel } from "./formModel.js";

function triggerInputEvents() {
  dom.formInputs.forEach(input => input.dispatchEvent(new Event("input")));
}

export const hydrateFormModel = (propertie, value, isValid) => {
  formModel[propertie] = {
    ...formModel[propertie],
    value,
    isValid
  };
};

export function checkFormModelInvalid() {
  return (
    Object
      .values(formModel)
      .some(({ isValid }) => isValid === false)
  );
}

export function handleFormBody() {
  const formBody = {};
  for (const key in formModel) {
    formBody[key] = formModel[key].value;
  }
  console.log("Merci ! Votre réservation a été reçue.");
  console.log(formBody);
}

export function resetForm() {
  dom.formData.forEach(container => {
    container.removeAttribute("data-error");
    container.removeAttribute("data-error-visible");
  });

  for (const key in formModel) {
    formModel[key].value = defaultFormModel[key].value;
    formModel[key].isValid = defaultFormModel[key].isValid;
  }

  dom.form.reset();
}

/** handling form submission */
export function handleFormSubmit(event) {
  event.preventDefault();
  triggerInputEvents();

  const isFormModelInvalid = checkFormModelInvalid();
  if (isFormModelInvalid === false) {
    handleFormBody();
  }
}
