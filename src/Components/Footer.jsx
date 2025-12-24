import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-purple-800 to-purple-900 text-gray-200 py-16 px-6 overflow-hidden">
      {/* Decorative Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">TEXIFY</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Your partner in crafting digital experiences that elevate your brand
            and captivate your audience.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-3 mt-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition transform hover:scale-110"
            >
              <FaInstagram className="text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition transform hover:scale-110"
            >
              <FaFacebookF className="text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition transform hover:scale-110"
            >
              <FaLinkedinIn className="text-white" />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-purple-300 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-300 transition">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-300 transition">
                Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-300 transition">
                Career
              </a>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-white font-semibold mb-4">Help</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-purple-300 transition">
                Customer Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-300 transition">
                Delivery Details
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-300 transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-300 transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-purple-300 transition">
                Free Ebooks
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-300 transition">
                How To Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-300 transition">
                Subscribe TCI
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} TEXIFY. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
