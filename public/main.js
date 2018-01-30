'use strict';

const sections = [
    ['game', 'Режим игры'],
    ['rules', 'Правила игры'],
    ['rating', 'Рейтинг игроков']
];

const nav = document.getElementById('navigation');

sections.forEach((section) => {
    const button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.setAttribute('section-name', section[0]);
    button.value = section[1];
    nav.appendChild(button);
});