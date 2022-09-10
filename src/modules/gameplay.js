const Player = require('../factories/Player');

const gameplay = (() => {

    let userPlayer;
    let computerPlayer;
    let userShips = [];
    let computerShips = [];
    let hitShips = [{carrier: 5}, {battle: 4}, {cruiser: 3}, {sub: 3}, {destroy: 2}];
    let allSunk = false;

    const computerGrid = document.querySelector('.right-board');
    const computerBoard = document.querySelectorAll('.right-board > button');
    const userBoard = document.querySelectorAll('.left-board > button');
    const topText = document.querySelector('.top-text');
    const bottomText = document.querySelector('.bottom-text');
    const rightText = document.createElement('span');
    const replayBtn = document.querySelector('.replay-btn');
    const textPlayer = 'You fire a shot into enemy waters . . .';
    const textComputer = 'The enemy fires a shot into your waters . . .';
    const textCompTurn = 'The enemy is taking aim . . .';
    const textMiss = 'and it\'s a miss.';
    const textHit = 'and it\'s a hit!';
    const textSunkPlayer = ' You\'ve sunk their battleship.';
    const textSunkComp = ' They\'ve sunk your battleship.';
    const textWinTop = 'Congratulations, name.';
    const textWinBottom = 'You\'re the winner!';
    const textLoseTop = 'The enemy has won.';
    const textLoseBottom = 'Better luck next time.';

    function beginGame(userName, computer) {
        userPlayer = new Player(userName);
        computerPlayer = new Player(computer);

        userPlayer.gameboard.board.forEach(cell => {
            if (cell.shipId !== null) {
                userShips.push(userPlayer.gameboard.board.indexOf(cell));
            }
        });

        computerPlayer.gameboard.board.forEach(cell => {
            if (cell.shipId !== null) {
                const shipInfo = {
                    shipName: cell.shipId,
                    shipIndex: computerPlayer.gameboard.board.indexOf(cell)
                };
                computerShips.push(shipInfo);
            }
        });

        userShips.forEach(item => {
            userBoard[item].setAttribute('id', 'player-ship');
        });

        computerShips.forEach(item => {
            computerBoard[item.shipIndex].classList.add('computer-ship');
        });

        computerBoard.forEach(cell => {
            if (!cell.hasAttribute('id')) {
                cell.addEventListener('click', userTurn);
            }
        });
    }

    function userTurn(e) {
        const hitCell = e.target;

        if (!hitCell.classList.contains('computer-ship')) {
            topText.textContent = textPlayer;
            window.setTimeout(() => {
                hitCell.setAttribute('id', 'hit');
            }, '100');
            window.setTimeout(() => {
                bottomText.textContent = textMiss;
            }, '1000');
            computerTurn();
        
        } else {
            const hitIndex = [...hitCell.parentElement.children].indexOf(hitCell);
            recordHit(hitIndex);
            const sunkStatus = checkIfSunk();

            if (!sunkStatus) {
                topText.textContent = textPlayer;
                window.setTimeout(() => {
                    hitCell.setAttribute('id', 'player-ship');
                }, '100');
                window.setTimeout(() => {
                    bottomText.textContent = textHit;
                }, '1000');
                computerTurn();

            } else {
                recordSink(1);
                const allSunk = checkAllSunk();

                if (!allSunk) {
                    topText.textContent = textPlayer;
                    window.setTimeout(() => {
                        hitCell.setAttribute('id', 'sunk');
                    }, '100');
                    window.setTimeout(() => {
                        bottomText.textContent = textHit;
                        bottomText.appendChild(rightText);
                        rightText.style.visibility = 'hidden';
                        rightText.textContent = textSunkComp;
                    }, '1000');
                    window.setTimeout(() => {
                        rightText.style.visibility = 'visible';
                    }, '1500');
                    computerTurn();

                } else {
                    window.setTimeout(() => {
                        topText.textContent = textWinTop;
                        topText.classList.add('top-end');
                    }, '1000');
                    window.setTimeout(() => {
                        bottomText.textContent = textWinBottom;
                        bottomText.classList.add('bottom-end');
                    }, '1500');
                    window.setTimeout(() => {
                        replayBtn.classList.remove('hide');
                        replayBtn.addEventListener('click', resetGame);
                    }, '2000');
                }
            }
        }
    }

    function computerTurn() {
        computerBoard.forEach(cell => {
            cell.removeEventListener('click', userTurn);
        })
    }

    function recordHit(hitIndex) {
        computerShips.forEach(item => {

            if (item.shipIndex === hitIndex) {
                const shipType = item.shipName;

                if (shipType === 'carrier') {
                    hitShips[0].carrier = hitShips[0].carrier - 1;
                    return shipType;
                } else if (shipType === 'battleship') {
                    hitShips[1].battle = hitShips[1].battle - 1;
                    return shipType;
                } else if (shipType === 'cruiser') {
                    hitShips[2].cruiser = hitShips[2].cruiser - 1;
                    return shipType;
                } else if (shipType === 'submarine') {
                    hitShips[3].sub = hitShips[3].sub - 1;
                    return shipType;
                } else if (shipType === 'destroyer') {
                    hitShips[4].destroy = hitShips[4].destroy - 1;
                    return shipType;
                }
            }
        });
    }

    function recordSink(num) {
        let total = 0;
        total += num;

        if (total < 5) {
            return;
        } else if (total === 5) {
            allSunk = true;
        }
    }

    function checkIfSunk() {
        return false;
    }

    function checkAllSunk() {
        return allSunk;
    }

    function resetGame() {
        window.location.reload(true);
    }

    return {
        beginGame,
        userTurn,
        computerTurn,
        recordHit,
        recordSink,
        checkIfSunk,
        checkAllSunk,
        resetGame
    };
})();

module.exports = gameplay;