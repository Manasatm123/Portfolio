import React from 'react';

const Contact = () => {
  return (
    <section className="bg-black text-white py-10" id='contact'>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="mt-4">Feel free to reach out anytime!</p>
        <p className="mt-2">Email: manasatm04@gmail.com</p>
        <p className="mt-2">Phone: +91 8590961069</p>
        <p className="mt-2">Location: Kochi,Kerala</p>
      </div>
      <div className="mt-8 text-center">
        <a
          href="https://www.linkedin.com/in/manasa-tm-5925a3343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500 mx-4"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Manasatm123"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500 mx-4"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
