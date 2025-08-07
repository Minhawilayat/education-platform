import { useState } from 'react';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const stats = [
    { value: '500+', label: 'Courses' },
    { value: '100K+', label: 'Students' },
    { value: '50+', label: 'Instructors' },
    { value: '98%', label: 'Satisfaction' }
  ];

  const teamMembers = [
    { name: 'Sarah Johnson', role: 'CEO & Founder', bio: 'Education enthusiast with 15+ years of experience in e-learning.' },
    { name: 'Michael Chen', role: 'CTO', bio: 'Tech innovator passionate about creating accessible learning platforms.' },
    { name: 'Emily Rodriguez', role: 'Head of Content', bio: 'Curriculum expert ensuring high-quality educational materials.' },
    { name: 'David Kim', role: 'Community Manager', bio: 'Building a supportive learning community worldwide.' }
  ];

  const testimonials = [
    { name: 'James Wilson', role: 'Web Developer', text: 'This platform transformed my career. The courses are comprehensive and the instructors are top-notch.' },
    { name: 'Lisa Thompson', role: 'Data Scientist', text: 'I learned Python in just a few weeks. The hands-on approach made all the difference.' },
    { name: 'Robert Garcia', role: 'UX Designer', text: 'The design courses helped me land my dream job. Highly recommended!' }
  ];

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Platform</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Empowering learners worldwide with quality education and innovative learning experiences.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300">
              Explore Courses
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-purple-600 transition duration-300">
              Join Community
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Stats Section */}
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs Section */}
        <div className="py-12">
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white dark:bg-gray-800 rounded-lg shadow p-1">
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'mission' ? 'bg-purple-600 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                onClick={() => setActiveTab('mission')}
              >
                Our Mission
              </button>
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'story' ? 'bg-purple-600 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                onClick={() => setActiveTab('story')}
              >
                Our Story
              </button>
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'values' ? 'bg-purple-600 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                onClick={() => setActiveTab('values')}
              >
                Our Values
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            {activeTab === 'mission' && (
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4 5.477 4 6.253v13C4 20.447 5.556 21 7.5 21s3.5-.553 3.5-1.747v-13C13.246 5.477 14.832 5 16.5 5c1.997 0 3.5.553 3.5 1.747v13c0 1.194-1.503 1.747-3.5 1.747s-3.5-.553-3.5-1.747v-13" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto">
                  Our mission is to make education accessible to everyone, everywhere. We believe that learning should be a lifelong journey, and we're committed to providing the resources and support needed to make that journey successful.
                </p>
              </div>
            )}

            {activeTab === 'story' && (
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto mb-6">
                  Founded in 2023, our platform has quickly grown to become a trusted destination for learners worldwide. We partner with industry experts to create courses that are practical, up-to-date, and designed to deliver real-world skills.
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto">
                  What started as a small project has now become a global community of learners and educators, all united by a passion for knowledge and growth.
                </p>
              </div>
            )}

            {activeTab === 'values' && (
              <div>
                <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold mb-2">Quality</h3>
                      <p className="text-gray-600 dark:text-gray-400">We ensure all our courses meet the highest standards of content and instruction.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8m-1.87 8A17.926 17.926 0 013 12c0-2.874-.673-5.59-1.871-8m14.13 0M9 3v6m4-6v6m5 1V9m-5 1v4m-5 1v6m4-6v6m5-1v-4m-5 1v-4" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold mb-2">Accessibility</h3>
                      <p className="text-gray-600 dark:text-gray-400">We design our platform to be accessible to learners of all backgrounds and abilities.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold mb-2">Innovation</h3>
                      <p className="text-gray-600 dark:text-gray-400">We continuously improve our platform and course offerings based on the latest educational research.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold mb-2">Community</h3>
                      <p className="text-gray-600 dark:text-gray-400">We foster a supportive learning community where students can connect and grow together.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Team Section */}
        <div className="py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-purple-500 to-orange-500 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
                    <span className="text-2xl font-bold text-purple-600">{member.name.charAt(0)}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-purple-600 dark:text-purple-400 mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;