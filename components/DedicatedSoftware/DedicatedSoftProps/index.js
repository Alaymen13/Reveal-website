import React from "react";
import { useWindowSize } from "/utils/useWindowSize";

function DedicatedSoftProps({ no, title, des }) {
  return (
    <>
      <div className="flex">
        <div className="mr-10 h-[80px] sm:h-[80px] md:h-[80px] lg:h-[100px]">
          <div className="text-white text-lg bg-[#3c4fdb] px-[9px] mt-[1.3px] rounded-3xl border-[4.3px] border-[#a0a9ee] shadow-xl boxShadow">
            {no}
          </div>
          <div className="bg-[#a1aaee] h-[100%] w-[1.2px]  mt-[20px] ml-[18px] "></div>{" "}
        </div>
        <div className=" md:mb-10">
          <div className=" ">
            <h3 className="text-2xl md:text-3xl mb-3 md:mb-4 font-semibold ">
              {title}
            </h3>

            <p className="text-[#717171] text-sm sm:text-lg md:text-xl mt-2 md:mt-4 tracking-wide mr-10 font-normal">
              {des}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DedicatedSoftProps;
