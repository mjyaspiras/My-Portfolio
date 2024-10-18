<template>
  <div class="contact-container">
    <!-- Main Heading -->
    <h1>Contact Me</h1>

    <!-- Contact Details Section -->
    <div class="contact-details">
      <h2 class="subheading">Get in Touch!</h2>
      <p>If you have any questions or would like to reach out, feel free to contact me via the following methods:</p>
      <ul>
        <li>Email: <a href="mailto:maryjoyce@example.com">maryjoyce@example.com</a></li>
        <li>Phone: <a href="tel:+1234567890">+123 456 7890</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/maryjoyce" target="_blank">Mary Joyce Aspiras</a></li>
        <li>GitHub: <a href="https://github.com/maryjoyce" target="_blank">github.com/maryjoyce</a></li>
      </ul>
    </div>

    <!-- Contact Form Section -->
    <div class="contact-form">
      <h2 class="subheading">Send Me a Message</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="message" required></textarea>
        </div>
        <button type="submit" class="btn-submit">Send Message</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      console.log("Form submitted:", {
        name: this.name,
        email: this.email,
        message: this.message,
      });
      this.name = "";
      this.email = "";
      this.message = "";
      alert("Message sent successfully!");
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto:wght@400;500&display=swap');

.contact-container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  font-family: 'Roboto', sans-serif; /* Use Roboto for body text */
}

h1 {
  font-family: 'Pacifico', cursive; /* Use Pacifico for main heading */
  color: #6a1b9a; /* Violet */
  margin-top: 50px;
  font-size: 3rem; /* Larger size for emphasis */
}

.subheading {
  color: #ff80bf; /* Pink */
  font-size: 2rem;
  margin: 20px 0;
  text-transform: uppercase; /* Uppercase for emphasis */
}

.contact-details {
  margin: 20px 0;
}

.contact-details ul {
  list-style-type: none;
  padding: 0;
}

.contact-details a {
  color: #6a1b9a; /* Violet */
  text-decoration: underline; /* Underline for links */
}

.contact-form {
  margin-top: 30px;
}

.form-group {
  margin: 15px 0;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 2px solid #ccc; /* Thicker border */
  border-radius: 5px;
  transition: border-color 0.3s; /* Transition for focus effect */
}

input:focus,
textarea:focus {
  border-color: #6a1b9a; /* Change border color on focus */
  outline: none; /* Remove default outline */
}

.btn-submit {
  background-color: #6a1b9a; /* Violet */
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem; /* Slightly larger button text */
  transition: background-color 0.3s; /* Transition for hover effect */
}

.btn-submit:hover {
  background-color: #ff80bf; /* Pink */
}
</style>
