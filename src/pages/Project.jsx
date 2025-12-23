import React from "react";



const Project = () => {
  const projects = [
    {
      title: "Trade With Ravi",
      description: "An interactive web platform designed to teach users stock market concepts step-by-step, covering profit/loss, technical analysis, and risk management.",
      image: "https://tradewithravi.netlify.app/images/a1%20bagrond.jpg",
      link: "https://tradewithravi.netlify.app/",
      code: "https://github.com/rraviprasad/Trade_with_ravi"
    },
    {
      title: "Job Interview Q&A Generator",
      description: "A web application that helps users prepare for job interviews by generating interview questions and their corresponding answers one by one.",
      image: "https://github.com/rraviprasad/Job-Interview-Question-Generator/raw/main/Screenshot%20(199).png",
      link: "https://jiqgc.netlify.app/job-interview",
      code: "https://github.com/rraviprasad/Job-Interview-Question-Generator"
    },
    {
      title: "Farmer Friend App",
      description: "An Android-based mobile application built using Java and XML, aimed at providing essential resources and information to farmers.",
      image: "https://github.com/rraviprasad/Farmer_Friend_App/raw/main/FarmerFriend%20Images.jpg",
      link: "https://github.com/rraviprasad/Farmer_Friend_App",
      code: "https://github.com/rraviprasad/Farmer_Friend_App"
    },
    {
      title: "Crack-It - Interview Q&A App",
      description: "A specialized application designed to assist job seekers in interview preparation through a dynamic question-and-answer generation interface.",
      image: "https://github.com/rraviprasad/Crack-It---Interview-Question-Generator-App/raw/main/Crack%20It%20images.jpg",
      link: "https://github.com/rraviprasad/Crack-It---Interview-Question-Generator-App",
      code: "https://github.com/rraviprasad/Crack-It---Interview-Question-Generator-App"
    },
    {
      title: "Auto Algo",
      description: "An automated trading algorithm that executes market operations based on user-defined strategies and input parameters.",
      image: "https://github.com/user-attachments/assets/2c938d4d-9fed-4152-9f7d-c58acd268c95",
      link: "https://github.com/rraviprasad/Auto_Algo",
      code: "https://github.com/rraviprasad/Auto_Algo"
    },
  ];

  return (
    <section id="work" className="min-h-screen pt-24 pb-16 px-4 md:px-6 bg-[#212121] text-white flex flex-col justify-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-500/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-6xl font-caveat font-bold text-center mb-16 text-white relative inline-block w-full">
          My Projects
          <span className="block w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></span>
        </h2>

        {/* Projects Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.code}
                    className="flex-1 text-center px-4 py-2 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors text-sm"
                  >
                    View Code
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.link}
                    className="flex-1 text-center px-4 py-2 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors text-sm"
                  >
                    Live Demo
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
