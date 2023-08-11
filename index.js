window.onload = function () {
    let seconds = 0;
    let tens = 0;
    let appendSecond = document.getElementById("seconds");
    let appendTens = document.getElementById("tens");
    let buttonStart = document.getElementById("button-start");
    let buttonStop = document.getElementById("button-stop"); // Corrected ID
    let buttonReset = document.getElementById("button-reset");
    let Interval;

    buttonStart.onclick = () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = () => {
        clearInterval(Interval);
    }

    buttonReset.onclick = () => {
        clearInterval(Interval);
        tens = 0;
        seconds = 0;
        appendTens.innerHTML = "00"; // Corrected assignment
        appendSecond.innerHTML = "00"; // Corrected assignment
    }

    startTimer = () => {
        tens++;

        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;
        }

        if (tens > 99) {
            seconds++;
            console.log('Seconds:' + seconds);
            appendSecond.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "00"; // Corrected assignment
        }

        if (seconds > 9) {
            appendSecond.innerHTML = seconds;
        }
    }
}
