// Hero.js
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate() ;
  return (
    <section className="relative h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-5"></div>
      
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center px-6">
        {/* Hero Text */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          "Your vision, my code."
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
         Full-Stack Web Development, Pixel-Perfect Design, Let's Build Something Amazing.
        </motion.p>

        {/* Hero Image */}
        <motion.div
          className="mb-8 relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <img
            src="https://i.pinimg.com/originals/d3/59/a8/d359a82db453e80a46206d54bfc6aa70.png" // Replace with your own image
            alt="Developer"
            className="w-40 h-40 rounded-full object-cover shadow-lg mx-auto"
          />
        </motion.div>

        {/* Portfolio Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('./portfolio')}
          className="inline-block"
        >
         <Link
            to="#" 
            className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition-colors duration-200"
          
          >
            View Work
          </Link>
          
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;