import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import mahesh from "../assets/mahesh.jpeg";

const Home = () => {
  return (
    <div className="w-full py-16 bg-gradient-to-b from-gray-800 to-black">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a MERN Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 3+ years of experience. I build web applications using the
            React JS. I am good at making mobile-friendly UI, using state
            management tools like Redux, Redux toolkit and Zustand, and testing
            using Playwright. I also convert web apps into Android/iOS apps
            using CapacitorJS.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={mahesh}
            alt="my profile"
            className="rounded-2xl mx-auto w-[50%] md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
