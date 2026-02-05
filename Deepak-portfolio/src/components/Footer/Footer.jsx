import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const { isDarkMode } = useTheme();
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={`py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] ${
      isDarkMode ? "text-white bg-[#050414]" : "text-gray-900 bg-white"
    }`}>
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className={`text-xl font-semibold ${isDarkMode ? "text-purple-500" : "text-purple-600"}`}>Deepak Jakkul</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className={`text-sm sm:text-base my-1 ${isDarkMode ? "hover:text-purple-500" : "hover:text-purple-600"}`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/tarun.kaushik.3511041/" },
            { icon: <FaTwitter />, link: "https://twitter.com/djdeepak2002" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/deepak-jakkul" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/djdeepak2002/" }
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xl transition-transform transform hover:scale-110 ${
                isDarkMode ? "hover:text-purple-500" : "hover:text-purple-600"
              }`}
            >
              {item.icon}
            </a>  
          ))}
        </div>

        {/* Copyright Text */}
        <p className={`text-sm mt-6 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
          © 2026 Deepak Jakkul. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;