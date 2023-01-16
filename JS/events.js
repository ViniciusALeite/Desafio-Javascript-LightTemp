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
import { lessFiveMinutes, moreFiveMinutes, play, resetButtons } from "./controls.js";
import { buttonClick, forest, rain, cofeeShop, fireplace } from "./sounds.js";

playButton.addEventListener('click', play);

stopButton.addEventListener('click', resetButtons);

moreButton.addEventListener('click', moreFiveMinutes);

lessButton.addEventListener('click', lessFiveMinutes);

forestButton.addEventListener('click', function() {
    forest()
    buttonClick()
    $('.switchColor').removeClass('switchColor');
    $('.forest').addClass('switchColor');          
});

rainButton.addEventListener('click', function() {
    rain()
    buttonClick()
    $('.switchColor').removeClass('switchColor');
    $('.rain').addClass('switchColor');  
      
});

coffeeButton.addEventListener('click', function() {
    cofeeShop()
    buttonClick()
    $('.switchColor').removeClass('switchColor');
    $('.coffeeShop').addClass('switchColor');     
});

fireplaceButton.addEventListener('click', function() {
    fireplace()
    buttonClick()
    $('.switchColor').removeClass('switchColor');
    $('.fireplace').addClass('switchColor');   
});