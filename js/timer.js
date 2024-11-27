export class Timer {
    constructor(duration) {
        this.duration = duration;
        this.remainingTime = duration;
        this.intervalId = null;
    }

    start(onTimeout) {
        const timerDisplay = document.getElementById('timer');
        this.intervalId = setInterval(() => {
            this.remainingTime--;
            timerDisplay.textContent = `Temps restant : ${this.remainingTime}s`;
            if (this.remainingTime <= 0) {
                this.stop();
                onTimeout();
            }
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
    }

    reset(newDuration) {
        this.stop();
        this.remainingTime = newDuration;
        document.getElementById('timer').textContent = `Temps restant : ${this.remainingTime}s`;
        this.start(() => {});
    }
}
