const FeaturesSection = () => {
  const features = [
    { 
      title: 'Expert Instructors', 
      description: 'Learn from industry professionals with real-world experience', 
      icon: '👨‍🏫' 
    },
    { 
      title: 'Flexible Learning', 
      description: 'Study at your own pace with 24/7 access to course materials', 
      icon: '⏱️' 
    },
    { 
      title: 'Practical Projects', 
      description: 'Build real projects to showcase your skills to employers', 
      icon: '💼' 
    },
    { 
      title: 'Certification', 
      description: 'Earn recognized certificates upon course completion', 
      icon: '🏆' 
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center card-hover">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;