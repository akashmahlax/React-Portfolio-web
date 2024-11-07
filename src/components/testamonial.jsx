// Testimonials.js
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Satinder Singh',
    feedback: 'A fantastic developer! Delivered everything on time with excellent communication.',
    imageUrl: 'https://th.bing.com/th/id/OIP.JFEpvTeRHWVJxRQ_aRGWjADhEs?rs=1&pid=ImgDetMain',
  },
  {
    name: 'Harnoor Singh',
    feedback: 'Amazing work! Highly recommend for any development needs.',
    imageUrl: 'https://th.bing.com/th/id/OIP.Nwgq40V_9UbNLS9t0AqQkgHaD4?rs=1&pid=ImgDetMain',
  },
  {
    name: 'Sahil Dutt',
    feedback: 'I cannot explian work in words and on time delivery thats beyond my head.',
    imageUrl: 'https://s01.sgp1.digitaloceanspaces.com/large/832011-53755-zjnmibdrne-1489684235.jpg',
  },
];

const Testimonials = () => {
  return (
    <section className=" bg-gradient-to-br from-gray-300 via-indigo-500 to-purple-300 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Testimonials
        </h2>
        <p className="text-lg text-gray-950 mb-12">
          Don’t just take my word for it. Here’s what some of my clients have to say.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className=" bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 shadow-lg rounded-lg p-6 text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={testimonial.imageUrl}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />
              <p className="text-lg text-gray-700 mb-2">"{testimonial.feedback}"</p>
              <h3 className="text-md font-semibold text-gray-800">{testimonial.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;