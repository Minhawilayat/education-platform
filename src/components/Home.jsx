import React from "react";

function Home() {
  return (
    <main className="text-gray-600">
      {/* Hero Section */}
      <section className="bg-gray-100 py-1">
        <div className="container mx-auto flex px-5 items-center justify-between flex-col-reverse md:flex-row">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-900">
              Unlock Your Growth Potential
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Learn with top instructors and advance your career.
            </p>
            <div className="mt-6">
              <button className="px-6 py-2 bg-indigo-500 text-white rounded-md mr-4">
                Get Started
              </button>
              <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="transparent_woman_laptop.png"
              alt="Learning"
              className="rounded-lg w-200 h-200"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
          <div className="flex justify-center gap-6 mt-8 flex-wrap">
            <div className="p-4 bg-indigo-500 text-white rounded-lg w-40">✔ Expert Instructors</div>
            <div className="p-4 bg-indigo-500 text-white rounded-lg w-40">✔ Flexible Schedule</div>
            <div className="p-4 bg-indigo-500 text-white rounded-lg w-40">✔ Affordable Pricing</div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center">Our Courses</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 bg-white shadow rounded-lg">
              <img src="https://img.freepik.com/free-vector/flat-d-isometric-web-development-infographics-concept_126523-1540.jpg?t=st=1744788876~exp=1744792476~hmac=7e9e5316382d670b703d5b602abf3365a0800079113d26e0ca0243f386353a9a&w=826" alt="Course" className="rounded" />
              <h3 className="text-xl font-bold mt-4">Web Development</h3>
              <p>Learn HTML, CSS, JavaScript, and more.</p>
            </div>
            <div className="p-6 bg-white shadow rounded-lg">
              <img src="https://img.freepik.com/free-photo/3d-internet-secuirty-badge_1048-18106.jpg?ga=GA1.1.888683786.1740508090&semt=ais_hybrid&w=740" alt="Course" className="rounded" />
              <h3 className="text-xl font-bold mt-4">Cybersecurity</h3>
              <p>Protect systems and data from cyber threats.</p>
            </div>
             <div className="p-6 bg-white shadow rounded-lg">
              <img src="https://img.freepik.com/free-photo/3d-internet-secuirty-badge_1048-18106.jpg?ga=GA1.1.888683786.1740508090&semt=ais_hybrid&w=740" alt="Course" className="rounded" />
              <h3 className="text-xl font-bold mt-4">Python Programming</h3>
              <p>Learn the fundamentals of Python and data analysis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">What Our Students Say</h2>
          <div className="mt-8">
            <div className="p-6 bg-gray-100 rounded-lg">
              <p className="italic">"This platform helped me land my first tech job!"</p>
              <h4 className="mt-2 font-bold">- Sarah Khan</h4>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg mt-4">
              <p className="italic">"The best courses with hands-on experience!"</p>
              <h4 className="mt-2 font-bold">- Ahmed Ali</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">Our Pricing</h2>
          <div className="flex justify-center gap-6 mt-8">
            <div className="p-6 bg-indigo-500 text-white rounded-lg w-60">
              <h3 className="text-2xl font-bold">Basic Plan</h3>
              <p className="text-xl">$0/month</p>
              <p>Access free courses</p>
            </div>
            <div className="p-6 bg-indigo-500 text-white rounded-lg w-60">
              <h3 className="text-2xl font-bold">Premium Plan</h3>
              <p className="text-xl">$79/month</p>
              <p>Unlimited access to all courses</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
