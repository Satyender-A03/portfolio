import "./style.css";
import gsap from "gsap";

// gsap.to(".container", {
//   x: 200,
//   y: 300,
//   duration: 4,
//   ease: "power4.inOut",
// });

// gsap.to("element name", {
//     properties to animate
// })

// gsap.to(".container", {
//   top: "50%",
//   width: "100%",
//   height: "100vh",
//   duration: 2,
//   ease: "power3.inOut",
// });

gsap.from(".container", {
  width: "100%",
  height: "100vh",
  top: "50%",
  duration: 3,
  ease: "power3.inOut",
});
