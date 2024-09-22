import React, { useState } from "react";
import emailjs from "emailjs-com";
import contactImage from "../assets/conatct.png"; // Replace with your actual image path

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    const templateParams = {
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_pp3eiet",
        "template_351kri8",
        templateParams,
        "EYvWo1aS0EI4NTbsi"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setSuccess(true);
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-100 flex items-center justify-center "
    >
      <div className="flex max-w-6xl w-full mr-6">
        {" "}
        {/* Increased max-w-5xl to max-w-6xl */}
        <div className="flex-1 p-8">
          <img
            src={contactImage}
            alt="Contact"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Contact Me</h1>
          <form onSubmit={sendEmail}>
            <input
              type="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-4 p-3 border border-gray-300 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full mb-4 p-3 border border-gray-300 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className={`w-full p-3 rounded-lg text-white transition ${
                loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
              }`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
            {success && (
              <p className="mt-4 text-green-500">Email sent successfully!</p>
            )}
            {error && (
              <p className="mt-4 text-red-500">
                Failed to send email. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
