class GuessingGame {
    constructor() {
        this.minRange = 1;
        this.maxRange = 100;
        this.answer = null;
    }

    setRange(min, max) {
        this.minRange = min;
        this.maxRange = max;
        this.answer = null;
    }

    guess() {
        return Math.floor((this.minRange + this.maxRange) / 2);
    }

    lower() {
        this.maxRange = this.guess() - 1;
    }

    greater() {
        this.minRange = this.guess() + 1;
    }
}

module.exports = GuessingGame;
