import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile21.png";
import { useTheme } from "../../context/ThemeContext";

const About = () => {
  const { isDarkMode } = useTheme();
  return (
    <section
      id="about"
      // className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-2 md:mt-12 lg:mt-2"
    >
      {/* <div className="flex flex-col-reverse md:flex-row justify-between items-center"> */}
      <div className="flex justify-center items-center">
        {/*-------------------------- Left Side --------------------------------------------- */}
        {/* <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0"> */}
        <div className="w-full max-w-4xl text-center mt-8 flex flex-col items-center">
          {/* <div className="md:w-1/2 text-center md:text-left mt-2 md:mt-0"> */}

          {/* Greeting */}
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight ${isDarkMode ? "text-white" : "text-gray-900"
            }`}>
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight ${isDarkMode ? "text-white" : "text-gray-900"
            }`}>
            Deepak Jakkul
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className={isDarkMode ? "text-white" : "text-gray-900"}>I am a </span>
            <Typewriter
              words={[
                "Software Engineer",
                "Fullstack Developer",
                "Gen AI Engineer/Enthusiast",
                "Backend Specialist",
                "AWS Certified",
              ]}
              loop={0} // 0 = infinite loop
              cursor
              cursorStyle={<span className="text-[#8245ec]">|</span>}
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h3>

          {/*--------------------- About Me Paragraph ----------------------*/}
          <p className={`text-base sm:text-lg md:text-lg mb-10 mt-8 leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}>
            I build real-world, scalable applications with a focus on backend
            architecture, performance, and production-ready AI integrations. From
            GenAI-powered platforms to sophisticated delivery systems, I love creating
            products that solve complex, practical problems.
          </p>

          {/* <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start"> */}
          <div className="flex flex-wrap gap-4 mt-8 justify-center">
            {/*------------------ Resume Button ------------------------ */}
            <a
              href="https://drive.google.com/file/d/1j9knst8zXFJvQQ0BBdvXGBMstnAYTm8J/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white py-3 px-6 rounded-full text-sm font-bold transition duration-300 transform hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
              }}
            >
              <FaDownload />
              Resume
            </a>

            {/*------------------ Linkedin Button ------------------------ */}
            <a
              href="https://www.linkedin.com/in/deepak-jakkul/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white py-3 px-6 rounded-full text-sm font-bold transition duration-300 transform hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
              }}
            >
              <FaLinkedin />
              LinkedIn
            </a>

            {/*------------------ Email Button ------------------------ */}
            <a
              href="mailto:deepakjakkul2002@gmail.com"
              className="flex items-center gap-2 text-white py-3 px-6 rounded-full text-sm font-bold transition duration-300 transform hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
              }}
            >
              <FaEnvelope />
              Email Me
            </a>
          </div>
        </div>

        {/* ----------------Right Side---------------------------------- */}
        {/* <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Deepak Jakkul"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div> */}
      </div>

      <div className="mt-16 py-12">
        <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"
          }`}>
          ⚡ About Me
        </h2>

        <div className={`text-base md:text-lg leading-relaxed space-y-6 max-w-4xl ${isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}>
          <p>
            Hi, I’m Deepak. I’m a Full-Stack Software Engineer who specializes in building highly scalable, production-ready applications. While I enjoy working across the entire stack, my core passion lies in backend architecture, database optimization, and cloud-native engineering.
          </p>

          <p>
            I take pride in architecting real-world solutions that go far beyond standard tutorials. From deploying AI-driven RAG pipelines with vector databases, to engineering comprehensive platforms like VINGO featuring real-time WebSockets and Redis caching, my focus is always on system reliability, clean code, and solving complex technical challenges.
          </p>

          <p>
            Currently, as a Software Engineer Intern at Forstu.co, I have hands-on experience optimizing RESTful APIs, automating intensive document verification workflows, and orchestrating zero-downtime AWS deployments. I thrive in fast-paced Agile environments where I can own features end-to-end and directly impact product scalability.
          </p>

          <p>
            I’m continuously exploring modern cloud ecosystems and distributed system design, driven by the goal of engineering resilient, high-performance software that delivers genuine business value.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
