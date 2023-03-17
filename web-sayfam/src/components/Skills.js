import React from "react";

import { sData } from "../skillsimages/skillsData";

export const Skills = () => {
  return (
    <div className="mt-20 mb-44 text-center text-4xl">
      <h1 className="mb-16 font-inter font-bold ">Skills</h1>

      <div className="flex justify-center space-x-12">
        {sData.map((a) => (
          <div className="flex flex-col items-center">
            <img className="mx-auto h-32 w-32" src={a.img} alt={a.name} />
            <p className="p-2 text-2xl font-Inter font-semibold">{a.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
