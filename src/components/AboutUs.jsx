import React from 'react';

function AboutUs() {
  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <section className="text-gray-700 body-font">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-wrap w-full mb-12">
            <h1 className="sm:text-4xl text-3xl font-bold title-font text-blue-800 w-full mb-4 text-center">
              Empowering Learning Through Innovation
            </h1>
            <p className="lg:w-2/3 w-full mx-auto leading-relaxed text-center text-gray-600 text-lg">
              Our platform is built to deliver high-quality educational content and practical skills to help learners succeed in their academic and professional journeys. With expert instructors, flexible schedules, and certification opportunities, we’re here to shape a brighter future.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-6 py-16 mx-auto">
          <div className="flex flex-wrap -m-4">
            {[
              {
                title: 'Expert Instructors',
                description: 'Learn from industry experts and experienced educators who are passionate about teaching.',
                icon: 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2',
                circle: true
              },
              {
                title: 'Interactive Learning',
                description: 'Courses include practical projects, quizzes, and real-world case studies.',
                icon: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7'
              },
              {
                title: 'Flexible Schedule',
                description: 'Access lessons anytime and learn at your own pace, wherever you are.',
                icon: 'M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z'
              },
              {
                title: 'Certification',
                description: 'Earn certificates upon course completion to boost your resume and portfolio.',
                icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
              }
            ].map((feature, index) => (
              <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300 border-t-4 border-blue-600">
                  <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d={feature.icon} />
                      {feature.circle && <circle cx={12} cy={7} r={4} />}
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-blue-900 mb-2">{feature.title}</h2>
                  <p className="text-gray-600 text-base">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
