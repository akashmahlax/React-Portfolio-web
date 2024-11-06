// Skills.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';

const skills = [
  { icon: <FaReact size={40} />, name: 'React' },
  { icon: <FaNodeJs size={40} />, name: 'Node.js' },
  { icon: <FaHtml5 size={40} />, name: 'HTML5' },
  { icon: <FaCss3Alt size={40} />, name: 'CSS3' },
  { icon: <FaJs size={40} />, name: 'JavaScript' },
];

const Skills = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-500 to-purple-500 text-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Skills</h2>
      <div className="flex justify-center space-x-4 md:space-x-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {skill.icon}
            <p className="mt-2 text-lg font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;