import React from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Evogym",
      imageSrc: "./images/v2.PNG",
      description:
        "Web app empowering individuals to achieve their fitness goals and healthy lifestyle.",
      url: "https://evogym-86p.pages.dev",
      tags: ["React.js", "JavaScript", "Typescript"],
    },
    {
      id: 2,
      title: "Charity Organization",
      imageSrc: "./images/charity.PNG",
      description:
        "Charity organization showcasing the work they're doing in the community.",
      url: "https://gjoehandofhope.netlify.app/",
      tags: ["React.js", "JavaScript", "Tailwind"],
    },
    {
      id: 3,
      title: "Fashion",
      imageSrc: "./images/v3.PNG",
      description:
        "Fashion landing page built using react and tailwind css.",
      url: "https://fashion-5kr.pages.dev",
      tags: ["React.js", "JavaScript", "Tailwind"],
    },
    {
      id: 4,
      title: "D&S Associates",
      imageSrc: "./images/v5.PNG",
      description:
        "Website for an accounting firm that offers accounting services to clients in Kenya.",
      url: "https://ds-associates.pages.dev",
      tags: ["React.js", "JavaScript", "Tailwind"],
    },
    {
      id: 5,
      title: "GP Climate Solutions",
      imageSrc: "./images/climate.PNG",
      description:
        "Website  showcasing a climate change non-profit events and work in the  community .",
      url: "https://muciraerick.netlify.app",
      tags: ["React.js", "JavaScript", "Tailwind"],
    },
  ];

  return (
    <section className="fade-in-left -mt-56 min-h-screen w-full gap-4 bg-white pb-16 text-first lg:-mt-0 lg:pb-0">
      <div className="w-full  pb-10 lg:mx-auto lg:w-3/4 lg:pt-16">
        <h2 className="px-4 py-3 uppercase opacity-60 lg:px-0">- Projects</h2>
        <div className="mb-10 flex flex-col justify-between gap-4 px-4 lg:flex-row lg:gap-0 lg:px-0">
          <h2 className="mb-1 text-2xl font-extrabold">
            Recent completed works
          </h2>
          <div className="flex gap-2">
            <div className="custom-prev flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-first hover:bg-first hover:text-white">
              <MdOutlineKeyboardArrowLeft />
            </div>
            <div className="custom-next flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-first hover:bg-first hover:text-white">
              <MdOutlineKeyboardArrowRight />
            </div>
          </div>
        </div>

        <Swiper
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Navigation, Pagination, Scrollbar]}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
        >
          {projects.length === 0 ? (
            <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              No projects available. Coming soon...
            </p>
          ) : (
            projects.map((project) => (
              <SwiperSlide
                key={project.id}
                className="fade-in-bottom mx-4 w-11/12 flex-shrink-0 rounded-md border-2  border-fifth p-4 lg:mx-0 lg:max-w-xl"
              >
                <img
                  src={project.imageSrc}
                  alt={`project ${project.id}`}
                  className="zoom-image h-72 w-full cursor-pointer rounded-xl border border-fifth object-contain lg:h-64"
                />
                <Link
                  to={project.url}
                  target="_blank"
                  className="anime my-4 inline-block"
                >
                  {project.title}
                </Link>
                <p className="text-sm opacity-60">{project.description}</p>

                <div className="my-5 flex gap-2">
                  {project.tags.map((tag, index) => (
                    <p
                      className="w-24 whitespace-nowrap rounded-3xl bg-first px-4 py-1.5 text-xs text-fifth"
                      key={index}
                    >
                      {tag}
                    </p>
                  ))}
                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>

        {projects.length > 0 ? (
          <Link
            className="mx-auto  mt-5 block w-52 rounded-md border border-transparent bg-first px-8 py-3 font-extralight text-white outline-none transition-all hover:border-first hover:bg-white hover:text-first"
            to="https://github.com/rickie-ui"
          >
            View all projects
          </Link>
        ) : null}
      </div>
    </section>
  );
};

export default Projects;
