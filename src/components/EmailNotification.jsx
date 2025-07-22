// components/EmailNotification.jsx
import React from "react";
import emailjs from "@emailjs/browser";

const EmailNotification = ({ name, email, amount }) => {
  const sendEmail = () => {
    const templateParams = {
      to_name: name,
      to_email: email,
      message: `Your rent payment of ₹${amount} was successful.`,
    };

    emailjs
      .send(
        "your_service_id",
        "your_template_id",
        templateParams,
        "your_user_id"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <button
      onClick={sendEmail}
      className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
    >
      📧 Send Email Notification
    </button>
  );
};

export default EmailNotification;
