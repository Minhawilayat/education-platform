import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PEXELS_API_KEY = "BprkKGBQj3sKlbEqXGzfjB6S31delDflg3ZTlwdKfN2wvhcysWdX4lKC";

const Courses = () => {
  const [webDesignCourses, setWebDesignCourses] = useState([]);
  const [marketingCourses, setMarketingCourses] = useState([]);
  const [developmentCourses, setDevelopmentCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const webRes = await axios.get("https://dummyjson.com/products/category/smartphones");
        const marketingRes = await axios.get("https://dummyjson.com/products/category/fragrances");
        const devRes = await axios.get("https://dummyjson.com/products/category/laptops");

        const mapCourses = (data) =>
          data.products?.map((item) => ({
            id: item.id,
            title: item.title,
            description: item.description,
            image: item.thumbnail,
          })) || [];

        setWebDesignCourses(mapCourses(webRes.data));
        setMarketingCourses(mapCourses(marketingRes.data));
        setDevelopmentCourses(mapCourses(devRes.data));
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center">Our Online Courses</h2>
      <p className="text-center text-gray-600 mt-2">Choose from various categories</p>

      {loading ? (
        <p className="text-center text-gray-500">Loading courses...</p>
      ) : (
        <>
          <Section title="Web Design Fundamentals" courses={webDesignCourses} />
          <Section title="Marketing Strategies" courses={marketingCourses} />
          <Section title="Full Stack Development" courses={developmentCourses} />
        </>
      )}
    </div>
  );
};

const fetchPexelsImage = async (query) => {
  try {
    const res = await axios.get(`https://api.pexels.com/v1/search?query=${query}&per_page=1`, {
      headers: { Authorization: PEXELS_API_KEY },
    });
    return res.data.photos[0]?.src.medium || null;
  } catch (error) {
    console.error("Error fetching Pexels image:", error);
    return null;
  }
};

const Section = ({ title, courses }) => {
  const [images, setImages] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllImages = async () => {
      const imagePromises = courses.map(async (course) => {
        const imageUrl = await fetchPexelsImage(course.title);
        return { id: course.id, imageUrl };
      });

      const imageResults = await Promise.all(imagePromises);
      const imageMap = imageResults.reduce((acc, item) => {
        if (item.imageUrl) acc[item.id] = item.imageUrl;
        return acc;
      }, {});
      setImages(imageMap);
    };

    if (courses.length > 0) {
      fetchAllImages();
    }
  }, [courses]);

  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="grid md:grid-cols-3 gap-6 mt-4">
        {courses.length > 0 ? (
          courses.map((course) => (
            <div key={course.id} className="bg-white shadow-lg rounded-lg p-4">
              <img
                src={images[course.id] || course.image}
                alt={course.title}
                className="w-full h-40 object-cover rounded"
              />
              <h4 className="text-xl font-bold mt-2">{course.title}</h4>
              <p className="text-gray-600">{course.description}</p>
              <button
                onClick={() => navigate('/enroll')}
                className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
              >
                Enroll Now
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No courses available</p>
        )}
      </div>
    </div>
  );
};

export default Courses;
