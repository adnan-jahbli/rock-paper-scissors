let buttons = document.querySelectorAll('button');
buttons = document.querySelectorAll('button');
let select_sound = document.getElementById('select_sound');

buttons.forEach((button) => button.addEventListener('click', function(e) {
    select_sound.currentTime = 0;
    select_sound.play();
}));