import React, { useState, useEffect, useRef } from "react";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "News-App",
      description:
        "A React & Tailwind CSS news app with a clean UI, category filtering, and a modern card-based layout. No real-time updates, but smooth browsing. 🚀",
      image: "./Assets/newsapp1.png",
      color: "#3B82F6", // blue-500
      gradientFrom: "#2563EB", // blue-600
      gradientTo: "#60A5FA", // blue-400
      technologies: ["Tailwind CSS", "React"],
      githubLink: "https://github.com/pawanprasad2/React.js-NewsApp.git",
      liveLink: "https://react-js-news-app.vercel.app",
    },
    {
      id: 2,
      title: "To-Do App",
      description:
        "To-Do App – A simple React task manager to add, edit, delete, and check/uncheck tasks, with data saved in local storage. 🚀✅",
      image: "./Assets/todo.png",
      color: "#8B5CF6", // violet-500
      gradientFrom: "#7C3AED", // violet-600
      gradientTo: "#A78BFA", // violet-400
      technologies: ["Solidity", "Next.js", "Ethers.js", "Node"],
      githubLink: "https://github.com/pawanprasad2/TO-DO-APP.git",
      liveLink: "https://to-do-an9n93m6m-pawanprasad2s-projects.vercel.app",
    },
    {
      id: 3,
      title: "Cynthia Ugwu • Product Designer",
      description:
        "A modern portfolio website made with HTML, JavaScript, GSAP, and Locomotive Scroll for smooth scrolling and animations, creating an engaging UX/UI experience. 🚀",
      image: "./Assets/cytha ugwu.png",
      color: "#EC4899", // pink-500
      gradientFrom: "#DB2777", // pink-600
      gradientTo: "#F472B6", // pink-400
      technologies: ["HTML", "CSS", "Java Script", "GSAP", "Locomotive CSS"],
      githubLink: "https://github.com/pawanprasad2/Cynthia-Ugwu---website.git",
      liveLink: "https://cynthiaugwu-website.netlify.app",
    },
    {
      id: 4,
      title: "E-commerce",
      description:
        "A modern e-commerce project built with React, Redux, and Tailwind CSS, featuring an add-to-cart function and a checkout method for a seamless shopping experience. 🚀",
      image: "./Assets/ecom.png",
      color: "#10B981", // emerald-500
      gradientFrom: "#059669", // emerald-600
      gradientTo: "#34D399", // emerald-400
      technologies: ["React.js", "Redux", "Tailwind CSS", "BootStrap"],
      githubLink: "https://github.com/pawanprasad2/Ecom-website.git",
      liveLink: "https://horizon-xr.io",
    },
  ];

  // Check if section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-12 md:py-24 overflow-hidden bg-white"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, #e0e7ff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`mb-8 md:mb-16 text-center transition-all duration-700 ${
            isInView ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-mono text-blue-500 bg-blue-50 rounded-full border border-blue-100">
            WHAT I'VE BUILT
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="text-gray-900">Featured </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
              Projects
            </span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Explore my portfolio of cutting-edge applications leveraging modern
            technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12 md:space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className={`transition-all duration-700 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                {/* Mobile Layout (Grid Card) */}
                <div className="md:hidden">
                  <div
                    className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${project.gradientFrom}15, ${project.gradientTo}15)`,
                      border: `1px solid ${project.color}20`,
                    }}
                  >
                    {/* Image Container with Overlay */}
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />

                      {/* Project Number Badge */}
                      <div
                        className="absolute -top-2 -left-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg transform rotate-0 hover:rotate-12 transition-transform duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
                        }}
                      >
                        {index + 1}
                      </div>

                      {/* Color Bar */}
                      <div
                        className="absolute bottom-0 left-0 w-full h-1"
                        style={{
                          background: `linear-gradient(to right, ${project.gradientFrom}, ${project.gradientTo})`,
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3
                        className="text-xl font-bold mb-2"
                        style={{ color: project.color }}
                      >
                        {project.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="mb-4 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide">
                        <div className="flex gap-2">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs rounded-full flex-shrink-0 transition-all duration-300"
                              style={{
                                backgroundColor: `${project.color}15`,
                                color: project.color,
                                border: `1px solid ${project.color}30`,
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex gap-2">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-2 rounded-lg text-xs
                            font-medium text-center transition-all duration-300 border border-gray-200"
                        >
                          View Code
                        </a>
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-white px-3 py-2 rounded-lg text-xs font-medium text-center
                            transition-all duration-300"
                          style={{
                            background: `linear-gradient(to right, ${project.gradientFrom}, ${project.gradientTo})`,
                          }}
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`hidden md:flex ${
                    isEven ? "flex-row" : "flex-row-reverse"
                  } 
                  items-center gap-12 relative`}
                >
                  <div className="w-1/2 relative group">
                    <div
                      className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-500"
                      style={{
                        boxShadow:
                          activeProject === project.id
                            ? `0 20px 30px -10px ${project.color}40`
                            : "0 10px 20px -10px rgba(0,0,0,0.1)",
                        transform:
                          activeProject === project.id
                            ? "translateY(-5px)"
                            : "translateY(0)",
                      }}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full aspect-video object-cover transition-transform duration-700"
                          style={{
                            transform:
                              activeProject === project.id
                                ? "scale(1.05)"
                                : "scale(1)",
                          }}
                        />

                        <div
                          className="absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300"
                          style={{
                            background: `linear-gradient(to top, ${project.color}CC, ${project.color}00)`,
                            opacity: activeProject === project.id ? 1 : 0,
                          }}
                        >
                          <div
                            className="flex gap-3 transform translate-y-0 transition-transform duration-300"
                            style={{
                              transform:
                                activeProject === project.id
                                  ? "translateY(0)"
                                  : "translateY(20px)",
                            }}
                          >
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-white/90 hover:bg-white text-gray-900 px-4 py-2 rounded-full text-sm 
                                font-medium transition-all duration-300 hover:-translate-y-1"
                            >
                              View Code
                            </a>
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white px-4 py-2 rounded-full text-sm font-medium transition-all 
                                duration-300 hover:-translate-y-1"
                              style={{
                                background: `linear-gradient(to right, ${project.gradientFrom}, ${project.gradientTo})`,
                              }}
                            >
                              Live Demo
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="absolute -z-10 w-32 h-32 rounded-full transition-all duration-500"
                      style={{
                        background: `radial-gradient(circle, ${project.gradientTo}20, ${project.gradientFrom}05)`,
                        top: "-10%",
                        right: isEven ? "auto" : "10%",
                        left: isEven ? "10%" : "auto",
                        opacity: activeProject === project.id ? 1 : 0,
                        transform:
                          activeProject === project.id
                            ? "scale(1)"
                            : "scale(0.8)",
                      }}
                    />
                  </div>

                  <div className="w-1/2 text-left">
                    <div className="space-y-3">
                      {/* Project number */}
                      <div className="flex items-center mb-1">
                        <div className="w-6 h-px bg-gray-300 mr-2"></div>
                        <span className="text-gray-400 font-mono text-xs">
                          PROJECT {index + 1}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl font-bold text-gray-900 pb-2 relative">
                        <span
                          className="transition-all duration-300"
                          style={{
                            color:
                              activeProject === project.id
                                ? project.color
                                : "inherit",
                          }}
                        >
                          {project.title}
                        </span>
                        <span
                          className="absolute bottom-0 left-0 h-1 rounded-full transition-all duration-500"
                          style={{
                            width:
                              activeProject === project.id ? "100%" : "40%",
                            opacity: activeProject === project.id ? 1 : 0.5,
                            background: `linear-gradient(to right, ${project.gradientFrom}, ${project.gradientTo})`,
                          }}
                        />
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-base leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="pt-2">
                        <p className="text-gray-500 mb-2 text-sm font-medium">
                          Technologies Used:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs rounded-full shadow-sm transition-all duration-300 hover:-translate-y-1"
                              style={{
                                background:
                                  activeProject === project.id
                                    ? `${project.color}15`
                                    : "rgb(243, 244, 246)", // gray-100
                                color:
                                  activeProject === project.id
                                    ? project.color
                                    : "rgb(75, 85, 99)", // gray-600
                                border: `1px solid ${
                                  activeProject === project.id
                                    ? project.color + "30"
                                    : "rgb(229, 231, 235)"
                                }`, // gray-200
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
