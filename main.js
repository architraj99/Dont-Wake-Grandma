const home = document.querySelector('#home');
const game = document.querySelector('#game');
const help = document.querySelector('#help');
const start = document.querySelector('#start');
const back = document.querySelector('#back');
const openHelp = document.querySelector('#open-help');
const helpBack = document.querySelector('#help-back');
let currentScreen = home;

function showScreen(screen, focusTarget) {
    currentScreen.hidden = true;
    screen.hidden = false;
    currentScreen = screen;
    focusTarget.focus();
}

start.addEventListener('click', () => {
    showScreen(game, back);
});

back.addEventListener('click', () => {
  showScreen(home, start);
});

openHelp.addEventListener('click', () => {
    showScreen(help, helpBack);
});

helpBack.addEventListener('click', () => {
    showScreen(home, openHelp);
});