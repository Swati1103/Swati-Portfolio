import React from "react";
import { PiCertificateBold } from "react-icons/pi";
import { HiAcademicCap } from "react-icons/hi2";
import { CgWebsite } from "react-icons/cg";
import QR from "../assets/QR.png";
import job from "../assets/job.png";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaArrowCircleLeft } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { IoLocationSharp } from "react-icons/io5";

const Experience = () => {
  return (
    <div className="bg-slate-400 min-h-screen p-5">
      <div className="flex items-center justify-center text-4xl font-bold mt-14 p-2">
        <PiCertificateBold className="mr-3" />
        My <span className="text-blue-900 ml-3">Experience</span>
      </div>
      <hr className="border border-black w-72 mx-auto" />
      <div className="flex flex-row mt-14">
        <div className="border border-slate-400 h-[500px] w-[500px] rounded-full bg-slate-300 ml-7 shadow-2xl">
          <div className="text-3xl font-bold text-center mt-44 text-blue-800">
            COGNERA INCORPORATION
          </div>
          <hr className="mx-14 border border-blue-800" />
          <div className="mt-2 text-2xl font-semibold text-center text-blue-700">
            INTERN
          </div>
          <div className="mt-2 text-xl font-semibold text-center">
            Full Stack Web Developer as MERN
          </div>
          <div className="flex items-center justify-center text-lg font-light mt-2">
            <SlCalender className="mr-2" />
            Jan 2024 - Aug 2024
          </div>
          <div className="mt-2 text-lg font-light flex items-center justify-center">
            <IoLocationSharp className="mr-2" />
            Work From Home
          </div>
        </div>
        <div className="border border-slate-400 h-[500px] w-[700px] rounded-lg bg-slate-300 ml-32 shadow-2xl">
          <div className="mt-5 text-center text-3xl font-bold">My Work</div>
          <hr className="mx-72 border border-black" />
          <div className="mt-10 text-sm text-center">
            PRAYAS75 is a fully responsive website designed to manage and store
            scholarship and transaction details securely, streamlining the
            process of tracking and managing scholarship information.This
            scholarship management website efficiently handles user roles and
            access levels.It supports different user types—admin, gold, blue,
            and silver—each with distinct functionalities and permissions.Worked
            on different types of User and Admin Authentication and
            Authorization which allows Admin to delete or change user
            level.Admin has full access to user data, contact queries, and role
            management.
          </div>
          <div className="flex mt-16">
            <div className="ml-7 mt-2 mr-3 text-xl font-semibold text-blue-800">Tech Stack : </div>
            <div className="flex justify-center space-x-4 flex-wrap">
              <div className="border border-zinc-400 bg-slate-400 hover:bg-slate-500 p-2 rounded-lg shadow-2xl">
                MongoDb
              </div>
              <div className="border border-zinc-400  bg-slate-400 hover:bg-slate-500 p-2 rounded-lg shadow-2xl">
                ExpressJs
              </div>
              <div className="border border-zinc-400  bg-slate-400 hover:bg-slate-500 p-2 rounded-lg shadow-2xl">
                ReactJs
              </div>
              <div className="border border-zinc-400  bg-slate-400 hover:bg-slate-500 p-2 rounded-lg shadow-2xl">
                NodeJs
              </div>
              <div className="border border-zinc-400  bg-slate-400 hover:bg-slate-500 p-2 rounded-lg shadow-2xl">
                TailwindCSS
              </div>
            </div>
          </div>
          <div className="mt-16">
              <a
                href="https://prayas75-2-0-client.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-xl font-semibold ml-7 text-blue-800"
              >
                Visit Here <FaArrowUpRightFromSquare className="ml-2" />
              </a>
            </div>
            <hr className="mr-[555px] ml-8 border border-blue-800"/>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Experience;
