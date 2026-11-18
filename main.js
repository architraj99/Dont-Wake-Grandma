const home = document.querySelector('#home');
const game = document.querySelector('#game');
const start = document.querySelector('#start');
const back = document.querySelector('#back');

start.addEventListener('click', () => {
    home.hidden = true;
    game.hidden = false;
    back.focus();
});

back.addEventListener('click', () => {
    game.hidden = true;
    home.hidden = false;
    start.focus();
});