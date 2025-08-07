import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/LOGO.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Online Learning" className="h-10 w-10" />
            <span className="text-xl font-bold text-purple-700">Online Learning</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/courses" className="text-gray-700 hover:text-purple-600 transition-colors">Courses</Link>
            <Link to="/about" className="text-gray-700 hover:text-purple-600 transition-colors">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-purple-600 transition-colors">Dashboard</Link>
            <Link to="/login" className="text-gray-700 hover:text-purple-600 transition-colors">Login</Link>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link to="/courses" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors">Courses</Link>
            <Link to="/about" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors">About</Link>
            <Link to="/contact" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors">Contact</Link>
            <Link to="/dashboard" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors">Dashboard</Link>
            <Link to="/login" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors">Login</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
