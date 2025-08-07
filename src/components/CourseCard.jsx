import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  // Ensure course object exists and has required properties
  if (!course) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden card-hover">
      {/* Course thumbnail with real image */}
      <div className="h-48 bg-gradient-to-r from-purple-500 to-orange-500 flex items-center justify-center">
        {course.thumbnailUrl ? (
          <img 
            src={course.thumbnailUrl} 
            alt={course.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-4xl">
            {course.category === 'Web Development' ? '💻' : 
             course.category === 'Programming' ? '👨‍💻' : 
             course.category === 'Data Science' ? '📊' : 
             course.category === 'Design' ? '🎨' : '📚'}
          </span>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">By {course.instructor}</p>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">★</span>
            <span>{course.rating || 0}</span>
            {course.enrolled && (
              <span className="text-gray-500 dark:text-gray-400 ml-2">
                ({course.enrolled.toLocaleString()} students)
              </span>
            )}
          </div>
          <span className="text-lg font-bold text-purple-600 dark:text-purple-400">
            ${course.price || 0}
          </span>
        </div>
        
        <div className="flex space-x-2">
          <Link 
            to={`/course/${course.id}`} 
            className="flex-1 bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition duration-300 text-center"
          >
            View Details
          </Link>
          <button className="p-2 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300">
            ❤️
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;