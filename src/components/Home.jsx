import React, { useState, useEffect } from "react";
import profile from "../assets/profile.jpg";
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";
import gfg from "../assets/g4g.jpg";
import hackerrank from "../assets/hackerrank.png";
import leetcode from "../assets/Leetcode.png";
import git from "../assets/git.png";
import linkedIn from "../assets/linkedIn.png";
import { Link } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";

const Home = () => {
  const prof = [
    "Frontend Developer",
    "Backend Developer",
    "Web Designing",
    "Machine Learning",
  ];
  const [currProf, setCurrProf] = useState(prof[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrProf((prevProf) => {
        const currIndex = prof.indexOf(prevProf);
        const nextIndex = (currIndex + 1) % prof.length;
        return prof[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [prof]);

  return (
    <div>
      <div className="flex flex-row bg-gray-400 min-h-screen">
        <div className="basis-1/2 pl-32 pt-32 mt-32">
          <div className="text-6xl font-bold">Hi There,</div>
          <br />
          <div className="text-6xl font-bold">
            I'm Swati <span className="text-red-400">Singh</span>
          </div>
          <div className="mt-7 text-3xl font-semibold">
            <div>
              I Am Into <span className="text-red-900">{currProf}</span>
            </div>
          </div>
          <Link to="/about">
            <div className="border border-black px-4 py-2 w-36 h-12 text-white text-lg rounded-3xl bg-cyan-800 mt-7 hover:bg-cyan-700 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
              About Me ⬇️
            </div>
          </Link>

          <div className="flex flex-row items-center space-x-4 mt-7">
            <a
              href="https://github.com/Swati1103"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
            >
              <img
                src={git}
                alt="GFG"
                className="w-10 h-10 object-cover rounded-full"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/swatisingh1103/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
            >
              <img
                src={linkedIn}
                alt="GFG"
                className="w-10 h-10 object-cover rounded-full"
              />
            </a>
            <a
              href="https://www.hackerrank.com/profile/pariswati1103"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
            >
              <img
                src={hackerrank}
                alt="GFG"
                className="w-10 h-10 object-cover rounded-full"
              />
            </a>
            <a
              href="https://leetcode.com/u/pariswati1103/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
            >
              <img
                src={leetcode}
                alt="GFG"
                className="w-10 h-10 object-cover rounded-full"
              />
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/swatisingh1103/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
            >
              <img
                src={gfg}
                alt="GFG"
                className="w-10 h-10 object-cover rounded-full"
              />
            </a>
          </div>
        </div>

        <div className="basis-1/2 pl-20 py-32 mt-24">
          <img
            src={profile}
            alt="profile"
            className="rounded-full w-[400px] h-[400px] object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-5 hover:shadow-2xl"
          />
        </div>
      </div>
      <About/>
      <Skills />
      <Education />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
};

export default Home;
