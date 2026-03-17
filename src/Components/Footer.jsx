import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#05070f] text-gray-200 py-20 px-6 overflow-hidden">
      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/30 blur-[120px] rounded-full"></div>

      {/* Glass Container */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.15)]">
          {/* Left Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-wide">
              TEXIFY
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed">
              Your partner in crafting digital experiences that elevate your
              brand and captivate your audience.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3 mt-4">
              {[FaInstagram, FaFacebookF, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-purple-600 hover:scale-110 transition-all duration-300 shadow-md"
                >
                  <Icon className="text-white text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {["About", "Features", "Works", "Career"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide">
              Help
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                "Customer Support",
                "Delivery Details",
                "Terms & Conditions",
                "Privacy Policy",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">TEXIFY</span>. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
