import React from "react";
import { CgWebsite } from "react-icons/cg";
import QR from "../assets/QR.png";
import job from "../assets/job.png";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Projects = () => {
  return (
    <div className="bg-slate-400 min-h-screen p-10">
      <div className="flex text-4xl font-bold align-center justify-center p-2 mt-10">
        <CgWebsite className="mr-3" />
        My <span className="text-blue-900 ml-3">Projects</span>
      </div>
      <hr className="border border-black w-60 mx-auto"/>
      <div className="mt-2 text-lg font-medium text-center">
        Each project is a unique piece of development
      </div>
      <div className="flex flex-row mt-8">
        {/* left part */}
        <div className="basis-1/2">
          <div className="flex flex-col h-[600px] w-[600px] bg-slate-300 border rounded-full p-4 shadow-2xl mr-5 overflow-hidden mt-5">
            <img src={QR} alt="QR" className="w-[270px] h-auto max-w-xs mx-auto mt-6" />
            <div className="flex flex-col justify-center mt-4">
              <div className="text-center text-3xl font-bold">JOBZEE</div>
              <div className="text-center mt-3 text-sm italic">
                Find your job easily!
              </div>
              <div className="mt-4 text-sm text-center">
                Designed a full-stack web application using the MERN stack
                (MongoDB, Express.js, React.js, Node.js) for job seekers and
                employers.Job Seekers can search/apply for jobs, up- load
                resumes, and manage their applica- tions.Employers can post,
                edit, delete, view applicants' details, access resumes, and mark
                jobs as expired.Secure, role-based access controls. Efficient
                job listing and application handling in MongoDb, with expired
                jobs hidden from job seekers.
              </div>
              <div className="flex justify-center space-x-2 mt-5 flex-wrap">
                <div className="border border-zinc-400 bg-red-300 hover:bg-red-400 p-2 rounded-lg shadow-2xl">
                  MongoDb
                </div>
                <div className="border border-zinc-400 bg-red-300 hover:bg-red-400 p-2 rounded-lg shadow-2xl">
                  ExpressJs
                </div>
                <div className="border border-zinc-400 bg-red-300 hover:bg-red-400 p-2 rounded-lg shadow-2xl">
                  ReactJs
                </div>
                <div className="border border-zinc-400 bg-red-300 hover:bg-red-400 p-2 rounded-lg shadow-2xl">
                  NodeJs
                </div>
                <div className="border border-zinc-400 bg-red-300 hover:bg-red-400 p-2 rounded-lg shadow-2xl">
                  TailwindCSS
                </div>
              </div>
              <div className="flex justify-center space-x-12 mt-5 items-center">
                <a
                  href="https://github.com/Swati1103"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-lg font-semibold"
                >
                  Code <FaGithub className="ml-2" />
                </a>
                <a
                  href="https://jobseek121.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-lg font-semibold"
                >
                  Visit Here <FaArrowUpRightFromSquare className="ml-2" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-[200px] flex flex-col h-[600px] w-[600px] bg-slate-300 border rounded-full p-4 shadow-2xl mr-5 overflow-hidden">
          <img src="https://camo.githubusercontent.com/91682d48defd2322db208e2a75583408f6f2d5cb61b230c8a76f78d986433fff/68747470733a2f2f69302e77702e636f6d2f746865636c6576657270726f6772616d6d65722e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032302f31322f4d616368696e652d4c6561726e696e672d50726f6a6563742d6f6e2d486f7573652d50726963652d50726564696374696f6e2e706e673f6669743d313238302532433732302673736c3d31" alt="QR" className="w-[270px] h-auto max-w-xs mx-auto mt-6" />
          <div className="flex flex-col justify-center mt-4">
            <div className="text-center text-3xl font-bold">
              HOUSE PRICE PREDICTION
            </div>
            <div className="text-center mt-3 text-sm italic">
              Find your house easily!
            </div>
            <div className="mt-4 text-sm text-center">
              Utilized Random Forest Regressor to model complex relationships
              between features and predict house prices with high accuracy in
              cali- fornia. Achieved accuracy of 96.45% by employing
              Scikit-learn's score function for model evaluation.Leveraged
              Python libraries such as Pandas, NumPy, and Scikit-learn,
              Matplotlib for data processing and model building.
            </div>
            <div className="flex justify-center space-x-2 mt-5 flex-wrap">
              <div className="border border-zinc-400 bg-amber-300 hover:bg-amber-200 p-2 rounded-lg shadow-2xl">
                Pandas
              </div>
              <div className="border border-zinc-400 bg-amber-300 hover:bg-amber-200 p-2 rounded-lg shadow-2xl">
                NumPy
              </div>
              <div className="border border-zinc-400 bg-amber-300 hover:bg-amber-200 p-2 rounded-lg shadow-2xl">
                ScikitLearn
              </div>
              <div className="border border-zinc-400 bg-amber-300 hover:bg-amber-200 p-2 rounded-lg shadow-2xl">
                Matplotlib
              </div>
            </div>
            <div className="flex justify-center space-x-12 mt-5 items-center">
              <a
                href="https://github.com/Swati1103"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-lg font-semibold"
              >
                Code <FaGithub className="ml-2" />
              </a>
              <a
                href="https://github.com/Swati1103/House_Price_Prediction/blob/main/House_Price_Pediction.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-lg font-semibold"
              >
                Visit Here <FaArrowUpRightFromSquare className="ml-2" />
              </a>
            </div>
          </div>
          </div>
          <div className="mt-[200px] flex flex-col h-[600px] w-[600px] bg-slate-300 border rounded-full p-4 shadow-2xl mr-5 overflow-hidden">
          <img src="https://camo.githubusercontent.com/91682d48defd2322db208e2a75583408f6f2d5cb61b230c8a76f78d986433fff/68747470733a2f2f69302e77702e636f6d2f746865636c6576657270726f6772616d6d65722e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032302f31322f4d616368696e652d4c6561726e696e672d50726f6a6563742d6f6e2d486f7573652d50726963652d50726564696374696f6e2e706e673f6669743d313238302532433732302673736c3d31" alt="QR" className="w-[270px] h-auto max-w-xs mx-auto mt-6" />
          <div className="flex flex-col justify-center mt-4">
            <div className="text-center text-3xl font-bold">
              HOUSE PRICE PREDICTION
            </div>
            <div className="text-center mt-3 text-sm italic">
              Find your house easily!
            </div>
            <div className="mt-4 text-sm text-center">
              Utilized Random Forest Regressor to model complex relationships
              between features and predict house prices with high accuracy in
              cali- fornia. Achieved accuracy of 96.45% by employing
              Scikit-learn's score function for model evaluation.Leveraged
              Python libraries such as Pandas, NumPy, and Scikit-learn,
              Matplotlib for data processing and model building.
            </div>
            <div className="flex justify-center space-x-2 mt-5 flex-wrap">
              <div className="border border-zinc-400 bg-amber-300 hover:bg-amber-200 p-2 rounded-lg shadow-2xl">
                Pandas
              </div>
              <div className="border border-zinc-400 bg-amber-300 hover:bg-amber-200 p-2 rounded-lg shadow-2xl">
                NumPy
              </div>
              <div className="border border-zinc-400 bg-amber-300 hover:bg-amber-200 p-2 rounded-lg shadow-2xl">
                ScikitLearn
              </div>
              <div className="border border-zinc-400 bg-amber-300 hover:bg-amber-200 p-2 rounded-lg shadow-2xl">
                Matplotlib
              </div>
            </div>
            <div className="flex justify-center space-x-12 mt-5 items-center">
              <a
                href="https://github.com/Swati1103"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-lg font-semibold"
              >
                Code <FaGithub className="ml-2" />
              </a>
              <a
                href="https://github.com/Swati1103/House_Price_Prediction/blob/main/House_Price_Pediction.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-lg font-semibold"
              >
                Visit Here <FaArrowUpRightFromSquare className="ml-2" />
              </a>
            </div>
          </div>
          </div>
        </div>
        {/* divider */}
        <div className="w-1 bg-slate-950"></div>
        {/* right part */}
        <div className="basis-1/2">
          <div className="mt-[400px] flex flex-col h-[600px] w-[600px] bg-slate-300 border rounded-full p-4 shadow-4xl ml-16 overflow-hidden">
          <img src={job} alt="QR" className="w-[270px] h-auto max-w-xs mx-auto mt-6" />
          <div className="flex flex-col justify-center mt-4">
            <div className="text-center text-3xl font-bold">QR WEDS</div>
            <div className="text-center mt-3 text-sm italic">
              Find your card easily!
            </div>
            <div className="mt-4 text-sm text-center">
              Developed a comprehensive e-commerce plat- form using MERN stack
              (MongoDB, Express.js, React, Node.js) for managing displaying
              cards, QR, user authentication, and data storage.Implemented a
              unique feature allowing users to customize QR codes linked to
              online video invitations, enhancing the overall customer ex-
              perience.Used Tailwind CSS for designing.Established a secure
              backend infrastructure with MongoDB to store user data, order
              details, and QR code information, ensuring data privacy and
              accessibility.
            </div>
            <div className="flex justify-center space-x-2 mt-5 flex-wrap">
              <div className="border border-zinc-400 bg-teal-400 hover:bg-teal-300 p-2 rounded-lg shadow-2xl">
                MongoDb
              </div>
              <div className="border border-zinc-400 bg-teal-400 hover:bg-teal-300 p-2 rounded-lg shadow-2xl">
                ExpressJs
              </div>
              <div className="border border-zinc-400 bg-teal-400 hover:bg-teal-300 p-2 rounded-lg shadow-2xl">
                ReactJs
              </div>
              <div className="border border-zinc-400 bg-teal-400 hover:bg-teal-300 p-2 rounded-lg shadow-2xl">
                NodeJs
              </div>
              <div className="border border-zinc-400 bg-teal-400 hover:bg-teal-300 p-2 rounded-lg shadow-2xl">
                TailwindCSS
              </div>
            </div>
            <div className="flex justify-center space-x-12 mt-5 items-center">
              <a
                href="https://github.com/Swati1103"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-lg font-semibold"
              >
                Code <FaGithub className="ml-2" />
              </a>
              <a
                href="https://qrweds.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-lg font-semibold"
              >
                Visit Here <FaArrowUpRightFromSquare className="ml-2" />
              </a>
            </div>
          </div>
          </div>
          <div className="mt-[180px] flex flex-col h-[600px] w-[600px] bg-slate-300 border rounded-full p-4 shadow-2xl ml-16 overflow-hidden">
          <img src={job} alt="QR" className="w-[270px] h-auto max-w-xs mx-auto mt-6" />
          <div className="flex flex-col justify-center mt-4">
            <div className="text-center text-3xl font-bold">QR WEDS</div>
            <div className="text-center mt-3 text-sm italic">
              Find your card easily!
            </div>
            <div className="mt-4 text-sm text-center">
              Developed a comprehensive e-commerce plat- form using MERN stack
              (MongoDB, Express.js, React, Node.js) for managing displaying
              cards, QR, user authentication, and data storage.Implemented a
              unique feature allowing users to customize QR codes linked to
              online video invitations, enhancing the overall customer ex-
              perience.Used Tailwind CSS for designing.Established a secure
              backend infrastructure with MongoDB to store user data, order
              details, and QR code information, ensuring data privacy and
              accessibility.
            </div>
            <div className="flex justify-center space-x-2 mt-5 flex-wrap">
              <div className="border border-zinc-400 bg-teal-400 hover:bg-teal-300 p-2 rounded-lg shadow-2xl">
                MongoDb
              </div>
              <div className="border border-zinc-400 bg-teal-400 hover:bg-teal-300 p-2 rounded-lg shadow-2xl">
                ExpressJs
              </div>
              <div className="border border-zinc-400 bg-teal-400 hover:bg-teal-300 p-2 rounded-lg shadow-2xl">
                ReactJs
              </div>
              <div className="border border-zinc-400 bg-teal-400 hover:bg-teal-300 p-2 rounded-lg shadow-2xl">
                NodeJs
              </div>
              <div className="border border-zinc-400 bg-teal-400 hover:bg-teal-300 p-2 rounded-lg shadow-2xl">
                TailwindCSS
              </div>
            </div>
            <div className="flex justify-center space-x-12 mt-5 items-center">
              <a
                href="https://github.com/Swati1103"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-lg font-semibold"
              >
                Code <FaGithub className="ml-2" />
              </a>
              <a
                href="https://qrweds.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-lg font-semibold"
              >
                Visit Here <FaArrowUpRightFromSquare className="ml-2" />
              </a>
            </div>
          </div>
          </div>
          <div className="mt-[200px] mb-5 flex flex-col h-[600px] w-[600px] bg-slate-300 border rounded-full p-4 shadow-2xl ml-16 overflow-hidden">
          <img src={job} alt="QR" className="w-[270px] h-auto max-w-xs mx-auto mt-6" />
          <div className="flex flex-col justify-center mt-4">
            <div className="text-center text-3xl font-bold">QR WEDS</div>
            <div className="text-center mt-3 text-sm italic">
              Find your card easily!
            </div>
            <div className="mt-4 text-sm text-center">
              Developed a comprehensive e-commerce plat- form using MERN stack
              (MongoDB, Express.js, React, Node.js) for managing displaying
              cards, QR, user authentication, and data storage.Implemented a
              unique feature allowing users to customize QR codes linked to
              online video invitations, enhancing the overall customer ex-
              perience.Used Tailwind CSS for designing.Established a secure
              backend infrastructure with MongoDB to store user data, order
              details, and QR code information, ensuring data privacy and
              accessibility.
            </div>
            <div className="flex justify-center space-x-2 mt-5 flex-wrap">
              <div className="border border-zinc-400 bg-teal-400 hover:bg-teal-300 p-2 rounded-lg shadow-2xl">
                MongoDb
              </div>
              <div className="border border-zinc-400 bg-teal-400 hover:bg-teal-300 p-2 rounded-lg shadow-2xl">
                ExpressJs
              </div>
              <div className="border border-zinc-400 bg-teal-400 hover:bg-teal-300 p-2 rounded-lg shadow-2xl">
                ReactJs
              </div>
              <div className="border border-zinc-400 bg-teal-400 hover:bg-teal-300 p-2 rounded-lg shadow-2xl">
                NodeJs
              </div>
              <div className="border border-zinc-400 bg-teal-400 hover:bg-teal-300 p-2 rounded-lg shadow-2xl">
                TailwindCSS
              </div>
            </div>
            <div className="flex justify-center space-x-12 mt-5 items-center">
              <a
                href="https://github.com/Swati1103"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-lg font-semibold"
              >
                Code <FaGithub className="ml-2" />
              </a>
              <a
                href="https://qrweds.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-lg font-semibold"
              >
                Visit Here <FaArrowUpRightFromSquare className="ml-2" />
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
