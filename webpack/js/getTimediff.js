import { DateTime } from 'luxon';

export default function getTimeDiff(time) {

    const timeObj = DateTime.fromISO(time).minute;

    return timeObj * 60;
}