// === Initialize Locomotive Scroll ===
const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });
  
  let t4 = gsap.timeline();
  
  t4.from(".navbar", {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "power2.out",
  });
  
  t4.from(".logo", {
    duration: 0.5,
    y: -100,
    opacity: 0,
    ease: "power2.out",
  });
  
  t4.from(".nav-links a", {
    duration: 1,
    y: -100,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",
  });
  
  t4.from("form", {
    duration: 1,
    scale: 100,
    opacity: 0,
    ease: "power2.out",
  })

  t4.from("form h2", {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "power2.out",
  })

  t4.from("form input", {
    duration: 1,
    scale:0,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",
  })

  t4.from("form button", {
    duration: 1,
    scale:0,
    opacity: 0,
    ease: "power2.out",
  })
