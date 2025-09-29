import React from "react";

const ContactForm: React.FC = () => {
  return (
    <form
      action="https://formspree.io/f/mkgqjaol" // 🔹 Replace with your real Formspree ID
      method="POST"
      className="space-y-4 bg-white p-6 rounded-xl shadow-md"
    >
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Send a Message</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        required
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
      />

      <textarea
        name="message"
        placeholder="Your message"
        rows={5}
        required
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
      ></textarea>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-3 rounded-lg hover:opacity-90 transition"
      >
        ✈️ Send Message
      </button>
    </form>
  );
};

export default ContactForm;
