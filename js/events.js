import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonIncrease,
    buttonDecrease,
    cardForest,
    cardRain,
    cardCoffeeShop,
    cardFire,
    buttonForest,
    buttonRain,
    buttonCoffeeShop,
    buttonFire,
} from './elements.js'

export default function ({ timer, controls, sounds, theme }) {
	buttonPlay.addEventListener('click', function () {
		sounds.pressButton(sounds.buttonPressAudio)
		controls.play()
		timer.countdown()
	})

	buttonPause.addEventListener('click', function () {
		sounds.pressButton(sounds.buttonPressAudio)
		controls.pause()
		timer.hold()
	})

	buttonStop.addEventListener('click', function () {
		sounds.pressButton(sounds.buttonPressAudio)
		controls.pause()
		timer.reset()
	})

	buttonIncrease.addEventListener('click', function () {
		sounds.pressButton(sounds.buttonPressAudio)
		timer.increase()
	})

	buttonDecrease.addEventListener('click', function () {
		sounds.pressButton(sounds.buttonPressAudio)
		timer.decrease()
	})

	buttonForest.addEventListener('click', function () {
		controls.toggle(cardForest)
		sounds.playAudio(sounds.forestAudio, cardForest)
	})

    buttonRain.addEventListener('click', function () {
        controls.toggle(cardRain)
        sounds.playAudio(sounds.rainAudio, cardRain)
    })

    buttonCoffeeShop.addEventListener('click', function () {
        controls.toggle(cardCoffeeShop)
        sounds.playAudio(sounds.coffeeShopAudio, cardCoffeeShop)
    })
    
    buttonFire.addEventListener('click', function () {
        controls.toggle(cardFire)
        sounds.playAudio(sounds.fireAudio, cardFire)
    })
}