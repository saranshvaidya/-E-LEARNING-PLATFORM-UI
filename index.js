// === Initialize Locomotive Scroll ===
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

let t1 = gsap.timeline();

t1.from(".navbar", {
  duration: 1,
  y: -100,
  opacity: 0,
  ease: "power2.out",
});

t1.from(".logo", {
  duration: 0.5,
  y: -100,
  opacity: 0,
  ease: "power2.out",
});

t1.from(".nav-links a", {
  duration: 1,
  y: -100,
  opacity: 0,
  stagger: 0.2,
  ease: "power2.out",
});

t1.from(".hero h1", {
  duration: 0.5,
  x: -100,
  opacity: 0,
  ease: "power2.out",
});

t1.from(".hero p", {
  duration: 0.5,
  x: 100,
  opacity: 0,
  ease: "power2.out",
});

t1.to(".hero .btn", {
  duration: 0.5,
  ease: "power2.out",
  opacity: 1,
  scale: 1,
});

t1.to(".feature", {
  duration: 0.5,
  scale: 1,
  opacity: 1,
  stagger: 0.2,
  ease: "power2.out",
});
