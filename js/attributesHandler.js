/** Toggle responsive className on click to navToogleButton */

export function handleTopNavStyle() {
  const topNav = dom.getNode("#myTopnav");
  topNav.classList.toggle("responsive");
}