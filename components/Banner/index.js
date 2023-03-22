import React from "react";

function Banner() {
  return (
    <div
      className="w-full bg-cover bg-center h-[55vh] sm:h-[65vh] md:h-[93vh] xl:h-[98vh] overflow-hidden mt-10 md:mt-12"
      style={{
        backgroundImage: `url(/banner.png)`,
      }}
    >
      <div className="flex flex-col items-start justify-center h-full w-full bg-gradient-to-r from-[#4444447a] md:from-[#4444447a] to-[#4444447a] md:to-transparent bg-opacity-30 max-w-[1120px] ">
        <div className=" md:text-left text-white md:ml-[2rem] lg:ml-[4rem]   xl:ml-[6rem] 2xl:ml-[14rem] max-w-[574px] p-5">
          <h3 className="text-[15px] sm:text-1xl md:text-2xl my-4 md:my-5 font-extralight">
            Dedicated Software Development Team
          </h3>
          <h1 className="text-[20px] sm:text-4xl md:text-[43px] lg:text-[46px] text-left tracking-wider my-4 sm:my-5 md:my-6 md:leading-[52px] font-light">
            Hire dedicated development team that fits your needs at scale
          </h1>
          <p className="text-sm sm:text-base md:text-lg mt-4 md:mt-6 max-w-lg tracking-wide">
            Alleviate the pressure of a backlog without hiring, training, and
            maintaining long-term salaries. Hire a dedicated software
            development team of hand-selected engineers.
          </p>
          <a
            href="#"
            className="inline-block mt-6 md:mt-8 text-md md:text-lg text-black bg-white capitalize hover:text-white hover:bg-transparent py-2 px-5 md:px-7 rounded-[30px] border-2 border-white  whitespace-nowrap"
          >
            CONTACT US
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
