// Skills.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaHeart, FaVuejs, FaBlackTie, FaJava, FaRust, FaPython } from 'react-icons/fa';

const skills = [
  { icon: <FaReact size={40} />, name: 'React' },
  { icon: <FaNodeJs size={40} />, name: 'Node.js' },
  { icon: <FaJs size={42} />, name: 'JavaScript' },
  { icon: <FaCss3Alt size={40} />, name: 'CSS3' },
  { icon: <FaJava size={40} />, name: 'JAVA' },
  { icon: <FaVuejs size={40} />, name: 'Vue js' },
  { icon: <FaRust size={40} />, name: 'Rust' },
  { icon: <FaPython size={40} />, name: 'Python' },

];

const Skills = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-300 via-indigo-500 to-purple-300 text-center text-white">
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