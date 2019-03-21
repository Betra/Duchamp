import { throttle } from "./throttle";

export const shiftMenu = throttle(() => {
  let posY = window.scrollY;
  let hideY = document.getElementById("menu").offsetHeight + 100;

  if (posY >= hideY) console.log("It's TIIIIME! ");
  // Shift cutups full
  else console.log("NOOOOOO"); //Shift back
}, 1000);
