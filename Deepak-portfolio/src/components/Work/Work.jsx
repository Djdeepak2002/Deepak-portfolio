import React, { useState } from "react";
import { projects } from "../../constants";
import { useTheme } from "../../context/ThemeContext";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const { isDarkMode } = useTheme();

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const filters = ["All Projects", "AI/ML", "Full Stack", "Frontend"];

  const filteredProjects = activeFilter === "All Projects"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section
      id="work"
      className="py-24 pb-24 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className={`text-4xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className={`mt-4 text-lg font-semibold ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${activeFilter === filter
                ? "bg-purple-600 text-white"
                : isDarkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isDarkMode={isDarkMode}
            onClick={() => handleOpenModal(project)}
          />
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isDarkMode={isDarkMode}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default Work;