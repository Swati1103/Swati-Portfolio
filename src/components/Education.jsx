import React from "react";
import { RiGraduationCapFill } from "react-icons/ri";

const Education = () => {
  return (
    <div className="bg-slate-400 min-h-screen p-5">
      <div className="flex item-center justify-center text-4xl font-bold mt-14 p-2">
        <RiGraduationCapFill className="mr-2" /> My
        <span className="text-indigo-800 ml-2">Education</span>
      </div>
      <hr className="border border-black w-64 mx-auto"/>
      <div className="mt-5 text-center">
        Education is not the learning of facts, but the training of the mind to
        think.
      </div>
      <div className="flex flex-col mt-10 space-y-8 items-center justify-center">
        <div className="flex bg-white border rounded-lg p-5 shadow-2xl w-2/3 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl hover:bg-slate-100">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYPZd8FuY_s9Mfr-jxFgm10xfAcooLc5jt_A&s"
            alt="school"
            className="w-52 h-36 mr-20"
          />
          <div className="flex flex-col justify-center">
            <div className="text-3xl font-bold text-blue-950">Secondary School-10th</div>
            <div className="mt-3">De Nobili School, Maithon | ICSE</div>
            <div className="text-green-900 text-xl font-semibold mt-3">2016-2017 | Completed</div>
          </div>
        </div>
        <div className="flex bg-white border rounded-lg p-5 shadow-2xl w-2/3 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl hover:bg-slate-100">
          <img
            src="https://maithandam.kvs.ac.in/sites/default/files/styles/hqphoto/public/20221010_101639_1.jpg?itok=IHRaVswP"
            alt="school"
            className="w-52 h-36 mr-20"
          />
          <div className="flex flex-col justify-center">
            <div className="text-3xl font-bold text-blue-950">
              Senior Secondary School-12th
            </div>
            <div className="mt-3">Kendriya Vidyalaya, Maithon Dam | CBSE</div>
            <div className="text-green-900 text-xl font-semibold mt-3">2018-2019 | Completed</div>
          </div>
        </div>
        <div className="flex bg-white border rounded-lg p-5 shadow-2xl w-2/3 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl hover:bg-slate-100">
          <img
            src="https://assets.telegraphindia.com/telegraph/2020/Dec/1607347206_bit-sindri.jpg"
            alt="school"
            className="w-52 h-36 mr-20"
          />
          <div className="flex flex-col justify-center">
            <div className="text-3xl font-bold text-blue-950">Bachelor of Engineering in Computer Science</div>
            <div className="mt-3">Birsa Institute of Technology, Sindri | CSE</div>
            <div className="text-green-900 text-xl font-semibold mt-3">2021-2025 | Pursuing</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
