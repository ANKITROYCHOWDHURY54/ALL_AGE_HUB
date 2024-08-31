document.getElementById('clickMeButton').addEventListener('click', function() {
    document.body.innerHTML = '';
    const newPageDiv = document.createElement('div');
    newPageDiv.className = 'newPage';
    const cardDiv = document.createElement('div');
    cardDiv.className = 'section';
    cardDiv.id = 'card';
    cardDiv.innerText = 'Card';
    const snakeDiv = document.createElement('div');
    snakeDiv.className = 'section1';
    snakeDiv.id = 'snake';
    snakeDiv.innerText = 'Snake';
    const toysDiv = document.createElement('div');
    toysDiv.className = 'section2';
    toysDiv.id = 'toys';
    toysDiv.innerText = 'Toys';
    // const matchDiv = document.createElement('div');
    // matchDiv.className = 'section3';
    // matchDiv.id = 'match';
    // matchDiv.innerText = 'match';

    toysDiv.addEventListener('click', function() {
        window.location.href = './Toys.html';
    });
    // matchDiv.addEventListener('click', function() {
    //     window.location.href = './tic.html';
    // });
    newPageDiv.appendChild(cardDiv);
    newPageDiv.appendChild(snakeDiv);
    newPageDiv.appendChild(toysDiv);
    // newPageDiv.appendChild(matchDiv)
    document.body.appendChild(newPageDiv);
});
