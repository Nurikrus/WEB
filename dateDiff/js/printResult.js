const resultDate = document.getElementById('datecalc__result');
const resultTime = document.getElementById('timecalc__result');

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
        let seconds = time % 60 // Получаем секунды
        let minutes = time / 60 % 60 // Получаем минуты
        let hour = time / 60 / 60 % 60 // Получаем часы
        // Условие если время закончилось то...
        if (time <= 0) {
            // Таймер удаляется
            clearInterval(timer);
        } else { // Иначе
            // Создаём строку с выводом времени
            let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
            // Выводим строку в блок для показа таймера
            resultTime.innerHTML = strTimer;
        }
        --time; // Уменьшаем таймер
    }, 1000)
}