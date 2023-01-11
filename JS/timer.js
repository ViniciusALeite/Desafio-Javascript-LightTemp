import Sounds from "./sounds.js";

export default function Timer({
  minutesDisplay, 
  secondsDisplay, 
  resetControls,
  sound
}){

  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function updateDisplay(newMinutes, seconds) {
  
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }
  
  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }
  
  function countdown(){
    timerTimeOut = setTimeout(function() {
      let seconds =  Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let end = minutes <= 0 && seconds <= 0
  
      updateDisplay(minutes, 0)
  
      if (end) {
        resetControls()
        updateDisplay()
        Sounds().timeEnd()
        return
      }
  
      if( seconds <= 0 ) {
        seconds = 60
        --minutes
      }
  
      updateDisplay(minutes, String(seconds - 1))
  
      countdown()
    }, 1000)};


    function updateMinutes(newMinutes) {
      minutes = newMinutes
    }
       
    const updateCurentTime = (current_time, minutes) => {
      current_time += minutes;
      return current_time;
    }
  
    updateCurentTime(Number(minutesDisplay.textContent), 5)    
    updateCurentTime(Number(minutesDisplay.textContent), -5)

  return {
    countdown,
    reset,
    updateCurentTime,
    updateMinutes  
}}
