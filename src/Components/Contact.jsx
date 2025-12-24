import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-gray-100 via-white to-gray-100 py-24 px-6"
    >
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-purple-800">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg">
            Have a project in mind or just want to say hello? Fill out the form
            or reach us directly at our contact details below.
          </p>

          <ul className="space-y-4">
            <li className="flex items-center gap-4 bg-white shadow-md rounded-xl px-5 py-3 hover:scale-105 transition transform cursor-pointer">
              <FaPhoneAlt className="text-purple-600 text-xl animate-bounce" />
              <span className="text-gray-700 font-medium">+234 7061158745</span>
            </li>
            <li className="flex items-center gap-4 bg-white shadow-md rounded-xl px-5 py-3 hover:scale-105 transition transform cursor-pointer">
              <FaEnvelope className="text-purple-600 text-xl animate-bounce" />
              <span className="text-gray-700 font-medium">info@texify.com</span>
            </li>
            <li className="flex items-center gap-4 bg-white shadow-md rounded-xl px-5 py-3 hover:scale-105 transition transform cursor-pointer">
              <FaMapMarkerAlt className="text-purple-600 text-xl animate-bounce" />
              <span className="text-gray-700 font-medium">
                Abeokuta, Ogun State.
              </span>
            </li>
          </ul>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-white shadow-2xl rounded-3xl p-10 relative overflow-hidden">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Send Us a Message
          </h3>
          <form className="space-y-5">
            <div className="relative">
              <input
                type="text"
                placeholder="Your Name"
                className="peer w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-transparent"
              />
              <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-purple-600 peer-focus:text-sm">
                Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="Your Email"
                className="peer w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-transparent"
              />
              <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-purple-600 peer-focus:text-sm">
                Email
              </label>
            </div>

            <div className="relative">
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="peer w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-transparent"
              ></textarea>
              <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-purple-600 peer-focus:text-sm">
                Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-3 rounded-2xl font-semibold hover:scale-105 transition transform shadow-lg"
            >
              Send Message
            </button>
          </form>

          {/* Optional subtle floating icon */}
          <div className="absolute bottom-4 right-4 text-purple-200 text-8xl opacity-10 select-none pointer-events-none">
            ✉
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
