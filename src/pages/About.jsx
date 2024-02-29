import { skills } from "../constants";
const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hey! I'm {""}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Shweta
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Software Developer based in India,specializing in technical
          educationhands-on learning and building applications
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text"> My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl " />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt="skill.name"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text "> Work Experience</h3>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            <h2>
              <b>Apprenticeship At Relevel(Unacademy): 2022-2023</b>
            </h2>
            I've dedicated myself to mastering the MERN stack through intensive
            training, including a comprehensive bootcamp. Throughout my learning
            journey, I've undertaken various projects to apply and solidify my
            skills.
          </p>
        </div>
        <div className="mt-12 flex "></div>
      </div>
    </section>
  );
};

export default About;
