import React, { useEffect } from 'react';

const ProjectModal = ({ project, isDarkMode, onClose }) => {
  useEffect(() => {
    // Lock body scroll when modal is open
    document.body.style.overflow = "hidden";
    return () => {
      // Revert when modal is closed
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!project) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-opacity-90 p-4 ${
        isDarkMode ? "bg-black/80 backdrop-blur-sm" : "bg-gray-900/50 backdrop-blur-sm"
      }`}
      onClick={onClose}
    >
      <div 
        className={`rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative ${
          isDarkMode ? "bg-[#111111]" : "bg-white"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-purple-600 transition-colors text-2xl leading-none"
        >
          &times;
        </button>

        <div className="flex flex-col">
          <div className="w-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-[400px] object-cover"
            />
          </div>
          <div className="p-6 md:p-8">
            <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              {project.title}
            </h3>
            <p className={`mb-8 text-sm md:text-base leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full ${
                    isDarkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 py-3 px-4 rounded-xl text-center text-sm md:text-base font-semibold transition-colors duration-200 ${
                  isDarkMode
                    ? "bg-gray-800 hover:bg-gray-700 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                }`}
              >
                View Code
              </a>
              <a
                href={project.webapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl text-center text-sm md:text-base font-semibold transition-colors duration-200 bg-purple-600 hover:bg-purple-700 text-white"
              >
                View Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
