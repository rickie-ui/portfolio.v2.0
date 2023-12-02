import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";

const About = () => {
  return (
    <div className=" fade-in-left h-screen bg-white">
      <div className="flex  w-full justify-center gap-2   pt-16 text-first">
        <section className="w-1/3">
          <h2 className="my-3 uppercase opacity-60">- Nice to meet you!</h2>
          <h2 className="mb-1 text-2xl font-extrabold">Erick Mucira</h2>
          <p className="mb-10 text-sm">Front-end Developer & Coder</p>

          <Link className="flex w-52 items-center justify-center gap-2 rounded-md border border-transparent bg-first px-8 py-3 font-extralight text-white outline-none transition-all hover:border-first hover:bg-white hover:text-first">
            Download CV <IoDocumentTextOutline />
          </Link>
        </section>

        <section className="mt-3 w-2/5 opacity-50">
          <p className="font-extralight tracking-wide">
            Hello there! My name is Erick Mucira. I am a front-end web
            developer, and I'm very passionate and dedicated to my work. <br />{" "}
            <br /> With 2+ years experience as a professional a developer, I
            have acquired the skills and knowledge necessary to make your
            project a success. I enjoy every step of the development process,
            from discussion and collaboration.
          </p>
        </section>
      </div>

      <h2 className="mb-4 ml-40 mt-20 flex w-36 items-center justify-between  rounded-lg border-2 border-first p-2  text-sm font-extrabold uppercase  opacity-60 ">
        <p>- Skills</p>
        <GoArrowUpRight />
      </h2>
      <section className="mx-auto  flex w-3/4 gap-8 overflow-x-auto ">
        <div>
          <img
            src="./images/tailwindcss.png"
            alt="tailwindcss"
            className="h-14 w-14"
          />
          <p>Tailwind css</p>
        </div>
        <div>
          <img src="./images/react.png" alt="reactjs" className="h-14 w-14" />
          <p>React.js</p>
        </div>{" "}
        <div>
          <img
            src="./images/typescript.png"
            alt="typescript"
            className="h-14 w-14"
          />
          <p>Typescript</p>
        </div>
        <div>
          <img
            src="./images/javascript.png"
            alt="javascript"
            className="h-14 w-14"
          />
          <p>Javascript</p>
        </div>
        <div>
          <img src="./images/git.png" alt="git" className="h-14 w-14" />
          <p>Git</p>
        </div>
        <div>
          <img src="./images/github.png" alt="github" className="h-14 w-14" />
          <p>Github</p>
        </div>
        <div>
          <img src="./images/css.png" alt="css" className="h-14 w-14" />
          <p>CSS</p>
        </div>{" "}
        <div>
          <img src="./images/html.png" alt="html" className="h-14 w-14" />
          <p>HTML</p>
        </div>
      </section>

      <section className="h-screen bg-fifth">
        <div className="mx-auto mt-20 w-3/4 pt-20">
          <h2 className="my-3 uppercase opacity-60">- Experience</h2>
          <h2 className="mb-8 text-2xl font-extrabold">Everything about me!</h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="cursor-pointer rounded-md bg-white  p-4 shadow-sm  transition duration-500 ease-in-out  hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <h2 className="text-fourth">-2020 - 2021</h2>
                <h2>-Brance Technologies</h2>
              </div>
              <h2 className="my-2 text-lg">Junior Software Engineer</h2>

              <p className="my-2 text-sm opacity-60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                ipsum veniam fugit repellendus doloremque reiciendis
                consequuntur rerum, voluptatibus incidunt nihil quisquam esse.
                Ipsam odio magnam laudantium iste architecto. Ad, a.
              </p>
            </div>

            <div className="cursor-pointer rounded-md bg-white  p-4 shadow-sm  transition duration-500 ease-in-out  hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <h2 className="text-fourth">-2021 - 2023</h2>
                <h2>-Freelance</h2>
              </div>
              <h2 className="my-2 text-lg">Front-end Engineer</h2>

              <p className="my-2 text-sm opacity-60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                ipsum veniam fugit repellendus doloremque reiciendis
                consequuntur rerum, voluptatibus incidunt nihil quisquam esse.
                Ipsam odio magnam laudantium iste architecto. Ad, a.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
