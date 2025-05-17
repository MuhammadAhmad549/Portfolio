import React, { useState, useEffect } from "react";

const TypingEffect = ({ text, speed = 100, pause = 3000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let typingTimer;
    let pauseTimer;

    if (isTyping) {
      typingTimer = setInterval(() => {
        setDisplayedText((prev) => {
          if (prev.length < text.length) {
            return text.slice(0, prev.length + 1);
          } else {
            clearInterval(typingTimer);
            setIsTyping(false);
            return prev;
          }
        });
      }, speed);
    } else {
      pauseTimer = setTimeout(() => {
        setDisplayedText("");
        setIsTyping(true);
      }, pause);
    }

    return () => {
      clearInterval(typingTimer);
      clearTimeout(pauseTimer);
    };
  }, [text, speed, pause, isTyping]);

  return <span>{displayedText}</span>;
};

const About = () => (
  <section className="flex flex-col md:flex-row items-center bg-gray-50 shadow-md rounded-lg max-w-5xl mx-auto my-10 p-6">
    {/* Profile Picture */}
    <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-6 md:mb-0">
      <img
        src="/Ahmad.jpg" // Replace with your image name in the public folder
        alt="Muhammad Ahmad's Profile"
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
          text="Hello! I am Muhammad Ahmad, a dedicated web developer with a knack for building innovative and impactful digital solutions. My journey in web development began with a curiosity for technology and a passion for problem-solving. I specialize in creating intuitive user interfaces and robust backend systems. My mission is to contribute to a better digital future, one project at a time."
          speed={50}
          pause={5000}
        />
      </p>
    </div>
  </section>
);

export default About;
