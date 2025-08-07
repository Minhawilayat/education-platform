// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import womanLaptop from '../assets/transparent_woman_laptop.png';

// const Home = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-purple-600 to-orange-500 text-white py-20">
//         <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
//           <div className="md:w-1/2 mb-10 md:mb-0">
//             <motion.h1 
//               className="text-4xl md:text-6xl font-bold mb-4"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               Learn Without Limits
//             </motion.h1>
//             <motion.p 
//               className="text-xl mb-8"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               Start, switch, or advance your career with more than 5,000 courses, Professional Certificates, and degrees from world-class universities and companies.
//             </motion.p>
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//             >
//               <Link to="/courses" className="bg-white text-purple-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300">
//                 Browse Courses
//               </Link>
//             </motion.div>
//           </div>
//           <div className="md:w-1/2 flex justify-center">
//             <motion.img 
//               src={womanLaptop} 
//               alt="Woman with laptop" 
//               className="max-w-full h-auto"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//             />
//           </div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { title: 'Sign Up', description: 'Create your account in minutes' },
//               { title: 'Choose a Course', description: 'Browse our extensive course catalog' },
//               { title: 'Start Learning', description: 'Access courses anytime, anywhere' }
//             ].map((step, index) => (
//               <motion.div 
//                 key={index}
//                 className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
//                 whileHover={{ y: -10 }}
//               >
//                 <div className="text-4xl mb-4">{index + 1}</div>
//                 <h3 className="text-xl font-bold mb-2">{step.title}</h3>
//                 <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured Courses */}
//       <section className="py-16 bg-gray-100 dark:bg-gray-900">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Featured Courses</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { title: 'React - The Complete Guide', instructor: 'Maximilian Schwarzmüller', rating: 4.7 },
//               { title: 'The Web Developer Bootcamp', instructor: 'Colt Steele', rating: 4.8 },
//               { title: 'Python for Everybody', instructor: 'Charles Severance', rating: 4.9 }
//             ].map((course, index) => (
//               <motion.div 
//                 key={index}
//                 className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
//                 whileHover={{ scale: 1.03 }}
//               >
//                 <div className="h-48 bg-gradient-to-r from-purple-500 to-orange-500"></div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-2">{course.title}</h3>
//                   <p className="text-gray-600 dark:text-gray-400 mb-4">By {course.instructor}</p>
//                   <div className="flex justify-between items-center">
//                     <span className="text-yellow-500">★ {course.rating}</span>
//                     <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300">
//                       Enroll Now
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Student Testimonials */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {[
//               { name: 'Sarah Johnson', text: 'This platform changed my life! I learned web development and got a job within 3 months.' },
//               { name: 'Michael Chen', text: 'The courses are top-notch. The instructors are experts and the content is up-to-date.' }
//             ].map((testimonial, index) => (
//               <motion.div 
//                 key={index}
//                 className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//               >
//                 <p className="text-gray-600 dark:text-gray-400 mb-4">"{testimonial.text}"</p>
//                 <p className="font-bold">- {testimonial.name}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Newsletter Signup */}
//       <section className="py-16 bg-gradient-to-r from-purple-600 to-orange-500 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
//           <p className="text-xl mb-8">Subscribe to our newsletter for the latest courses and updates</p>
//           <form className="max-w-md mx-auto flex">
//             <input 
//               type="email" 
//               placeholder="Your email address" 
//               className="flex-grow px-4 py-3 rounded-l-lg text-gray-800"
//             />
//             <button 
//               type="submit"
//               className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-r-lg font-bold hover:bg-yellow-400 transition duration-300"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

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