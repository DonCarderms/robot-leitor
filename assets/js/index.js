const btSpeak = document.querySelector('.bt-speak');
const btStop = document.querySelector('.bt-stop');
const speedRange = document.querySelector('.speed-range')
const speedView = document.querySelector('.value-speed-view')

speedRange.oninput = function  () {
    speedView.textContent = `x ${this.value}`;
}


const utterance = new SpeechSynthesisUtterance();

btSpeak.addEventListener('click', (e) => {
    speak()
    
})

btStop.addEventListener('click', (e) =>{
    stop()
})

utterance.lang = "pt-BR";


function speak() {
    utterance.rate = speedRange.value;
	speechSynthesis.speak(utterance);
}

function stop() {
  speechSynthesis.cancel();
}

function setText(event) {
	utterance.text = event.target.innerText;
}