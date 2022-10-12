/**
 * Check if the passed date is younger than 18 years old or 
 * older than 122 years old
 * 
 * @param {string} birthDate date with YY/MM/DDDD format
 * @returns {boolean}
 */

export function isUserTooYoungOrTooOld(birthDate) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const userBirthDate = new Date(birthDate);
  userBirthDate.setHours(0, 0, 0, 0);
  currentDate.setHours(0, 0, 0, 0);

  const nowMinusMinAge = currentDate.setFullYear(currentYear - 18);
  const nowMinusMaxAge = currentDate.setFullYear(currentYear - 122);

  return userBirthDate > nowMinusMinAge || userBirthDate < nowMinusMaxAge;
}