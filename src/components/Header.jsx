import { motion } from "framer-motion";

const Header = () => (
  <motion.header
    className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white text-center py-20 px-6 shadow-2xl rounded-b-lg"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <h1 className="text-6xl font-semibold tracking-wide leading-snug mb-6">
      Hello, I'm Muhammad Ahmad
    </h1>
    <p className="text-lg mt-4 max-w-2xl mx-auto text-gray-200 leading-relaxed">
      As a passionate web developer, I focus on building seamless digital experiences with a strong emphasis on quality, innovation, and user-centric design.
    </p>
    <button className="mt-10 px-8 py-3 bg-amber-500 text-indigo-900 font-medium rounded-lg shadow-xl hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 focus:outline-none">
      Discover My Work
    </button>
  </motion.header>
);

export default Header;
