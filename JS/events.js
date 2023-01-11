import {
    playButton,
    stopButton,
    moreButton,
    lessButton,
    forestButton,
    rainButton,
    coffeeButton,
    fireplaceButton
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
        
    })

    rainButton.addEventListener('click', function() {
        sound.rain()
    })

    coffeeButton.addEventListener('click', function() {
        sound.cofeeShop()
    })

    fireplaceButton.addEventListener('click', function() {
        sound.fireplace()
    })


}