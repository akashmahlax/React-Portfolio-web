// About.js
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://th.bing.com/th/id/OIP.pr-gn_XTq8eTgA_Oge1blQAAAA?w=186&h=255&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="Developer at work"
            className="rounded-lg shadow-lg w-full h-auto object-contain"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            I am a passionate web developer with a knack for creating dynamic,
            user-friendly websites. My journey began with a fascination for
            technology and evolved into a love for crafting seamless online
            experiences.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Skilled in a range of modern technologies, including React, Tailwind
            CSS, and Framer Motion, I strive to design interfaces that not only
            look beautiful but function flawlessly on all devices.
          </p>
          <p className="text-lg text-gray-600">
            Outside of coding, you can find me exploring new technologies,
            reading, or working on personal projects that push the boundaries of
            what's possible on the web.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;