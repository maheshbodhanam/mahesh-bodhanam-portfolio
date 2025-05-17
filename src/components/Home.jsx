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
            I have 3+ years of experience. I build web applications using
            React.js and Node.js. I specialize in creating responsive UIs,
            handling state management with Redux, Redux Toolkit, and Zustand,
            and ensuring quality with Playwright testing. I also convert
            responsive web apps into Android and iOS apps using CapacitorJS.
          </p>

          {/* Business Purpose Content */}
          <p className="text-gray-400 py-2 max-w-md text-sm">
            I help startups and businesses craft scalable full-stack
            applications. From building intuitive user interfaces to optimizing
            backend APIs, I deliver clean, maintainable code. Let’s collaborate
            to bring your product idea to life.
          </p>

          {/* Education Section */}
          <div className="text-gray-300 text-sm py-4">
            <h3 className="font-semibold text-white text-lg mb-1">Education</h3>
            <p>
              <span className="font-medium">Bachelor of Technology</span> <br />
              Electronics & Communication Engineering – 2016 <br />
              Pragna Bharathi Institute of Technology, Hyderabad
            </p>
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
