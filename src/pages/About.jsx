import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";
import { experinces } from "../constants/experience";

const About = () => {
  return (
    <div className=" fade-in-left -mt-56 min-h-screen bg-white  lg:-mt-0 lg:p-0">
      <div className="flex w-full flex-col justify-center  gap-2 p-5 text-first md:pt-16 lg:flex-row">
        <section className=" w-full lg:w-1/3">
          <h2 className="my-3 uppercase opacity-60">- Nice to meet you!</h2>
          <h2 className="mb-1 text-2xl font-extrabold">Erick Mucira</h2>
          <p className="mb-10 text-sm">Front-end Developer & Coder</p>

          <Link
            to="/documents/ErickMucira.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex w-52 items-center justify-center gap-2 rounded-md border border-transparent bg-first px-8 py-3 font-extralight text-white outline-none transition-all hover:border-first hover:bg-white hover:text-first"
          >
            Download CV <IoDocumentTextOutline />
          </Link>
        </section>

        <section className="mt-3 w-full opacity-50 md:w-2/5">
          <p className="text-sm font-extralight leading-8 tracking-wide">
            Hello there! My name is Erick Mucira. I am a front-end web
            developer, and I'm very passionate and dedicated to my work. <br />{" "}
            <br /> With 2+ years experience as a professional a developer, I
            have acquired the skills and knowledge necessary to make your
            project a success. I enjoy every step of the development process,
            from discussion and collaboration.
          </p>
        </section>
      </div>

      <h2 className="mx-5 mb-4 mt-20 flex w-36 items-center justify-between  rounded-lg border-2 border-first p-2  text-sm font-extrabold uppercase  opacity-60 lg:ml-40 ">
        <p>- Skills</p>
        <GoArrowUpRight />
      </h2>
      <section className="mx-auto my-10 grid w-full grid-cols-3 gap-4 overflow-x-auto p-5 lg:my-0 lg:flex lg:w-3/4 lg:gap-8">
        <div>
          <img
            src="./images/tailwindcss.png"
            alt="tailwindcss"
            className="h-14 w-14"
          />
          <p>Tailwind</p>
        </div>
        <div>
          <img src="./images/react.png" alt="reactjs" className="h-14 w-14" />
          <p>React.js</p>
        </div>
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
            src="./images/next.png"
            alt="nextjs"
            className="h-14 w-14"
          />
          <p>Next.js</p>
        </div>
        <div>
          <img
            src="./images/laravel.png"
            alt="laravel"
            className="h-14 w-14"
          />
          <p>Laravel</p>
        </div>
        <div>
          <img
            src="./images/php.png"
            alt="php"
            className="h-14 w-14"
          />
          <p>Php</p>
        </div>
        <div>
          <img
            src="./images/msql.png"
            alt="mysql"
            className="h-14 w-14"
          />
          <p>MySql</p>
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
        </div>
        <div>
          <img src="./images/html.png" alt="html" className="h-14 w-14" />
          <p>HTML</p>
        </div>
      </section>

      <section className="min-h-screen min-w-full bg-fifth p-4">
        <div className="mt-20 w-full py-10 lg:mx-auto lg:w-3/4">
          <h2 className="my-3 uppercase opacity-60">- Experience</h2>
          <h2 className="mb-8 text-xl font-extrabold lg:text-2xl">
            Everything about me!
          </h2>

          <div className="grid gap-4 lg:grid-cols-2">
            {experinces ? (
              experinces.map(({ id, title, period, company, description }) => (
                <div
                  className="cursor-pointer rounded-md  bg-white  p-4 shadow-sm transition duration-500 ease-in-out  hover:-translate-y-1 max-md:mx-auto max-md:min-w-full max-sm:max-w-[265px]  lg:p-10"
                  key={id}
                >
                  <div className="flex flex-wrap items-center justify-between  gap-2 text-sm sm:whitespace-nowrap lg:gap-0 ">
                    <h2 className="text-fourth">{period}</h2>
                    <h2>{company}</h2>
                  </div>
                  <h2 className="my-2 text-lg">{title}</h2>

                  <p className="my-2 text-sm leading-6 opacity-60">
                    {description}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-sm text-first">Not available!</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
