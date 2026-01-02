export const portfolioData = {
  // Personal Information
  name: "Al Hussein Al Ahmed",
  title: "Software Developer",
  email: "alhusseinalahmed@gmail.com",
  phone: "", // Consider adding a phone number if comfortable
  location: "Växjö, Sweden",
  linkedin: "https://www.linkedin.com/in/alhusseinalahmed/",
  github: "https://github.com/alhusseinalahmed",

  // About Section
  about:
    "Passionate Software Developer with a strong foundation in both frontend and backend technologies. Currently pursuing a Bachelor's in Computer Science at Linnaeus University while building practical experience through projects in web development and game development. I enjoy creating efficient, user-friendly solutions and am particularly interested in full-stack development, game programming, and innovative web applications. Always eager to learn new technologies and tackle challenging problems.",

  // Education
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Linnaeus University",
      year: "2023-2026",
      details:
        "Ongoing degree focusing on software engineering principles, algorithms, and modern web technologies. Key coursework includes Data Structures, Algorithms, Web Development, Database Systems, and Software Engineering.",
    },
    {
      degree: "Information and Media Technology Program",
      institution: "Maja Beskow Gymnasiet",
      year: "2020-2023",
      details:
        "Specialized program that introduced web development fundamentals including HTML, CSS, JavaScript, Svelte, and game development with Unity. Developed foundational programming skills through practical projects.",
    },
  ],

  // Experience
  experience: [
    {
      position: "Game Developer Intern",
      company: "Acino AB",
      period: "Summer 2023",
      description:
        "Contributed to the development of a custom level editor for an indie game using Unity Engine. Gained experience in game development workflows, C# programming, and collaborative software development practices.",
    },
  ],

  // Skills (organized by category)
  skills: {
    Frontend: ["React", "JavaScript", "HTML", "CSS", "TypeScript", "Svelte"],
    Backend: ["Node.js", "Express", "Python", "MongoDB", "MySQL", "Java", "C#"],
    "Game Development": ["Unity", "C#", "Photon"],
    "Tools & Technologies": ["Git", "VS Code", "Figma", "Unity Engine"],
  },

  // Projects
  projects: [
    {
      title: "Multiplayer FPS Game with Unity",
      description:
        "A fully functional multiplayer first-person shooter game built with Unity and Photon networking. Features real-time multiplayer gameplay, character customization, and multiple game modes.",
      technologies: ["C#", "Unity", "Photon"],
      demoLink: "https://youtu.be/WXrrmhJMJf4",
      codeLink: "https://github.com/alhusseinalahmed/Rapid-Reload",
      image: "images/game_project.png",
      category: "Game Development",
      status: "Completed",
      featured: true,

    },
    {
      title: "Weather App using Flutter",
      description:
        "A Flutter-based weather application that fetches real-time weather data from an API and displays it in a user-friendly interface.",
      technologies: [
        "Flutter",
        "Dart",
        "API",
        "OpenWeatherAPI",
        "Android Studio",
      ],
      demoLink: "https://github.com/aa227hr/weather_app",
      codeLink: "https://github.com/aa227hr/weather_app",
      category: "Mobile Development",
      status: "Completed",
      featured: true,
      image: "images/weather.jpg",
    },
    {
      title: "Cloud Notes App",
      description:
        "A secure, full-stack note-taking application featuring JWT authentication, real-time cloud synchronization with TiDB, and a responsive masonry layout. Built with a decoupled architecture using Spring Boot and React.",
      technologies: [
        "Java",
        "Spring Boot",
        "React.js",
        "MySQL (TiDB)",
        "Docker",
        "JWT",
        "Render",
        "Vercel",
      ],
      demoLink: "https://notesapp-2025.vercel.app/login", // Replace with your actual Vercel link
      codeLink: "https://github.com/alhusseinalahmed/notesapp_2025",
      category: "Full-Stack",
      status: "Completed",
      featured: true,
      image: "images/notes_app.jpg",
    },
  ],
};
