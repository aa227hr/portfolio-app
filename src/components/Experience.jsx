import { portfolioData } from "../data/portfolioData";

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          My professional journey and work experience
        </p>

        <div className="timeline-experience">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-marker">
                <div className="experience-dot">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
                  </svg>
                </div>
                {index < portfolioData.experience.length - 1 && (
                  <div className="experience-line"></div>
                )}
              </div>

              <div className="experience-content">
                <div className="experience-header">
                  <div className="experience-title">
                    <h3>{exp.position}</h3>
                    <span className="company-name">{exp.company}</span>
                  </div>
                  <span className="experience-period">{exp.period}</span>
                </div>

                <p className="experience-description">{exp.description}</p>

                <div className="experience-skills">
                  <span className="skills-label">Technologies used:</span>
                  <div className="skills-tags">
                    {/* You can add specific technologies for each experience later */}
                    <span className="skill-tag">Unity</span>
                    <span className="skill-tag">C#</span>
                    <span className="skill-tag">Game Development</span>
                  </div>
                </div>

                <div className="experience-achievements">
                  <h4>Key Contributions:</h4>
                  <ul>
                    <li>
                      Collaborated with development team on level editor
                      features
                    </li>
                    <li>Gained experience in game development workflows</li>
                    <li>
                      Learned collaborative software development practices
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}

          {/* Future Opportunities Card */}
          <div className="opportunity-card">
            <div className="opportunity-icon">🚀</div>
            <div className="opportunity-content">
              <h3>Looking for New Opportunities</h3>
              <p>
                I'm actively seeking internships and part-time positions where I
                can contribute to meaningful projects while continuing to grow
                as a developer.
              </p>
              <div className="opportunity-types">
                <span>Software Development Intern</span>
                <span>Web Developer</span>
                <span>Game Programmer</span>
                <span>Full-Stack Roles</span>
              </div>
              <button
                className="cta-button"
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
