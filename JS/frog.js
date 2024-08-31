document.addEventListener('DOMContentLoaded', () => {
    let score = 0;
    let changedToFrogCount = 0;
    let numberRange = 10; // Initial range
    let usedNumbers = new Set(); // Set to track used numbers

    // Generate unique random numbers based on the current range
    function generateNumbers(range) {
        return Array.from({ length: range }, (_, i) => i + 1);
    }

    // Shuffle array function
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Assign random numbers to lotus divs
    function assignNumbers() {
        let numbers = generateNumbers(numberRange);
        shuffle(numbers);

        for (let i = 0; i < 10; i++) {
            const div = document.getElementById(`div${i + 2}`);
            div.innerText = numbers[i];
            div.style.backgroundImage = 'url("https://img.freepik.com/premium-vector/water-lily-flower-leaf-pink-natural-blossom-isolated-white-background_543062-6407.jpg?ga=GA1.1.639928877.1718960180&semt=ais_user")';
            div.addEventListener('click', () => checkAndMoveFrog(div, numbers[i]));
        }
    }

    // Generate a unique random number within the current range
    function getRandomNumber() {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * numberRange) + 1;
        } while (usedNumbers.has(randomNumber));
        usedNumbers.add(randomNumber);
        return randomNumber;
    }

    // Display a new random number every 4 seconds
    function displayRandomNumber() {
        const randomNumber = getRandomNumber();
        document.getElementById('randomNumber').innerText = randomNumber;
    }

    // Initial display of random number
    displayRandomNumber();

    // Set interval to display a new random number every 4 seconds
    const randomNumberInterval = setInterval(displayRandomNumber, 4000);

    // Function to check if clicked number matches the displayed number and move the frog
    function checkAndMoveFrog(clickedDiv, number) {
        const randomNumberDiv = document.getElementById('randomNumber');
        if (parseInt(randomNumberDiv.innerText) === number) {
            // Move frog to the clicked lotus div
            const frogDiv = document.getElementById('div1');
            frogDiv.style.gridRow = clickedDiv.style.gridRow;
            frogDiv.style.gridColumn = clickedDiv.style.gridColumn;

            // Change the clicked lotus div to frog image
            clickedDiv.style.backgroundImage = 'url("https://img.freepik.com/free-vector/organic-flat-frog-illustrated_23-2148953184.jpg?ga=GA1.1.639928877.1718960180&semt=ais_user")';
            clickedDiv.innerText = '';

            // Play frog sound
            const frogSound = document.getElementById('frogSound');
            frogSound.play();

            // Increment the count of divs changed to frog
            changedToFrogCount++;

            // Check if all divs have been changed to frog
            if (changedToFrogCount === 10) {
                score++;
                document.getElementById('score').innerText = score;

                // Display chocolate and reset game after 3 seconds
                displayChocolate();
            }
        }
    }

    // Function to display chocolate and then hide it after 3 seconds
    function displayChocolate() {
        clearInterval(randomNumberInterval); // Stop generating random numbers
        document.getElementById('randomNumber').style.display = 'none'; // Hide random number div
        const container = document.querySelector('.container');
        container.innerHTML = '<img src="https://img.freepik.com/premium-photo/chocolate-bar-with-red-bow-it_1154633-2957.jpg?ga=GA1.1.639928877.1718960180&semt=ais_user" alt="Chocolate" class="chocolate">';

        // Set timeout to remove chocolate image after 3 seconds and then reset the game
        setTimeout(() => {
            const chocolate = document.querySelector('.chocolate');
            if (chocolate) {
                chocolate.remove();
            }
            // Restart the game with the updated number range (11 to 20) immediately after 3 seconds
            resetGame();
        }, 3000); // 3000 milliseconds = 3 seconds
    }

    // Function to reset the game
    function resetGame() {
        usedNumbers.clear(); // Clear used numbers
        changedToFrogCount = 0;
        numberRange = 20; // Update range to 11-20
        assignNumbers();
        displayRandomNumber();
        document.getElementById('randomNumber').style.display = 'block'; // Show random number div
        setInterval(displayRandomNumber, 4000); // Restart the interval
    }

    // Initial setup
    assignNumbers();
});
