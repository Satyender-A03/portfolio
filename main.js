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

const randomColor = () => {
  let str = "#";
  const colorArray = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

  for (let i = 1; i <= 6; i++) {
    str += colorArray[Math.floor(Math.random() * colorArray.length)];
  }

  return str;
};

gsap.to(
  {},
  {
    duration: 5,
    repeat: -1,

    onUpdate: function () {
      const angle = Date.now() / 1000;
      const radius = 200;
      gsap.set(".box1", {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle),
        background: randomColor,
      });
    },
  }
);
