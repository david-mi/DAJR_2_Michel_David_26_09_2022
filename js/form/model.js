export const defaultFormModel = {
  firstName: {
    value: null,
    isValid: false,
    errorMessage: "2 caractères minimum en commençant et finissant par une lettre"
  },
  lastName: {
    value: null,
    isValid: false,
    errorMessage: "2 caractères minimum en commençant et finissant par une lettre"
  },
  email: {
    value: null,
    isValid: false,
    errorMessage: "Email au mauvais format"
  },
  birthDate: {
    value: null,
    isValid: false,
    errorMessage: "Entre 18 et 122 ans au format jj/mm/aaaa"
  },
  tournamentsCount: {
    value: null,
    isValid: false,
    errorMessage: "Valeur comprise entre 0 et 99"
  },
  location: {
    value: null,
    isValid: false,
    errorMessage: "Localité manquante"
  },
  acceptCgu: {
    value: true,
    isValid: true,
    errorMessage: "Veuillez accepter les conditions d'utilisation"
  },
  nextEventWarning: {
    value: false,
    isValid: true,
  },
};

export const formModel = structuredClone(defaultFormModel);
