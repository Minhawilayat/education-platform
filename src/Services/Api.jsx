const API_BASE_URL = 'https://jsonplaceholder.typicode.com';
// Simulate a delay to mimic network requests
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Fetch all courses
export const fetchCourses = async () => {
  try {
    // Simulate network delay
    await delay(500);
    
    // For demo purposes, we'll return mock course data with real images
    const mockCourses = [
      {
        id: 1,
        title: 'React - The Complete Guide',
        instructor: 'Maximilian Schwarzmüller',
        category: 'Web Development',
        level: 'Beginner',
        duration: '40 hours',
        rating: 4.7,
        enrolled: 150000,
        price: 89.99,
        originalPrice: 199.99,
        description: 'Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!',
        thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
        outcomes: [
          'Build powerful, fast, user-friendly and reactive web apps',
          'Apply for high-paid jobs or work as a freelancer',
          'Learn all about React Hooks and React Components'
        ],
        requirements: [
          'JavaScript + HTML + CSS fundamentals are required',
          'NO React knowledge is required!'
        ],
        curriculum: [
          { 
            id: 1, 
            title: 'Getting Started', 
            duration: '2 hours', 
            lessons: 5,
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            description: 'Introduction to React and setting up your development environment.'
          },
          { 
            id: 2, 
            title: 'React Basics & Working with Components', 
            duration: '5 hours', 
            lessons: 12,
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4',
            description: 'Understanding React components, props, and state.'
          },
          { 
            id: 3, 
            title: 'Rendering Lists & Conditional Content', 
            duration: '3 hours', 
            lessons: 8,
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4',
            description: 'Learn how to render lists and conditional content in React.'
          },
          { 
            id: 4, 
            title: 'Styling React Components & Elements', 
            duration: '4 hours', 
            lessons: 10,
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            description: 'Different approaches to styling React applications.'
          },
          { 
            id: 5, 
            title: 'Debugging React Apps', 
            duration: '2 hours', 
            lessons: 6,
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4',
            description: 'Tools and techniques for debugging React applications.'
          },
        ],
        reviews: [
          { name: 'Sarah Johnson', rating: 5, comment: 'Excellent course! Max explains everything clearly.', date: '2023-05-15' },
          { name: 'Michael Chen', rating: 4, comment: 'Great content, but some sections could be more detailed.', date: '2023-04-22' },
        ],
        status: 'approved',
        progress: 45
      },
      {
        id: 2,
        title: 'The Web Developer Bootcamp',
        instructor: 'Colt Steele',
        category: 'Web Development',
        level: 'Beginner',
        duration: '60 hours',
        rating: 4.8,
        enrolled: 200000,
        price: 94.99,
        description: 'The only course you need to learn web development - HTML, CSS, JS, Node, and more!',
        thumbnailUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
        outcomes: [
          'Build websites and web applications',
          'Understand how the web works',
          'Get hired as a web developer'
        ],
        requirements: [
          'No previous experience required'
        ],
        curriculum: [
          { 
            id: 1, 
            title: 'HTML Foundations', 
            duration: '5 hours', 
            lessons: 10,
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            description: 'Learn the basics of HTML and semantic markup.'
          },
          { 
            id: 2, 
            title: 'CSS Fundamentals', 
            duration: '8 hours', 
            lessons: 15,
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4',
            description: 'Master CSS styling, layouts, and responsive design.'
          },
          { 
            id: 3, 
            title: 'JavaScript Basics', 
            duration: '10 hours', 
            lessons: 20,
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4',
            description: 'Learn JavaScript programming from the ground up.'
          },
          { 
            id: 4, 
            title: 'Backend Development', 
            duration: '15 hours', 
            lessons: 25,
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            description: 'Introduction to Node.js and server-side JavaScript.'
          },
          { 
            id: 5, 
            title: 'Final Project', 
            duration: '22 hours', 
            lessons: 10,
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4',
            description: 'Build a complete web application from scratch.'
          },
        ],
        reviews: [
          { name: 'Emily Rodriguez', rating: 5, comment: 'This course changed my life! I got a job as a web developer.', date: '2023-06-10' },
          { name: 'David Kim', rating: 4, comment: 'Comprehensive course, but very long. Be prepared to invest time.', date: '2023-05-20' },
        ],
        status: 'approved',
        progress: 30
      },
      {
        id: 3,
        title: 'Python for Everybody',
        instructor: 'Charles Severance',
        category: 'Programming',
        level: 'Beginner',
        duration: '20 hours',
        rating: 4.9,
        enrolled: 300000,
        price: 79.99,
        description: 'Learn Python from scratch and apply it to real-world problems.',
        thumbnailUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
        outcomes: [
          'Understand Python programming fundamentals',
          'Work with data using Python',
          'Build simple applications with Python'
        ],
        requirements: [
          'No programming experience required'
        ],
        curriculum: [
          { 
            id: 1, 
            title: 'Python Basics', 
            duration: '5 hours', 
            lessons: 10,
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            description: 'Introduction to Python programming language.'
          },
          { 
            id: 2, 
            title: 'Data Structures', 
            duration: '4 hours', 
            lessons: 8,
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4',
            description: 'Learn about lists, dictionaries, tuples, and sets in Python.'
          },
          { 
            id: 3, 
            title: 'Web Scraping', 
            duration: '3 hours', 
            lessons: 6,
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4',
            description: 'Extract data from websites using Python.'
          },
          { 
            id: 4, 
            title: 'Working with APIs', 
            duration: '3 hours', 
            lessons: 6,
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            description: 'Interact with web APIs using Python.'
          },
          { 
            id: 5, 
            title: 'Databases', 
            duration: '5 hours', 
            lessons: 10,
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4',
            description: 'Learn how to work with databases in Python.'
          },
        ],
        reviews: [
          { name: 'James Wilson', rating: 5, comment: 'Best Python course for beginners. Dr. Chuck is amazing!', date: '2023-07-15' },
          { name: 'Lisa Thompson', rating: 5, comment: 'I learned Python in just a few weeks. Highly recommended!', date: '2023-06-25' },
        ],
        status: 'approved',
        progress: 75
      },
      {
        id: 4,
        title: 'Advanced React Patterns',
        instructor: 'Kent C. Dodds',
        category: 'Web Development',
        level: 'Advanced',
        duration: '10 hours',
        rating: 4.6,
        enrolled: 50000,
        price: 59.99,
        description: 'Learn advanced React patterns and techniques to build better applications.',
        thumbnailUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
        outcomes: [
          'Master advanced React patterns',
          'Build scalable React applications',
          'Optimize React performance'
        ],
        requirements: [
          'Strong knowledge of React fundamentals'
        ],
        curriculum: [
          { 
            id: 1, 
            title: 'Advanced Hooks', 
            duration: '2 hours', 
            lessons: 5,
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            description: 'Deep dive into React hooks and custom hooks.'
          },
          { 
            id: 2, 
            title: 'Render Props', 
            duration: '1 hour', 
            lessons: 3,
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4',
            description: 'Understanding and implementing render props pattern.'
          },
          { 
            id: 3, 
            title: 'Higher-Order Components', 
            duration: '1 hour', 
            lessons: 3,
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4',
            description: 'Creating and using higher-order components.'
          },
          { 
            id: 4, 
            title: 'Context API', 
            duration: '2 hours', 
            lessons: 5,
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            description: 'Managing global state with React Context.'
          },
          { 
            id: 5, 
            title: 'Performance Optimization', 
            duration: '4 hours', 
            lessons: 8,
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4',
            description: 'Techniques for optimizing React application performance.'
          },
        ],
        reviews: [
          { name: 'Robert Garcia', rating: 5, comment: 'Kent is a great teacher. This course took my React skills to the next level.', date: '2023-07-01' },
          { name: 'Jennifer Lee', rating: 4, comment: 'Very advanced content, but exactly what I needed for my job.', date: '2023-06-15' },
        ],
        status: 'approved',
        progress: 0
      },
      {
        id: 5,
        title: 'Machine Learning A-Z',
        instructor: 'Kirill Eremenko',
        category: 'Data Science',
        level: 'Intermediate',
        duration: '50 hours',
        rating: 4.5,
        enrolled: 120000,
        price: 84.99,
        description: 'Learn to create Machine Learning Algorithms in Python and R.',
        thumbnailUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
        outcomes: [
          'Understand machine learning algorithms',
          'Build predictive models',
          'Apply ML to real-world problems'
        ],
        requirements: [
          'Basic knowledge of Python or R',
          'High school math level'
        ],
        curriculum: [
          { 
            id: 1, 
            title: 'Introduction to ML', 
            duration: '2 hours', 
            lessons: 5,
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            description: 'Introduction to machine learning concepts and applications.'
          },
          { 
            id: 2, 
            title: 'Data Preprocessing', 
            duration: '5 hours', 
            lessons: 10,
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4',
            description: 'Techniques for cleaning and preparing data for ML models.'
          },
          { 
            id: 3, 
            title: 'Regression', 
            duration: '8 hours', 
            lessons: 15,
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4',
            description: 'Understanding and implementing regression algorithms.'
          },
          { 
            id: 4, 
            title: 'Classification', 
            duration: '10 hours', 
            lessons: 20,
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            description: 'Building classification models for categorical data.'
          },
          { 
            id: 5, 
            title: 'Clustering', 
            duration: '8 hours', 
            lessons: 15,
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4',
            description: 'Unsupervised learning with clustering algorithms.'
          },
          { 
            id: 6, 
            title: 'Deep Learning', 
            duration: '12 hours', 
            lessons: 20,
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4',
            description: 'Introduction to neural networks and deep learning.'
          },
          { 
            id: 7, 
            title: 'Final Project', 
            duration: '5 hours', 
            lessons: 5,
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            description: 'Apply what you\'ve learned to a real-world project.'
          },
        ],
        reviews: [
          { name: 'Daniel Brown', rating: 4, comment: 'Comprehensive course, but very intense. Be prepared to spend a lot of time.', date: '2023-06-20' },
          { name: 'Amanda Davis', rating: 5, comment: 'Great introduction to machine learning. The practical examples are very helpful.', date: '2023-05-30' },
        ],
        status: 'approved',
        progress: 0
      },
      {
        id: 6,
        title: 'UI/UX Design Fundamentals',
        instructor: 'Daniel Scott',
        category: 'Design',
        level: 'Beginner',
        duration: '30 hours',
        rating: 4.7,
        enrolled: 80000,
        price: 74.99,
        description: 'Master the principles of UI/UX design with this comprehensive course.',
        thumbnailUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
        outcomes: [
          'Understand UI/UX principles',
          'Create user-centered designs',
          'Build interactive prototypes'
        ],
        requirements: [
          'No design experience required'
        ],
        curriculum: [
          { 
            id: 1, 
            title: 'Design Thinking', 
            duration: '4 hours', 
            lessons: 8,
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            description: 'Introduction to design thinking process and methodology.'
          },
          { 
            id: 2, 
            title: 'User Research', 
            duration: '5 hours', 
            lessons: 10,
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4',
            description: 'Conducting user research to inform design decisions.'
          },
          { 
            id: 3, 
            title: 'Wireframing', 
            duration: '6 hours', 
            lessons: 12,
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4',
            description: 'Creating wireframes for digital products.'
          },
          { 
            id: 4, 
            title: 'Prototyping', 
            duration: '7 hours', 
            lessons: 14,
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            description: 'Building interactive prototypes to test ideas.'
          },
          { 
            id: 5, 
            title: 'Usability Testing', 
            duration: '4 hours', 
            lessons: 8,
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4',
            description: 'Testing designs with real users to gather feedback.'
          },
          { 
            id: 6, 
            title: 'Design Tools', 
            duration: '4 hours', 
            lessons: 8,
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4',
            description: 'Introduction to popular design tools like Figma and Sketch.'
          },
        ],
        reviews: [
          { name: 'Michelle Johnson', rating: 5, comment: 'Great course for beginners. Daniel explains concepts very clearly.', date: '2023-07-05' },
          { name: 'Christopher Wilson', rating: 4, comment: 'Good overview of UI/UX design. I learned a lot about the design process.', date: '2023-06-10' },
        ],
        status: 'approved',
        progress: 0
      }
    ];
    
    return mockCourses;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
};

// Fetch a single course by ID
export const fetchCourseById = async (id) => {
  try {
    // Simulate network delay
    await delay(500);
    
    // Get all courses and find the one with the matching ID
    const courses = await fetchCourses();
    const course = courses.find(c => c.id === parseInt(id));
    
    if (!course) {
      throw new Error('Course not found');
    }
    
    return course;
  } catch (error) {
    console.error('Error fetching course:', error);
    throw error;
  }
};

// Upload a new course (simulated)
export const uploadCourse = async (courseData) => {
  try {
    // Simulate network delay
    await delay(1000);
    
    // Simulate successful upload
    console.log('Course data received:', courseData);
    
    // Return a mock response
    return {
      id: Math.floor(Math.random() * 1000) + 7, // Generate a random ID
      ...courseData,
      createdAt: new Date().toISOString(),
      status: 'pending'
    };
  } catch (error) {
    console.error('Error uploading course:', error);
    throw error;
  }
};

// Upload files (simulated)
export const uploadFile = async (file, type) => {
  try {
    // Simulate network delay
    await delay(1000);
    
    // Simulate successful upload
    console.log(`Uploading ${type} file:`, file.name);
    
    // Return a mock response with a placeholder URL
    return {
      url: `https://via.placeholder.com/800x450?text=${encodeURIComponent(file.name)}`,
      name: file.name,
      size: file.size,
      type: type
    };
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};