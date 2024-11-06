// Portfolio.js
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "E-commerce Platform",
    description: "A robust online store with real-time inventory tracking.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1683798464819-d1376249293e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGUlMjBjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Social Media Dashboard",
    description: "A sleek, interactive dashboard for tracking social media analytics.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1683977922495-3ab3ce7ba4e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNvY2lhbCUyMG1lZGlhJTIwZGFzaGJvYXJkfGVufDB8fDB8fHww",
  },
  {
    title: "Personal Blog",
    description: "A minimalistic and responsive blog platform for writers.",
    imageUrl: "https://athemes.com/wp-content/uploads/johannes-personal-blog-magazine-wordpress-theme3.jpg",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio site showcasing projects and skills.",
    imageUrl: "https://i.pinimg.com/originals/d3/59/a8/d359a82db453e80a46206d54bfc6aa70.png",
  },
];

const Portfolio = () => {
  return (
    <section className="py-16 bg-gray-50 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          My Work
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Here are a few of the projects I've worked on recently. Each one
          demonstrates my skills in design, development, and problem-solving.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="rounded-lg shadow-lg bg-white overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;