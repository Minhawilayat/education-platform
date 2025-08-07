const TestimonialsSection = () => {
  const testimonials = [
    { 
      name: 'Sarah Johnson', 
      text: 'This platform changed my life! I learned web development and got a job within 3 months.', 
      role: 'Web Developer' 
    },
    { 
      name: 'Michael Chen', 
      text: 'The courses are top-notch. The instructors are experts and the content is up-to-date.', 
      role: 'Data Scientist' 
    },
    { 
      name: 'Emily Rodriguez', 
      text: 'I love the flexibility of learning at my own pace. The community support is amazing!', 
      role: 'UX Designer' 
    },
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg card-hover">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;