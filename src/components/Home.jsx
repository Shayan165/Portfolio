import React, { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div name="home" className="w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full relative">
        
        {/* Animated intro text */}
        <p 
          className={`text-pink-600 text-lg transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            textShadow: '0 0 10px rgba(236, 72, 153, 0.5)'
          }}
        >
          Hi, my name is
        </p>
        
        {/* Name with glitch effect */}
        <div className="relative">
          <h1 
            className={`text-4xl sm:text-7xl font-bold text-[#ccd6f6] transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
            style={{
              textShadow: '0 0 20px rgba(204, 214, 246, 0.3)'
            }}
          >
            <span className="inline-block hover:text-pink-600 transition-colors duration-300 cursor-pointer">S</span>
            <span className="inline-block hover:text-pink-600 transition-colors duration-300 cursor-pointer">a</span>
            <span className="inline-block hover:text-pink-600 transition-colors duration-300 cursor-pointer">y</span>
            <span className="inline-block hover:text-pink-600 transition-colors duration-300 cursor-pointer">i</span>
            <span className="inline-block hover:text-pink-600 transition-colors duration-300 cursor-pointer">d</span>
            <span className="inline-block mx-2"></span>
            <span className="inline-block hover:text-pink-600 transition-colors duration-300 cursor-pointer">S</span>
            <span className="inline-block hover:text-pink-600 transition-colors duration-300 cursor-pointer">h</span>
            <span className="inline-block hover:text-pink-600 transition-colors duration-300 cursor-pointer">a</span>
            <span className="inline-block hover:text-pink-600 transition-colors duration-300 cursor-pointer">y</span>
            <span className="inline-block hover:text-pink-600 transition-colors duration-300 cursor-pointer">a</span>
            <span className="inline-block hover:text-pink-600 transition-colors duration-300 cursor-pointer">n</span>
          </h1>
          
          {/* Glitch overlay */}
          <h1 
            className="absolute top-0 left-0 text-4xl sm:text-7xl font-bold text-cyan-400 opacity-30 pointer-events-none"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
              animation: 'glitch1 4s infinite'
            }}
          >
            Sayid Shayan
          </h1>
          <h1 
            className="absolute top-0 left-0 text-4xl sm:text-7xl font-bold text-pink-600 opacity-30 pointer-events-none"
            style={{
              clipPath: 'polygon(0 60%, 100% 60%, 100% 100%, 0 100%)',
              animation: 'glitch2 4s infinite'
            }}
          >
            Sayid Shayan
          </h1>
        </div>

        {/* Subtitle with gradient and animation */}
        <div className="my-2">
          <h2 
            className={`text-4xl sm:text-7xl font-bold transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-[#8892b0] to-pink-600 bg-clip-text text-transparent animate-gradient">
              I'am a Full Stack Developer
            </span>
          </h2>
          
          {/* Animated underline */}
          <div 
            className="h-1 bg-gradient-to-r from-pink-600 via-cyan-400 to-pink-600 mt-2 rounded transition-all duration-1000 delay-600"
            style={{
              width: isVisible ? '70%' : '0%',
              boxShadow: '0 0 20px rgba(236, 72, 153, 0.6)'
            }}
          />
        </div>

        {/* Description with fade in */}
        <p 
          className={`text-[#8892b0] py-4 max-w-[700px] text-lg transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          specializing in building (and ocassionally designing) exceptional
          digital ecperiences. Currently, I'm focuses on building Customer centric Full Stack applications.
        </p>

        {/* Animated button */}
        <div 
          className={`transition-all duration-700 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-600/50">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>

        {/* Floating decorative elements */}
        <div 
          className="absolute -top-10 right-0 text-cyan-400 opacity-10 text-6xl font-mono pointer-events-none hidden sm:block"
          style={{
            animation: 'float 6s ease-in-out infinite'
          }}
        >
          {'</>'}
        </div>
        <div 
          className="absolute bottom-20 left-0 text-pink-600 opacity-10 text-5xl font-mono pointer-events-none hidden sm:block"
          style={{
            animation: 'float 5s ease-in-out infinite',
            animationDelay: '1s'
          }}
        >
          {'{}'}
        </div>
        <div 
          className="absolute top-1/2 -right-10 text-[#8892b0] opacity-10 text-4xl font-mono pointer-events-none hidden lg:block"
          style={{
            animation: 'float 7s ease-in-out infinite',
            animationDelay: '2s'
          }}
        >
          {'[ ]'}
        </div>
      </div>

      <style jsx>{`
        @keyframes glitch1 {
          0%, 100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(-2px, 2px);
          }
          66% {
            transform: translate(2px, -2px);
          }
        }
        
        @keyframes glitch2 {
          0%, 100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(2px, -2px);
          }
          66% {
            transform: translate(-2px, 2px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;