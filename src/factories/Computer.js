class Computer {
    constructor() {
        this.availableShots = [];
        this.init();
    }

    init() {
        for (let i = 0; i < 100; i++) {
            this.availableShots.push({ isShot: null, isShip: false });
        }
    }

    determinePlay(status = { isShot: null, isShip: false, isSunk: false, allSunk: false }) {
        const index = status.isShot;
        this.availableShots[index].isShot = index;
        let randomPlay = this.availableShots.indexOf(this.availableShots[Math.floor(Math.random() * this.availableShots.length)]);

        if (status.allSunk) {
            const endCode = 100;
            console.log(`SUNK - index: ${index}`)
            console.log(this.availableShots)
            return endCode;
        } 

        if (!status.isShip || status.isSunk) {
            if (this.availableShots[randomPlay].isShot !== null) {
                this.determinePlay({ isShot: index, isShip: false, isSunk: false, allSunk: false });
            } else {
                console.log(`RANDOM - index: ${index}, next move: ${randomPlay}`)
                return randomPlay;
            }
        }

        if (status.isShip) {
            this.availableShots[index].isShip = true;

            if (index >= 10 && index <= 89) {
                const choices = [index - 1, index + 1, index + 10, index - 10];
                const nextMove = choices[Math.floor(Math.random() * choices.length)];
                if (this.availableShots[nextMove].isShot !== null) {
                    this.determinePlay({ isShot: index, isShip: true, isSunk: false, allSunk: false });
                } else {
                    console.log(`SHIP 10-89 - index: ${index}, next move: ${nextMove}`)
                    return nextMove;
                }

            } else if (index < 10 && index > 0) {
                const choices = [index - 1, index + 1, index + 10];
                const nextMove = choices[Math.floor(Math.random() * choices.length)];
                if (this.availableShots[nextMove].isShot !== null) {
                    this.determinePlay({ isShot: index, isShip: true, isSunk: false, allSunk: false });
                } else {
                    console.log(`SHIP 1-9 - index: ${index}, next move: ${nextMove}`)
                    return nextMove;
                }

            } else if (index > 89 && index < 99) {
                const choices = [index - 1, index + 1, index - 10];
                const nextMove = choices[Math.floor(Math.random() * choices.length)];
                if (this.availableShots[nextMove].isShot !== null) {
                    this.determinePlay({ isShot: index, isShip: true, isSunk: false, allSunk: false });
                } else {
                    console.log(`SHIP 90-98 - index: ${index}, next move: ${nextMove}`)
                    return nextMove;
                }

            } else if (index === 0) {
                const choices = [1, 10];
                const nextMove = choices[Math.floor(Math.random() * choices.length)];
                if (this.availableShots[nextMove].isShot !== null) {
                    this.determinePlay({ isShot: index, isShip: true, isSunk: false, allSunk: false });
                } else {
                    console.log(`SHIP 0 - index: ${index}, next move: ${nextMove}`)
                    return nextMove;
                }
            }
        }

        return 101;
    }
}