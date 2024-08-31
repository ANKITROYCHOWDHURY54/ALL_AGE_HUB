const gameBoard = document.getElementById('gameBoard');
const upButton = document.getElementById('up');
const downButton = document.getElementById('down');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

let boardSize = gameBoard.clientWidth;
let tileSize = 0.10 * boardSize; // 20% of the board size
let snake = [{ x: boardSize / 2, y: boardSize / 2 }];
let direction = { x: 0, y: 0 };
let food = generateFood();

function draw() {
    gameBoard.innerHTML = '';

    snake.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.width = tileSize + 'px';
        snakeElement.style.height = tileSize + 'px';
        snakeElement.style.left = segment.x + 'px';
        snakeElement.style.top = segment.y + 'px';
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    });

    const foodElement = document.createElement('div');
    foodElement.style.width = tileSize + 'px';
    foodElement.style.height = tileSize + 'px';
    foodElement.style.left = food.x + 'px';
    foodElement.style.top = food.y + 'px';
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}

function update() {
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

    if (head.x === food.x && head.y === food.y) {
        food = generateFood();
    } else {
        snake.pop();
    }

    if (head.x < 0 || head.y < 0 || head.x >= boardSize || head.y >= boardSize || snake.some(segment => segment.x === head.x && segment.y === head.y)) {
        alert('Game Over!');
        snake = [{ x: boardSize / 2, y: boardSize / 2 }];
        direction = { x: 0, y: 0 };
        food = generateFood();
    }

    snake.unshift(head);
}

function generateFood() {
    let x, y;
    do {
        x = Math.floor(Math.random() * (boardSize / tileSize)) * tileSize;
        y = Math.floor(Math.random() * (boardSize / tileSize)) * tileSize;
    } while (snake.some(segment => segment.x === x && segment.y === y));
    return { x, y };
}

function changeDirection(newDirection) {
    direction = newDirection;
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            if (direction.y === 0) changeDirection({ x: 0, y: -tileSize });
            break;
        case 'ArrowDown':
            if (direction.y === 0) changeDirection({ x: 0, y: tileSize });
            break;
        case 'ArrowLeft':
            if (direction.x === 0) changeDirection({ x: -tileSize, y: 0 });
            break;
        case 'ArrowRight':
            if (direction.x === 0) changeDirection({ x: tileSize, y: 0 });
            break;
    }
});

upButton.addEventListener('click', () => {
    if (direction.y === 0) changeDirection({ x: 0, y: -tileSize });
});

downButton.addEventListener('click', () => {
    if (direction.y === 0) changeDirection({ x: 0, y: tileSize });
});

leftButton.addEventListener('click', () => {
    if (direction.x === 0) changeDirection({ x: -tileSize, y: 0 });
});

rightButton.addEventListener('click', () => {
    if (direction.x === 0) changeDirection({ x: tileSize, y: 0 });
});

function gameLoop() {
    update();
    draw();
    setTimeout(gameLoop, 500);
}

window.addEventListener('resize', () => {
    boardSize = gameBoard.clientWidth;
    tileSize = 0.10 * boardSize;
    snake = [{ x: boardSize / 2, y: boardSize / 2 }];
    food = generateFood();
});

gameLoop();
