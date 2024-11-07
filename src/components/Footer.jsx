// Footer.js
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-300 via-indigo-500 to-purple-300 text-white py-8 text-center">
      <div className="flex justify-center space-x-6 mb-4">

        <a href="https://github.com/akashmahlax" target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} />
        </a>
        <a href="https://linkedin.com/akashmahlax" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} />
        </a>
        <a href="https://instagram.com/akashmahlax" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={40} />
        </a>
        <a href="https://twitter.com/akashdalla6" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={40} />
        </a>
      </div>
      <p className="text-sm">&copy; 2025 AkashMahla. All rights reserved.</p>
    </footer>
  );
};

export default Footer;