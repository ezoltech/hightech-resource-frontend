import React from "react";
import { Button } from "flowbite-react";
import Slide from "react-reveal/Slide";
export const Hero = () => {
  return (
    <>
      <div className="flex  justify-between flex-col lg:flex-row px-4 space-y-5 lg:space-y-0  pt-5 xl:h-screen bg-green-100 items-center">
        <Slide left>
          <div className="pt-32 flex flex-col justify-center text-center lg:text-left md:p-20">
            <h1 className="mb-4 font-bold lg:text-black-300  text-2xl lg:text-6xl sm:text-5xl  relative z-10">
              Access and <br /> Share Collage <br /> Resources with <br /> <span className="text-yellow-400">RES SHARE</span> 
            </h1>
            <p className="text-lg font-normal text-gray-500 lg:text-2xl dark:text-gray-400  relative z-10">
              Empowering Students with Colaberative Platform
            </p>
            <div className="w-[300px] h-[300px] bg-green-400 rounded-full absolute z-1 top-[55%] left-[45%] translate-x-[-50%] translate-y-[-50%] blur-[300px] lg:blur-[100px]"></div>
            <div className="mt-5 w-full flex md:justify-start justify-center">
              <Button className="py-3 lg:py-5 px-20 mr-2 mb-2 text-2xl font-medium text-black/60 focus:outline-none bg-green-400 border rounded-md  hover:bg-green-500 hover:text-white hover:border-transparent">
                Get started
              </Button>
            </div>
          </div>
        </Slide>
        <Slide right>
          <img
            className="rounded-lg relative z-10  w-[500px] h-[500px]"
            src="/images/heroimg.png"
            alt=""
          />
        </Slide>
      </div>
    </>
  );
};
