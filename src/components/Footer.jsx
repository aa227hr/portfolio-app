import { portfolioData } from "../data/portfolioData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3>{portfolioData.name}</h3>
              <p>Software Developer & Creative Problem Solver</p>
            </div>

            <div className="footer-links">
              <div className="link-group">
                <h4>Navigation</h4>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
              </div>

              <div className="link-group">
                <h4>Connect</h4>
                <a
                  href={portfolioData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href={portfolioData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a href={`mailto:${portfolioData.email}`}>Email</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>
                &copy; {currentYear} {portfolioData.name}. All rights reserved.
              </p>
              <p>Built with React & AI</p>
            </div>

            <div className="footer-back-to-top">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="back-to-top-btn"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
                </svg>
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
