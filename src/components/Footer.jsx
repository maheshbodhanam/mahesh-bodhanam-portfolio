import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
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
