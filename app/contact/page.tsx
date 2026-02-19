"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/ui/Navbar";
import { ArrowDown, Headset } from "lucide-react";
import { cn } from "@/util/util";
import { Italiana } from "next/font/google";

const italiana = Italiana({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Contact() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [animationActive, setAnimationActive] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    agreeToTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          agreeToTerms: false,
        });
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          result.message || "An error occurred while sending your message."
        );
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage("An error occurred while sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    // Start animation after a short delay
    const timer = setTimeout(() => {
      setAnimationActive(true);
    }, 500);

    // Hide scroll indicator when user scrolls
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="text-white relative overflow-hidden">
      {/* Hero section with video background */}
      <div className="relative h-screen">
        {/* Background video */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-screen object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video/about-bg-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Navbar positioned with higher z-index */}
        <div className="relative z-20">
          <Navbar />
        </div>
        {/* Gradient Overlay for smooth blending */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#17181b] via-transparent to-[#17181b]"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full -mt-24 sm:-mt-16 lg:-mt-20">
          {/* Large animated "OUR PORTFOLIO" text */}
          <div className="overflow-hidden h-20 sm:h-24 md:h-32 lg:h-48 flex items-center justify-center px-4">
            <h1
              className={`text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[150px] 2xl:text-[170px] transition-transform duration-1500 ease-in-out ${
                animationActive ? "translate-y-0" : "translate-y-full"
              }`}
              style={{
                animation: animationActive
                  ? "fade-in-up-out 3s infinite"
                  : "none",
              }}
            >
              <span className={italiana.className}>GET IN</span>
              <span className={cn(italiana.className, "ml-2 sm:ml-4 lg:ml-8")}>
                TOUCH
              </span>
            </h1>
          </div>

          {/* Scroll indicator */}
          {showScrollIndicator && (
            <div
              className="absolute bottom-48 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
              onClick={() =>
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
              }
            >
              <div className="size-20 sm:size-24 lg:size-32 rounded-full bg-white/10 border border-white/30 flex items-center justify-center hover:border-white/50 transition-colors overflow-hidden">
              {/* <div className="size-20 sm:size-24 lg:size-32 rounded-full bg-white/10 border border-white/30 flex items-center justify-center hover:border-white/50 transition-colors overflow-hidden backdrop-blur-sm"> */}
                <ArrowDown className="size-4 sm:size-5 lg:size-6 text-white animate-scroll-arrow" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="bg-[#17181b] py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-8 sm:mb-12 lg:mb-16 items-center justify-center">
            {/* Email Card */}
            <div className="h-[140px] sm:h-[150px] lg:h-[170px] border border-white/20 bg-white/5 backdrop-blur-sm p-4 sm:p-6 lg:p-8 flex flex-col items-center text-center justify-center hover:border-white/40 transition-all">
              <h3 className="text-lg sm:text-xl mb-2">EMAIL</h3>
              <a
                href="mailto:info@rmaacpk.com"
                className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
              >
                info@rmaacpk.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="h-[140px] sm:h-[150px] lg:h-[170px] border border-white/20 bg-white/5 backdrop-blur-sm p-4 sm:p-6 lg:p-8 flex flex-col items-center text-center justify-center hover:border-white/40 transition-all">
              <h3 className="text-lg sm:text-xl mb-2">PHONE</h3>
              <a
                href="tel:+923091888879"
                className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
              >
                +92 309 188 8879
              </a>
            </div>

            {/* Location Card */}
            <div className="h-[140px] sm:h-[150px] lg:h-[170px] border border-white/20 bg-white/5 backdrop-blur-sm p-4 sm:p-6 lg:p-8 flex flex-col items-center text-center justify-center hover:border-white/40 transition-all sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg sm:text-xl mb-2">LOCATION</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Plaza No. 31/32, 1st Floor,
                <br />
                Westeria Road, Sector C, DHA 2<br />
                Islamabad.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Split Contact Form Section */}
      <div className="bg-[#17181b] pt-12 sm:pt-16 lg:pt-20 -mt-6 sm:-mt-8 lg:-mt-10">
        <div className="hidden md:block w-full h-px bg-white/20 mb-8 sm:mb-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16">
            {/* Left Column - Text Content */}
            <div className="flex-1 flex flex-col justify-start pr-0 lg:pr-12 mb-8 sm:mb-12 lg:mb-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 sm:mb-6">
                Get In Touch
                <br />
                With Us Today
              </h2>
              <p className="text-gray-400 mb-8 sm:mb-12 lg:mb-16 max-w-md text-sm sm:text-base">
                Whether you have a vision to build, design, or scale, we’re
                ready to listen. Our team is here to bring your ideas to life
                with clarity, care and precision.
              </p>

              {/* Customer Support */}
              <div className="flex items-start mb-6 sm:mb-8">
                <div className="bg-[#222427] border border-white/20 p-3 sm:p-4 mr-3 sm:mr-4">
                  <Headset className="size-4 sm:size-5 lg:size-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl mb-2">
                    24/7 Customer Support
                  </h3>
                  <div className="w-full h-px bg-white/20 my-3 sm:my-4"></div>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Day or night, we’re only a message away. Our dedicated team
                    is always on standby to assist, guide, and support you,
                    whenever you need us.
                  </p>
                </div>
              </div>
            </div>

            {/* Vertical Divider - Only visible on lg screens and up */}
            <div className="hidden lg:block w-px bg-white/20 mx-6 -mt-10"></div>

            {/* Right Column - Form */}
            <div className="flex-1 pl-0 lg:pl-12 mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl mb-3 sm:mb-4">
                Connect With RMAAC
              </h2>
              <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
                Let’s start the conversation. Reach out to explore how RMAAC can
                support your goals across construction, design, or digital
                innovation and beyond.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2"
                  >
                    Your Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/20 py-2 sm:py-3 text-white focus:outline-none focus:border-white text-sm sm:text-base"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/20 py-2 sm:py-3 text-white focus:outline-none focus:border-white text-sm sm:text-base"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2"
                  >
                    Phone*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone || ""}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/20 py-2 sm:py-3 text-white focus:outline-none focus:border-white text-sm sm:text-base"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2"
                  >
                    Subject*
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/20 py-2 sm:py-3 text-white focus:outline-none focus:border-white text-sm sm:text-base"
                    placeholder="Enter subject"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2"
                  >
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full bg-transparent border-b border-white/20 py-2 sm:py-3 text-white focus:outline-none focus:border-white text-sm sm:text-base resize-none"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                {/* Terms and Conditions Checkbox */}
                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    required
                    className="mt-1 w-4 h-4 sm:w-5 sm:h-5 border border-white/40 bg-transparent checked:bg-white checked:border-white focus:outline-none focus:ring-0 cursor-pointer"
                  />
                  <label
                    htmlFor="agreeToTerms"
                    className="text-xs sm:text-sm text-gray-300 cursor-pointer mt-1"
                  >
                    I agree to the <strong>terms and conditions</strong>
                  </label>
                </div>

                {/* Submit Button with inline separators */}
                <div className="flex flex-col items-center justify-center sm:justify-start sm:items-start md:justify-start md:items-start lg:justify-start lg:items-start">
                  <div className="inline-block">
                    <div className="h-[1px] bg-white/20 mb-3"></div>
                    <button
                      type="submit"
                      className="text-white text-sm sm:text-base font-normal hover:text-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isSubmitting || !formData.agreeToTerms}
                    >
                      {isSubmitting ? "Sending..." : "Proceed to submit"}
                    </button>
                    <div className="h-[1px] bg-white/20 mt-4"></div>
                  </div>
                </div>

                {submitMessage && (
                  <p
                    className={`mt-4 text-sm ${
                      submitStatus === "success"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {submitMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up-out {
          0%,
          100% {
            opacity: 0;
            transform: translateY(20px);
          }
          50% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scroll-arrow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }

        .animate-scroll-arrow {
          animation: scroll-arrow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
