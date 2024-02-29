import { projects } from "../constants";
import { Link } from "react-router-dom"; // Assuming you're using React Router for the Link component
import { arrow } from "../assets/icons"; // Make sure to replace this with the correct path

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>These are some of my projects</p>
        <div className="flex flex-wrap my-20 gap-16">
          {projects.map((projects) => (
            <div className="lg:w-[400px] w-full" key={projects.name}>
              <div className="block-container w-12 h-12">
                <div className={`btn-back rounded-x1 ${projects.theme}`} />
                <div className="btn- front rounded-xl flex justify-center items-center">
                  <img
                    src={projects.iconUrl}
                    alt="Project Icon"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
              <div className="mt-5 flex flex-col">
                <h4 className="text-2xl font-poppins font-semibold">
                  {projects.name}
                </h4>
                <p className="mt-2 text-slate-500">{projects.description}</p>
                <div className="mt-5 flex items-center gap-2 font-poppins">
                  <Link
                    to={projects.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-semibold text-blue-600"
                  >
                    Live Link
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-slate-200" />
    </section>
  );
};

export default Projects;
