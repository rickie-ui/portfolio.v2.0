import { Link, Outlet } from "react-router-dom";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
  return (
    <div className="flex h-screen font-primary ">
      <aside className="fixed flex h-full w-1/5 flex-col items-center justify-between border-r py-6">
        {/* <img
            className="h-20 w-20 rounded-full border-2 border-third"
            src="../../public/images/logo.png"
            alt="logo"
            /> */}
        <h2 className="text-lg">Erick Mucira</h2>

        <nav className="flex w-full flex-col text-center text-sm  opacity-60">
          <Navbar to="/">Home</Navbar>
          <Navbar to="about">About</Navbar>
          <Navbar to="portfolio">Portfolio</Navbar>
          <Navbar to="contact">Contact</Navbar>
        </nav>

        <div className="block">
          <div className="flex justify-center gap-2">
            <Link
              to="#"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-fifth p-2 transition-all hover:bg-first hover:text-white "
            >
              <FaTwitter />
            </Link>
            <Link
              to="#"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-fifth p-2 transition-all hover:bg-first hover:text-white "
            >
              <FaGithub />
            </Link>
            <Link
              to="#"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-fifth p-2 transition-all hover:bg-first hover:text-white "
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

      <main className=" ml-80 w-4/5 overflow-y-auto bg-second">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
