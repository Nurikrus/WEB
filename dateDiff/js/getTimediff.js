import { DateTime } from 'https://moment.github.io/luxon/es6/luxon.min.js';

export default function getTimeDiff(time) {

    const timeObj = DateTime.fromISO(time).minute;

    return timeObj * 60;
}