// import { motion } from "framer-motion";

// const ProjectCard = ({ title, description, link }) => (
//   <motion.div
//     className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transform transition-all hover:scale-105"
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.95 }}
//   >
//     <h3 className="text-xl font-bold">{title}</h3>
//     <p className="text-gray-600 mt-2">{description}</p>
//     <a
//       href={link}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="text-green-600 font-semibold mt-4 block"
//     >
//       View Project
//     </a>
//   </motion.div>
// );

// export default ProjectCard;


import { motion } from "framer-motion";

const ProjectCard = ({ title, description, link }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transform transition-all hover:scale-105 relative overflow-hidden"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {/* Animated Border Effect */}
    <motion.div
      className="absolute inset-0 border-2 border-transparent rounded-lg"
      initial={{ opacity: 0 }}
      whileHover={{ borderColor: "rgba(72, 187, 120, 0.8)", opacity: 1 }}
    />

    <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
    <p className="text-gray-600 mt-3 leading-relaxed">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-block text-white bg-green-600 hover:bg-green-500 font-semibold py-2 px-4 rounded-lg shadow-md transition-all"
    >
      View Project
    </a>

    {/* Subtle Background Animation */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-green-100 via-white to-green-50 opacity-0"
      whileHover={{ opacity: 0.3 }}
      transition={{ duration: 0.3 }}
    />
  </motion.div>
);

export default ProjectCard;
