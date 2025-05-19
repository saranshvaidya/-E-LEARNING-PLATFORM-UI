// // === Initialize Locomotive Scroll ===
// const scroll = new LocomotiveScroll({
//     el: document.querySelector("[data-scroll-container]"),
//     smooth: true,
//   });

//   // Tell ScrollTrigger to use Locomotive Scroll's scroll position
// ScrollTrigger.scrollerProxy("[data-scroll-container]", {
//     scrollTop(value) {
//       return arguments.length
//         ? scroll.scrollTo(value, 0, 0)
//         : scroll.scroll.instance.scroll.y;
//     },
//     getBoundingClientRect() {
//       return {
//         top: 0,
//         left: 0,
//         width: window.innerWidth,
//         height: window.innerHeight,
//       };
//     },
//     pinType: document.querySelector("[data-scroll-container]").style.transform
//       ? "transform"
//       : "fixed",
//   });
  
//   // Refresh ScrollTrigger after LocomotiveScroll updates
//   scroll.on("scroll", ScrollTrigger.update);
//   ScrollTrigger.addEventListener("refresh", () => scroll.update());
//   ScrollTrigger.refresh();
  
// let td = gsap.timeline();
//  td.from(".dash-header h1", {
//     duration: 0.5,
//     scale:0,
//     opacity: 0,
//     ease: "power2.out",
//   });

//  td.from(".dash-header a", {
//     duration: 0.5,
//     scale:0,
//     opacity: 0,
//     ease: "power2.out",
//   });
 
//  td.from(".progress-details p", {
//     duration: 0.5,
//     scale:0,
//     opacity: 0,
//     ease: "power2.out",
//     stagger: 0.2,
//   });

//   gsap.from(".recent-activities", {
//     scrollTrigger: {
//       trigger: ".recent-activities h2",
//       start: "top 50%",
//       end: "top 50%",
//       scrub: true,
//     },
//     scale:0,
//     opacity: 0,
//     ease: "power2.out",
//     stagger: 0.2,
//   })
gsap.registerPlugin(ScrollTrigger);

const scrollContainer = document.querySelector("[data-scroll-container]");

const scroll = new LocomotiveScroll({
  el: scrollContainer,
  smooth: true
});

// Sync Locomotive Scroll with ScrollTrigger
ScrollTrigger.scrollerProxy(scrollContainer, {
  scrollTop(value) {
    return arguments.length
      ? scroll.scrollTo(value, 0, 0)
      : scroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: scrollContainer.style.transform ? "transform" : "fixed"
});

// Update on scroll
scroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.addEventListener("refresh", () => scroll.update());
ScrollTrigger.refresh();

// === Timeline animations ===
let td = gsap.timeline();

td.from(".dash-header h1", {
  duration: 0.5,
  scale: 0,
  opacity: 0,
  ease: "power2.out"
}).from(".dash-header a", {
  duration: 0.5,
  scale: 0,
  opacity: 0,
  ease: "power2.out"
}).from(".progress-details p", {
  duration: 0.5,
  scale: 0,
  opacity: 0,
  ease: "power2.out",
  stagger: 0.2
});

// === Scroll-triggered animation ===
gsap.from(".recent-activities", {
  scrollTrigger: {
    trigger: ".recent-activities h2",
    scroller: "[data-scroll-container]",
    start: "top 80%",
    end: "top 50%",
    scrub: true
  },
  duration: 0.5,
  scale: 0,
  opacity: 0,
  ease: "power2.out"
});

gsap.from(".recent-activities li", {
    scrollTrigger: {
        trigger: ".recent-activities h2",
        scroller: "[data-scroll-container]",
        start: "top 80%",
        end: "top 50%",
        scrub: true
    },
    duration: 0.5,
    y: 100,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.2
})

gsap.from(".user-stats", {
    scrollTrigger: {
      trigger: ".user-stats h2",
      scroller: "[data-scroll-container]",
      start: "top 80%",
      end: "top 50%",
      scrub: true
    },
    duration: 0.5,
    scale: 0,
    opacity: 0,
    ease: "power2.out"
  });

  gsap.from(".stat h3", {
    scrollTrigger: {
        trigger: ".user-stats h2",
        scroller: "[data-scroll-container]",
        start: "top 80%",
        end: "top 50%",
        scrub: true
    },
    duration: 0.5,
    y: 100,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.2
} ,[])
  gsap.from(".stat p", {
    scrollTrigger: {
        trigger: ".user-stats h2",
        scroller: "[data-scroll-container]",
        start: "top 80%",
        end: "top 50%",
        scrub: true
    },
    duration: 0.5,
    y: 100,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.2
} ,[])

// gsap.from(".notifications", {
//     scrollTrigger: {
//         trigger: ".notifications h2",
//         scroller: "[data-scroll-container]",
//         start: "top 100%",
//         end: "top 60%",
//         scrub: true
//     },
//     scale: 0,
//     opacity: 0,
//     ease: "power2.out",
//     stagger: 0.2
// });
// gsap.from(".notification-item", {
//     scrollTrigger: {
//         trigger: ".notifications h2",
//         scroller: "[data-scroll-container]",
//         start: "top 80%",
//         end: "top 60%",
//         scrub: true
//     },
//     y: 100,
//     opacity: 0,
//     ease: "power2.out",
//     stagger: 0.2
// });
gsap.from(".notifications", {
    scrollTrigger: {
        trigger: ".notifications",
        scroller: "[data-scroll-container]",
        start: "top 95%",
        end: "top 85%",
        scrub: true
    },
    duration: 1,
    scale: 0,
    opacity: 0,
    ease: "power2.out"
});

gsap.from(".notification-item", {
    scrollTrigger: {
        trigger: ".notifications",
        scroller: "[data-scroll-container]",
        start: "top 95%",
        end: "top 80%",
        scrub: true
    },
    y: 50,
    duration: 0.5,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.2
});
