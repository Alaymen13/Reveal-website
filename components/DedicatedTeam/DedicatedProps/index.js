import React from "react";
import { useWindowSize } from "/utils/useWindowSize";

function DedicatedProps({ title, des, bgImage, bgColor, gradientColor }) {
  const { width } = useWindowSize();

  const backgroundSize =
    width >= 768 ? "50% auto" : width >= 1024 ? "70% auto" : "100% auto";
  return (
    <>
      <div
        className={`BgImage bg-cover  rounded-2xl h-[100%] md:mb-10 ${
          bgColor === "1"
            ? "bg-[#f1f2eb]"
            : bgColor === "2"
            ? "bg-[#cac2ba]"
            : bgColor === "3"
            ? "bg-[#42aee3]"
            : "bg-[#f6f6f6]"
        } overflow-hidden py-[100px] lg:pb-[50px] md:py-0`}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "right",
          backgroundSize,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-start justify-center h-full w-full bg-opacity-30 max-w-[1120px] text-black">
          <div
            className=" inset-0 z-[-1] bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(to right,  50%, transparent 50%)`,
            }}
          ></div>

          <div className="hidden md:block ml-[1rem] lg:ml-[2rem]  xl:ml-[2rem] 2xl:ml-[3rem] max-w-[374px] py-12 ">
            <h3 className=" md:text-3xl my-4 md:my-5 font-semibold ">
              {title}
            </h3>

            <p className="text-sm sm:text-base md:text-lg mt-4 md:mt-6 max-w-lg tracking-wide">
              {des}
            </p>
          </div>
        </div>
      </div>
      <div className="md:hidden block max-w-[100%] mb-12">
        <h3 className="text-[28px] my-5  font-semibold leading-8">{title}</h3>

        <p className=" text-lg mt-4 tracking-wide text-[#717171] mr-8 font-normal">
          {des}
        </p>
      </div>
    </>
  );
}

export default DedicatedProps;
