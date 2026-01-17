import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 98%, 75% 96%, 0 100%)",
        background:
          "linear-gradient(38.73deg, rgba(204,0,187,0.15) 0%, rgba(201,32,184,0) 50%), linear-gradient(141.27deg, rgba(0,70,209,0) 50%, rgba(0,70,209,0.15) 100%)",
      }}
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and roles across organizations
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-0 w-1 bg-white h-full md:left-6"></div>

        {/* Experience Cards */}
        {experiences.map((experience) => (
          <div key={experience.id} className="mb-14 relative">
            {/* Timeline Logo */}
            {/* Timeline Logo */}
            <div className="absolute left-0 md:left-8 top-6 transform -translate-x-1/2 w-12 h-12 rounded-full overflow-hidden ring-4 ring-[#050414] bg-gray-900 flex justify-center items-center z-10">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Experience Card */}
            <div className="ml-20 md:ml-28 p-6 md:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-[1.02]">
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
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <h4 className="text-sm text-gray-300">
                    {experience.company}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {experience.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              <ul className="mt-4 text-gray-400 list-disc pl-5 space-y-2">
                {experience.desc.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* Skills */}
              <div className="mt-4">
                <h5 className="text-white font-medium mb-2">Skills:</h5>
                <ul className="flex flex-wrap">
                  {experience.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs md:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
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
