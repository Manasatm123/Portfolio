import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiBootstrap } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 animate-beat" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 animate-beat" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 animate-beat" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 animate-beat" /> },
    { name: "Express", icon: <SiExpress className="text-gray-300 animate-beat" /> },
    { name: "React", icon: <FaReact className="text-cyan-500 animate-beat" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 animate-beat" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400 animate-beat" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500 animate-beat" /> },
  ];

  return (
    <section id="skill" className="bg-black text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center animate-fadeIn">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-800 rounded-lg animate-bounceIn"
            >
              <div className="text-4xl">{skill.icon}</div>
              <h3 className="mt-4 text-xl font-bold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
