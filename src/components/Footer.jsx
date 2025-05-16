import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        {/* Navigation Links */}
        <nav className="mb-4">
          <Link
            to="home"
            smooth
            duration={500}
            name="home"
            className="mx-2 hover:text-gray-400 cursor-pointer"
          >
            Home
          </Link>

          <Link
            to="skills"
            smooth
            duration={500}
            name="skills"
            className="mx-2 hover:text-gray-400 cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="portfolio"
            smooth
            duration={500}
            name="portfolio"
            className="mx-2 hover:text-gray-400 cursor-pointer"
          >
            Portfolio
          </Link>
          <Link
            to="contact"
            smooth
            duration={500}
            name="contact"
            className="mx-2 hover:text-gray-400 cursor-pointer"
          >
            Contact
          </Link>
        </nav>

        {/* Social Media Links */}
        <div className="mb-4 flex justify-center gap-4 text-xl">
          <a
            href="https://github.com/maheshbodhanam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mahesh-bodhanam-3a4793188/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <div>
          <p>
            &copy; {new Date().getFullYear()} Mahesh bodhanam. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
