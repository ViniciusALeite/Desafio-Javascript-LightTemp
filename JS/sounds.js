
const forestAudio = new Audio("./Sounds/Floresta.wav")
const rainAudio = new Audio("./Sounds/Rain.wav")
const coffeeShopAudio = new Audio("./Sounds/Cafeteria.wav")
const fireplaceAudio = new Audio("./Sounds/Lareira.wav")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  
forestAudio.loop = true
rainAudio.loop = true
coffeeShopAudio.loop = true
fireplaceAudio.loop = true

function forest() {
  forestAudio.play()
}

function rain() {
  rainAudio.play()
}

function cofeeShop() {
  coffeeShopAudio.play()
}

function fireplace() {
  fireplaceAudio.play()
}

function buttonClick() {
  buttonPressAudio.play()
}

function timeEnd() {
  kitchenTimer.play()
}
  
export { forest, rain, cofeeShop, fireplace, buttonClick, timeEnd }