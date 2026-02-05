import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled 
          ? isDarkMode 
            ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" 
            : "bg-white bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className={`text-white py-5 flex justify-between items-center ${isDarkMode ? "text-white" : "text-gray-900"}`}>
        {/* Logo */}
        <div className={`text-lg font-semibold cursor-pointer ${isDarkMode ? "text-white" : "text-gray-900"}`}>
          <span className="text-[#8245ec]">&lt;</span>
          <span className={isDarkMode ? "text-white" : "text-gray-900"}>Deepak</span>
          <span className="text-[#8245ec]">/</span>
          <span className={isDarkMode ? "text-white" : "text-gray-900"}>Jakkul</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex space-x-8 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons & Theme Toggle */}
        <div className={`hidden md:flex space-x-4 items-center`}>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition ${
              isDarkMode
                ? "bg-gray-800 hover:bg-gray-700 text-yellow-400"
                : "bg-gray-200 hover:bg-gray-300 text-gray-900"
            }`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
          </button>
          <a
            href="https://github.com/Djdeepak2002"
            target="_blank"
            rel="noopener noreferrer"
            className={`${isDarkMode ? "text-gray-300 hover:text-[#8245ec]" : "text-gray-600 hover:text-[#8245ec]"}`}
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/deepak-jakkul"
            target="_blank"
            rel="noopener noreferrer"
            className={`${isDarkMode ? "text-gray-300 hover:text-[#8245ec]" : "text-gray-600 hover:text-[#8245ec]"}`}
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className={`md:hidden flex items-center gap-4`}>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition ${
              isDarkMode
                ? "bg-gray-800 hover:bg-gray-700 text-yellow-400"
                : "bg-gray-200 hover:bg-gray-300 text-gray-900"
            }`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
          </button>
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className={`absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 ${isDarkMode ? "bg-[#050414]" : "bg-white"} bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden`}>
          <ul className={`flex flex-col items-center space-y-4 py-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer ${isDarkMode ? "hover:text-white" : "hover:text-gray-900"} ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://github.com/Djdeepak2002"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/deepak-jakkul"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;