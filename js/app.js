import { Monster } from './monster.js';
import { Timer } from './timer.js';

let monster = new Monster();
let timer = new Timer(30);

function initGame() {
    monster.spawn();
    timer.start(() => gameOver());
}

document.getElementById('monster').addEventListener('click', () => {
    if (monster.takeDamage(20)) {
        timer.reset(30);
        monster.spawn();
    }
});

function gameOver() {
    alert('Le temps est écoulé. Vous avez perdu.');
}

initGame();
