import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      {/* Orange notification bar */}
      <div className="w-full justify-center h-13 bg-indigo-500 text-center text-white p-2">
        <p>Free Courses 🌟 Sale Ends Soon, Get It Now</p>
      </div>

      {/* Navigation Bar */}
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* Logo */}
          <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
  src="logo.png" // <-- replace with the correct path
  alt="Online Learning Logo.png"
  className="w-30 h-10 p-1"
/>

         
          </Link>

          {/* Navigation Links */}
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" className="mr-5 hover:text-gray-900">HOME</Link>
            <Link to="/courses" className="mr-5 hover:text-gray-900">COURSES</Link>
            <Link to="/pricing" className="mr-5 hover:text-gray-900">PRICING</Link>
            <Link to="/contact" className="mr-5 hover:text-gray-900">CONTACT</Link>
            <Link to="/AboutUs" className="mr-5 hover:text-gray-900">AboutUs</Link>
         

          </nav>

          {/* Login & Signup Buttons */}
          <Link to="/login">
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Login
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </Link>

          <Link to="/signup">
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Signup
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Nav;
