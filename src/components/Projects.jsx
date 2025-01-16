import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projectData = [
    {
      title: "E-Commerce Website",
      description: "A full-featured online store with payment gateway integration.",
      link: "#",
    },
    {
      title: "Shopify Store Setup",
      description: "Designed and customized Shopify stores for clients.",
      link: "#",
    },
    {
      title: "IT Solutions",
      description: "Provided IT consultancy and developed scalable solutions.",
      link: "#",
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



































// import React from 'react';

// const Projects = () => {
//   const projectData = [
//     {
//       title: 'E-Commerce Website',
//       description: 'A full-featured online store with payment gateway integration.',
//       link: '#',
//     },
//     {
//       title: 'Shopify Store Setup',
//       description: 'Designed and customized Shopify stores for clients.',
//       link: '#',
//     },
//     {
//       title: 'IT Solutions',
//       description: 'Provided IT consultancy and developed scalable solutions.',
//       link: '#',
//     },
//   ];

//   return (
//     <section className="p-6 bg-gray-100">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projectData.map((project, index) => (
//             <div
//               key={index}
//               className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transform transition-all hover:scale-105"
//             >
//               <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//               <p className="text-gray-600 mb-4">{project.description}</p>
//               <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-green-600 font-semibold hover:underline"
//               >
//                 View Project
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


// import React from "react";
// import { motion } from "framer-motion";

// const Projects = () => {
//   const projectData = [
//     {
//       title: "E-Commerce Website",
//       description: "A full-featured online store with payment gateway integration.",
//       link: "#",
//     },
//     {
//       title: "Shopify Store Setup",
//       description: "Designed and customized Shopify stores for clients.",
//       link: "#",
//     },
//     {
//       title: "IT Solutions",
//       description: "Provided IT consultancy and developed scalable solutions.",
//       link: "#",
//     },
//   ];

//   return (
//     // <section className="py-12 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
//           Our Projects
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projectData.map((project, index) => (
//             <motion.div
//               key={index}
//               className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//             >
//               {/* Border Decoration */}
//               <div className="absolute inset-0 border border-green-500 rounded-lg pointer-events-none"></div>

//               <div className="p-6">
//                 <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-600 mb-6">{project.description}</p>
//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block bg-green-600 text-white px-4 py-2 rounded-md font-semibold text-center shadow hover:bg-green-500 transition-all"
//                 >
//                   View Project
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     // </section>
//   );
// };

// export default Projects;









