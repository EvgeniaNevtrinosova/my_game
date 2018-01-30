;(function() {
    'use strict';

    const sections = [
        ['game', 'Режим игры'],
        ['rules', 'Правила игры'],
        ['rating', 'Рейтинг игроков']
    ];

    const nav = document.getElementsByClassName('navigation')[0];

    sections.forEach((section) => {
        const button = document.createElement('input');
        button.setAttribute('type', 'button');
        button.setAttribute('section-name', section[0]);
        button.value = section[1];
        nav.appendChild(button);
    });

    const app = document.querySelector('#application');
    const arrayOfSections = Array.from(app.getElementsByTagName('section'));

    nav.addEventListener('click', (event) => { 
        if (event.target.nodeName.toLowerCase() !== "input") { 
            return;
        }

        const clickSection = event.target.getAttribute('section-name');
        arrayOfSections.forEach((section) => {
            section.hidden = (section.id !== clickSection);
        });
    });
})();