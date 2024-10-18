import React, { useState } from "react";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import contact from "../assets/5138237.jpg";
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillMessage, AiOutlineSend } from "react-icons/ai";

const Contact = () => {
  // useState Hook: This React hook is used to define and manage state in functional components.
  // formData: This variable holds the current state of the form data. Initially, it's an object with four fields: name, email, phone, and message, all of which are set to empty strings.
  // setFormData: This is a function used to update the formData state when any of the form inputs change.
  // Initial State: The form starts with all the fields (name, email, phone, and message) being empty strings.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  // handleChange: This function is triggered when any input field in the form changes.

  // e (Event Object):

  // e.target.name: Refers to the name attribute of the HTML input element that triggered the event (for example, "name", "email", etc.).
  // e.target.value: Refers to the current value entered by the user in the input field

  //   Spread Operator (...formData):
  // { ...formData }: This is using the "spread operator," which copies all the current properties of the formData object. This ensures that the existing form data is preserved, so when you update one field (like "name"), the other fields (email, phone, etc.) remain unchanged.
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission, such as sending the data to a server or API
    console.log(formData); // For now, we log the form data to the console
    // You can add additional functionality like form validation or sending the data to an API
  };

  return (
    <div className="bg-slate-400 min-h-screen p-5">
      <div className="flex items-center justify-center text-4xl font-bold mt-2 p-2">
        <TfiHeadphoneAlt className="mr-3" />
        Get In <span className="text-blue-900 ml-3">Touch</span>
      </div>
      <hr className="border border-black w-60 mx-auto"/>
      <div className="flex flex-col mt-10 items-center justify-center">
        <div className="flex flex-row bg-white border rounded-lg p-5 shadow-2xl w-4/5 h-[550px]">
          <div className="basis-1/2">
            <img src={contact} alt="contact" className="h-[500px] w-[500]" />
          </div>
          <div className="basis-1/2 p-5">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="flex items-center bg-gray-100 p-2 rounded-md h-12">
                <IoPerson className="text-slate-950 mr-3" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full bg-transparent focus:outline-none text-slate-950"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="flex items-center bg-gray-100 p-2 rounded-md h-12">
                <MdEmail className="text-slate-950 mr-3" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full bg-transparent focus:outline-none text-slate-950"
                  required
                />
              </div>

              {/* Phone Input */}
              <div className="flex items-center bg-gray-100 p-2 rounded-md h-12">
                <FaPhoneAlt className="text-slate-950 mr-3" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full bg-transparent focus:outline-none text-slate-950"
                  required
                />
              </div>

              {/* Message Input */}
              <div className="flex items-start bg-gray-100 p-2 rounded-md h-12">
                <AiFillMessage className="text-slate-950 mr-3 mt-2" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full bg-transparent focus:outline-none text-slate-950"
                  rows="2"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex items-center justify-center w-24 py-2 bg-indigo-800 text-white font-semibold rounded-md hover:bg-blue-700 transition-all duration-300"
              >
                Submit
                <AiOutlineSend className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
