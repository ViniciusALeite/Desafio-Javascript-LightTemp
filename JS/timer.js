import { timeEnd } from "./sounds.js";
import { minutesDisplay, secondsDisplay  } from "./elements.js";

let timerTimeOut
let minutes = Number(minutesDisplay.textContent)

function updateDisplay(newMinutes, seconds) {

  newMinutes = newMinutes === undefined ? minutes : newMinutes
  seconds = seconds === undefined ? 0 : seconds
  minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
};
  
function reset() {
  updateDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
};
  
function countdown(){
  timerTimeOut = setTimeout(function() {
    let seconds =  Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    let end = minutes <= 0 && seconds <= 0

    updateDisplay(minutes, 0)

    if(end) {
      timeEnd()
      updateDisplay()
      return
    }

    if(seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)};


  function updateMinutes(newMinutes) {
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + newMinutes).padStart(2, '0');
    minutes = minutesDisplay.textContent
  };

  function addMinutes(newMinutes) {
    if(Number(minutesDisplay.textContent) == 60) return;

    updateMinutes(5)
  }

  function lessMinutes(newMinutes) {
    if(Number(minutesDisplay.textContent) == 0) return;

    updateMinutes(-5)
  }

export { updateDisplay, reset, countdown, updateMinutes, addMinutes, lessMinutes };