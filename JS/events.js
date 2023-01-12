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

export default function({controls, timer, sound}) {
    playButton.addEventListener('click', function() {
        controls.play()
        timer.countdown()
        sound.buttonClick()
    })
    
    stopButton.addEventListener('click', function() {
        controls.reset()
        timer.reset()
        sound.buttonClick()
    })

    moreButton.addEventListener('click', function() {
        controls.moreMinutes()  
        sound.buttonClick()
    })    
    
    lessButton.addEventListener('click', function() {
        controls.lessMinutes()
        sound.buttonClick()
    })

    forestButton.addEventListener('click', function() {
        sound.forest()
        sound.buttonClick()
        forestButton.style.backgroundColor = "#02799d";
        rainButton.style.backgroundColor = "#E1E1E6";
        fireplaceIcon.style.backgroundColor = "#E1E1E6";
        coffeeButton.style.backgroundColor = "#E1E1E6";

        forestIcon.style.fill = "#FFFFFF";
        rainIcon.style.fill = "#323238";
        coffeeShopIcon.style.fill = "#323238";
        fireplaceIcon.style.fill = "#323238";        
    })
    
    rainButton.addEventListener('click', function() {
        sound.rain()
        sound.buttonClick()
        rainButton.style.backgroundColor = "#02799d";
        forestButton.style.backgroundColor = "#E1E1E6";
        fireplaceIcon.style.backgroundColor = "#E1E1E6";
        coffeeButton.style.backgroundColor = "#E1E1E6";

        rainIcon.style.fill = "#FFFFFF";
        forestIcon.style.fill = "#323238";
        coffeeShopIcon.style.fill = "#323238";
        fireplaceIcon.style.fill = "#323238";        
    })

    coffeeButton.addEventListener('click', function() {
        sound.cofeeShop()
        sound.buttonClick()
        coffeeButton.style.backgroundColor = "#02799d";
        forestButton.style.backgroundColor = "#E1E1E6";
        rainButton.style.backgroundColor = "#E1E1E6";
        coffeeButton.style.backgroundColor = "#E1E1E6";

        coffeeShopIcon.style.fill = "#FFFFFF";
        forestIcon.style.fill = "#323238";
        rainIcon.style.fill = "#323238";
        fireplaceIcon.style.fill = "#323238";
    })

    fireplaceButton.addEventListener('click', function() {
        sound.fireplace()
        sound.buttonClick()
        fireplaceButton.style.backgroundColor = "#02799d";
        forestButton.style.backgroundColor = "#E1E1E6";
        rainButton.style.backgroundColor = "#E1E1E6";
        coffeeButton.style.backgroundColor = "#E1E1E6";

        forestIcon.style.fill = "#FFFFFF";
        rainIcon.style.fill = "#323238";
        coffeeShopIcon.style.fill = "#323238";
        fireplaceIcon.style.fill = "#323238";
    }) 
}