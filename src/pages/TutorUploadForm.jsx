import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { uploadCourse, uploadFile } from '../Services/Api';
import { useNavigate } from 'react-router-dom';

const TutorUploadForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [thumbnail, setThumbnail] = useState(null);
  const [videos, setVideos] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleThumbnailChange = (e) => {
    if (e.target.files[0]) {
      setThumbnail(e.target.files[0]);
    }
  };

  const handleVideosChange = (e) => {
    const files = Array.from(e.target.files);
    setVideos(files);
  };

  const handleDocumentsChange = (e) => {
    const files = Array.from(e.target.files);
    setDocuments(files);
  };

  const onSubmit = async (data) => {
    event.preventDefault();
    
    setUploading(true);
    setProgress(0);
    setStatusMessage('Starting upload...');
    setError('');
    
    try {
      console.log('Form submitted with data:', data);
      console.log('Thumbnail:', thumbnail);
      console.log('Videos:', videos);
      console.log('Documents:', documents);
      
      // Validate that at least one video is uploaded
      if (videos.length === 0) {
        throw new Error('Please upload at least one video');
      }

      // Upload thumbnail
      let thumbnailUrl = '';
      if (thumbnail) {
        setStatusMessage('Uploading thumbnail...');
        console.log('Uploading thumbnail:', thumbnail.name);
        const thumbnailResponse = await uploadFile(thumbnail, 'thumbnail');
        thumbnailUrl = thumbnailResponse.url;
        setProgress(10);
        console.log('Thumbnail uploaded successfully:', thumbnailUrl);
      }

      // Upload videos
      const videoUrls = [];
      for (let i = 0; i < videos.length; i++) {
        setStatusMessage(`Uploading video ${i + 1} of ${videos.length}...`);
        console.log(`Uploading video ${i + 1}:`, videos[i].name);
        const videoResponse = await uploadFile(videos[i], 'video');
        videoUrls.push({
          name: videos[i].name,
          url: videoResponse.url,
          size: videos[i].size
        });
        const videoProgress = Math.round(((i + 1) / videos.length) * 60);
        setProgress(10 + videoProgress);
        console.log(`Video ${i + 1} uploaded successfully:`, videoResponse.url);
      }

      // Upload documents
      const documentUrls = [];
      for (let i = 0; i < documents.length; i++) {
        setStatusMessage(`Uploading document ${i + 1} of ${documents.length}...`);
        console.log(`Uploading document ${i + 1}:`, documents[i].name);
        const docResponse = await uploadFile(documents[i], 'document');
        documentUrls.push({
          name: documents[i].name,
          url: docResponse.url,
          size: documents[i].size
        });
        const docProgress = Math.round(((i + 1) / documents.length) * 20);
        setProgress(70 + docProgress);
        console.log(`Document ${i + 1} uploaded successfully:`, docResponse.url);
      }

      setStatusMessage('Saving course data...');
      console.log('Saving course data to API');
      
      // Save course data to API
      const courseData = {
        ...data,
        thumbnail: thumbnailUrl,
        videos: videoUrls,
        documents: documentUrls,
        status: 'pending', // Pending approval
        enrolled: 0,
        rating: 0
      };
      
      console.log('Course data to save:', courseData);
      const response = await uploadCourse(courseData);
      console.log('Course saved with ID:', response.id);

      setProgress(100);
      setStatusMessage('Course uploaded successfully!');
      
      // Redirect after a short delay
      setTimeout(() => {
        setUploading(false);
        navigate('/dashboard');
      }, 2000);
      
    } catch (error) {
      console.error('Error uploading course:', error);
      setError(error.message);
      setStatusMessage('');
      setUploading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Upload New Course</h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <strong>Error:</strong> {error}
        </div>
      )}
      
      {uploading ? (
        <div className="text-center py-8">
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div 
              className="bg-purple-600 h-4 rounded-full transition-all duration-300" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-lg mb-2">{statusMessage}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{progress}% complete</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="title" className="block text-gray-700 dark:text-gray-300 mb-2">Course Title</label>
              <input
                type="text"
                id="title"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700"
                {...register('title', { required: 'Course title is required' })}
              />
              {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
            </div>
            
            <div>
              <label htmlFor="instructor" className="block text-gray-700 dark:text-gray-300 mb-2">Instructor Name</label>
              <input
                type="text"
                id="instructor"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700"
                {...register('instructor', { required: 'Instructor name is required' })}
              />
              {errors.instructor && <p className="text-red-500 text-sm mt-1">{errors.instructor.message}</p>}
            </div>
            
            <div>
              <label htmlFor="category" className="block text-gray-700 dark:text-gray-300 mb-2">Category</label>
              <select
                id="category"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700"
                {...register('category', { required: 'Category is required' })}
              >
                <option value="">Select a category</option>
                <option value="Web Development">Web Development</option>
                <option value="Programming">Programming</option>
                <option value="Data Science">Data Science</option>
                <option value="Design">Design</option>
                <option value="Business">Business</option>
              </select>
              {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
            </div>
            
            <div>
              <label htmlFor="level" className="block text-gray-700 dark:text-gray-300 mb-2">Level</label>
              <select
                id="level"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700"
                {...register('level', { required: 'Level is required' })}
              >
                <option value="">Select a level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
              {errors.level && <p className="text-red-500 text-sm mt-1">{errors.level.message}</p>}
            </div>
            
            <div>
              <label htmlFor="price" className="block text-gray-700 dark:text-gray-300 mb-2">Price ($)</label>
              <input
                type="number"
                id="price"
                min="0"
                step="0.01"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700"
                {...register('price', { required: 'Price is required', min: 0 })}
              />
              {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
            </div>
            
            <div>
              <label htmlFor="duration" className="block text-gray-700 dark:text-gray-300 mb-2">Duration (hours)</label>
              <input
                type="number"
                id="duration"
                min="1"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700"
                {...register('duration', { required: 'Duration is required', min: 1 })}
              />
              {errors.duration && <p className="text-red-500 text-sm mt-1">{errors.duration.message}</p>}
            </div>
          </div>
          
          <div className="mt-6">
            <label htmlFor="description" className="block text-gray-700 dark:text-gray-300 mb-2">Course Description</label>
            <textarea
              id="description"
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700"
              {...register('description', { required: 'Description is required' })}
            ></textarea>
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
          </div>
          
          <div className="mt-6">
            <label htmlFor="thumbnail" className="block text-gray-700 dark:text-gray-300 mb-2">Course Thumbnail</label>
            <input
              type="file"
              id="thumbnail"
              accept="image/*"
              onChange={handleThumbnailChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700"
            />
            {thumbnail && (
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Selected: {thumbnail.name}
              </div>
            )}
          </div>
          
          <div className="mt-6">
            <label htmlFor="videos" className="block text-gray-700 dark:text-gray-300 mb-2">Course Videos *</label>
            <input
              type="file"
              id="videos"
              accept="video/*"
              multiple
              onChange={handleVideosChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700"
              required
            />
            {videos.length > 0 && (
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {videos.length} video(s) selected
              </div>
            )}
          </div>
          
          <div className="mt-6">
            <label htmlFor="documents" className="block text-gray-700 dark:text-gray-300 mb-2">Course Documents</label>
            <input
              type="file"
              id="documents"
              accept=".pdf,.doc,.docx,.ppt,.pptx,.txt"
              multiple
              onChange={handleDocumentsChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700"
            />
            {documents.length > 0 && (
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {documents.length} document(s) selected
              </div>
            )}
          </div>
          
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition duration-300"
            >
              Upload Course
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default TutorUploadForm;