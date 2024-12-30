import React from 'react';
import './Header.css'

const Header = () => {
  const title = "Hello, I'm Manasa.TM";

  return (
    <header className="h-screen relative" id="header">
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage:
            'url("https://i.pinimg.com/736x/06/60/a1/0660a1aa20d3f869d9dfa330a2465304.jpg")',
        }}
      ></div>
      <div className="relative z-10 flex flex-col justify-center items-center text-white text-center h-full">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
          {title.split("").map((char, index) => (
            <span
              key={index}
              className="inline-block opacity-0 animate-letter"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in">
          Full-Stack Developer
        </p>
        <a
          href="#about"
          className="bg-white text-gray-800 px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
        >
          Learn More
        </a>
      </div>
    </header>
  );
};

export default Header;

