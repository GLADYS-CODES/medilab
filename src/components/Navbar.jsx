import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container px-6 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <a className="text-lg font-bold text-gray-800 uppercase hover:text-gray-700" href="#">
              Medilab
            </a>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <a className="text-gray-800 hover:text-gray-700 mx-3" href="#">
                Home
              </a>
              <a className="text-gray-800 hover:text-gray-700 mx-3" href="#">
                About
              </a>
              <a className="text-gray-800 hover:text-gray-700 mx-3" href="#">
                Services
              </a>
              <a className="text-gray-800 hover:text-gray-700 mx-3" href="#">
                Contact
              </a>
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
                  <a className="block text-gray-800 hover:text-gray-700 py-2 px-4" href="#">
                    Home
                  </a>
                  <a className="block text-gray-800 hover:text-gray-700 py-2 px-4" href="#">
                    About
                  </a>
                  <a className="block text-gray-800 hover:text-gray-700 py-2 px-4" href="#">
                    Services
                  </a>
                  <a className="block text-gray-800 hover:text-gray-700 py-2 px-4" href="#">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

