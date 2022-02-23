const resultDate = document.getElementById('datecalc__result');
const resultTime = document.getElementById('timecalc__result');

let sound = new Howl({
    src: ['https://howlerjs.com/assets/howler.js/tests/audio/sound2.webm'],
    sprite: {
        one: [0, 450],
        two: [2000, 250],
        three: [4000, 350],
        four: [6000, 380],
        five: [8000, 340],
    }
});

export const printError = (errorText) => {
    resultDate.innerText = errorText;
    resultTime.innerText = errorText;
}

export const printResultDate = ({ years, months, days }) => {
    resultDate.innerText = `Год: ${years} - Месяц: ${months} - День: ${days}`;
}

export const printResultTimer = (time) => {
    clearInterval(timer);
    timer = setInterval(function () {
        let seconds = time % 60
        let minutes = time / 60 % 60
        let hour = time / 60 / 60 % 60
        if (seconds == 5) { sound.play('five') };
        if (seconds == 4) { sound.play('four') }
        if (seconds == 3) { sound.play('three') }
        if (seconds == 2) { sound.play('two') }
        if (seconds == 1) { sound.play('one') }
        if (time <= 0) {
            let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
            resultTime.innerHTML = strTimer;
            clearInterval(timer);
        } else {
            let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
            resultTime.innerHTML = strTimer;
        }
        --time;
    }, 1000)
}