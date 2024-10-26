import "./style.css";
import gsap from "gsap";

gsap.to(".container", {
  x: 200,
  duration: 4,
  ease: "power4.inOut",
});
