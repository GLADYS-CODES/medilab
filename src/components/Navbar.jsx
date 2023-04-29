import React, { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleLinkClick = () => setNav(false);

  return (
    <nav className="bg-white shadow">
      <div className="container px-6 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <a className="text-lg font-bold text-gray-800 uppercase hover:text-gray-700" href="#">
              Medilab
            </a>
          </div>
          <div className="hidden md:block">
            <ul className="flex">
              <li className="text-gray-800 hover:text-gray-700 mx-3">
                <Link to="home" smooth={true} duration={500} onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li className="text-gray-800 hover:text-gray-700 mx-3">
                <Link to="about" smooth={true} duration={500} onClick={handleLinkClick}>
                  About
                </Link>
              </li>
              <li className="text-gray-800 hover:text-gray-700 mx-3">
                <Link to="services" smooth={true} duration={500} onClick={handleLinkClick}>
                  Services
                </Link>
              </li>
              <li className="text-gray-800 hover:text-gray-700 mx-3">
                <Link to="contact" smooth={true} duration={500} onClick={handleLinkClick}>
                  Contact
                </Link>
              </li>
              <li className="text-gray-800 hover:text-gray-700 mx-3">
                <Link to='make an appointment' smooth={true} duration={500} onClick={handleLinkClick}>
                  Make an Appointment
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
              aria-label="toggle menu"
              onClick={() => setNav(!nav)}
            >
              Menu
            </button>
            {/* Mobile menu */}
            {nav && (
              <div className="absolute top-0 left-0 w-full mt-12">
                <div className="bg-white rounded-b-lg shadow-md py-3">
                  <Link to="home" smooth={true} duration={500} onClick={handleLinkClick}>
                    Home
                  </Link>
                  <Link to="about" smooth={true} duration={500} onClick={handleLinkClick}>
                    About
                  </Link>
                  <Link to="services" smooth={true} duration={500} onClick={handleLinkClick}>
                    Services
                  </Link>
                  <Link to="contact" smooth={true} duration={500} onClick={handleLinkClick}>
                    Contact
                  </Link>
                  <a href="#" onClick={handleLinkClick}>
                    Make an Appointment
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
