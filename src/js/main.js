"use strict";

export default function scrollTop(btnsToTop) {
  btnsToTop.forEach((btnToTop) => {
    btnToTop.addEventListener("click", (e) => {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
}

// export function scrollTop(btnsToTop) {
//   btnsToTop.forEach((btnToTop) => {
//     btnToTop.addEventListener("click", (e) => {
//       e.preventDefault();

//       console.log(btnsToTop);
//       console.log("clicked");

//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     });
//   });
// }

// const $ = require("jquery");

// const speed = 500;
// const href = $('a[href^="#"]').attr("href");
// const target = $(href == "#" || href == "" ? "html" : href);
// const position = target.offset().top;

// $('a[href^="#"]').on("click", function() {
//   $("html, body").animate({ scrollTop: position }, speed, "swing");
//   return false;
// });
