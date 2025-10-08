import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-#e0e0e0 backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-10xl mx-auto px-7">
        <div className="flex justify-between items-center h-16 ">
          <a
            href="#home"
            className=" font-mono text-3xl  font-bold text-purple-800"
          >
            <span className="text-black-500 italic">TESS</span>
          </a>

          <div
            className="w-7 h-7 flex items-center justify-center relative cursor-pointer z-50 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <span className="text-3xl text-white">&times;</span>
            ) : (
              <span className="text-3xl text-black-500">&#9776;</span>
            )}
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-black-500 hover:text-gray font-semibold text-lg cursor-pointer hover:text-purple-500 py-2 hover:border-b-5 hover:border-purple-500 transition-all duration-300"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-black-500 hover:text-gray font-semibold text-lg cursor-pointer py-2 hover:text-purple-500 hover:border-b-5 hover:border-purple-500 transition-all duration-300"
            >
              Services
            </a>
            <a
              href="#blog"
              className="text-black-500 hover:text-gray font-semibold text-lg hover:text-purple-500 cursor-pointer py-2 hover:border-b-5 hover:border-purple-500 transition-all duration-300"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="text-white-500 bg-purple-500 rounded-[50px] w-full  cursor-pointer py-2 px-4 duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
