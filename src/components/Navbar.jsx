import { useState } from 'react';
import { FaBars, FaLinkedin, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../assets/sohamLogo.png';
import '../components/custom-link.css';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mt-6 px-6 mb-20 flex items-center justify-between py-6">
      <div className={`flex items-center ${isOpen ? 'hidden' : 'flex'}`}>
        <img className="mx-2 h-12 w-auto" src={logo} alt="logo" />
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-3xl">
          <FaBars />
        </button>
      </div>
        <div className={`w-full text-center flex-grow md:flex md:items-center md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0 md:mx-auto">
          <li><a href="#about" className="link">About</a></li>
          <li><a href="https://github.com/s-o-ham" target='_blank' className="link">Blogs</a></li>
          <li><a href="#projects" className="link">Projects</a></li>
        </ul>
        <div className="flex justify-center space-x-1/2 mt-4 md:mt-0 md:ml-4 ">
          <a href="https://www.linkedin.com/in/sohampradhan/" target="_blank" className="icon"><FaLinkedin /></a>
          <a href="https://github.com/s-o-ham" target="_blank" className="icon"><FaGithub /></a>
          <a href="https://www.instagram.com/s_o_h.a.m/" target="_blank" className="icon"><FaInstagram /></a>
          <a href="https://www.youtube.com/@SohamPradhan." target="_blank" className="icon"><FaYoutube /></a>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
