import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projectData = [
    {
      title: "E-Commerce Website",
      description: "A full-featured online store with payment gateway integration.",
      link: "https://www.puropelle.com/",
    },
    {
      title: "Shopify Store Setup",
      description: "Designed and customized Shopify stores for clients.",
      link: "https://nishatlinen.com/",
    },
    {
      title: "IT Solutions",
      description: "Provided IT consultancy and developed scalable solutions.",
      link: "https://www.mushq.pk/",
    },
    {
      title: "AirGunsPK",
      description: "Developed a sleek product-based platform with modern UI and seamless performance.",
      link: "https://airgunspk.vercel.app/",
    },
  ];

  return (
    <div className="py-10 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-700 mb-8">
          Our Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Border Styling */}
              <div className="absolute inset-0 border border-green-400 rounded-lg pointer-events-none"></div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-max text-white bg-green-600 px-4 py-2 rounded-md font-medium shadow hover:bg-green-500 transition-all"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
