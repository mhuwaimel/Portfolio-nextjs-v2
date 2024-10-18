"use client";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import Image from "next/image";

import projectsData from "@/data/projects";

export default function ProjectImage({ projectId, projectTitle }) {
  return (
    <div dir="ltr" className=" max-w-md ">
      <Modal>
        <ModalTrigger className=" ">
          <p
            dir="rtl"
            className="text-lg md:text-xl md:mb-1 md:mt-2 font-semibold  underline  
         font-[family-name:var(--font-cairo-regular)] leading-none
          text-white hover:text-accent hover:transition-all duration-500"
            href="/projects/[id]"
            as={"/projects/" + projectId}
          >
            {projectTitle}
          </p>
        </ModalTrigger>
        <ModalBody>
          <ModalContent className="sm:max-w-[900px] ">
            {projectsData
              .filter((project) => project.id === projectId)
              .map((filterarray, index) => (
                <div className="" key={index}>
                  <Carousel className="">
                    <CarouselContent>
                      {filterarray.imgs.map((filter, idxx) => (
                        <CarouselItem key={"images" + idxx}>
                          <img
                            src={filter.img}
                            width="1920"
                            height="1080"
                            className="aspect-video object-cover w-full h-full"
                            alt={"project " + projectTitle + " " + idxx}
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselNext className="text-white bg-black bg-opacity-50 rounded-full p-2 absolute top-1/2 right-4 transform -translate-y-1/2" />
                    <CarouselPrevious className="text-white bg-black bg-opacity-50 rounded-full p-2 absolute top-1/2 left-4 transform -translate-y-1/2" />

                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-2" />
                  </Carousel>
                </div>
              ))}
            {/* <div className="flex justify-center items-center">
              <Carousel className="w-full max-w-md ">
                <CarouselContent>
                  {images.map((image, idx) => (
                    <CarouselItem key={"images" + idx}>
                      {/* <Image
                        src={image}
                        width={600}
                        height={500}
                        alt={"project " + projectTitle + " " + idx}
                        objectFit=""
                        className="aspect-video object-cover rounded-md"
                      /> 
                      <img
                        src={image}
                        alt={"project " + projectTitle + " " + idx}
                        className="aspect-[16/9] object-cover w-full h-full"
                        width="1920"
                        height="1080"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div> */}
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
