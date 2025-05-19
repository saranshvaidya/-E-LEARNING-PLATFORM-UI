// === Initialize Locomotive Scroll ===
const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });
  
  let t2 = gsap.timeline();
  
  t2.from(".navbar", {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "power2.out",
  });
  
  t2.from(".logo", {
    duration: 0.5,
    y: -100,
    opacity: 0,
    ease: "power2.out",
  });
  
  t2.from(".nav-links a", {
    duration: 1,
    y: -100,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",
  });
  
 t2.from(".courses-list h2", {
    duration: 0.5,
    x: -100,
    opacity: 0,
    ease: "power2.out",
  });
  
  t2.to(".course-card", {
    duration: 0.5,
    scale: 1,
    opacity: 1,
    stagger: 0.2,
    ease: "power2.out",
  })

  t2.from(".courses-list p", {
    duration: 0.5,
    x: 100,
    opacity: 0,
    ease: "power2.out",
  });
  
  t2.to(".courses-list .btn", {
    duration: 0.5,
    ease: "power2.out",
    opacity: 1,
    scale: 1,
  });
  
  t2.to(".course-item", {
    duration: 0.5,
    scale: 1,
    opacity: 1,
    stagger: 0.2,
    ease: "power2.out",
  });
