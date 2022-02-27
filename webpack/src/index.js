import('./main.scss');

import items from './galary';
import { drawItem } from './dropItem';

const galaryElement = document.getElementById('galary');
items.map((item, i) => galaryElement.appendChild(drawItem(item, i)));