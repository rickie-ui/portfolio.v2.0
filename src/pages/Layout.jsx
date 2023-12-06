import { Link, Outlet } from "react-router-dom";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineBars3 } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import Navbar from "../components/Navbar/Navbar";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useState } from "react";

const Layout = () => {
  const isMediumDevice = useMediaQuery("only screen and (min-width : 1024px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const linkStyles = `flex h-8 w-8 items-center justify-center rounded-full bg-fifth p-2 transition-all hover:bg-first hover:text-white`;

  const mobileStyles = `w-full py-2 text-center hover:text-third`;

  return (
    <div className="flex h-screen flex-col font-primary  lg:flex-row">
      {isMediumDevice ? (
        <aside className="fixed  hidden h-full w-full flex-col items-center justify-between  border-r py-6 lg:flex lg:w-1/5">
          {/* improvement in future, Logo? */}
          <div></div>

          <nav className="flex w-full flex-col text-center text-sm  opacity-60">
            <Navbar to="/">Home</Navbar>
            <Navbar to="about">About</Navbar>
            <Navbar to="portfolio">Portfolio</Navbar>
            <Navbar to="contact">Contact</Navbar>
          </nav>

          <div className="block">
            <div className="flex justify-center gap-2">
              <Link
                target="_blank"
                to="https://twitter.com/rickie_ui"
                className={linkStyles}
              >
                <FaTwitter />
              </Link>
              <Link
                target="_blank"
                to="https://github.com/rickie-ui"
                className={linkStyles}
              >
                <FaGithub />
              </Link>
              <Link
                target="_blank"
                to="https://linkedin.com/in/muciraerick"
                className={linkStyles}
              >
                <FaLinkedin />
              </Link>
            </div>
            <p className="mx-10 mt-4 text-center text-sm opacity-60">
              Copyright © {new Date().getFullYear()} Erick Mucira. All rights
              reserved.
            </p>
          </div>
        </aside>
      ) : (
        <div className="flex items-center justify-between  px-2">
          <h2 className="text-2xl font-bold text-third">Erick Mucira</h2>
          <button
            className=" right-4 rounded-md p-4"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <HiOutlineBars3 className="text-4xl" />
          </button>
        </div>
      )}

      {/* mobile menu */}
      {!isMediumDevice && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-first drop-shadow-xl">
          {/* close Icon */}
          <div className=" flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <LiaTimesSolid className="h-6 w-6 text-gray-300" />
            </button>
          </div>
          {/* menu items */}

          <div className="flex flex-col items-center justify-center gap-5 text-lg text-gray-300">
            <Link
              to="/"
              className={mobileStyles}
              onClick={() => setIsMenuToggled(false)}
            >
              Home
            </Link>
            <Link
              to="about"
              className={mobileStyles}
              onClick={() => setIsMenuToggled(false)}
            >
              About
            </Link>
            <Link
              to="portfolio"
              className={mobileStyles}
              onClick={() => setIsMenuToggled(false)}
            >
              Portfolio
            </Link>
            <Link
              to="contact"
              className={mobileStyles}
              onClick={() => setIsMenuToggled(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}

      <main className="w-full overflow-y-auto overflow-x-hidden bg-second pt-[225px] lg:ml-80 lg:w-4/5 lg:pt-0">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
