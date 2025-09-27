import { useState } from "react";
import { portfolioData } from "../data/portfolioData";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const skillLevels = {
    // Frontend Skills
    React: "Intermediate",
    JavaScript: "Intermediate",
    TypeScript: "Intermediate",
    HTML: "Intermediate",
    CSS: "Intermediate",
    Svelte: "Intermediate",

    // Backend Skills
    "Node.js": "Beginner",
    Express: "Beginner",
    Python: "Intermediate",
    Java: "Intermediate",
    "C#": "Intermediate",
    MongoDB: "Intermediate",
    MySQL: "Intermediate",

    // Game Development
    Unity: "Intermediate",
    Photon: "Intermediate",

    // Tools
    Git: "Intermediate",
    "VS Code": "Advanced",
    Figma: "Beginner",
  };

  const getLevelColor = (level) => {
    switch (level) {
      case "Advanced":
        return "#4caf50"; // Green
      case "Intermediate":
        return "#ff9800"; // Orange
      case "Beginner":
        return "#f44336"; // Red
      default:
        return "#9e9e9e"; // Gray
    }
  };

  const getLevelWidth = (level) => {
    switch (level) {
      case "Advanced":
        return "90%";
      case "Intermediate":
        return "70%";
      case "Beginner":
        return "50%";
      default:
        return "30%";
    }
  };

  const getCategorySkills = (category) => {
    return portfolioData.skills[category] || [];
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          The tools and technologies I use to bring ideas to life
        </p>

        {/* Skills Categories Navigation */}
        <div className="skills-categories">
          {Object.keys(portfolioData.skills).map((category) => (
            <button
              key={category}
              className={`category-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {getCategorySkills(activeCategory).map((skill) => {
            const level = skillLevels[skill] || "Intermediate";
            const levelColor = getLevelColor(level);
            const levelWidth = getLevelWidth(level);

            return (
              <div key={skill} className="skill-card">
                <div className="skill-header">
                  <h3 className="skill-name">{skill}</h3>
                  <span
                    className="skill-level-badge"
                    style={{ backgroundColor: levelColor }}
                  >
                    {level}
                  </span>
                </div>

                <div className="skill-progress">
                  <div
                    className="skill-progress-bar"
                    style={{
                      width: levelWidth,
                      backgroundColor: levelColor,
                    }}
                  ></div>
                </div>

                <div className="skill-description">
                  {level === "Advanced" &&
                    "Comfortable building complex applications"}
                  {level === "Intermediate" &&
                    "Experience with real-world projects"}
                  {level === "Beginner" &&
                    "Learning and building foundational knowledge"}
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Legend */}
        <div className="skills-legend">
          <div className="legend-item">
            <div className="legend-color advanced"></div>
            <span>Advanced - Production-ready experience</span>
          </div>
          <div className="legend-item">
            <div className="legend-color intermediate"></div>
            <span>Intermediate - Project experience</span>
          </div>
          <div className="legend-item">
            <div className="legend-color beginner"></div>
            <span>Beginner - Learning & exploring</span>
          </div>
        </div>

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
