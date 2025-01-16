import React, { useState, useEffect } from "react";

const TypingEffect = ({ text, speed = 100, pause = 5000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);

      if (index === text.length) {
        clearInterval(interval);
        setIsTyping(false);
      }

      return () => clearInterval(interval);
    } else {
      const pauseTimeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
        setIsTyping(true);
      }, pause);

      return () => clearTimeout(pauseTimeout);
    }
  }, [isTyping, index, text, speed, pause]);

  return <span>{displayedText}</span>;
};

const About = () => (
  <section className="flex flex-col md:flex-row items-center bg-gray-50 shadow-md rounded-lg max-w-5xl mx-auto my-10 p-6">
    {/* Fixed Profile Picture */}
    <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-6 md:mb-0">
      <img
        src="/Ahmad.jpg" // Replace with your image's name in the public folder
        alt="Profile"
        className="w-48 h-48 rounded-full shadow-lg object-cover"
      />
    </div>

    {/* About Content */}
    <div className="w-full md:w-2/3 md:pl-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">
        About Me
      </h2>
      {/* Typing Effect */}
      <p className="text-gray-700 leading-relaxed">
        <TypingEffect
          text="Hello! I am Muhammad Ahmad, a dedicated web developer with a lack for building innovative and impactful digital solutions. My journey in web development began with a curiosity for technology and a passion for problem-solving. I specialize in creating intuitive user interfaces and robust backend systems. My mission is to contribute to a better digital future, one project at a time."
          speed={50}
          pause={5000}
        />
      </p>
    </div>
  </section>
);

export default About;



// import React from 'react';
// import Typewriter from 'typewriter-effect';

// const About = () => (
//   <section className="flex flex-col md:flex-row items-center bg-gray-50 shadow-md rounded-lg max-w-5xl mx-auto my-10 p-6">
//     {/* Profile Picture */}
//     <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
//       <img
//         src="/Ahmad.jpg" // Ensure this path is correct relative to your public folder
//         alt="Profile"
//         className="w-48 h-48 rounded-full shadow-lg object-cover"
//       />
//     </div>

//     {/* About Content */}
//     <div className="w-full md:w-2/3 md:pl-6">
//       <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">
//         About Me
//       </h2>
//       <p className="text-gray-700 leading-relaxed">
//         <Typewriter
//           options={{
//             strings: [
//               "Hello! I am Muhammad Ahmad, a dedicated web developer with a knack for building innovative and impactful digital solutions. My journey in web development began with a curiosity for technology and a passion for problem-solving. I specialize in creating intuitive user interfaces and robust backend systems. My mission is to contribute to a better digital future, one project at a time."
//             ],
//             autoStart: true,
//             loop: false,
//             delay: 50, // Adjust typing speed here
//           }}
//         />
//       </p>
//     </div>
//   </section>
// );

// export default About;
