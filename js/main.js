const home = document.querySelector('#home');
const game = document.querySelector('#game');
const help = document.querySelector('#help');
const settings = document.querySelector('#settings');
const start = document.querySelector('#start');
const back = document.querySelector('#back');
const openHelp = document.querySelector('#open-help');
const helpBack = document.querySelector('#help-back');
const openSettings = document.querySelector('#open-settings');
const settingsBack = document.querySelector('#settings-back');
const animation = document.querySelector('#menu-animation');
const animationState = document.querySelector('#animation-state');
const fullscreen = document.querySelector('#fullscreen');
const fullscreenStatus = document.querySelector('#fullscreen-status');
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

openSettings.addEventListener('click', () => {
    showScreen(settings, animation);
});

settingsBack.addEventListener('click', () => {
    showScreen(home, openSettings);
});

document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') {
        return;
    }

    if (currentScreen === help) {
        showScreen (home, openHelp);
    }

    else if (currentScreen === settings) {
        showScreen(home, openSettings);
    }
});

animation.addEventListener('change', () => {
    home.classList.toggle('no-animation', !animation.checked);
    animationState.textContent = animation.checked ? '- On' : '- Off';
});

fullscreen.addEventListener('click', async () => {
    fullscreenStatus.textContent = '';

    try {
        if (document.fullscreenElement) {
            await document.exitFullscreen();
        }
        else {
            await document.documentElement.requestFullscreen();
        }

    }
    catch {
        fullscreenStatus.textContent = 'Could not change fullscreen mode.';
    }
});

document.addEventListener('fullscreenchange', () => {
    fullscreen.textContent = document.fullscreenElement ? 'EXIT FULLSCREEN' : 'FULLSCREEN';
});