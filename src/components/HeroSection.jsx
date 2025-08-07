

import { Link } from 'react-router-dom';
import womanLaptop from '../assets/transparent_woman_laptop.png';

const HeroSection = () => {
  return (
    <section className="gradient-bg text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Learn Without Limits</h1>
          <p className="text-xl mb-8">Start, switch, or advance your career with our comprehensive courses</p>
          <div className="flex space-x-4">
            <Link to="/courses" className="bg-white text-purple-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300">
              Browse Courses
            </Link>
            <Link to="/register" className="border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-purple-600 transition duration-300">
              Get Started
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={womanLaptop} alt="Woman with laptop" className="max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;