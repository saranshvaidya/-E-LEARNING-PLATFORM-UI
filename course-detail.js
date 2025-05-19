// === Initialize Locomotive Scroll ===
const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });
  
  let t5 = gsap.timeline();
  
  t5.from(".navbar", {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "power2.out",
  });
  
  t5.from(".logo", {
    duration: 0.5,
    y: -100,
    opacity: 0,
    ease: "power2.out",
  });
  
  t5.from(".nav-links a", {
    duration: 1,
    y: -100,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",
  });
  
t5.from(".course-detail", {
    duration: 1,
    scale: 100,
    opacity: 0,
    ease: "power2.out",
  })
  
  t5.from(".course-detail h2", {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "power2.out",
  })
  
  t5.from(".course-detail p", {
    duration: 1,
    scale:0,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",
  })
  
  t5.from(".course-detail button", {
    duration: 1,
    scale:0,
    opacity: 0,
    ease: "power2.out",
  })
