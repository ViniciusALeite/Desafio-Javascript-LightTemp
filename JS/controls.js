  import { playButton, stopButton, minutesDisplay } from "./elements.js";
  import { updateMinutes } from "./timer.js";

  function play() {
    playButton.classList.add('hide')      
    stopButton.classList.remove('hide')
  }
  
  function resetButtons() {
    playButton.classList.remove('hide')
    stopButton.classList.add('hide')
  }

  function moreMinutes() {
    return updateMinutes(Number(minutesDisplay.textContent), 5)   
  }

  function lessMinutes() {
    return updateMinutes(Number(minutesDisplay.textContent), -5)   
  }

  export {play, resetButtons, moreMinutes, lessMinutes};