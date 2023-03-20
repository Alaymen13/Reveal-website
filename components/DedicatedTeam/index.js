import React from "react";
import DedicatedProps from "/components/DedicatedTeam/DedicatedProps";

function DedicatedTeam() {
  return (
    <div className="mx-5 sm:mx-7 md:mx-12 lg:mx-10 xl:mx-24 2xl:mx-48 ">
      <div className="text-[33px] md:text-[28px] lg:text-[37px] text-center mt-20 mb-16 font-light mx-[25px] leading-9">
        The dedicated development team model is best suited for
      </div>
      <DedicatedProps
        title="Companies that need to extend expertise"
        des="Get specialists of any knowledge and seniority in a short period."
        bgImage="/DedicatedTeam/image1.png"
        bgColor="1"
        gradientColor="[#f1f2eb]"
      />
      <DedicatedProps
        title="Businesses with tight deadlines"
        des="Fit in tight schedule by swiftly boosting your capacity with remote experts."
        bgImage="/DedicatedTeam/image2.png"
        bgColor="2"
        gradientColor="[#cbc3bb]"
      />
      <DedicatedProps
        title="Startups that need to scale fast"
        des="Spend no time on local hires by leveraging an offshore managed team of any size."
        bgImage="/DedicatedTeam/image3.png"
        bgColor="3"
        gradientColor="[#d4cdcf]"
      />
      <DedicatedProps
        title="Those who need managed offshore IT specialists"
        des="Be in charge of the development process, while avoiding administration."
        bgImage="/DedicatedTeam/image4.png"
        bgColor="4"
        gradientColor="[#d4cdcf]"
      />
    </div>
  );
}

export default DedicatedTeam;
