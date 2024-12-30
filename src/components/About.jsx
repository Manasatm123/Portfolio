import React from "react";
import ProfileImage from "/img.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 animate-fadeIn scroll-mt-16 "
    >
      <div className="container mx-auto flex items-center flex-col md:flex-row">
        <div className="flex-shrink-0 md:mr-8">
          <img
            src={ProfileImage}
            alt="Manasa TM"
            className="w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-gray-700"
          />
        </div>

        <div className="ml-0 mt-8 md:mt-0 text-center md:text-left">
          <h2 className="text-4xl font-extrabold mb-4 text-gradient bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Who am I?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-300">
            Hi, I'm <span className="text-green-400 font-bold">Manasa TM</span>, a passionate and versatile full-stack developer
            with expertise in building scalable, user-centric web applications.
            I thrive in bridging the gap between elegant design and robust
            functionality, crafting solutions that deliver seamless user
            experiences.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-300">
            With a strong foundation in <span className="text-blue-400">HTML</span>, <span className="text-blue-400">CSS</span>, <span className="text-blue-400">JavaScript</span>,
            <span className="text-blue-400"> React</span>, <span className="text-blue-400">Node.js</span>, <span className="text-blue-400">Express.js</span>, and <span className="text-blue-400">MongoDB</span>, I have developed and
            deployed applications that solve real-world problems. From
            designing intuitive front-end interfaces to implementing efficient
            back-end systems, I enjoy tackling challenges at every layer of
            development.
          </p>

          <div className="mt-6">
            <a
              href="#contact"
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-transform transform hover:scale-105"
            >
              Connect with Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
