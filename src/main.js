import "./style.css";

function fullscreen() {
  const elem = document.documentElement;

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

const slide2Btn = document.getElementById("slide2-btn");
if (slide2Btn) {
  slide2Btn.addEventListener("click", () => {
    fullscreen();
    colorChange();
    secondSlide();
    slide2Btn.classList.add("duration-1000");
    slide2Btn.classList.remove("bland");
  });
}

function colorChange() {
  document.body.classList.remove("bg-slate-100", "bland");
  document.body.classList.add("bg-val", "duration-1000");
}

function secondSlide() {
  const intro = document.getElementById("intro");
  intro.classList.add("hidden");

  const second = document.getElementById("second");
  second.classList.remove("hidden");
}

const slide3Btn = document.getElementById("slide3-btn");
if (slide3Btn) {
  slide3Btn.addEventListener("click", thirdSlide);
}

function thirdSlide() {
  const second = document.getElementById("second");
  second.classList.add("hidden");

  const third = document.getElementById("third");
  third.classList.remove("hidden");
}

const slide4Btn = document.getElementById("slide4-btn");
if (slide4Btn) {
  slide4Btn.addEventListener("click", fourthSlide);
}

function fourthSlide() {
  const third = document.getElementById("third");
  third.classList.add("hidden");

  const forth = document.getElementById("forth");
  forth.classList.remove("hidden");
}
