import React from "react";
import { Link } from "react-router-dom";
import { RotatingText } from "react-simple-rotating-text";

const Home = () => {
  return (
    <div className="fade-in-left flex h-screen  w-full items-center justify-center gap-4 text-first">
      <section className="w-2/5 p-5">
        <h2 className="text-5xl  font-extrabold ">
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
          <Link className="rounded-md border border-transparent bg-first px-8 py-3 font-thin text-white outline-none transition-all hover:border-first hover:bg-white hover:text-first">
            Got a project?
          </Link>
          <Link className="rounded-md border border-first bg-white px-8 py-3 text-first outline-none transition-all hover:border-transparent hover:bg-first hover:text-white">
            Let's talk
          </Link>
        </div>
        <div className="border-l-4 border-fourth p-3 text-sm">
          <a
            className="my-2 block hover:text-fourth"
            href="tel:+254712345678p000"
          >
            +254712345678
          </a>
          <a
            href="mailto:muciraerick.contact@gmail.com"
            className="my-2 block hover:text-fourth"
          >
            muciraerick.contact@gmail.com
          </a>
          <p>Nairobi, Kenya</p>
        </div>
      </section>

      <div className="w-2/5 ">
        <img src="./images/image1.png" alt="hero" />
      </div>
    </div>
  );
};

export default Home;
