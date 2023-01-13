  import { playButton, stopButton, minutesDisplay } from "./elements";
  import { updateMinutes } from "./timer";

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

  export {play, resetControls, moreMinutes, lessMinutes};