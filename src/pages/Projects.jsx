import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Vimeo",
      imageSrc: "./images/shoe1.jpg",
      description: "Hotel Booking website",
    },
    {
      id: 2,
      title: "Amazon Clone",
      imageSrc: "./images/shoe2.jpg",
      description:
        "E-commerce website for groceries shopping, furniture and electronics",
    },
    {
      id: 3,
      title: "Netflix clone",
      imageSrc: "./images/shoe1.jpg",
      description: "Streaming platform",
    },
    {
      id: 4,
      title: "Twitter",
      imageSrc: "./images/shoe2.jpg",
      description: "Social media platform",
    },
    {
      id: 5,
      title: "Only fans",
      imageSrc: "./images/shoe1.jpg",
      description: "Content subscription platform",
    },
    // Add more projects as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    if (nextIndex >= projects.length - 2) {
      setCurrentIndex(projects.length - 3);
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    if (prevIndex <= projects.length - 3) {
      setCurrentIndex(prevIndex);
    }
  };

  return (
    <section className="fade-in-left h-screen w-full gap-4 bg-white text-first">
      <div className="mx-auto w-3/4 pt-16">
        <h2 className="py-3 uppercase opacity-60">- Projects</h2>
        <div className="flex justify-between">
          <h2 className="mb-1 text-2xl font-extrabold">
            Recent completed works
          </h2>
          <div className="flex gap-2">
            <div
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-first hover:bg-first hover:text-white"
              onClick={handlePrev}
            >
              <MdOutlineKeyboardArrowLeft />
            </div>
            <div
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-first hover:bg-first hover:text-white"
              onClick={handleNext}
            >
              <MdOutlineKeyboardArrowRight />
            </div>
          </div>
        </div>
        {/* projects */}
        <section className="custom-scrollbar mt-6 flex gap-4 overflow-x-auto px-2 py-5">
          {projects.length === 0 ? (
            <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              No projects available. Coming soon...
            </p>
          ) : (
            projects.slice(currentIndex, currentIndex + 3).map((project) => (
              <div key={project.id} className="fade-in-bottom w-1/3 p-4">
                <img
                  src={project.imageSrc}
                  alt={`project ${project.id}`}
                  className="zoom-image h-64 w-56 cursor-pointer rounded-md"
                />
                <a href="#" className="anime my-4 inline-block">
                  {project.title}
                </a>
                <p className="text-sm opacity-60">{project.description}</p>
              </div>
            ))
          )}
        </section>
        {projects.length > 0 ? (
          <Link className="mx-auto mt-5 block w-52 rounded-md border border-transparent bg-first px-8 py-3 font-extralight text-white outline-none transition-all hover:border-first hover:bg-white hover:text-first">
            View all projects
          </Link>
        ) : null}
      </div>
    </section>
  );
};

export default Projects;
