  import { lessMinutes, reset, addMinutes } from "./timer.js";
  import { countdown } from "./timer.js";
  import { buttonClick } from "./sounds.js";

  let status = false;
  
  function play() {
    if(status) return;  

    countdown()
    buttonClick()
    status = true;
  };

  function resetButtons() {
    reset()
    buttonClick()
    status = false;
  };

  function moreFiveMinutes() {
    buttonClick()
    addMinutes()
  };

  function lessFiveMinutes() {
    buttonClick()
    lessMinutes()
  };

export {play, resetButtons, moreFiveMinutes, lessFiveMinutes};  