import Controls from "./controls.js";
import Timer from "./timer.js";
import Events from "./events.js";
import Sound from "./sounds.js";
import {
    playButton,
    stopButton,
    moreButton,
    lessButton,
    minutesDisplay,
    secondsDisplay,
    minutesDisplay,
    secondsDisplay,
    // forestButton,
    // rainButton,
    // coffeeButton,
    // fireplaceButton
} from "./elements.js";

const controls = Controls({
  playButton,
  stopButton,
  moreButton,
  lessButton
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
  updateCurrentTime: controls.updateCurrentTime,
  updateMinutes: controls.updateMinutes
});

const sound = Sound()

Events({controls, timer, sound})