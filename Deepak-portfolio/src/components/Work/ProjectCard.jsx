import React from 'react';

const ProjectCard = ({ project, isDarkMode, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`border rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-300 text-left flex flex-col ${
        isDarkMode
          ? "border-gray-800 bg-[#131313] hover:shadow-purple-500/20"
          : "border-gray-300 bg-white hover:shadow-purple-500/20"
      }`}
      aria-label={`View details for ${project.title}`}
    >
      <div className="w-full h-48 md:h-52 relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow w-full">
        <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
          {project.title}
        </h3>
        <p className={`mb-6 text-sm line-clamp-3 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
          {project.description}
        </p>
        
        <div className="mt-auto w-full">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className={`text-xs font-medium px-3 py-1.5 rounded-full ${
                  isDarkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
                }`}
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className={`text-xs font-medium px-3 py-1.5 rounded-full ${
                isDarkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
              }`}>
                +{project.tags.length - 4} more
              </span>
            )}
          </div>
          
          <div className="flex justify-end items-center">
            <span className={`text-sm font-medium flex items-center gap-2 transition-colors duration-200 ${isDarkMode ? "text-gray-400 hover:text-gray-200" : "text-gray-500 hover:text-black"}`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              View Project
            </span>
          </div>
        </div>
      </div>
    </button>
  );
};

export default ProjectCard;
