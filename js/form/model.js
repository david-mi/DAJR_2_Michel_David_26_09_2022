export const defaultFormModel = {
  firstName: {
    value: null,
    isValid: false,
    errorMessage: "le prénom doit contenir au minimum 2 caractères"
  },
  lastName: {
    value: null,
    isValid: false,
    errorMessage: "le nom doit contenir au minimum 2 caractères"
  },
  email: {
    value: null,
    isValid: false,
    errorMessage: "Email au mauvais format"
  },
  birthDate: {
    value: null,
    isValid: false,
    errorMessage: "Veuillez mettre une date de naissance au format jj/mm/aaaa"
  },
  tournamentsCount: {
    value: null,
    isValid: false,
    errorMessage: "Veuillez préciser une valeur comprise entre 0 et 99"
  },
  location: {
    value: null,
    isValid: false,
    errorMessage: "Veuillez mettre une localité"
  },
  acceptCgu: {
    value: true,
    isValid: true,
    errorMessage: "Veuillez accepter les conditions d'utilisation"
  },
  acceptNewsletter: {
    value: false,
    isValid: true,
  },
};

export const formModel = structuredClone(defaultFormModel);
