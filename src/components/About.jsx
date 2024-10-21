import React from "react";
import about from "../assets/user.png";
import profile from "../assets/profile.jpg";
import resume from "../assets/res.png";
import { FaAngleRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-slate-400 min-h-screen p-5">
      <div className="flex items-center justify-center text-bold mt-14">
        <img src={about} alt="about" className="w-9 h-9 mr-3" />
        <div className="text-4xl font-bold p-2">
          About <span className="text-indigo-900">Me</span>
        </div>
      </div>
      <hr className="border border-black w-48 mx-auto"/>

      <div className="flex flex-row mt-20">
        <div className="basis-1/2 ml-36 mt-2">
          <img src={profile} alt="profile" className="w-[400px] h-[400px] rounded-full shadow-xl transition-transform duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-5 hover:shadow-2xl" />
        </div>
        <div className="basis-1/2 mr-40">
          <div className="text-2xl font-bold">I'm Swati</div>
          <div className="font-semibold">Full Stack Developer</div>
          <div className="mt-5">
            I am Swati Singh, currently pursuing my Computer Science degree from
            BIT Sindri. I have a strong foundation in problem-solving, data
            structures, and algorithms, and I am passionate about coding, which
            is reflected in my 5-star Hackerrank profile in C++ and Problem
            Solving. I've interned at Cognera Incorporation as a MERN stack web
            developer, where I contributed to building the Prayas75 website,
            handling both frontend and backend development on AWS.
          </div>
          <div className="mt-5"><span className="text-blue-600 mr-3">Email:</span>rathoreswati0301@gmail.com</div>
          <div className="mt-3"><span className="text-blue-600 mr-3">Phone:</span>9044345593</div>
          <div className="mt-3"><span className="text-blue-600 mr-3">Place:</span>Maithon, Dhanbad, India - 828207</div>
          <div className="mt-5 h-12 w-32 bg-blue-900 border border-blue-700 shadow-2xl rounded-lg hover:bg-blue-950 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-xl font-semibold text-white ml-4 mt-2"
              >
                Resume <FaAngleRight className="ml-2"/>
              </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
