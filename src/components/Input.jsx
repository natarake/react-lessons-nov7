import React from "react";

const Input = () => {
  const contactMessage = document.getElementById("contact-message");
  const contactUser = document.getElementById("contact-user");

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if the field has a value
    if (contactUser.value === "") {
      // Add and remove color
      contactMessage.classList.remove("color-green");
      contactMessage.classList.add("color-red");
      // Show message
      contactMessage.textContent = "You must enter your email! 😉";
      // Remove message after 3 seconds
      setTimeout(() => {
        contactMessage.textContent = "";
      }, 3000);
    } else {
      // Show message and add color
      contactMessage.classList.add("color-green");
      contactMessage.textContent = "You registered successfully! 💪";

      // Remove message after 3 seconds
//       setTimeout(() => {
//         contactMessage.textContent = "";
//       }, 3000);

      // To clear the input field
      contactUser.value = "";
    }
  };

  return (
    <div className="container">
      <h3 className="text-light text-center">Subscribe to our Newsletter</h3>
      <form action="" className="input-group mb-3" id="contact-form">
        <input
          type="email"
          name="user_email"
          className="form-control"
          id="contact-user"
        />
        <button
          onClick={sendEmail}
          type="submit"
          className="btn btn-warning fw-bolder"
        >
          Subscribe
        </button>
      </form>
      <p id="contact-message"></p>
    </div>
  );
};

export default Input;
