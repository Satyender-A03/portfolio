import "./style.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

// const t1 = gsap.timeline();
// const btn = document.querySelector(".btn");

// t1.to(".box2", {
//   x: 300,
//   duration: 5,
//   ease: "none",
// })
//   .to(
//     ".box4",
//     {
//       x: 400,
//       duration: 5,
//       ease: "none",
//     },
//     "-=10"
//   )
//   .to(
//     ".box3",
//     {
//       x: 600,
//       duration: 5,
//       rotation: 360,
//       ease: "none",
//     },
//     "-=10"
//   );

// btn.addEventListener("click", () => {
//   // t1.pause();
//   // t1.timeScale(12);
//   console.log(t1.seek());
//   t1.seek(4);
// });

// gsap.to(
//   {},
//   {
//     duration: 5,
//     repeat: -1,
//     onUpdate: function () {
//       const angle = Date.now() / 1000;
//       console.log(100 * Math.cos(angle));

//       gsap.set(".box2", {
//         x: 100 * Math.cos(angle),
//         y: 100 * Math.sin(angle),
//       });
//     },
//   }
// );

// const checkPrefix = gsap.utils.checkPrefix("filter");

// console.log(checkPrefix);

// const clamp = gsap.utils.clamp(0, 100);
// console.log(clamp);
// console.log(clamp(200));
// console.log(clamp(-150));
// console.log(clamp(75));

// const end = gsap.utils.distribute({
//   base: "5vh",
//   amount: "50vh",
//   ease: "power3.in",
//   from: "center",
// });

// console.log(end());

// gsap.to(".bar", {
//   height: end,
// });

// window.addEventListener("click", () => {
//   const t1 = gsap.timeline();
//   t1.to(".bar", {
//     height: "100vh",
//     duration: 2,
//     ease: "bounce.in",
//   });

//   t1.to(
//     ".bar",
//     {
//       width: "100%",
//       duration: 1,
//       ease: "power4.inOut",
//     },
//     "same"
//   );

//   t1.to(
//     ".container",
//     {
//       gap: "0",
//       width: "100%",
//       duration: 1,
//       ease: "power4.inOut",
//     },
//     "same"
//   );

//   t1.to(
//     ".hero-heading",
//     {
//       color: "#000",
//       duration: 1,
//       ease: "power4.inOut",
//     },
//     "same"
//   );
// });

// const t1 = gsap.timeline();

// t1.to(".row", {
//   translateX: "-50%",
//   duration: 3,
//   stagger: 0.25,
//   repeat: -1,
//   yoyo: true,
//   ease: "back.in",
// });

// setTimeout(() => {
//   t1.pause();

//   const t2 = gsap.timeline();

//   t2.to(".container", {
//     scale: 3,
//     rotation: 90,
//     duration: 2,
//     ease: "power4.inOut",
//   });

//   t2.to(".row", {
//     translateX: "-550%",
//     duration: 1,
//     stagger: 0.1,
//     ease: "power3.inOut",
//   });
//   t2.to(
//     ".container",
//     {
//       translateY: "-500%",
//       duration: 3,
//       ease: "power4.inOut",
//     },
//     "-=1"
//   );

//   t2.to(".hero-heading", {
//     top: "40%",
//     opacity: 1,
//     ease: "power3.inOut",
//     duration: 1,
//   });
// }, 15000);

// const interpolater = gsap.utils.interpolate(0, 200);
// const interpolater = gsap.utils.interpolate("red", "green");

// const interpolater = gsap.utils.interpolate(
//   { a: 0, b: 0, color: "green" },
//   { a: 20, b: 20, color: "yellow" }
// );

// console.log(interpolater(0.5));
// console.log(interpolater(0.999));

// gsap.fromTo(
//   ".container",
//   {
//     backgroundColor: "green",
//   },
//   {
//     backgroundColor: "yellow",
//     duration: 10,
//     ease: "none",
//   }
// );

// gsap.set(".container", {
//   backgroundColor: "rgba(128,192,0,1)",
// });

// const normalizer = gsap.utils.normalize(-10, 10, 3);

// console.log(normalizer);

// const elements = gsap.utils.toArray(".row");

// console.log(elements);

window.addEventListener("mousemove", (_event) => {
  // document.querySelector(".cursor").style.left = clientX + "px";
  // document.querySelector(".cursor").style.top = clientY + "px";
  // gsap.to(".cursor", {
  //   x,
  //   y,
  //   duration: 1,
  // });
  // console.log("GSAP TWEEN CALLED");
  // console.log(gsap.utils.clamp(25, window.innerWidth - 25, x));
  // let xTo = gsap.quickTo(".cursor", "x", { duration: 0.5 });

  const { clientX: x, pageY: y } = _event;
  // console.log(_event);
  let xTo = gsap.utils.pipe(
    gsap.utils.clamp(25, window.innerWidth - 45),
    gsap.quickTo(".cursor", "x", { duration: 0.5 })
  );
  // let yTo = gsap.quickTo(".cursor", "y", { duration: 0.5 });
  let yTo = gsap.utils.pipe(gsap.quickTo(".cursor", "y", { duration: 0.5 }));
  xTo(x);
  yTo(y);
});

// console.log(gsap.utils.random(-100, 100, 2));

// gsap.to("body", {
//   scrollTrigger: {
//     trigger: ".second-section",
//     markers: true,
//     start: "top 500px",
//     end: "bottom top",
//     scrub: 1,
//     onEnterBack: (_event) => {
//       console.log(_event);
//     },
//   },
//   backgroundColor: "#fff",
//   // duration: 2,
// });

const t1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-section",
    markers: true,
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    onEnter: () => {
      console.log("Enter");
    },
  },
});

t1.to(".triangle", {
  top: 1200,
  right: 600,
  transform: "rotate(0)",
  filter: "blur(0px)",
});
