import { useState } from 'react';

const CoursePlaylist = ({ curriculum, courseId }) => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const playVideo = (lesson) => {
    setCurrentVideo(lesson);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold">Course Content</h2>
      </div>
      
      <div className="flex flex-col md:flex-row">
        {/* Video Player */}
        <div className="w-full md:w-2/3 bg-black aspect-video flex items-center justify-center">
          {currentVideo ? (
            <video 
              src={currentVideo.videoUrl} 
              controls 
              className="w-full h-full"
              title={currentVideo.title}
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="text-center text-white p-8">
              <div className="text-5xl mb-4">▶️</div>
              <p className="text-lg">Select a lesson to start watching</p>
            </div>
          )}
        </div>
        
        {/* Playlist */}
        <div className="w-full md:w-1/3 max-h-[500px] overflow-y-auto">
          {curriculum.map((section) => (
            <div key={section.id} className="border-b border-gray-200 dark:border-gray-700">
              <div 
                className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
                onClick={() => toggleSection(section.id)}
              >
                <div>
                  <h3 className="font-bold">{section.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{section.lessons} lessons • {section.duration}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-gray-500 transition-transform ${expandedSections[section.id] ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              
              {expandedSections[section.id] && (
                <div className="px-4 pb-4">
                  <div className="space-y-2">
                    {[...Array(section.lessons)].map((_, lessonIndex) => {
                      const lessonId = `${section.id}-${lessonIndex + 1}`;
                      const lesson = {
                        id: lessonId,
                        title: `${section.title} - Lesson ${lessonIndex + 1}`,
                        videoUrl: section.videoUrl,
                        description: section.description
                      };
                      
                      return (
                        <div 
                          key={lessonId} 
                          className={`p-3 rounded cursor-pointer flex items-center ${
                            currentVideo?.id === lessonId 
                              ? 'bg-purple-100 dark:bg-purple-900' 
                              : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                          onClick={() => playVideo(lesson)}
                        >
                          <div className="flex items-center">
                            <div className="mr-3">
                              {currentVideo?.id === lessonId ? (
                                <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                  </svg>
                                </div>
                              ) : (
                                <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                  <span className="text-xs font-medium">{lessonIndex + 1}</span>
                                </div>
                              )}
                            </div>
                            <div>
                              <h4 className="font-medium">{lesson.title}</h4>
                              <p className="text-xs text-gray-600 dark:text-gray-400 truncate max-w-xs">
                                {lesson.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursePlaylist;