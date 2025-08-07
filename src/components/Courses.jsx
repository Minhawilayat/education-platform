import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../Services/firebase';
import CourseList from '../components/CourseList';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesQuery = query(
          collection(db, 'courses'),
          where('status', '==', 'approved') // Only show approved courses
        );
        const querySnapshot = await getDocs(coursesQuery);
        const coursesData = [];
        
        querySnapshot.forEach((doc) => {
          coursesData.push({
            id: doc.id,
            ...doc.data()
          });
        });
        
        setCourses(coursesData);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="py-12 flex justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading courses...</p>
        </div>
      </div>
    );
  }

  return <CourseList courses={courses} />;
};

export default Courses;