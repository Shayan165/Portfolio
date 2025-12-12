import React from "react";
import { trackProjectDemo } from '../utils/analytics';
import Bazaar from "../assets/Bazaar.png";
import Circlepr from "../assets/CirclePR.png";
import Chess2kidz from "../assets/Chess2kidz.png";
import Visionjv from "../assets/VisionJV.png";
import Visionrr from "../assets/VisionRR.png";
import Visionhr from "../assets/VisionHR.png";

const projects = [
  {
    title: "Bazaar E-commerce Website",
    subtitle: "E-commerce Application",
    image: Bazaar,
    demo: "https://www.bazaar-uae.com/",
    techStack: "React, Nodejs, MongoDB",
  },
  {
    title: "CirclePr",
    subtitle: "Gifting Application",
    image: Circlepr,
    demo: "https://circlepr.ai/",
    techStack: "React, Nodejs, Firebase",
  },
  {
    title: "Chess2kidz",
    subtitle: "E-learning Application",
    image: Chess2kidz,
    demo: "https://chess2kidz.com/",
    techStack: "React, Nodejs, MongoDB",
  },
  {
    title: "VisionJV",
    subtitle: "Health Application",
    image: Visionjv,
    demo: "https://visionjv.com/",
    techStack: "React, Tailwind CSS, Nodejs ",
  },
  {
    title: "VisionRR",
    subtitle: "Health Application",
    image: Visionrr,
    demo: "https://visionrr.io/",
    techStack: "React, Tailwind CSS , Nodejs",
  },
  {
    title: "VisionHR",
    subtitle: "Health Application",
    image: Visionhr,
    demo: "https://visionrr.io/",
    techStack: "React, Tailwind CSS , Nodejs",
  },
];

const ProjectCard = ({ image, title, subtitle, demo, techStack }) => {
  const handleDemoClick = () => {
    trackProjectDemo(title);
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/80 via-slate-900/90 to-slate-950/90 p-[1px] transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-pink-500/30">
      <div className="flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl bg-slate-900/70 backdrop-blur-md border border-white/5">
        <div className="relative h-36 md:h-40 w-full overflow-hidden flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent opacity-80" />
        </div>

        <div className="flex flex-1 flex-col justify-between px-4 sm:px-5 py-4">
          <div className="text-left">
            <p className="text-xs uppercase tracking-[0.2em] text-pink-400">
              {subtitle}
            </p>
            <h3 className="mt-1 text-base sm:text-lg font-semibold text-white line-clamp-2">
              {title}
            </h3>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              onClick={handleDemoClick}
              className="inline-flex items-center justify-center rounded-lg bg-pink-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-pink-500/40 transition hover:bg-pink-400 hover:shadow-pink-400/50"
            >
              View Demo
            </a>
            <span className="text-xs sm:text-[11px] text-slate-400 line-clamp-2">{techStack}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <div name="work" className="w-full min-h-screen text-gray-300 py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center w-full h-full">
        <div className="pb-8 md:pb-12">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-4 sm:py-6 text-sm sm:text-base">// Check out some of my recent work</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              image={project.image}
              title={project.title}
              subtitle={project.subtitle}
              demo={project.demo}
              techStack={project.techStack}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;