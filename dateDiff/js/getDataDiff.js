import { DateTime } from 'https://moment.github.io/luxon/es6/luxon.min.js';

export default function getDateDiff(dateFrom, dateTo) {

    if (dateFrom < dateTo) {
        [dateFrom, dateTo] = [dateTo, dateFrom];
    }

    const dateFromObj = DateTime.fromISO(dateFrom);
    const dateToObj = DateTime.fromISO(dateTo);

    return dateFromObj.diff(dateToObj, ['years', 'months', 'days']).toObject();
}