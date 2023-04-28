import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleLinkClick = () => {
    setNav(true);
  };

  return (
    <>
      
      <nav className="bg-white shadow">
        <div className="container px-6 py-4 mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <Link
                to="/"
                className="text-lg font-bold text-gray-800 uppercase hover:text-gray-700"
              >
                Medilab
              </Link>
            </div>
            <div className="flex items-center">
              <div className="hidden md:block">
                <Link
                  to="/"
                  onClick={handleLinkClick}
                  className="text-gray-800 hover:text-gray-700 mx-3"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  onClick={handleLinkClick}
                  className="text-gray-800 hover:text-gray-700 mx-3"
                >
                  About
                </Link>
                <Link
                  to="/services"
                  onClick={handleLinkClick}
                  className="text-gray-800 hover:text-gray-700 mx-3"
                >
                  Services
                </Link>
                <Link
                  to="/contact"
                  onClick={handleLinkClick}
                  className="text-gray-800 hover:text-gray-700 mx-3"
                >
                  Contact
                </Link>
                <Link to="/appointment">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    make an appointment
                  </button>
                </Link>
              </div>
              <div className="md:hidden">
                {/* Mobile menu button */}
                <button
                  type="button"
                  className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
                  aria-label="toggle menu"
                >
                  Menu
                </button>
                {/* Mobile menu */}
                <div className="absolute top-0 left-0 w-full mt-12">
                  <div className="bg-white rounded-b-lg shadow-md py-3">
                    <Link
                      to="/"
                      onClick={handleLinkClick}
                      className="block text-gray-800 hover:text-gray-700 py-2 px-4"
                    >
                      Home
                    </Link>
                    <Link
                      to="/about"
                      onClick={handleLinkClick}
                      className="block text-gray-800 hover:text-gray-700 py-2 px-4"
                    >
                      About
                    </Link>
                    <Link
                      to="/services"
                      onClick={handleLinkClick}
                      className="block text-gray-800 hover:text-gray-700 py-2 px-4"
                    >
                      Services
                    </Link>
                    <Link
                      to="/contact"
                      onClick={handleLinkClick}
                      className="block text-gray-800 hover:text-gray-700 py-2 px-4"
                    >
                      Contact
                    </Link>
                    <Link to="/appointment">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                      >
                        make an appointment
                      </button>
                    </Link>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;