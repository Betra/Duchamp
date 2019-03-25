import { throttle } from "./throttle";

export const shiftBigMenu = throttle(() => {
  const menu = document.getElementById("menu");
  let posY = window.scrollY;
  let hideY = menu.offsetHeight + 100;

  if (posY >= hideY) {
    //menu.style.transform = "translateX(-100vw)";
    menu.style.opacity = "0";
    menu.style.width = "0%";
  } else {
    //menu.style.transform = "translateX(0vw)";
    menu.style.opacity = "1";

    menu.style.width = "40%";
  }
}, 1000);

export const shiftMediumMenu = throttle(() => {
  const menu = document.getElementById("menu");
  const description = document.getElementById("description");
  const heading = document.getElementById("heading");

  let posY = window.scrollY;
  let hideY = menu.offsetHeight + 150;
  if (posY >= hideY) {
    //menu.style.transform = "translateX(-100vw)";
    menu.style.opacity = "0";
    description.style.opacity = "0";
    heading.style.opacity = "0";

    menu.style.width = "0%";
  } else {
    //menu.style.transform = "translateX(0vw)";
    menu.style.opacity = "1";
    description.style.opacity = "1";
    heading.style.opacity = "1";

    menu.style.width = "40%";
  }
}, 500);
