import React from "react";
import DedicatedSoftProps from "/components/DedicatedSoftware/DedicatedSoftProps";

function DedicatedSoftware() {
  return (
    <div>
      <div className="mx-5 sm:mx-7 md:mx-12 lg:mx-16 xl:mx-24 2xl:mx-48 ">
        <div className="text-[33px] md:text-[32px] lg:text-[37px] text-center mt-20 mb-16 font-light mx-[25px] leading-9">
          Dedicated software development team set-up process
        </div>
        <DedicatedSoftProps
          no="1"
          title="Gathering requirements"
          des="We start by hearing out your needs, which include a project description, job descriptions, team size, and desired workflow to assemble the right specialists for your project."
        />
        <DedicatedSoftProps
          no="2"
          title="Assembling the team"
          des="If we have unoccupied specialists in-house, you can start work immediately. If we don’t have the desired talent, we do additional hires that can take around 1 month. Or if you need experts fast, we have access to a talent pool of our partners that allows us to provide any remote dedicated development team in Ukraine in under a week."
        />
        <DedicatedSoftProps
          no="3"
          title="Talent selection"
          des="Our HR team assesses candidates to learn their background, tech skills, English level, and soft skills and then selects a best-fit candidate for a final interview with you."
        />
        <DedicatedSoftProps
          no="4"
          title="Integrating the team"
          des="Based on years of practice, we smoothly and painlessly integrate our team into your ongoing project. You can choose the preferred management approach and tools. It is recommended that you meet with a team in-person by getting them to your office or by taking a trip to us."
        />
        <DedicatedSoftProps
          no="5"
          title="The result"
          des="Hiring a dedicated software development team in Ukraine provides you with needed specialists under your complete control, just as with your in-house team. The only difference is the team works remotely and we handle all the administration."
        />
      </div>
    </div>
  );
}

export default DedicatedSoftware;
