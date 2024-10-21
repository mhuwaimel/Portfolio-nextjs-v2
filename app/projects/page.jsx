"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { ArrowUpLeft } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

import WorkSliderBtns from "@/components/WorkSliderBtns";
import projectsData from "@/data/projects";
import ProjectImage from "@/components/ProjectImage";

const Projects = () => {
  const [project, setProject] = useState(projectsData[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projectsData[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className=" min-h-[80vh] flex flex-col justify-center xl:pt-8 pt-2 py xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="group">
                <div className="text-6xl font-extrabold leading-none text-transparent transition-all duration-500 md:text-8xl text-outline group-hover:text-outline-hover">
                  {project.num}
                </div>
              </div>
              {/* <Link
                href="/projects/[id]"
                as={"/projects/" + project.id}
                className="text-xl md:mb-3 md:mt-4 font-semibold  mt-2 font-[family-name:var(--font-cairo-regular)] leading-none text-white group-hover:text-accent transition-all duration-500"
              >
                {project.Title}
              </Link> */}
              <ProjectImage
                projectId={project.id}
                projectTitle={project.Title}
              />
              {/*project description  */}
              <p className="text-white/70 text-justify font-[family-name:var(--font-almarai)]">
                {project.Description_All}
              </p>
              {/*stack  */}
              <ul className="flex gap-2">
                {project.techStack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className=" text-accent text-base lg:text-[15px] "
                    >
                      {item.name}{" "}
                      {index !== project.techStack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/*border  */}
              <div className="border border-white/20"></div>
              {/*buttons */}
              <div className="flex items-center gap-4">
                {/*Live project  button */}

                {/*github project  button */}
                {project.link && project.link !== "" ? (
                  <Link href={project.link} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <ArrowUpLeft className="text-3xl text-white group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : (
                  <div className="w-[70px] h-[70px] rounded-full bg-gray-300 flex justify-center items-center cursor-not-allowed">
                    <ArrowUpLeft className="text-3xl text-gray-500" />
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipContent>
                          <p>GitHub repository not available</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projectsData.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/*overlay*/}
                      <div className="absolute top-0 bottom-0 z-10 w-full h-full bg-black/10"></div>
                      {/*image */}
                      <div className="relative w-full h-full ">
                        <Image
                          src={project.imgs[0].img}
                          fill
                          className="object-fill"
                          alt="project-img"
                        />
                      </div>
                    </div>
                    {/* slider buttons */}
                    <WorkSliderBtns
                      containerStyles=" flex gap-2 absolute left-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                      btnStyles="  bg-gray-200/50 rounded-full p-2 text-primary  hover:bg-white hover:text-accent flex justify-center  items-center transition-all"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
