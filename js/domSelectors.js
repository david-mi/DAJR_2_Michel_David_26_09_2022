/**
 * contains all needed ElementNodes
 * @property {method} getNode returns the lastest
 * value of target ElementNode
 */

class DomSelectors {
  modalbg = document.querySelector(".bground");
  modalBody = document.querySelector(".modal-body");
  modalBtn = document.querySelectorAll(".modal-btn");
  form = document.querySelector("form[name=reserve]");
  formData = document.querySelectorAll(".formData");
  formInputs = this.form.querySelectorAll("input[name]");
  navToggleButton = document.querySelector(".icon");
  closeModalButton = document.querySelector(".close");
  checkboxIcons = document.querySelectorAll(".checkbox-icon");


  /**
   * returns the lastest version of targeted ElementNode
   * 
   * @param {string} selector any CSS selector
   * @returns {HTMLElement}
   */

  getNode(selector) {
    return document.querySelector(selector);
  }

  /**
   * returns the lastest version of targeted NodeList
   * 
   * @param {string} selector any CSS selector
   * @returns {NodeList}
   */

  getNodelist(selector) {
    return document.querySelectorAll(selector);
  }
}

export default new DomSelectors();