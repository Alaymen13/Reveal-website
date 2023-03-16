import React from "react";

function Banner() {
  return (
    <div
      className="w-full bg-cover bg-center"
      style={{
        height: "32rem",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)",
      }}
    >
      <div className="flex flex-col items-start justify-center h-full w-full bg-gradient-to-r from-[#5552569d] md:from-[#555256bc] to-transparent bg-opacity-30 container">
        <div className=" md:text-left text-white md:ml-8 lg:ml-16 container sm:max-w-[80%] md:max-w-[73%] lg:max-w-[58%] p-5">
          <h3 className="text-[15px] sm:text-1xl md:text-2xl my-4 md:my-5 tracking-wide">
            Dedicated Software Development Team
          </h3>
          <h1 className="text-2xl sm:text-4xl md:text-5xl  leading-tight text-left tracking-wider">
            Hire dedicated development team that fits your needs at scale
          </h1>
          <p className="text-sm sm:text-base md:text-lg mt-4 md:mt-6 max-w-lg tracking-wide">
            Alleviate the pressure of a backlog without hiring, training, and
            maintaining long-term salaries. Hire a dedicated software
            development team of hand-selected engineers.
          </p>
          <a
            href="#"
            className="inline-block mt-6 md:mt-8 text-md md:text-lg text-black bg-white capitalize hover:text-white hover:bg-transparent py-2 px-6 md:px-7 rounded-[30px] border-2 whitespace-nowrap"
          >
            CONTACT US
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
