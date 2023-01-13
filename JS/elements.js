const playButton = document.querySelector('.play');
const stopButton = document.querySelector('.stop');
const moreButton = document.querySelector('.more-volume');
const lessButton = document.querySelector('.less-volume');

const forestButton = document.querySelector('.forest');
const rainButton = document.querySelector('.rain');
const coffeeButton = document.querySelector('.coffeeShop');
const fireplaceButton = document.querySelector('.fireplace');

const forestIcon = document.querySelector('.cards button forest svg path');
const rainIcon = document.querySelector('.cards button rain svg path');
const coffeeShopIcon = document.querySelector('.cards button coffeeShop svg path');
const fireplaceIcon = document.querySelector('.cards button fireplace svg path');

const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

export {
    playButton,
    stopButton,
    moreButton,
    lessButton,
    minutesDisplay,
    secondsDisplay,
    forestButton,
    rainButton,
    coffeeButton,
    fireplaceButton,
    forestIcon,
    rainIcon,
    coffeeShopIcon,
    fireplaceIcon
};