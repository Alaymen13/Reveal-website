import React from "react";

function DedicatedTeam() {
  return (
    <div className="mx-10 sm:mx-12 md:mx-12 lg:mx-14 xl:mx-20 2xl:mx-48 ">
      <div className="text-[25px] md:text-[28px] lg:text-[32px] text-center mt-20 mb-16 ">
        The dedicated development team model is best suited for
      </div>
      <div
        className="rounded-2xl h-[100%] mx-8 bg-[#f4eff1] overflow-hidden"
        style={{
          backgroundImage:
            "url(https://cdn-cfdja.nitrocdn.com/uOxxxDWjcukgNxoRlWCAPnOZsfFUWQlA/assets/images/optimized/rev-cd6b5ea/wp-content/uploads/2021/04/1_375.jpeg)",
          backgroundPosition: "right",
          backgroundSize: "50% auto",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="flex flex-col items-start justify-center h-full w-full bg-opacity-30 max-w-[1120px] text-black"
          style={{
            backgroundImage:
              "linear-gradient(to right, #f1f2eb 50%, transparent 50%)",
          }}
        >
          <div className=" ml-[1rem] lg:ml-[2rem]  xl:ml-[2rem] 2xl:ml-[3rem] max-w-[374px] py-12">
            <h3 className=" md:text-3xl my-4 md:my-5 font-semibold ">
              Companies that need to extend expertise
            </h3>

            <p className="text-sm sm:text-base md:text-lg mt-4 md:mt-6 max-w-lg tracking-wide">
              Get specialists of any knowledge and seniority in a short period.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DedicatedTeam;
