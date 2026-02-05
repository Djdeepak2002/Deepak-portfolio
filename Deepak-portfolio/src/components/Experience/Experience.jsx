import React from "react";
import { experiences } from "../../constants";
import { useTheme } from "../../context/ThemeContext";

const Experience = () => {
  const { isDarkMode } = useTheme();
  return (
    <section
      id="experience"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 98%, 75% 96%, 0 100%)",
        background:
          isDarkMode
            ? "linear-gradient(38.73deg, rgba(204,0,187,0.15) 0%, rgba(201,32,184,0) 50%), linear-gradient(141.27deg, rgba(0,70,209,0) 50%, rgba(0,70,209,0.15) 100%)"
            : "linear-gradient(38.73deg, rgba(204,0,187,0.05) 0%, rgba(201,32,184,0) 50%), linear-gradient(141.27deg, rgba(0,70,209,0) 50%, rgba(0,70,209,0.05) 100%)",
      }}
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className={`text-4xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className={`mt-4 text-lg font-semibold ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
          A collection of my work experience and roles across organizations
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className={`absolute left-0 w-1 h-full md:left-6 ${isDarkMode ? "bg-white" : "bg-gray-900"}`}></div>

        {/* Experience Cards */}
        {experiences.map((experience) => (
          <div key={experience.id} className="mb-14 relative">
            {/* Timeline Logo */}
            <div className={`absolute left-0 md:left-8 top-6 transform -translate-x-1/2 w-12 h-12 rounded-full overflow-hidden ring-4 flex justify-center items-center z-10 ${
              isDarkMode
                ? "ring-[#050414] bg-gray-900"
                : "ring-white bg-gray-100"
            }`}>
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Experience Card */}
            <div className={`ml-20 md:ml-28 p-6 md:p-8 rounded-2xl border backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-[1.02] ${
              isDarkMode
                ? "border-white bg-gray-900"
                : "border-gray-300 bg-gray-50"
            }`}>
              {/* Header Row */}
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden shrink-0">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className={`text-xl md:text-2xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    {experience.role}
                  </h3>
                  <h4 className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    {experience.company}
                  </h4>
                  <p className={`text-xs mt-1 ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
                    {experience.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              <ul className={`mt-4 list-disc pl-5 space-y-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                {experience.desc.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* Skills */}
              <div className="mt-4">
                <h5 className={`font-medium mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Skills:</h5>
                <ul className="flex flex-wrap">
                  {experience.skills.map((skill, i) => (
                    <li
                      key={i}
                      className={`bg-[#8245ec] px-4 py-1 text-xs md:text-sm rounded-lg mr-2 mb-2 border ${
                        isDarkMode
                          ? "text-gray-300 border-gray-400"
                          : "text-gray-100 border-gray-300"
                      }`}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;


