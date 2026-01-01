import React, { useEffect, useRef, useState } from "react";
import { CONTACT_CONFIG, SOCIAL_LINKS, PARTICLE_COLORS } from "@/data/constants";
import { UI_TEXT } from "@/data/uiConstants";
import { Send } from "lucide-react";
import RevealAnimation from "./ui/RevealAnimation";
import ParticleSystem from "./ui/ParticleSystem";
import FloatingElements from "./ui/FloatingElements";

type FormState = {
  name: string;
  email: string;
  subject: string;
  date: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  subject: "",
  date: "",
  message: "",
};

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Modal + countdown states
  const [showModal, setShowModal] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [countdown, setCountdown] = useState<number>(5);
  const countdownRef = useRef<number | null>(null);

  // ✅ Field validation
  const validateField = (id: string, value: string) => {
    let error = "";
    switch (id) {
      case "name":
        if (!value.trim()) error = UI_TEXT.contact.form.errors.nameRequired;
        break;
      case "email":
        if (!value.trim()) error = UI_TEXT.contact.form.errors.emailRequired;
        else if (!/\S+@\S+\.\S+/.test(value)) error = UI_TEXT.contact.form.errors.emailInvalid;
        break;
      case "subject":
        if (!value.trim()) error = UI_TEXT.contact.form.errors.subjectRequired;
        break;
      case "date":
        if (!value) error = UI_TEXT.contact.form.errors.dateRequired;
        break;
      case "message":
        if (!value.trim()) error = UI_TEXT.contact.form.errors.messageRequired;
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [id]: error }));
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    validateField(id, value);
  };

  // ✅ Cleanup interval
  useEffect(() => {
    return () => {
      if (countdownRef.current) {
        window.clearInterval(countdownRef.current);
      }
    };
  }, []);

  // ✅ Start modal countdown
  const startModalCountdown = () => {
    setCountdown(5);
    if (countdownRef.current) {
      window.clearInterval(countdownRef.current);
    }
    countdownRef.current = window.setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          if (countdownRef.current) {
            window.clearInterval(countdownRef.current);
            countdownRef.current = null;
          }
          setIsFadingOut(true);
          setTimeout(() => {
            setShowModal(false);
            setIsFadingOut(false);
          }, 500);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // ✅ Submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const currentErrors: Record<string, string> = {};
    (Object.keys(formData) as Array<keyof FormState>).forEach((k) => {
      const err = validateField(k, formData[k]);
      if (err) currentErrors[k] = err;
    });

    if (Object.keys(currentErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const now = new Date();
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "Asia/Kolkata";

      const payload = {
        ...formData,
        submittedAtFormatted: now.toLocaleString(undefined, {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZoneName: "short",
        }),
        submittedAtISO: now.toISOString(),
        submittedAtLocal: now.toLocaleString(),
        timezone,
      };

      const FORMSPREE_URL = CONTACT_CONFIG.formspreeUrl;

      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setShowModal(true);
        startModalCountdown();
        setFormData(initialForm);
        setErrors({});
      } else {
        const data = await response.json().catch(() => null);
        alert(`Something went wrong: ${data?.error || response.status}`);
      }
    } catch (err) {
      console.error("Submit error:", err);
      alert("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-100 overflow-hidden"
    >
      {/* Particle System Background */}
      <ParticleSystem
        particleCount={35}
        colors={PARTICLE_COLORS.contact}
        speed={0.3}
        size={{ min: 1, max: 3 }}
        className="-z-10"
      />

      {/* Floating Elements */}
      <FloatingElements
        count={5}
        className="-z-10"
      />

      {/* Animated background elements */}
      <div className="absolute top-10 right-1/4 w-32 h-32 bg-purple-300/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-blue-300/20 rounded-full blur-2xl animate-float animation-delay-300"></div>
      <div className="absolute top-1/2 right-1/3 w-36 h-36 bg-indigo-300/20 rounded-full blur-3xl animate-float animation-delay-500"></div>

      <div className="section-container relative z-10">
        <RevealAnimation animation="fade-in-down" delay={100}>
          <h2 className="mb-2 text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 md:text-4xl">
            {UI_TEXT.contact.title}
          </h2>
          <div className="mx-auto mb-6 w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse" />
          <p className="mx-auto text-center section-subtitle">
            {UI_TEXT.contact.subtitle}
          </p>

          {/* Hire Me Button */}
          <div className="flex justify-center mt-8">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex gap-3 items-center py-4 px-12 text-white text-lg font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-xl transition-all duration-300 transform hover:from-emerald-700 hover:to-teal-700 hover:shadow-2xl hover:-translate-y-2 hover:scale-110"
            >
              <Send className="w-5 h-5" />
              {UI_TEXT.contact.hireMe}
            </a>
          </div>
        </RevealAnimation>

        {/* form container */}
        <div className="mx-auto mt-12 max-w-3xl">
          <RevealAnimation animation="fade-in-up" delay={200}>
            <div className="p-8 mt-10 rounded-2xl border shadow-lg bg-gradient-to-br from-card/95 to-background/80 border-border backdrop-blur-sm">
              <h3 className="mb-6 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {UI_TEXT.contact.sendMessage}
              </h3>

              {/* form */}
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      {UI_TEXT.contact.form.name}
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="py-3 px-4 w-full rounded-lg border border-input focus:ring-2 focus:ring-ring focus:outline-none bg-background/90"
                      placeholder={UI_TEXT.contact.form.namePlaceholder}
                    />
                    {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      {UI_TEXT.contact.form.email}
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="py-3 px-4 w-full rounded-lg border border-input focus:ring-2 focus:ring-ring focus:outline-none bg-background/90"
                      placeholder={UI_TEXT.contact.form.emailPlaceholder}
                    />
                    {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                    {UI_TEXT.contact.form.subject}
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    className="py-3 px-4 w-full rounded-lg border border-input focus:ring-2 focus:ring-ring focus:outline-none bg-background/90"
                    placeholder={UI_TEXT.contact.form.subjectPlaceholder}
                  />
                  {errors.subject && <p className="text-destructive text-sm mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="date" className="block mb-2 text-sm font-medium">
                    {UI_TEXT.contact.form.date}
                  </label>
                  <input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="py-3 px-4 w-full rounded-lg border border-input focus:ring-2 focus:ring-ring focus:outline-none bg-background/90"
                  />
                  {errors.date && <p className="text-destructive text-sm mt-1">{errors.date}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    {UI_TEXT.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="py-3 px-4 w-full rounded-lg border border-input focus:ring-2 focus:ring-ring focus:outline-none bg-background/90"
                    placeholder={UI_TEXT.contact.form.messagePlaceholder}
                  />
                  {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex gap-2 justify-center items-center py-3 px-6 w-full text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-md transition-all duration-300 transform hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? UI_TEXT.contact.form.sending : (<><Send className="w-4 h-4" /> {UI_TEXT.contact.form.send}</>)}
                </button>
              </form>
            </div>
          </RevealAnimation>
        </div>
      </div>

      {/* ✅ Modal */}
      {showModal && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-500 ${isFadingOut ? "opacity-0" : "opacity-100"
            } bg-black/50`}
        >
          <div
            className={`bg-card p-6 rounded-lg shadow-lg text-center transform transition-all duration-500 ${isFadingOut ? "scale-95 opacity-0" : "scale-100 opacity-100"
              } w-full max-w-sm border border-border`}
          >
            <h3 className="text-xl font-bold mb-2 text-card-foreground">{UI_TEXT.contact.form.successTitle}</h3>
            <p className="text-muted-foreground mb-4">
              {UI_TEXT.contact.form.successMessage}
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="text-sm text-muted-foreground">{UI_TEXT.contact.form.closeIn}</div>
              <div className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-md">
                {countdown}s
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
