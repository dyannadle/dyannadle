import React, { useState } from "react";
import { Send } from "lucide-react";
import RevealAnimation from "./ui/RevealAnimation";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    date: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const validateField = (id: string, value: string) => {
    let error = "";

    switch (id) {
      case "name":
        if (!value.trim()) error = "Name is required";
        break;
      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(value)) error = "Invalid email format";
        break;
      case "subject":
        if (!value.trim()) error = "Subject is required";
        break;
      case "date":
        if (!value) error = "Date is required";
        break;
      case "message":
        if (!value.trim()) error = "Message is required";
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [id]: error }));
    return error;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    // Validate in real time
    validateField(id, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields before sending
    const validationErrors: { [key: string]: string } = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, (formData as any)[key]);
      if (error) validationErrors[key] = error;
    });

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mkgqjaol", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowModal(true);

        // Auto-close modal after 5 seconds
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            setShowModal(false);
            setIsFadingOut(false);
          }, 500);
        }, 5000);

        setFormData({ name: "", email: "", subject: "", date: "", message: "" });
        setErrors({});
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-rose-50 to-pink-50"
    >
      <div className="section-container">
        <RevealAnimation animation="fade-in-down" delay={100}>
          <h2 className="mb-2 text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 md:text-4xl">
            Contact Me
          </h2>
          <div className="mx-auto mb-6 w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          <p className="mx-auto text-center section-subtitle">
            Get in touch with me for opportunities or collaborations
          </p>
        </RevealAnimation>

        {/* Contact Form */}
        <form
          className="space-y-6 max-w-2xl mx-auto mt-10"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="p-3 border rounded-lg w-full"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="p-3 border rounded-lg w-full"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div>
            <input
              id="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="p-3 border rounded-lg w-full"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
            )}
          </div>

          <div>
            <input
              id="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              className="p-3 border rounded-lg w-full"
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">{errors.date}</p>
            )}
          </div>

          <div>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              className="p-3 border rounded-lg w-full"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center gap-2 p-3 w-full text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-md hover:opacity-90 disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : <><Send size={16}/> Send Message</>}
          </button>
        </form>

        {/* Thank-You Modal */}
        {showModal && (
          <div
            className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-500 ${
              isFadingOut ? "opacity-0" : "opacity-100"
            } bg-black/50`}
          >
            <div
              className={`bg-white p-6 rounded-lg shadow-lg text-center transform transition-all duration-500 ${
                isFadingOut ? "scale-95 opacity-0" : "scale-100 opacity-100"
              }`}
            >
              <h3 className="text-xl font-bold mb-2">✅ Thank You!</h3>
              <p>Your message has been sent successfully.</p>
              <p className="mt-2 text-sm text-gray-500">
                This will close automatically in 5 seconds...
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
