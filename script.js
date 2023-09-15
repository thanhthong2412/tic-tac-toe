
document.addEventListener("DOMContentLoaded", function() {
    let current_player = 'X';
    const cells = document.querySelectorAll('.cell');

    function makeMove(cell) {
        if (!cell.textContent) {
            cell.textContent = current_player;
            if (checkWin()) {
                setTimeout(() => {
                    alert(current_player + ' wins!');
                    resetGame();
                }, 100);
            } else if (checkTie()) {
                setTimeout(() => {
                    alert('It\'s a tie!');
                    resetGame();
                }, 100);
            } else {
                current_player = current_player === 'X' ? 'O' : 'X';
            }
        }
    }

    function checkWin() {
        const winningCombination = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (const combination of winningCombination) {
            if (cells[combination[0]].textContent &&
                cells[combination[0]].textContent === cells[combination[1]].textContent &&
                cells[combination[0]].textContent === cells[combination[2]].textContent) {
                return true;
            }
        }
        return false;
    }

    function checkTie() {
        for (const cell of cells) {
            if (!cell.textContent) {
                return false;
            }
        }
        return true;
    }

    function resetGame() {
        for (const cell of cells) {
            cell.textContent = '';
        }
        current_player = 'X';
    }

    // Adding the functions to the global scope so they can be accessed from the HTML
    window.makeMove = makeMove;
    window.resetGame = resetGame;
});
