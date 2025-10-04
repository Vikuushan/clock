let clockElement = document.querySelector("#analogClock");
let offset = -90;

let reducedMotion = false;

function timer() {
  let date = new Date();

  let milliseconds = date.getMilliseconds();
  let seconds = date.getSeconds();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  seconds += milliseconds / 1000;
  minutes += seconds / 60;
  hours += minutes / 60;

  if (hours > 12) {
    hours -= 12;
  }

  clockElement.style.setProperty("--seconds", offset + 6 * seconds + "deg");
  clockElement.style.setProperty("--hours", offset + 30 * hours + "deg");
  clockElement.style.setProperty("--minutes", offset + 6 * minutes + "deg");

  requestAnimationFrame(timer);
}
timer();

let reduceMotionQuery = matchMedia("(prefers-reduced-motion)");

function setAccessibilityState() {
  if (reduceMotionQuery.matches) {
    reducedMotion = true;
  } else {
    reducedMotion = false;
  }
}
setAccessibilityState();

reduceMotionQuery.addEventListener("change", setAccessibilityState);
