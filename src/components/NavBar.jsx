import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import mb from "../assets/mb.png";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [nav, setNav] = useState(false);
  const [isTop, setIsTop] = useState(true);

  const links = [
    { id: 3, link: "projects" },
    { id: 4, link: "skills" },
    { id: 5, link: "contact" },
    { id: 1, link: "blog" },
    { id: 6, link: "cv" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const threshold = windowHeight * 0.2;

      setIsTop(scrollY < threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex sticky top-0 justify-between items-center w-full h-20 px-4 text-white transition-colors duration-300 z-50 ${
        isTop ? " bg-black" : "bg-transparent"
      }`}
    >
      <Link to="/" className="bg-white">
        <img src={mb} alt="mb" height="40px" width="40px" />
      </Link>

      <ul className="hidden md:flex">
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200">
          <Link to="/">Home</Link>
        </li>
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200"
          >
            <Link to={link}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-300">
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <Link onClick={() => setNav(!nav)} to="/">
              Home
            </Link>
          </li>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
