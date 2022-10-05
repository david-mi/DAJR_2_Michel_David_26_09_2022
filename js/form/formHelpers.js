/**
 * Check if the passed date is younger than 18 years old
 * 
 * @param {string} birthDate date with YY/MM/DDDD format
 * @returns {boolean}
 */

export function isUserYoungerThanEighteen(birthDate) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const userBirthDate = new Date(birthDate);
  userBirthDate.setHours(0, 0, 0, 0);
  currentDate.setHours(0, 0, 0, 0);

  const nowMinusEighteenYears = currentDate.setFullYear(currentYear - 18);

  return userBirthDate < nowMinusEighteenYears;
}