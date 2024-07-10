import React from 'react';

const skills = [
  {
    title: 'Communication',
    description: 'Effective verbal and written communication skills to convey ideas clearly and persuasively.',
    icon: '📢', // Replace with actual icon
  },
  {
    title: 'Teamwork',
    description: 'Ability to work collaboratively in a team environment, contributing to team goals and success.',
    icon: '🤝', // Replace with actual icon
  },
  {
    title: 'Problem Solving',
    description: 'Strong analytical skills to identify problems and develop creative and practical solutions.',
    icon: '🧩', // Replace with actual icon
  },
  {
    title: 'Time Management',
    description: 'Efficiently manage time and prioritize tasks to meet deadlines and achieve objectives.',
    icon: '⏰', // Replace with actual icon
  },
];

const SoftSkills = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Soft Skills</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4">
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <div className="text-6xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-700">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftSkills;
