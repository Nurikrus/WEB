import getDateDiff from './getDataDiff.js';
import getTimeDiff from './getTimeDiff.js';
import { printError, printResultDate, printResultTimer } from './printResult.js';

const form = document.getElementsByTagName('form');
const button = document.getElementsByClassName('button');

form[0].onsubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const firstDate = formData.get('firstDate');
    const secondDate = formData.get('secondDate');

    if (!firstDate || !secondDate) {
        printError('Opssss - введите дату');
    } else {
        const dateDiff = getDateDiff(firstDate, secondDate);
        console.log(dateDiff);
        printResultDate(dateDiff);
    }
}

form[1].onsubmit = (event) => {
    event.preventDefault();
    console.log(event);

    const formData = new FormData(event.target);

    const time = formData.get('time');

    console.log(time);

    if (event.submitter.id == 'start') {
        if (!time) {
            printError('Opssss - введите время');
        } else {
            const timeDiff = getTimeDiff(time);
            console.log(timeDiff);
            printResultTimer(timeDiff);
        }
    } else {
        clearInterval(timer);
    }
}


for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', (ev) => {
        for (let j = 0; j < form.length; j++) {
            form[j].classList.remove("active")
        }
        let showElemtn = document.querySelectorAll('form#' + ev.target.id + '')[0];
        showElemtn.classList.toggle("active");
    })
}
