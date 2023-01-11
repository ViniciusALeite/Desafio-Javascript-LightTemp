export default function() {
  
  const forestAudio = new Audio("https://drive.google.com/file/d/1CRHkV72WUMdcqec5GT_KdsqFz0z3VAOA/view")
  const rainAudio = new Audio("https://drive.google.com/file/d/1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2/view")
  const coffeeShopAudio = new Audio("https://drive.google.com/file/d/1OxLKpCwg2wrxXFNUHgZxJ51QEt0ac5RA/view")
  const fireplaceAudio = new Audio("https://drive.google.com/file/d/1MakaBPxJvTa_whaSM3kEbRcxiVd1GRCB/view")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  
    bgAudio.loop = true
  
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
  
    return {
      buttonClick,
      timeEnd,
      forest,
      rain,
      cofeeShop,
      fireplace,
      bgAudio
    }  
  }