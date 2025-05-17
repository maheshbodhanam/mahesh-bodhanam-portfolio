import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        "https://mahesh-bodhanam-backend.onrender.com/api/contact",
        formData
      );
      toast.success("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("❌ Error sending message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">
            Interested in working together or have a project idea? Fill out the
            form below or reach out directly using the contact details.
          </p>
        </div>

        {/* Extra Info Section */}
        <div className="mb-10 space-y-4 text-sm md:text-base">
          <p>
            <strong>Mahesh Bodhanam</strong> – UI / React / Frontend / MERN
            Stack / Full Stack Developer
          </p>
          <p>📍 Hyderabad, India</p>
          <p>
            📧 Email:
            <span className="text-cyan-400 underline pl-2">
              br95bm@gmail.com
            </span>
          </p>
          <p>
            📱 Phone:
            <span className="text-cyan-400 underline pl-2">+91 8179460185</span>
          </p>

          <p>
            🔗 LinkedIn:
            <a
              href="https://www.linkedin.com/in/mahesh-bodhanam-3a4793188/"
              className="text-cyan-400 underline pl-2"
            >
              linkedin.com/in/mahesh-bodhanam
            </a>
          </p>
          <p>
            🐙 GitHub:
            <a
              href="https://github.com/maheshbodhanam"
              className="text-cyan-400 underline pl-2"
            >
              github.com/maheshbodhanam
            </a>
          </p>

          <div className="pt-4 text-justify text-sm text-gray-300">
            <p>
              I specialize in building fast, accessible, and responsive web apps
              tailored to your business needs. Whether you're a startup, agency,
              or individual looking for a dedicated developer, I'm here to bring
              your vision to life.
            </p>
            <p className="pt-2">
              Let’s collaborate to build impactful digital products — from UI
              design to full-stack development.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              value={formData.message}
              onChange={handleChange}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center justify-center rounded-md duration-300 ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:scale-110"
              }`}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  Sending...
                </div>
              ) : (
                "Let's talk"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
