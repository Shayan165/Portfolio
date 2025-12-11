import React, { useState } from "react";
import { FaBars, FaTimes, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  
  return (
    <div className="w-full h-[80px] flex justify-between items-center px-4 text-gray-300">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "90px" }} />
      </div>
      
      {/* desktop menu */}
      <ul className="hidden lg:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* burger icon */}
      <div onClick={handleClick} className="lg:hidden z-[60] cursor-pointer relative">
        {!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
      </div>

      {/* Creative Mobile Menu with Slide-in Animation */}
      <div
        className={`fixed top-0 right-0 w-[75%] h-screen bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] transform transition-transform duration-500 ease-in-out z-50 lg:hidden ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          boxShadow: nav ? "-10px 0 30px rgba(0, 0, 0, 0.5)" : "none"
        }}
      >
        {/* Decorative gradient overlay */}
        <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-600 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400 rounded-full filter blur-3xl" />
        </div>

        {/* Menu Content */}
        <div className="relative h-full flex flex-col justify-center items-center px-8">
          
          {/* Navigation Links */}
          <ul className="space-y-6 w-full">
            <li className="transform transition-all duration-300 hover:translate-x-2">
              <Link 
                onClick={handleClick} 
                to="home" 
                smooth={true} 
                duration={500}
                className="text-3xl font-bold text-gray-300 hover:text-pink-600 transition-colors duration-300 flex items-center gap-3 group"
              >
           
                <span className="group-hover:tracking-wider transition-all duration-300">Home</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
              </Link>
            </li>
            
            <li className="transform transition-all duration-300 hover:translate-x-2">
              <Link 
                onClick={handleClick} 
                to="about" 
                smooth={true} 
                duration={500}
                className="text-3xl font-bold text-gray-300 hover:text-pink-600 transition-colors duration-300 flex items-center gap-3 group"
              >
           
                <span className="group-hover:tracking-wider transition-all duration-300">About</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
              </Link>
            </li>
            
            <li className="transform transition-all duration-300 hover:translate-x-2">
              <Link 
                onClick={handleClick} 
                to="skills" 
                smooth={true} 
                duration={500}
                className="text-3xl font-bold text-gray-300 hover:text-pink-600 transition-colors duration-300 flex items-center gap-3 group"
              >
          
                <span className="group-hover:tracking-wider transition-all duration-300">Skills</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
              </Link>
            </li>
            
            <li className="transform transition-all duration-300 hover:translate-x-2">
              <Link 
                onClick={handleClick} 
                to="work" 
                smooth={true} 
                duration={500}
                className="text-3xl font-bold text-gray-300 hover:text-pink-600 transition-colors duration-300 flex items-center gap-3 group"
              >
       
                <span className="group-hover:tracking-wider transition-all duration-300">Work</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
              </Link>
            </li>
            
            <li className="transform transition-all duration-300 hover:translate-x-2">
              <Link 
                onClick={handleClick} 
                to="contact" 
                smooth={true} 
                duration={500}
                className="text-3xl font-bold text-gray-300 hover:text-pink-600 transition-colors duration-300 flex items-center gap-3 group"
              >
            
                <span className="group-hover:tracking-wider transition-all duration-300">Contact</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
              </Link>
            </li>
          </ul>

          {/* Social Icons in Mobile Menu */}
          <div className="mt-12 flex gap-6">
            <a
              href="https://www.linkedin.com/in/sayid-shayan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shayanbhatkal786@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
            >
              <HiOutlineMail size={32} />
            </a>
            <a
               href="https://drive.google.com/file/d/1-uD0TpU63aEPqCR5tgCCoF6Mox3FeSAh/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-600 transform hover:scale-110 transition-all duration-300"
            >
              <BsFillPersonLinesFill size={32} />
            </a>
          </div>

          {/* Decorative line */}
          <div className="mt-8 w-32 h-1 bg-gradient-to-r from-pink-600 to-cyan-400 rounded-full" />
        </div>
      </div>

      {/* Overlay backdrop when menu is open */}
      {nav && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 z-40 md:hidden"
          onClick={handleClick}
        />
      )}

      {/* social icons - desktop */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 z-30">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/sayid-shayan"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shayanbhatkal786@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1-uD0TpU63aEPqCR5tgCCoF6Mox3FeSAh/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;