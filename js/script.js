/******/ (function() { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: ./src/js/window/window.js


window.__jr__ = {

};

;// CONCATENATED MODULE: ./src/js/scripts/scripts/progress.js
const { body } = document;

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
        } else {
          body.classList.add("loaded");
        }
      }, Math.random() * 50);
    }
  }
}



;// CONCATENATED MODULE: ./src/js/scripts/scripts/load.js


window.addEventListener("load", () => {
  progress();
});

;// CONCATENATED MODULE: ./src/js/scripts/scripts/move.js
const { body: move_body } = document;
const { style } = move_body;

let bodyInlineCenter, bodyBlockCenter, durationTimeout;

observe();

move_body.addEventListener("mouseenter", () => {
  setDuration(100);
});

move_body.addEventListener("mouseleave", () => {
  removePosition();
});

function observe() {
  const bodyResizeObserver = new ResizeObserver(entries => {
    entries.forEach(entry => {
      const { borderBoxSize } = entry;
      const { inlineSize, blockSize } = borderBoxSize[0];

      [bodyInlineCenter, bodyBlockCenter] = [inlineSize / 2, blockSize / 2];
    });
  });

  bodyResizeObserver.observe(move_body);

  move_body.addEventListener("mousemove", mousemove);
}

function mousemove(event) {
  const { clientX, clientY } = event;

  const x = (clientX - bodyInlineCenter) / bodyInlineCenter * 100;
  const y = (bodyBlockCenter - clientY) / bodyBlockCenter * 100;

  style.setProperty("--x", x);
  style.setProperty("--y", y);
}

function removePosition() {
  setDuration();

  style.removeProperty("--rotate-x");
  style.removeProperty("--rotate-y");
}

function setDuration(duration = 1000) {
  style.setProperty("--duration", `${duration}ms`);

  if (durationTimeout) clearTimeout(durationTimeout);

  durationTimeout = setTimeout(removeDuration, duration);
}

function removeDuration() {
  style.removeProperty("--duration");
}

;// CONCATENATED MODULE: ./src/js/scripts/scripts.js



;// CONCATENATED MODULE: ./src/js/script.js




/******/ })()
;