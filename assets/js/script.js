// document.addEventListener("DOMContentLoaded", function () {
// gsap.registerPlugin(ScrollTrigger);

let t1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#fade1",
    start: "top bottom-=100px",
    end: "+=900",
    scrub: 1,
  },
});

t1.from("#fade1", { autoAlpha: 0, y: 100 }).to("#fade1", {
  duration: 1.5,
  autoAlpha: 1,
  y: 0,
});

var t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".fadeUp1",
    start: "top bottom",
    end: "+=600",
    scrub: 1,
  },
});
t2.fromTo(
  ".fadeUp1",
  { autoAlpha: 0, y: 90 },
  { duration: 1.5, autoAlpha: 1, y: 0 }
).fromTo(
  ".back-text",
  { autoAlpha: 0, x: -200 },
  { duration: 1, autoAlpha: 1, x: 0 }
);

let t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".circle-section",
    start: "top bottom-=300px",
    end: "+=300",
    scrub: 1,
  },
});
t3.to(".circle-item1", { duration: 1.5, x: -90, y: -90 }) //notice that there's no semicolon!
  .to(".circle-item2", { duration: 1.5, x: 90, y: -90 }, "-=1.5")
  .to(".circle-item3", { duration: 1.5, x: -90, y: 90 }, "-=1.5")
  .to(".circle-item4", { duration: 1.5, x: 90, y: 90 }, "-=1.5")
  .to(".medium-circle-left", { duration: 1.5, x: -350 }, "-=1.5")
  .to(".medium-circle-right", { duration: 1.5, x: 350 }, "-=1.5")
  .to(".small-circle-left", { duration: 1.5, x: -450 }, "-=1.5")
  .to(".small-circle-right", { duration: 1.5, x: 450 }, "-=1.5")
  .fromTo(
    ".circle-item .text",
    { autoAlpha: 0, y: 20 },
    { duration: 0.8, autoAlpha: 1, y: 0 }
  );

const mainBtn = document.getElementById("mainBtn");
mainBtn.addEventListener("click", () => {
  document.getElementById("navbar").classList.toggle("pressed");
  document.querySelector(".nav-model").classList.toggle("show");
});

const peopleModal = () => {
  const modal = document.getElementById("peopleModal");
  modal.classList.toggle("show");
};

const myscroll = () => {
  let height = window.innerHeight;
  window.scrollTo(500, height);
};

const myPlay = () => {
  let iframe = document.querySelector(".playModal");
  iframe.classList.add("show");
};
const myStop = () => {
  let iframe = document.querySelector(".playModal");
  iframe.classList.remove("show");
};
