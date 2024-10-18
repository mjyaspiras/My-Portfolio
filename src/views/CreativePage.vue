<template>
  <div class="game">
    <h1 class="text-center">Number Guessing Game</h1>
    <div class="text-center">
      <h3>Guess a Number Between 1 and 100</h3>
      <input
        type="number"
        v-model="userGuess"
        class="guess-input"
        placeholder="Enter your guess"
      />
      <button @click="checkGuess" class="btn btn-outline-primary">Submit Guess</button>
      
      <div class="mt-4">
        <h3 v-if="feedback">{{ feedback }}</h3>
        <h3 v-if="attemptsLeft">Attempts Left: {{ attemptsLeft }}</h3>
      </div>
      
      <button v-if="gameOver" @click="startGame" class="btn btn-outline-success">Play Again</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NumberGuessingGame",
  data() {
    return {
      randomNumber: null,
      userGuess: null,
      feedback: "",
      attemptsLeft: 10,
      gameOver: false,
    };
  },
  methods: {
    startGame() {
      this.randomNumber = Math.floor(Math.random() * 100) + 1;
      this.userGuess = null;
      this.feedback = "";
      this.attemptsLeft = 10;
      this.gameOver = false;
    },
    checkGuess() {
      if (this.userGuess == null) {
        this.feedback = "Please enter a number!";
        return;
      }

      this.attemptsLeft--;

      if (this.userGuess < this.randomNumber) {
        this.feedback = "Too low! Try again.";
      } else if (this.userGuess > this.randomNumber) {
        this.feedback = "Too high! Try again.";
      } else {
        this.feedback = "Congratulations! You guessed the number!";
        this.gameOver = true;
      }

      if (this.attemptsLeft <= 0) {
        this.feedback = `Game over! The number was ${this.randomNumber}.`;
        this.gameOver = true;
      }
    },
  },
  mounted() {
    this.startGame();
  },
};
</script>

<style scoped>
.game {
  max-width: 800px;
  margin: 100px auto; /* Center the game container vertically */
  text-align: center;
  background-color: #f9f9f9; /* Light background for contrast */
  border-radius: 10px; /* Rounded corners */
  padding: 30px; /* Padding inside the game container */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Shadow effect */
}

h1 {
  font-family: 'Arial', sans-serif; /* Change to a simple, engaging font */
  color: black; /* Black color for main heading */
  font-size: 2.5rem; /* Larger size for the main heading */
}

h3 {
  font-family: 'Arial', sans-serif; /* Keep the same font for consistency */
  color: #ff007f; /* Dark pink color for subheadings and feedback */
  font-size: 1.5rem; /* Increase font size for better visibility */
}

.guess-input {
  margin: 20px;
  padding: 10px;
  font-size: 1.2rem; /* Slightly larger font size for input */
  border: 2px solid #ff007f; /* Dark pink border for input */
  border-radius: 5px; /* Rounded corners for input */
  transition: border-color 0.3s; /* Transition for focus effect */
}

.guess-input:focus {
  border-color: black; /* Change border color on focus */
  outline: none; /* Remove default outline */
}

.btn {
  margin: 0 10px;
  padding: 10px 15px;
  font-size: 1.1rem; /* Slightly larger button text */
}

.btn-outline-primary {
  border-color: #ff007f; /* Dark pink border for primary button */
  color: #ff007f; /* Dark pink text color */
}

.btn-outline-primary:hover {
  background-color: #ff007f; /* Dark pink background on hover */
  color: white; /* White text on hover */
}

.btn-outline-success {
  background-color: #6a1b9a; /* Violet */
  color: white; /* White text color */
}
</style>
