import React, { useState } from "react";
import { Linkedin, Mail, Phone, Send } from "lucide-react";
import RevealAnimation from "./ui/RevealAnimation";
import { useToast } from "@/hooks/use-toast";

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mkgqjaol", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "✅ Success",
          description: "Your message has been sent successfully!",
        });

        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({
          title: "❌ Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "❌ Error",
        description: "Network issue. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      label: "Email",
      value: "dyannadle05@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      link: "mailto:dyannadle05@gmail.com",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      label: "LinkedIn",
      value: "deepak-yannadle-4319771a1",
      icon: <Linkedin className="w-5 h-5" />,
      link: "https://www.linkedin.com/in/deepak-yannadle-4319771a1/",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
  ];

  return (
    <section
      id="contact"
      className="overflow-hidden relative py-20 bg-gradient-to-b from-rose-50/40 to-pink-50/30"
    >
      {/* Background Effects */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-rose-200/20 blur-3xl animate-float"></div>
      <div className="absolute right-20 bottom-20 w-28 h-28 rounded-full bg-pink-200/20 blur-2xl animate-float animation-delay-500"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-purple-200/15 blur-xl animate-float animation-delay-700"></div>

      <div className="section-container">
        <RevealAnimation animation="fade-in-down" delay={100}>
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 md:text-4xl">
            Contact Me
          </h2>
          <div className="mx-auto mb-6 w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          <p className="mx-auto text-center section-subtitle">
            Get in touch with me for opportunities or collaborations
          </p>
        </RevealAnimation>

        <div className="mx-auto mt-12 max-w-3xl">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {contactInfo.map((info, index) => (
              <RevealAnimation
                key={index}
                animation="fade-in-up"
                delay={index * 100}
              >
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass bg-gradient-to-br from-white/95 to-${info.bgColor} p-6 rounded-xl flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] transform hover:scale-110 border border-blue-100/50 group cursor-pointer`}
                >
                  <div
                    className={`w-12 h-12 ${info.bgColor} ${info.iconColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-125 transition-transform duration-300`}
                  >
                    {info.icon}
                  </div>
                  <h3 className="mb-1 text-lg font-semibold group-hover:text-blue-700">
                    {info.label}
                  </h3>
                  <p className="text-sm group-hover:text-blue-600 text-muted-foreground">
                    {info.value}
                  </p>
                </a>
              </RevealAnimation>
            ))}
          </div>

          {/* Contact Form */}
          <RevealAnimation animation="fade-in-up" delay={500}>
            <div className="p-8 mt-10 bg-gradient-to-br rounded-2xl border shadow-lg glass from-white/95 to-blue-50/80 border-blue-100/50 backdrop-blur-sm">
              <h3 className="mb-6 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Send a Message
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="py-3 px-4 w-full rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="py-3 px-4 w-full rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="py-3 px-4 w-full rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="py-3 px-4 w-full rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-600 focus:outline-none resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex gap-2 justify-center items-center py-3 px-6 w-full text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-md hover:scale-105 transition-all disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : (<><Send className="w-4 h-4" /> Send Message</>)}
                </button>
              </form>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
