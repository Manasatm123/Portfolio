import { FaShoppingCart, FaHeartbeat, FaInstagram, FaExchangeAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Website",
      description: "Created an e-commerce website using HTML, CSS, JS, MongoDB",
      icon: <FaShoppingCart />,
    },
    {
      title: "Blood-Donor Website",
      description: "Created a blood donor website using HTML, CSS, Node.js, MongoDB",
      icon: <FaHeartbeat />,
    },
    {
      title: "Instagram Clone",
      description: "Created an Instagram clone using HTML, CSS, JS, Express, and MongoDB",
      icon: <FaInstagram />,
    },
    {
      title: "OLX Clone",
      description: "Created an OLX clone using HTML, CSS, JS, React, and MongoDB",
      icon: <FaExchangeAlt />,
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-10" id="projects">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-lg flex items-start w-5/6 m-auto transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-300/30"
            >
              <div className="text-3xl text-blue-500 mr-4 animate-bounce">
                {project.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-2 text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
