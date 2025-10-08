import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gray-100 py-16 px-6" id="contact">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-purple-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8">
            Have a project in mind or just want to say hello? Fill out the form
            or reach us directly at our contact details below.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center space-x-3">
              <FaPhoneAlt className="text-blue-600" />
              <span>+234 7061158745</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-blue-600" />
              <span>info@digitalagency.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-blue-600" />
              <span>123 Agency Street, New York</span>
            </li>
          </ul>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
