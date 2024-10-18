<template>
  <div class="portfolio-container">
    <div class="photo-container">
      <img src="@/assets/aspiras.png" alt="Portfolio Photo" class="photo-with-shadow" />
    </div>
    <h1>Portfolio Showcase</h1>
    
    <div class="portfolio-items">
      <div class="portfolio-item">
        <img src="@/assets/achiever.png" alt="achiever" />
        <h3>Achiever</h3>
        <p>An achiever at heart, I dance with dreams and ambitions, turning aspirations into accomplishments. Every goal I set is a stepping stone on a path paved with perseverance and passion. I believe that success is not merely a destination but a journey of continuous growth, where each milestone inspires me to reach higher and explore the uncharted territories of my potential.</p>
      </div>
      <div class="portfolio-item">
        <img src="@/assets/competitive.png" alt="competitive" />
        <h3>Competitive</h3>
        <p>In the arena of life, I thrive on competition, where every challenge is an opportunity to push my limits and elevate my game. With a fierce determination, I embrace the thrill of the race, not just to outpace others but to surpass my own best. Each victory, big or small, fuels my drive, igniting a fire within that propels me forward, ready to conquer new horizons.</p>
      </div>
      <div class="portfolio-item">
        <img src="@/assets/innovative.png" alt="innovative" />
        <h3>Innovative</h3>
        <p>In a landscape where tradition meets transformation, I embrace innovation as my guiding light. I thrive on the spark of creativity, constantly seeking new perspectives and solutions that challenge the status quo. Whether it's redefining processes or inventing tools, I approach each challenge with an open mind and a willingness to explore uncharted territories. My passion for innovation drives me to turn ideas into reality, paving the way for a future where possibilities are limitless and every challenge is an invitation to invent the extraordinary.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioShowcase",
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Raleway:wght@400&display=swap');

body {
  background-color: #f0f0f0; /* Light gray background */
  font-family: 'Raleway', sans-serif; /* Use Raleway for body text */
  margin: 0;
  padding: 0;
  color: #333; /* Dark text color */
}

.portfolio-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  text-align: center;
  background: linear-gradient(135deg, #6a1b9a, #4a148c); /* Gradient background */
  border-radius: 15px; /* Rounded corners */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Shadow effect */
}

.photo-container {
  margin: 20px 0;
}

.photo-with-shadow {
  width: 180px; /* Increased size */
  height: auto;
  border-radius: 10px; /* Rounded corners */
  object-fit: cover;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s; /* Smooth hover effect */
}

.photo-with-shadow:hover {
  transform: scale(1.05); /* Scale up on hover */
}

h1 {
  font-family: 'Poppins', sans-serif; /* Use Poppins for the heading */
  color: #fff; /* White text color */
  margin-top: 20px;
  font-size: 3rem; /* Larger font size */
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4); /* Text shadow for depth */
}

h2 {
  font-family: 'Poppins', sans-serif;
  color: #ffeb3b; /* Bright yellow for subheader */
  margin: 10px 0;
  font-size: 2rem; /* Larger subheader size */
}

p {
  margin-top: 20px;
  font-size: 1.2rem; /* Slightly larger paragraph text */
  line-height: 1.6; /* Better line spacing */
  color: black; /* Set all paragraph text color to black */
}

.portfolio-items {
  display: flex; /* Flexbox layout for items */
  flex-wrap: wrap; /* Wrap items to the next line */
  justify-content: center; /* Center items */
}

.portfolio-item {
  display: inline-block; /* Align items in a row */
  width: calc(33.333% - 20px); /* Responsive item width */
  margin: 10px; /* Space between items */
  background: #ffeb3b; /* Pastel yellow background for items */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Shadow effect */
  overflow: hidden; /* Clip overflow */
  transition: transform 0.3s, box-shadow 0.3s; /* Smooth hover effect */
}

.portfolio-item:hover {
  transform: translateY(-5px); /* Lift effect on hover */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
}

.portfolio-item img {
  width: 100%; /* Full-width images */
  height: auto; /* Maintain aspect ratio */
  max-height: 250px; /* Set max height for images */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Shadow for images */
}

.portfolio-item h3 {
  font-family: 'Poppins', sans-serif;
  color: #6a1b9a; /* Violet text for item titles */
  padding: 10px;
  font-size: 1.5rem;
}

.portfolio-item p {
  padding: 0 10px 10px; /* Padding for item description */
  font-size: 1rem;
  color: black; /* Set item descriptions to black */
}
</style>
