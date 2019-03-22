import { throttle } from "./throttle";

export const goUpAnimation = throttle(() => {
  let showY = window.scrollY;
  const upper = document.getElementById("upper");

  if (showY > 130) upper.style.transform = "translateY(0vw)";
  else upper.style.transform = "translateY(30vw)";
}, 1000);
