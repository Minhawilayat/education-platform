import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../Services/firebase';
import { fetchCourses } from '../Services/Api';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [userCourses, setUserCourses] = useState([]);
  const [uploadedCourses, setUploadedCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all courses
        const allCourses = await fetchCourses();
        
        // Filter enrolled courses (in a real app, this would come from user data)
        // For demo purposes, we'll just use the first few courses
        setUserCourses(allCourses.slice(0, 3));
        
        // Filter uploaded courses by instructor
        const instructorName = auth.currentUser?.displayName || 'Unknown';
        const instructorCourses = allCourses.filter(course => 
          course.instructor === instructorName
        );
        setUploadedCourses(instructorCourses);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const learningData = [
    { name: 'Mon', hours: 2 },
    { name: 'Tue', hours: 3 },
    { name: 'Wed', hours: 1 },
    { name: 'Thu', hours: 4 },
    { name: 'Fri', hours: 2 },
    { name: 'Sat', hours: 5 },
    { name: 'Sun', hours: 3 },
  ];

  const progressData = [
    { name: 'Completed', value: 65 },
    { name: 'Remaining', value: 35 },
  ];

  const COLORS = ['#6B46C1', '#E5E7EB'];

  const stats = [
    { title: 'Courses Enrolled', value: userCourses.length, icon: '📚' },
    { title: 'Hours Learned', value: 48, icon: '⏱️' },
    { title: 'Certificates', value: 5, icon: '🏆' },
    { title: 'Current Streak', value: '7 days', icon: '🔥' }
  ];

  if (loading) {
    return (
      <div className="py-12 flex justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        
        <div className="gradient-bg text-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-2">Welcome back, {auth.currentUser?.displayName || 'User'}!</h2>
          <p>You have completed {userCourses.filter(c => c.progress === 100).length} courses this month. Keep up the good work!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center card-hover">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <h3 className="text-lg font-bold mb-2">{stat.title}</h3>
              <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            <button 
              className={`py-2 px-4 font-medium ${activeTab === 'overview' ? 'border-b-2 border-purple-500 text-purple-600 dark:text-purple-400' : 'text-gray-500 dark:text-gray-400'}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`py-2 px-4 font-medium ${activeTab === 'courses' ? 'border-b-2 border-purple-500 text-purple-600 dark:text-purple-400' : 'text-gray-500 dark:text-gray-400'}`}
              onClick={() => setActiveTab('courses')}
            >
              My Courses
            </button>
            <button 
              className={`py-2 px-4 font-medium ${activeTab === 'uploaded' ? 'border-b-2 border-purple-500 text-purple-600 dark:text-purple-400' : 'text-gray-500 dark:text-gray-400'}`}
              onClick={() => setActiveTab('uploaded')}
            >
              My Uploads
            </button>
            <button 
              className={`py-2 px-4 font-medium ${activeTab === 'teach' ? 'border-b-2 border-purple-500 text-purple-600 dark:text-purple-400' : 'text-gray-500 dark:text-gray-400'}`}
              onClick={() => setActiveTab('teach')}
            >
              Teach
            </button>
          </div>
        </div>

        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">Continue Learning</h2>
              <div className="space-y-4">
                {userCourses.filter(c => c.progress < 100).map((course, index) => (
                  <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold">{course.title}</h3>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{course.progress || 0}%</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">By {course.instructor}</p>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="progress-bar h-2.5 rounded-full" 
                        style={{ width: `${course.progress || 0}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
                {userCourses.filter(c => c.progress < 100).length === 0 && (
                  <p className="text-gray-600 dark:text-gray-400 text-center py-4">No courses in progress</p>
                )}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">Progress Overview</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={progressData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {progressData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'courses' && (
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">My Courses</h2>
            <div className="space-y-4">
              {userCourses.map((course, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div>
                    <h3 className="font-bold">{course.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">By {course.instructor}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="progress-bar h-2.5 rounded-full" 
                        style={{ width: `${course.progress || 0}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{course.progress || 0}%</span>
                    <Link 
                      to={`/course/${course.id}`} 
                      className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300"
                    >
                      {course.progress === 100 ? 'Review' : 'Continue'}
                    </Link>
                  </div>
                </div>
              ))}
              {userCourses.length === 0 && (
                <p className="text-gray-600 dark:text-gray-400 text-center py-4">You haven't enrolled in any courses yet</p>
              )}
            </div>
          </div>
        )}

        {activeTab === 'uploaded' && (
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">My Uploaded Courses</h2>
              <Link 
                to="/tutor-upload" 
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
              >
                Upload New Course
              </Link>
            </div>
            <div className="space-y-4">
              {uploadedCourses.map((course, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div>
                    <h3 className="font-bold">{course.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {course.enrolled || 0} students enrolled • {course.status}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      course.status === 'approved' ? 'bg-green-100 text-green-800' : 
                      course.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-red-100 text-red-800'
                    }`}>
                      {course.status}
                    </span>
                    <Link 
                      to={`/course/${course.id}`} 
                      className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300"
                    >
                      View
                    </Link>
                  </div>
                </div>
              ))}
              {uploadedCourses.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">You haven't uploaded any courses yet</p>
                  <Link 
                    to="/tutor-upload" 
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
                  >
                    Upload Your First Course
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'teach' && (
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Become an Instructor</h2>
            <div className="text-center mb-8">
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Share your expertise with our community of learners. Create and upload your own courses and earn money while teaching what you love.
              </p>
              <Link 
                to="/tutor-upload" 
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-700 transition duration-300"
              >
                Upload Your Course
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-bold mb-2">Create Content</h3>
                <p className="text-gray-600 dark:text-gray-400">Design your course with our easy-to-use tools and resources.</p>
              </div>
              <div className="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-2">Earn Money</h3>
                <p className="text-gray-600 dark:text-gray-400">Get paid monthly when students enroll in your courses.</p>
              </div>
              <div className="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-2">Reach Students</h3>
                <p className="text-gray-600 dark:text-gray-400">Connect with millions of learners around the world.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;