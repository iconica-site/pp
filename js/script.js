/******/ (function() { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: ./src/js/window/window.js


window.__jr__ = {

};

;// CONCATENATED MODULE: ./src/js/scripts/scripts/progress.js
function progress() {
  /** @type {HTMLSpanElement} */
  const progressNumbers = document.querySelector(".hero__progress span");

  if (progressNumbers) {
    updateProgress();

    function updateProgress(number = 0) {
      setTimeout(() => {
        progressNumbers.innerText = `${number}`.padStart(2, "0");

        if (number !== 100) {
          updateProgress(number + 1);
        }
      }, Math.random() * 50);
    }
  }
}



;// CONCATENATED MODULE: ./src/js/scripts/scripts/load.js


window.addEventListener("load", () => {
  progress();
});

;// CONCATENATED MODULE: ./src/js/scripts/scripts.js


;// CONCATENATED MODULE: ./src/js/script.js




/******/ })()
;