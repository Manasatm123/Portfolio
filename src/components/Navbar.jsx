import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-lg z-50 animate-slideIn">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        <h1 className="text-xl font-bold text-white"></h1>
        <ul className="flex space-x-6 text-white">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-green-500 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skill"
              smooth={true}
              duration={500}
              className="hover:text-green-500 cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="hover:text-green-500 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-green-500 cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

