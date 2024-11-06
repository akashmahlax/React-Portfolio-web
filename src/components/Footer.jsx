// Footer.js
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://github.com/akashmahlax" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} />
        </a>
      </div>
      <p className="text-sm">&copy; 2025 AkashMahla. All rights reserved.</p>
    </footer>
  );
};

export default Footer;