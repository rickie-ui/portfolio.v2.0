import React from "react";
import { MdLocationOn, MdMarkEmailRead } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RotatingText } from "react-simple-rotating-text";

const Home = () => {
  return (
    <div className="fade-in-left flex h-screen w-full flex-col-reverse items-center  justify-center gap-4 px-2 text-first  lg:flex-row lg:px-0">
      <section className="w-full p-5 lg:w-2/5 ">
        <h2 className="text-3xl font-extrabold sm:text-4xl  lg:text-5xl ">
          Hi, I'm <span className="text-third">Erick!</span>
          <br /> Creative <RotatingText
            texts={["Coder", "Developer"]}
          /> <br /> Based in Nairobi
        </h2>
        <p className="my-10 text-sm opacity-70">
          I'm creative front-end developer based in Nairobi, Kenya, and I'm very
          passionate and dedicated to my work.
        </p>

        <div className="mb-14 flex gap-2">
          <Link
            to="portfolio"
            className="rounded-md border border-transparent bg-first px-3 py-3 font-thin text-white outline-none transition-all hover:border-first hover:bg-white hover:text-first sm:px-5 lg:px-8"
          >
            Go to projects
          </Link>
          <Link
            to="contact"
            className="rounded-md border border-first bg-white px-3 py-3 text-first outline-none transition-all hover:border-transparent hover:bg-first hover:text-white sm:px-5 lg:px-8"
          >
            Let's talk
          </Link>
        </div>
        <div className="mb-24 border-l-4 border-fourth p-3 text-sm lg:mb-0">
          <a
            className="my-2 flex items-center gap-2 hover:text-fourth"
            href="tel:+254717694466p000"
          >
            <FaPhoneAlt />
            <p> Make a call</p>
          </a>
          <a
            href="mailto:muciraerick254@gmail.com"
            className="my-2  flex items-center gap-2 hover:text-fourth"
          >
            <MdMarkEmailRead />
            <p>Write an Email</p>
          </a>
          <p className="flex items-center gap-2">
            <MdLocationOn />
            Nairobi, Kenya
          </p>
        </div>
      </section>

      <div className=" w-full lg:w-2/5 ">
        <img src="./images/image1.png" alt="hero" />
      </div>
    </div>
  );
};

export default Home;
