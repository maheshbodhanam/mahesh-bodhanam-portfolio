import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import mongodb from "../assets/mongodb.png";
import node from "../assets/node.png";
import github from "../assets/github.png";
import redux from "../assets/redux.png";
import mui from "../assets/mui.png";
import vs from "../assets/vs.png";

const skillsData = [
  { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
  { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
  { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
  { id: 4, src: reactImage, title: "React", style: "shadow-blue-600" },
  { id: 5, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
  { id: 6, src: mongodb, title: "MongoDB", style: "shadow-green-500" },
  { id: 7, src: node, title: "Node JS", style: "shadow-green-400" },
  { id: 8, src: github, title: "GitHub", style: "shadow-gray-400" },
  { id: 9, src: redux, title: "Redux", style: "shadow-purple-600" },
  { id: 10, src: mui, title: "Material UI", style: "shadow-blue-500" },
  { id: 11, src: vs, title: "VS Code", style: "shadow-blue-400" },
];

const Skills = () => {
  return (
    <section className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen text-white">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <header className="mb-6">
          <h2 className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </h2>
          <p className="py-4 text-lg">
            My tech stack enables me to build scalable, responsive, and
            user-centric web and mobile applications. These technologies reflect
            my core competencies in full-stack development and UI/UX design.
          </p>
          <p className="text-sm text-gray-400">
            From crafting intuitive interfaces using React and Tailwind CSS, to
            managing complex state with Redux, and building robust backend
            services using Node.js and MongoDB — these tools empower me to
            deliver complete digital solutions for startups, enterprises, and
            client-specific needs.
          </p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skillsData.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}
            >
              <img src={src} alt={`${title} logo`} className="w-20 mx-auto" />
              <p className="mt-4 font-medium">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
