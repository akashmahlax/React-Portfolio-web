// Navbar.js
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
  ];

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-gray-300 via-indigo-500 to-purple-300 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-white font-bold text-2xl">Mahla</div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => {
                // Store isActive status to use in both className and motion span
                const activeClass = isActive ? 'text-yellow-300' : '';
                return `relative text-white text-lg font-medium hover:text-yellow-300 transition-colors duration-200 ${activeClass}`;
              }}
            >
              {({ isActive }) => (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={linkVariants}
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="underline"
                      className="w-full h-1 bg-yellow-300 absolute left-0 bottom-0 transition-all duration-500"
                    />
                  )}
                </motion.div>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="text-white md:hidden focus:outline-none"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              {navLinks.map(({ path, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `relative text-white text-lg font-medium ${
                      isActive ? 'text-yellow-300' : 'hover:text-yellow-300'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;