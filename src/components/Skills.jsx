import React from "react";
import { skillcard } from "../utils.js";
import { FaLaptopCode } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="bg-slate-400 p-10">
      <div className="flex items-center justify-center text-4xl font-bold mt-10 p-2">
      <FaLaptopCode className="mr-3"/>Skills &<span className="text-blue-900 ml-3">Abilities</span></div>
      <hr className="border border-black w-72 mx-auto"/>
      <div className="grid grid-cols-5 gap-4 mt-10">
        {skillcard.map((skill) => (
          <div
            key={skill?.id}
            className="bg-white p-5 flex flex-col items-center shadow-md rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-slate-100"
          >
            <img
              src={skill?.path}
              alt={skill?.title}
              className="h-20 w-20 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold">{skill?.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
