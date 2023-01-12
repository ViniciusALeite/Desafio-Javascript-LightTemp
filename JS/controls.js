export default function Controls({playButton, stopButton, minutesDisplay}) {
  
  function play() {
    playButton.classList.add('hide')      
    stopButton.classList.remove('hide')
  }
  
  function reset() {
    playButton.classList.remove('hide')
    stopButton.classList.add('hide')
  }

  function moreMinutes() {
    return timer.updateMinutes(Number(minutesDisplay.textContent), 5)   
  }

  function lessMinutes() {
    return timer.updateMinutes(Number(minutesDisplay.textContent), -5)   
  }

  return {
    play,
    reset,
    moreMinutes,
    lessMinutes
  }
}
