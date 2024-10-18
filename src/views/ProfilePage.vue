<template>
  <div class="portfolio-container">
    <div class="photo-container">
      <img src="@/assets/aspiras.png" alt="Portfolio Photo" class="photo-with-shadow" />
    </div>
    <h1>Welcome to my Profile!</h1>
    <h2>Mary Joyce Y. Aspiras</h2>
    <p>I am a 4th-year Computer Engineering student passionate about technology and innovation. My goal is to develop intelligent systems that transform industries and contribute to sustainable tech solutions. In my spare time, I enjoy music, which fuels my creativity and brings balance to my life.</p>
    <!-- You can add your portfolio items here -->
  </div>
</template>

<script>
export default {
  name: "PortfolioPage", // Ensure the name here matches the actual component or file name
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Raleway:wght@400&display=swap');

.portfolio-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.photo-container {
  display: flex; /* Use flexbox to center the image */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  margin: 50px 0; /* Add some space above and below the photo */
}

.photo-with-shadow {
  width: 150px; /* Adjust the size of the photo */
  height: auto; /* Maintain aspect ratio */
  border-radius: 10px; /* Optional: Rounded corners */
  object-fit: cover; /* Ensure the image covers the area */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); /* Add shadow */
}

h1 {
  font-family: 'Poppins', sans-serif; /* Use the creative font for the heading */
  color: #6a1b9a; /* Violet */
  margin-top: 20px; /* Adjust margin as needed */
  font-size: 2.5rem;
}

h2 {
  font-family: 'Poppins', sans-serif; /* Use the same font for the subheader */
  color: #4a148c; /* A complementary color for the subheader */
  margin: 10px 0; /* Add some space around the subheader */
  font-size: 1.5rem; /* Adjust size as needed */
}

p {
  font-family: 'Raleway', sans-serif; /* Use a different font for the paragraph */
  margin-top: 20px; /* Space above the paragraph */
  font-size: 1rem; /* Adjust font size as needed */
}
</style>
