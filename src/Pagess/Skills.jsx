import { useState, useEffect, useRef } from "react";

const ModernSkillsShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef(null);

 
  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Intersection observer for entry animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Skill data with categories
  const skills = [
    {
      name: "HTML 5",
      iconClass: "fab fa-html5",
      iconColor: "#E34F26",
      description: "Structure web content with the latest HTML standards",
      proficiency: 95,
      category: "Frontend",
    },
    {
      name: "CSS",
      iconClass: "fab fa-css3-alt",
      iconColor: "#1572B6",
      description: "Style web pages with cascading style sheets",
      proficiency: 90,
      category: "Frontend",
    },
    {
      name: "JavaScript",
      iconClass: "fab fa-js",
      iconColor: "#F7DF1E",
      description: "Add interactivity and dynamic behavior to websites",
      proficiency: 92,
      category: "Frontend",
    },
    {
      name: "React.js",
      iconClass: "fab fa-react",
      iconColor: "#61DAFB",
      description: "Build interactive UIs with component-based library",
      proficiency: 88,
      category: "Frontend",
    },
    {
      name: "Redux",
      iconClass: "fas fa-cubes",
      iconColor: "#764ABC",
      description: "Manage application state with predictable containers",
      proficiency: 80,
      category: "Frontend",
    },
    {
      name: "Node.js",
      iconClass: "fab fa-node-js",
      iconColor: "#339933",
      description: "JavaScript runtime for scalable network applications",
      proficiency: 82,
      category: "Backend",
    },
    {
      name: "Express.js",
      iconClass: "fab fa-node",
      iconColor: "#000000",
      description: "Fast, unopinionated web framework for Node.js",
      proficiency: 78,
      category: "Backend",
    },
    {
      name: "Socket.IO",
      iconClass: "fas fa-plug",
      iconColor: "#010101",
      description: "Real-time bidirectional event-based communication",
      proficiency: 75,
      category: "Backend",
    },
    {
      name: "MongoDB",
      iconClass: "fas fa-database",
      iconColor: "#47A248",
      description: "NoSQL database for modern applications",
      proficiency: 75,
      category: "Backend",
    },
    {
      name: "Git",
      iconClass: "fab fa-git-alt",
      iconColor: "#F05032",
      description: "Distributed version control system",
      proficiency: 90,
      category: "Tools",
    },
  ];

  // Get unique categories
  const categories = ["All", ...new Set(skills.map((skill) => skill.category))];

  // Filter skills based on active category
  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <div className="min-h-screen bg-white p-8" ref={sectionRef}>
      <div
        className="max-w-6xl mx-auto"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateX(0)" : "translateX(100%)",
          transition:
            "opacity 0.5s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Section Header */}
        <div className="text-center mb-8">
          {isMobile ? (
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-800">
                Technical Skills
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mt-2"></div>
              <p className="text-gray-600 mt-4 text-sm">
                Areas of technical expertise and proficiency
              </p>
            </div>
          ) : (
            <div className="relative inline-block mb-16">
              <h1 className="text-5xl text-blue-600 font-bold">
                Technical Skills
              </h1>
              <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 opacity-80 rounded-full"></div>
              <p className="max-w-2xl text-gray-500 mx-auto mt-8">
                A comprehensive overview of my technical proficiencies
              </p>
            </div>
          )}

          {/* Category filter - mobile only */}
          {isMobile && (
            <div className="mb-6 overflow-x-auto pb-2">
              <div className="flex space-x-2 min-w-max">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Skills Grid */}
        <div
          className={
            isMobile
              ? "space-y-3"
              : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          }
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              isVisible={isVisible}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>

      {/* Inline CSS for animations */}
      <style jsx>{`
        @keyframes floatingIcon {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-7px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
};

// Optimized SkillCard component
const SkillCard = ({ skill, index, isVisible, isMobile }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const cardRect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - cardRect.left) / cardRect.width - 0.5;
    const y = (e.clientY - cardRect.top) / cardRect.height - 0.5;
    setMousePosition({ x, y });
  };

  // Common animation style
  const animationStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(30px)",
    transition: `opacity 0.6s ease-out, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)`,
    transitionDelay: `${index * 70}ms`,
  };

  // Mobile card design
  if (isMobile) {
    return (
      <div
        className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 mb-4"
        style={{
          ...animationStyle,
          borderLeftColor: skill.iconColor,
        }}
      >
        <div className="p-3">
          <div className="flex items-center mb-2">
            <i
              className={`${skill.iconClass} mr-3`}
              style={{
                color: skill.iconColor,
                fontSize: "24px",
              }}
            ></i>
            <h3 className="font-semibold text-gray-800">{skill.name}</h3>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
            <span>Proficiency</span>
            <span>{skill.proficiency}%</span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: `${skill.proficiency}%` }}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  // Desktop card design
  return (
    <div
      className="relative rounded-xl overflow-hidden bg-white shadow-lg h-48 transition-all duration-300 cursor-pointer"
      style={{
        ...animationStyle,
        transformStyle: "preserve-3d",
        transform: isHovered
          ? `perspective(1000px) rotateX(${mousePosition.y * -8}deg) rotateY(${
              mousePosition.x * 8
            }deg) scale(1.05)`
          : "perspective(1000px) rotateX(0) rotateY(0) scale(1)",
        boxShadow: isHovered
          ? "0 20px 25px rgba(0, 87, 255, 0.2), 0 10px 10px rgba(0, 0, 0, 0.04)"
          : "0 4px 6px rgba(0, 0, 0, 0.05)",
        border: "1px solid rgba(0, 87, 255, 0.1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${
            (mousePosition.x + 0.5) * 100
          }% ${
            (mousePosition.y + 0.5) * 100
          }%, rgba(0, 87, 255, 0.15), transparent 70%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Border highlight */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? "scaleX(1)" : "scaleX(0.5)",
        }}
      />

      {/* Content */}
      <div className="flex flex-col items-center justify-center h-full p-4">
        {/* Icon */}
        <div
          className="mb-4"
          style={{
            animation: "floatingIcon 3s ease-in-out infinite",
            transform: isHovered
              ? "translateY(-8px) scale(1.15)"
              : "translateY(0) scale(1)",
            transition: "transform 0.3s ease",
          }}
        >
          <i
            className={skill.iconClass}
            style={{
              color: skill.iconColor,
              fontSize: "48px",
              filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
            }}
          ></i>
        </div>

        {/* Skill name */}
        <h3
          className="text-gray-800 font-medium text-lg text-center transition-all duration-300"
          style={{
            transform: isHovered ? "translateY(-4px)" : "translateY(0)",
          }}
        >
          {skill.name}
        </h3>

        {/* Proficiency dots */}
        <div
          className="transition-all duration-300 flex items-center mt-2"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateY(0)" : "translateY(10px)",
          }}
        >
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full mx-1 ${
                i < Math.round((skill.proficiency / 100) * 5)
                  ? "bg-blue-500"
                  : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>

        {/* Description */}
        <p
          className="text-sm text-gray-600 text-center mt-2 transition-all duration-300 max-w-xs"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateY(0)" : "translateY(10px)",
          }}
        >
          {skill.description}
        </p>
      </div>
    </div>
  );
};

export default ModernSkillsShowcase;