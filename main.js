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

// window.addEventListener("mousemove", (_event) => {
//   // document.querySelector(".cursor").style.left = clientX + "px";
//   // document.querySelector(".cursor").style.top = clientY + "px";
//   // gsap.to(".cursor", {
//   //   x,
//   //   y,
//   //   duration: 1,
//   // });
//   // console.log("GSAP TWEEN CALLED");
//   // console.log(gsap.utils.clamp(25, window.innerWidth - 25, x));
//   // let xTo = gsap.quickTo(".cursor", "x", { duration: 0.5 });

//   const { clientX: x, pageY: y } = _event;
//   // console.log(_event);
//   let xTo = gsap.utils.pipe(
//     gsap.utils.clamp(25, window.innerWidth - 45),
//     gsap.quickTo(".cursor", "x", { duration: 0.5 })
//   );
//   // let yTo = gsap.quickTo(".cursor", "y", { duration: 0.5 });
//   let yTo = gsap.utils.pipe(gsap.quickTo(".cursor", "y", { duration: 0.5 }));
//   xTo(x);
//   yTo(y);
// });

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

// const t1 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".second-section",
//     markers: true,
//     start: "top top",
//     end: "bottom bottom",
//     scrub: 1,
//     onEnter: () => {
//       console.log("Enter");
//     },
//   },
// });

// t1.to(".triangle", {
//   top: 1200,
//   right: 600,
//   transform: "rotate(0)",
//   filter: "blur(0px)",
// });

const text = "VARIABLE FONT";
const heading = document.querySelector(".heading");

// text.split("").forEach((letter) => {
//   console.log(letter);
//   const spanElement = document.createElement("span");
//   spanElement.classList.add("letter");

//   spanElement.innerText = letter;
//   heading.append(spanElement);
// });

// let maxDist;
// const mouse = {
//   x: 0,
//   y: 0,
// };

// const cursor = {
//   x: window.innerWidth,
//   y: window.innerHeight,
// };

// Math.dist = function (a, b) {
//   let dx = b.x - a.x;
//   let dy = b.y - a.y;
//   return Math.sqrt(Math.pow(dx, 2), Math.pow(dy, 2));
// };

// window.addEventListener("mousemove", (_event) => {
//   cursor.x = _event.clientX;
//   cursor.y = _event.clientY;
// });

// const Char = function (container, char) {
//   const spanElement = document.createElement("span");
//   spanElement.innerText = char;

//   container.appendChild(spanElement);

//   this.getDist = function () {
//     this.pos = spanElement.getBoundingClientRect();

//     return Math.dist(mouse, {
//       x: this.pos.x,
//       y: 0,
//     });
//   };

//   this.getAttr = function (dist, min, max) {
//     const weight = max - Math.abs((max * dist) / maxDist);

//     return Math.max(min, weight + min);
//   };

//   this.update = function (args) {
//     let dist = this.getDist();

//     this.weight = args.weight ? ~~this.getAttr(dist, 100, 800) : 400;

//     this.draw();
//   };

//   this.draw = function () {
//     spanElement.style = `font-variation-settings: 'wght' ${this.weight}`;
//   };
// };

// const VFont = function () {
//   let title,
//     str,
//     chars = [];

//   this.init = function () {
//     title = document.querySelector(".heading");

//     str = title.innerText;

//     title.innerHTML = "";

//     for (let i = 0; i < str.length; i++) {
//       let _char = new Char(title, str[i]);
//       chars.push(_char);
//     }
//     window.addEventListener("resize", this.setSize.bind(this));
//   };

//   this.setSize = function () {
//     let fontSize = window.innerWidth / (str.length / 2);

//     title.style = `font-size: ${fontSize}px`;
//   };

//   this.animate = function () {
//     mouse.x += (cursor.x - mouse.x) / 20;
//     mouse.y += (cursor.y - mouse.y) / 20;

//     requestAnimationFrame(this.animate.bind(this));
//     this.render();
//   };

//   this.render = function () {
//     maxDist = title.getBoundingClientRect().width / 2;

//     for (let i = 0; i < chars.length; i++) {
//       chars[i].update({
//         weight: true,
//       });
//     }
//   };

//   this.init();
//   this.animate();
//   return this;
// };

// const variableFont = new VFont();

let maxDist;
const cursor = {
  x: window.innerWidth,
  y: window.innerHeight,
};
const mouse = {
  x: 0,
  y: 0,
};

window.addEventListener(
  "mousemove",
  (_event) => {
    cursor.x = _event.clientX;
    cursor.y = _event.clientY;
  },
  { passive: true }
);

Math.dist = function (a, b) {
  const dx = b.x - a.x;

  return Math.sqrt(dx * dx);
};

class Char {
  constructor(container, char) {
    this.spanElement = document.createElement("span");
    this.spanElement.innerText = char;

    container.append(this.spanElement);
  }

  getDist() {
    this.position = this.spanElement.getBoundingClientRect();

    return Math.dist(mouse, {
      x: this.position.x,
    });
  }

  getWeight(dist, min, max) {
    const weight = max - Math.abs((max * dist) / maxDist);

    return Math.max(min, weight + min);
  }

  update() {
    let dist = this.getDist();

    this.weight = ~~this.getWeight(dist, 100, 900);

    this.draw();
  }

  draw() {
    this.spanElement.style.fontVariationSettings = `'wght' ${this.weight}`;
  }
}

class VFont {
  constructor(container) {
    this.containerClass = container;
    this.chars = [];
    this.init();
    this.animate();
  }

  init() {
    this.container = document.querySelector(this.containerClass);
    this.str = this.container.innerText;
    this.container.innerHTML = "";

    for (let i = 0; i < this.str.length; i++) {
      this.char = new Char(this.container, this.str[i]);

      this.chars.push(this.char);
      this.setSize();
      window.addEventListener("resize", this.setSize.bind(this));
    }
  }

  setSize() {
    let fontSize = window.innerWidth / (this.str.length / 2);

    this.container.style = `font-size: ${fontSize}px`;
  }

  animate() {
    mouse.x += (cursor.x - mouse.x) / 20;
    mouse.y += (cursor.y - mouse.y) / 20;

    requestAnimationFrame(this.animate.bind(this));
    this.render();
  }

  render() {
    maxDist = this.container.getBoundingClientRect().width / 2;

    for (let i = 0; i < this.chars.length; i++) {
      this.chars[i].update();
    }
  }
}

const vf = new VFont(".heading");

console.log(characters);
