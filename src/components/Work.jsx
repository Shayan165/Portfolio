import React from "react";
import Gallery from "../assets/gallery.png";
import Converter from "../assets/Converter.png"
import Todo from "../assets/Todolist.png"
import Pokedex from "../assets/pokedex.png"
import Microsoft from "../assets/Microsoft.png"
import Pass from "../assets/Pass_gen.png"


const Work = () => {
  return (
    <div name="work" className=" w-full md:h-screen text-gray-300  bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pd-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Gallery})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tacking-wider">
                <p>Image Gallery</p>
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://the-nature-gallery.vercel.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Shayan165/The-Nature-Gallery.git"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Converter})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}

            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tacking-wider">
                <p>Random Password Generator</p>
                React Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://password-generator-react-beta.vercel.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Shayan165/currency-converter-react"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Todo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tacking-wider">
                <p>Todo list</p>
                React Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://todolist-react-sage-three.vercel.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Shayan165/Todolist-React"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Pokedex})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tacking-wider">
                <p>Pokemon Gallery</p>
                React Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://pokedex-lovat-two.vercel.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Shayan165/pokedex"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Microsoft})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}

            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tacking-wider">
                <p>Microsoft landing page</p>
                Html/CSS Static Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://microsoft-clone-sigma.vercel.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Shayan165/microsoft-clone"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        
          <div
            style={{ backgroundImage: `url(${Pass})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}

            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tacking-wider">
                <p>Random Password Generator</p>
                React Application with Bootstrap
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://password-generator-react-beta.vercel.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Shayan165/password-generator-react"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Work;
