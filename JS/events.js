import {
    playButton,
    stopButton,
    moreButton,
    lessButton,
    forestButton,
    rainButton,
    coffeeButton,
    fireplaceButton,    
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
    $('.fundo-colorido').removeClass('fundo-colorido');
    $('.forest').addClass('fundo-colorido');          
});

rainButton.addEventListener('click', function() {
    rain()
    buttonClick()
    $('.fundo-colorido').removeClass('fundo-colorido');
    $('.rain').addClass('fundo-colorido');
      
});

coffeeButton.addEventListener('click', function() {
    cofeeShop()
    buttonClick()
    $('.fundo-colorido').removeClass('fundo-colorido');
    $('.coffeeShop').addClass('fundo-colorido');    
});

fireplaceButton.addEventListener('click', function() {
    fireplace()
    buttonClick()
    $('.fundo-colorido').removeClass('fundo-colorido');
    $('.fireplace').addClass('fundo-colorido');   
});