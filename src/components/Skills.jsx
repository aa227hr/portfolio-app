import { portfolioData } from "../data/portfolioData";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          The tools and technologies I use to bring ideas to life
        </p>

        {/* Skills Overview */}
        <div className="skills-overview">
          <div className="overview-card">
            <div className="overview-icon">💻</div>
            <div className="overview-content">
              <h3>Full-Stack Capability</h3>
              <p>
                Have some experience working across the entire development
                stack.
              </p>
            </div>
          </div>

          <div className="overview-card">
            <div className="overview-icon">🎮</div>
            <div className="overview-content">
              <h3>Game Development</h3>
              <p>
                Experience with Unity game engine and multiplayer networking for
                interactive experiences.
              </p>
            </div>
          </div>

          <div className="overview-card">
            <div className="overview-icon">🚀</div>
            <div className="overview-content">
              <h3>Quick Learner</h3>
              <p>
                Proven ability to rapidly adapt to new technologies and
                frameworks as project requirements evolve.
              </p>
            </div>
          </div>
        </div>

        {/* Technologies Cloud */}
        <div className="tech-cloud">
          <h3>Technologies I Work With</h3>
          <div className="cloud-tags">
            {Object.values(portfolioData.skills)
              .flat()
              .map((skill, index) => (
                <span
                  key={index}
                  className="cloud-tag"
                  style={{
                    fontSize: `${Math.random() * 0.8 + 0.9}rem`,
                    opacity: Math.random() * 0.4 + 0.6,
                  }}
                >
                  {skill}
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
