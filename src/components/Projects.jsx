import { useState } from "react";
import { portfolioData } from "../data/portfolioData";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Project categories based on technologies
  const projectCategories = [
    "All",
    "Web Development",
    "Game Development",
    "Full-Stack",
    "Mobile Development",
  ];

  // Enhanced project data with categories and images
  const filteredProjects =
    activeFilter === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter(
          (project) => project.category === activeFilter
        );

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "#4caf50";
      case "In Progress":
        return "#ff9800";
      case "Planning":
        return "#9c27b0";
      default:
        return "#666";
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          A collection of my work and personal projects
        </p>

        {/* Project Filters */}
        <div className="project-filters">
          {projectCategories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${
                activeFilter === category ? "active" : ""
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${project.featured ? "featured" : ""}`}
            >
              <div className="project-image">
                <div className="project-image-placeholder">
                  <img src={project.image} alt="projectImg" />
                </div>
                <div className="project-overlay">
                  <div className="project-actions">
                    <a
                      href={project.demoLink}
                      className="project-btn demo-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      Live Demo
                    </a>
                    <a
                      href={project.codeLink}
                      className="project-btn code-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                      </svg>
                      View Code
                    </a>
                  </div>
                </div>

                <span
                  className="project-status"
                  style={{ backgroundColor: getStatusColor(project.status) }}
                >
                  {project.status}
                </span>

                {project.featured && (
                  <span className="featured-badge">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    Featured
                  </span>
                )}
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="technology-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-category">
                  <span className="category-tag">{project.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="projects-cta">
          <div className="cta-content">
            <h3>Want to see more?</h3>
            <p>
              Check out my GitHub profile for additional projects and code
              samples.
            </p>
            <a
              href={portfolioData.github}
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Visit My GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
