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
