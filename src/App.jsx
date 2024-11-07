import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';
import  Navbar  from './components/navbar';
import Hero from './components/Hero';
import Portfolio from './pages/portfolio';
import Skills from './components/skills';
import Footer from './components/Footer';
import Testimonials from './components/testamonial';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Skills/>
      <Testimonials/>
      <Footer/>
    </Router>
  );
}

export default App;
