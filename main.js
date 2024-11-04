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

// gsap.from(".container", {
//   width: "100%",
//   height: "100vh",
//   top: "50%",
//   duration: 3,
//   ease: "power3.inOut",
//   display: "none",
// });

// gsap.fromTo(
//   ".container",
//   {
//     width: 20,
//     height: 20,
//     background: "green",
//     display: "block",
//   },
//   {
//     width: "100%",
//     height: "100vh",
//     duration: 3,
//     top: "50%",
//     ease: "power3.inOut",
//     display: "block",
//   }
// );

// const randomColor = () => {
//   let str = "#";
//   const colorArray = [
//     "0",
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//   ];

//   for (let i = 1; i <= 6; i++) {
//     str += colorArray[Math.floor(Math.random() * colorArray.length)];
//   }

//   return str;
// };

// gsap.to(
//   {},
//   {
//     duration: 5,
//     repeat: -1,

//     onUpdate: function () {
//       const angle = Date.now() / 1000;
//       const radius = 200;
//       console.log(radius * Math.sin(angle));
//       gsap.set(".box1", {
//         x: radius * Math.sin(angle),
//         y: radius * Math.cos(angle),
//         background: randomColor,
//       });
//     },
//   }
// );

// gsap.to(".box2", {
//   x: 200,
//   duration: 5,
// });

// gsap.to(".box3", {
//   x: 300,
//   duration: 5,
//   delay: 5,
// });

const t1 = gsap.timeline();
const btn = document.querySelector(".btn");

t1.to(
  ".box2",
  {
    x: 100,
    duration: 15,
    ease: "none",
  },
  "same"
).to(
  ".box3",
  {
    x: 200,
    duration: 15,
    rotation: 360,
    ease: "none",
  },
  "same"
);

btn.addEventListener("click", () => {
  // t1.pause();
  // t1.timeScale(12);
  console.log(t1.progress());
  t1.progress(0.7);
});
