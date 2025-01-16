import React from 'react';

const Skills = () => {
  const skills = [
    'JavaScript (ES6+)',
    'React.js & Redux',
    'Node.js & Express',
    'MongoDB & Mongoose',
    'Python (TensorFlow, scikit-learn)',
    'Shopify Store Development',
    'E-commerce Solutions',
    'Responsive Web Design (HTML, CSS, Tailwind CSS)',
    'Git & Version Control',
    'CI/CD Pipelines (Jenkins, GitHub Actions)',
    'Cloud Platforms (AWS, Azure)',
    'Problem-Solving & Team Collaboration',
  ];

  return (
    <section className="p-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transform transition-all hover:scale-105 text-center"
            >
              <p className="text-gray-800 font-medium">{skill}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
