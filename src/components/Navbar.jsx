import React from "react";
import { FaLinkedin,FaGithub,FaInstagram } from "react-icons/fa";
const Navbar=()=>{
return(
<nav className="mb-20 flex items-center justify-between py-6 px-6">
  <div className="flex items-center gap-8">
    <div className="text-white text-6xl ml-10">GS</div>
    <div className="flex items-center gap-4 text-2xl text-white ml-260">
      <a
        href="https://www.linkedin.com/in/gopika-sri11/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:text-blue-400 hover:scale-110 transition-transform duration-200"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/GopikasriRamesh"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover:text-gray-400 hover:scale-110 transition-transform duration-200"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.instagram.com/me_srii_"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="hover:text-pink-400 hover:scale-110 transition-transform duration-200"
      >
        <FaInstagram />
      </a>
    </div>
  </div>
</nav>
);
}

export default Navbar;
