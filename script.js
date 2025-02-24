const boardElement = document.getElementById("board");
const statusElement = document.getElementById("status");
const resetButton = document.getElementById("reset");

// Настройки игры
const boardSize = 5; // Размер поля (5x5)
let board = Array(boardSize * boardSize).fill(""); // Игровое поле
let currentPlayer = "X"; // Текущий игрок
let gameActive = true; // Активна ли игра

// Сообщения для статуса
const winningMessage = () => `Игрок ${currentPlayer} победил!`;
const drawMessage = () => "Ничья!";
const currentPlayerTurn = () => `Ход игрока ${currentPlayer}`;

// Инициализация игрового поля
function initializeBoard() {
    boardElement.innerHTML = "";
    boardElement.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;
    boardElement.style.gridTemplateRows = `repeat(${boardSize}, 1fr)`;

    for (let i = 0; i < boardSize * boardSize; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("data-index", i);
        cell.addEventListener("click", handleCellClick);
        boardElement.appendChild(cell);
    }
    statusElement.textContent = currentPlayerTurn();
    gameActive = true;
}

// Обработка клика по клетке
function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute("data-index"));

    if (board[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    // Делаем ход
    board[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;

    // Проверка на победу или ничью
    if (checkWin()) {
        statusElement.textContent = winningMessage();
        gameActive = false;
        return;
    }

    if (checkDraw()) {
        statusElement.textContent = drawMessage();
        gameActive = false;
        return;
    }

    // Смена игрока
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusElement.textContent = currentPlayerTurn();

    // Ход компьютера, если текущий игрок — "O"
    if (currentPlayer === "O" && gameActive) {
        computerMove();
    }
}

// Ход компьютера
function computerMove() {
    let availableCells = board.map((cell, index) => cell === "" ? index : null).filter(val => val !== null);
    const randomCell = availableCells[Math.floor(Math.random() * availableCells.length)];

    if (randomCell !== undefined) {
        // Делаем ход
        board[randomCell] = "O";
        const cellElement = document.querySelector(`.cell[data-index='${randomCell}']`);
        cellElement.textContent = "O";

        // Проверка на победу или ничью
        if (checkWin()) {
            statusElement.textContent = winningMessage();
            gameActive = false;
            return;
        }

        if (checkDraw()) {
            statusElement.textContent = drawMessage();
            gameActive = false;
            return;
        }

        // Смена игрока
        currentPlayer = "X";
        statusElement.textContent = currentPlayerTurn();
    }
}

// Проверка победы
function checkWin() {
    // Проверка строк
    for (let i = 0; i < boardSize; i++) {
        const row = board.slice(i * boardSize, (i + 1) * boardSize);
        if (row.every(cell => cell === currentPlayer && cell !== "")) {
            return true;
        }
    }

    // Проверка столбцов
    for (let i = 0; i < boardSize; i++) {
        const column = [];
        for (let j = 0; j < boardSize; j++) {
            column.push(board[i + j * boardSize]);
        }
        if (column.every(cell => cell === currentPlayer && cell !== "")) {
            return true;
        }
    }

    // Проверка диагоналей (главная)
    const diagonal1 = [];
    for (let i = 0; i < boardSize; i++) {
        diagonal1.push(board[i * boardSize + i]);
    }
    if (diagonal1.every(cell => cell === currentPlayer && cell !== "")) {
        return true;
    }

    // Проверка диагоналей (побочная)
    const diagonal2 = [];
    for (let i = 0; i < boardSize; i++) {
        diagonal2.push(board[(i + 1) * (boardSize - 1)]);
    }
    if (diagonal2.every(cell => cell === currentPlayer && cell !== "")) {
        return true;
    }

    return false;
}

// Проверка ничьей
function checkDraw() {
    return board.every(cell => cell !== "");
}

// Сброс игры
resetButton.addEventListener("click", () => {
    board = Array(boardSize * boardSize).fill(""); // Очищаем поле
    currentPlayer = "X"; // Сбрасываем текущего игрока
    initializeBoard(); // Перерисовываем поле
});

// Запуск игры
initializeBoard();