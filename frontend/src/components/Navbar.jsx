import React, { useState, useEffect } from "react";

const Navbar = () => {
  // State to manage dark mode toggle, initialized from localStorage or default to false
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle("dark-mode", newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode)); // Persist mode to localStorage
  };

  // Effect to apply dark mode on initial load based on localStorage value
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode && JSON.parse(savedMode)) {
      document.body.classList.add("dark-mode");
    }
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg p-3 ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
      id='navbar'
    >
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>
          Zidio
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarTogglerDemo02'
          aria-controls='navbarTogglerDemo02'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            {/* Links aligned to the right */}
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/about'>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/services'>
                Services
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/contact'>
                Contact
              </a>
            </li>
          </ul>
          <button
            onClick={toggleDarkMode}
            type='button'
            id='modeBtn'
            className='btn btn-sm m-1'
            data-bs-toggle='button'
          >
            {darkMode ? (
              <i className='bi bi-brightness-high'></i> // Sun icon for light mode
            ) : (
              <i className='bi bi-moon'></i> // Moon icon for dark mode
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
