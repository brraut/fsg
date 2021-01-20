function Slider1(i, j) {
  let t1 = gsap.timeline();
  let newBannerInner = bannerInner[i];
  let newBannerContent = bannerContent[i];
  let newBannerImg = bannerImg[i];

  t1.to(
    newBannerInner,
    {
      zIndex: j,
    },
    0
  )
    .fromTo(
      newBannerContent,
      {
        x: -300,
        opacity: 0,
        scale: 0.5,
        ease: "power2.inOut",
      },
      {
        duration: 1,
        opacity: 1,
        scale: 1,
        x: 0,
      }
    )
    .fromTo(
      newBannerImg,
      {
        x: 300,
        opacity: 0,
        scale: 0.5,
        ease: "power2.inOut",
      },
      {
        duration: 1,
        x: 0,
        opacity: 1,
        scale: 1,
      }
    )
    .to(newBannerInner, {
      duration: 1,
      delay: 2,
      rotationX: 50,
      scale: i * 0.05 + 0.2,
    })
    .to(newBannerInner, {
      duration: 1,
      y: 200,
      onComplete: sliderChange1,
      onCompleteParams: [i, j, t1],
    });
}

function Slider2(i, j) {
  let t2 = gsap.timeline();

  let newBannerInner = bannerInner[i];
  t2.to(newBannerInner, {
    zIndex: i,
    y: 0,
  })

    .to(newBannerInner, {
      duration: 3,

      rotationX: 0,
      scale: 1,
    })
    .to(newBannerInner, {
      delay: 1,
      onComplete: sliderChange2,
      onCompleteParams: [i, j, t2],
    });
}
function sliderChange1(i, j, t1) {
  let k = bannerInner.length;

  i += 1;
  j -= 1;

  if (i == k) {
    t1.kill();
    Slider2(0, k);
  } else {
    Slider1(i, j);
  }
}
function sliderChange2(i, j, t2) {
  let k = bannerInner.length;

  i += 1;
  j -= 1;

  if (i == k) {
    t2.kill();
    for (let q = 0; q < k; q++) {
      bannerInner[q].style.zIndex = 0;
    }
    Slider1(0, k);
  } else {
    Slider2(i, j);
  }
}
gsap.registerPlugin(ScrollTrigger);

var t1 = gsap.timeline();
t1.fromTo(
  "#fade1",
  { autoAlpha: 0, y: 90 },
  { duration: 1.5, autoAlpha: 1, y: 0 }
);

ScrollTrigger.create({
  trigger: "#fade1",
  start: "30% bottom",
  end: "10% bottom",
  onEnter: () => {
    t1.play();
  },
  onEnterBack: () => {
    t1.reverse();
  },
});

var t2 = gsap.timeline();
t2.fromTo(
  ".fadeUp1",
  { autoAlpha: 0, y: 90 },
  { duration: 1.5, autoAlpha: 1, y: 0 }
).fromTo(
  ".back-text",
  { autoAlpha: 0, x: -200 },
  { duration: 1, autoAlpha: 1, x: 0 }
);

ScrollTrigger.create({
  trigger: ".fadeUp1",
  start: "30% bottom",
  end: "10% bottom",
  onEnter: () => {
    t2.play();
  },
  onEnterBack: () => {
    t2.reverse();
  },
});

var t3 = gsap.timeline();
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

ScrollTrigger.create({
  trigger: ".circle-section",
  start: "-25% top",
  end: "300px bottom",
  onEnter: () => {
    t3.play();
  },
  onEnterBack: () => {
    t3.reverse();
  },
});

const mainBtn = document.getElementById("mainBtn");
mainBtn.addEventListener("click", () => {
  document.getElementById("navbar").classList.toggle("pressed");
  document.querySelector(".nav-model").classList.toggle("show");
});

const peopleModal = () => {
  const modal = document.getElementById("peopleModal");
  modal.classList.toggle("show");
};
