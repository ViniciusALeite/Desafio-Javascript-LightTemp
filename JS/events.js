import {
    playButton,
    stopButton,
    moreButton,
    lessButton,
    forestButton,
    rainButton,
    coffeeButton,
    fireplaceButton,
    forestIcon,
    rainIcon,
    coffeeShopIcon,
    fireplaceIcon
} from "./elements.js";
import { play, resetButtons } from "./controls.js";
import { countdown } from "./timer.js";
import { buttonClick, forest, rain, cofeeShop, fireplace } from "./sounds.js";

playButton.addEventListener('click', function() {
    play()
    countdown()
    buttonClick()
});

stopButton.addEventListener('click', function() {
    reset()
    resetButtons()
    buttonClick()
});

moreButton.addEventListener('click', function() {
    moreMinutes()  
    buttonClick()
});    

lessButton.addEventListener('click', function() {
    lessMinutes()
    buttonClick()
});

forestButton.addEventListener('click', function() {
    forest()
    buttonClick()
    forestButton.style.backgroundColor = "#02799d";
    rainButton.style.backgroundColor = "#E1E1E6";
    fireplaceIcon.style.backgroundColor = "#E1E1E6";
    coffeeButton.style.backgroundColor = "#E1E1E6";

    forestIcon.style.fill = "#FFFFFF";
    rainIcon.style.fill = "#323238";
    coffeeShopIcon.style.fill = "#323238";
    fireplaceIcon.style.fill = "#323238";        
});

rainButton.addEventListener('click', function() {
    rain()
    buttonClick()
    rainButton.style.backgroundColor = "#02799d";
    forestButton.style.backgroundColor = "#E1E1E6";
    fireplaceIcon.style.backgroundColor = "#E1E1E6";
    coffeeButton.style.backgroundColor = "#E1E1E6";

    rainIcon.style.fill = "#FFFFFF";
    forestIcon.style.fill = "#323238";
    coffeeShopIcon.style.fill = "#323238";
    fireplaceIcon.style.fill = "#323238";        
});

coffeeButton.addEventListener('click', function() {
    cofeeShop()
    buttonClick()
    coffeeButton.style.backgroundColor = "#02799d";
    forestButton.style.backgroundColor = "#E1E1E6";
    rainButton.style.backgroundColor = "#E1E1E6";
    coffeeButton.style.backgroundColor = "#E1E1E6";

    coffeeShopIcon.style.fill = "#FFFFFF";
    forestIcon.style.fill = "#323238";
    rainIcon.style.fill = "#323238";
    fireplaceIcon.style.fill = "#323238";
});

fireplaceButton.addEventListener('click', function() {
    fireplace()
    buttonClick()
    fireplaceButton.style.backgroundColor = "#02799d";
    forestButton.style.backgroundColor = "#E1E1E6";
    rainButton.style.backgroundColor = "#E1E1E6";
    coffeeButton.style.backgroundColor = "#E1E1E6";

    forestIcon.style.fill = "#FFFFFF";
    rainIcon.style.fill = "#323238";
    coffeeShopIcon.style.fill = "#323238";
    fireplaceIcon.style.fill = "#323238";
});