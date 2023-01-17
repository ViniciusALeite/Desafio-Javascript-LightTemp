const forestAudio = new Audio("./Sounds/Floresta.wav");
const rainAudio = new Audio("./Sounds/Chuva.wav");
const coffeeShopAudio = new Audio("./Sounds/Cafeteria.wav");
const fireplaceAudio = new Audio("./Sounds/Lareira.wav");
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");
const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");
  
forestAudio.loop = true;
rainAudio.loop = true;
coffeeShopAudio.loop = true;
fireplaceAudio.loop = true;

function forest() {
  stopAll();
  forestAudio.play();
  buttonClick();
  $('.switchColor').removeClass('switchColor');
  $('.forest').addClass('switchColor');  
};

function rain() {
  stopAll();
  rainAudio.play();
  buttonClick();
  $('.switchColor').removeClass('switchColor');
  $('.rain').addClass('switchColor');  
};

function cofeeShop() {
  stopAll();
  coffeeShopAudio.play();
  buttonClick();
  $('.switchColor').removeClass('switchColor');
  $('.coffeeShop').addClass('switchColor'); 
};

function fireplace() {
  stopAll();
  fireplaceAudio.play();
  buttonClick();
  $('.switchColor').removeClass('switchColor');
  $('.fireplace').addClass('switchColor'); 
};

function buttonClick() {
  buttonPressAudio.play();
};

function timeEnd() {
  kitchenTimer.play();
};

function stopAll() {
  forestAudio.pause();
  rainAudio.pause();
  coffeeShopAudio.pause();
  fireplaceAudio.pause();
};
  
export { forest, rain, cofeeShop, fireplace, buttonClick, timeEnd };