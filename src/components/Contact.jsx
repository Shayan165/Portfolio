import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-scroll";

const Contact = () => {
  return (
    <>
      <div
        name="contact"
        className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
      >
        <form
          method="POST"
          action="https://getform.io/f/269929dc-4ab7-4bf5-ab85-0f621ed2eb18"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
              Contact
            </p>
            <p className="text-gray-300 py-4">
              // Submit the form or shoot me an email -
              Shayanbhatkal786@gmail.com
            </p>
          </div>
          <input
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2"
            name="message"
            placeholder="Message"
            rows="10"
          ></textarea>
          <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
            Let's Talk
          </button>
        </form>
        <div style={{ marginLeft: 50 }}>
          <Link to="home" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 ">
              To Top
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowLeft className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Contact;
