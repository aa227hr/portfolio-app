import { portfolioData } from "../data/portfolioData";

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          My academic journey and continuous learning path
        </p>

        <div className="timeline">
          {portfolioData.education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                {index < portfolioData.education.length - 1 && (
                  <div className="timeline-line"></div>
                )}
              </div>

              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-degree">{edu.degree}</h3>
                  <span className="timeline-year">{edu.year}</span>
                </div>

                <div className="timeline-institution">
                  <span className="institution-name">{edu.institution}</span>
                  <div className="institution-badge">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                    </svg>
                    {edu.institution}
                  </div>
                </div>

                <p className="timeline-details">{edu.details}</p>

                <div className="timeline-progress">
                  {edu.year.includes("Present") || edu.year.includes("2026") ? (
                    <div className="progress-container">
                      <span className="progress-label">In Progress</span>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                  ) : (
                    <div className="completion-badge">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                      Completed
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
