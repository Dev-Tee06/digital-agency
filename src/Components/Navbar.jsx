import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Careers", path: "/career" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            <span className="text-purple-600">TEX</span>
            <span className="text-gray-900">IFY</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 font-medium hover:text-purple-600 transition"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/contact"
              className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-3xl text-gray-900 z-[60]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div className="md:hidden">
        {/* Overlay */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        />

        {/* Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-[75%] max-w-sm bg-white/90 backdrop-blur-xl z-50 transform transition-transform duration-500 ease-in-out shadow-xl border-l ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Menu Content */}
          <div className="flex flex-col justify-center h-full px-8 space-y-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`text-xl font-semibold text-gray-800 transition-all duration-500 ${
                  menuOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                } hover:text-purple-600`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {link.name}
              </Link>
            ))}

            {/* CTA */}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-full text-center font-semibold hover:bg-purple-700 transition"
            >
              Get in Touch
            </Link>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-indigo-500" />
        </div>
      </div>
    </nav>
  );
};
