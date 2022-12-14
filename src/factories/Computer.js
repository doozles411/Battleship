class Computer {
    constructor() {
        this.availableCells = [];
        this.init();
    }

    init() {
        for (let i = 0; i < 100; i++) {
            this.availableCells.push(i);
        }
    }

    determinePlay(status) {
        const index = status.cellId;
        const match = this.availableCells.find(cell => cell === index);
        const matchIndex = this.availableCells.indexOf(match);
        this.availableCells.splice(matchIndex, 1);

        let randomPlay;

        if (status.shipId === 'none' || status.isSunk) {
            randomPlay = this.availableCells[Math.floor(Math.random() * this.availableCells.length)];
            return randomPlay; 

        } else {
            let choices = [];
            const choiceOne = index - 1;
            const choiceTwo = index + 1;
            const choiceThree = index + 10;
            const choiceFour = index - 10;

            if (index === 0 || index === 9) {
                if (this.availableCells.includes(choiceThree)) {
                    randomPlay = choiceThree;
                } else {
                    randomPlay = this.availableCells[Math.floor(Math.random() * this.availableCells.length)];
                }
                return randomPlay;

            } else if (index === 90 || index === 99) {
                if (this.availableCells.includes(choiceFour)) {
                    randomPlay = choiceFour;
                } else {
                    randomPlay = this.availableCells[Math.floor(Math.random() * this.availableCells.length)];
                }
                return randomPlay;

            } else if (index === 10 || index === 20 || index === 30 || index === 40 || index === 50 || index === 60 || index === 70 || index === 80 || index === 19 || index === 29 || index === 39 || index === 49 || index === 59 || index === 69 || index === 79 || index === 89 || index === 18 || index === 28 || index === 38 || index === 48 || index === 58 || index === 68 || index === 78 || index === 88) {
                if (this.availableCells.includes(choiceThree)) {
                    choices.push(choiceThree);
                }
                if (this.availableCells.includes(choiceFour)) {
                    choices.push(choiceFour);
                }
                if (choices.length < 1) {
                    randomPlay = this.availableCells[Math.floor(Math.random() * this.availableCells.length)];
                } else {
                    randomPlay = choices[Math.floor(Math.random() * choices.length)];
                }
                return randomPlay;

            } else {
                if (this.availableCells.includes(choiceOne)) {
                    if (choiceOne !== 1 && choiceOne !== 11 && choiceOne !== 21 && choiceOne !== 31 && choiceOne !== 41 && choiceOne !== 51 && choiceOne !== 61 && choiceOne !== 71 && choiceOne !== 81 && choiceOne !== 91) {
                        choices.push(choiceOne);
                    }
                }
                if (this.availableCells.includes(choiceTwo)) {
                    if (choiceTwo !== 7 && choiceTwo !== 17 && choiceTwo !== 27 && choiceTwo !== 37 && choiceTwo !== 47 && choiceTwo !== 57 && choiceTwo !== 67 && choiceTwo !== 77 && choiceTwo !== 87 && choiceTwo !== 97) {
                        choices.push(choiceTwo);
                    }
                }
                if (choices.length < 1) {
                    randomPlay = this.availableCells[Math.floor(Math.random() * this.availableCells.length)];
                } else {
                    randomPlay = choices[Math.floor(Math.random() * choices.length)];
                }
                return randomPlay;
            }
        }
    }
}

module.exports = Computer;