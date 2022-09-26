// Selecting DOM elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const formDataInputs = document.querySelectorAll(".formData input");
const form = document.querySelector("form[name=reserve]");
const navToggleButton = document.querySelector(".icon");
const closeModalButton = document.querySelector(".close");

// toggle nav event
navToggleButton.addEventListener("click", handleTopNavStyle);

/** Handle topNav style */
function handleTopNavStyle() {
  const topNav = document.getElementById("myTopnav");
  if (topNav.className === "topnav") {
    topNav.className += " responsive";
  } else {
    topNav.className = "topnav";
  }
}

// Adding click listener on each modal button
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

/** Displays form modal on click */
function launchModal() {
  modalbg.classList.remove("select-hide");
}

closeModalButton.addEventListener("click", handlecloseModalButton);

function handlecloseModalButton() {
  modalbg.classList.add("select-hide");
}



