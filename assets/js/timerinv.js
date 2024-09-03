//const openPopupButton = document.getElementById('proceed');
const openPopupButtons = document.querySelectorAll('#proceed');
const timerDisplay = document.getElementById('timer');

let countdown;
endtime = 30;

/*openPopupButton.addEventListener('click', () => {
    startTimer(endtime * 60);
    document.getElementById("time_div").style.display = "block"
    document.getElementById("inv").style.display = "none"
});*/

openPopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        startTimer(endtime * 60);
        document.getElementById("time_div").style.display = "block";
        document.getElementById("inv").style.display = "none";
    });
});

function startTimer(duration) {
    let timer = duration, minutes, seconds;
    countdown = timer;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerDisplay.textContent = `${minutes}:${seconds}`;

        if (--timer < 0) {
            closePopup();
        }
    }, 1000);
}

function closePopup() {
    clearInterval(countdown);
    //popup.style.display = 'none';
    location.href = "./"
}
