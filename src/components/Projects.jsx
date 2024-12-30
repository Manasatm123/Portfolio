const Projects = () => {
  const projects = [
    { title: "E-commerce website", description: "created e commerce website using HTML,CSS,Js,Mongodb" },
    { title: "Blood-Donor Website", description: "created a blood donor wehsite using HTML ,CSS ,Node.js,Mongodb." },
    { title: "Instagram Clone", description: "craeted instagram clone using HTML,CSS,JS,Express and Mongodb" },
    { title: "OLX Clone", description: "craeted OLX clone using HTML,CSS,JS,React and Mongodb" },
  ];

  return (
    <section className="bg-gray-900 text-white py-10" id="projects">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-lg"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2 text-gray-400">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
