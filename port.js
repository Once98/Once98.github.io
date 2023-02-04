// Select elements
const title = document.querySelector(".title");
const subtitle = document.querySelector(".subtitle");

// Create timeline
const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

// Add animations to timeline
tl.fromTo(title, { y: "-100%", opacity: 0 }, { y: "0%", opacity: 1, duration: 1.5 })
  .fromTo(subtitle, { y: "100%", opacity: 0 }, { y: "0%", opacity: 1, duration: 1.5 }, "-=1");
