import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form Section */}
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Get in Touch</h2>
            <form className="space-y-5">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  placeholder="+92 300 0000000"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  placeholder="Write your subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  placeholder="Type your message here..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  rows="5"
                ></textarea>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition shadow-md">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="flex flex-col justify-center bg-blue-50 rounded-2xl p-8 shadow-inner space-y-6">
            <div className="text-lg text-gray-800 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl text-blue-600">📧</span>
                <span>support@skillbridge.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl text-blue-600">📞</span>
                <span>+91 00000 00000</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl text-blue-600">📍</span>
                <span>Somewhere in the World</span>
              </div>
            </div>

            <div className="flex justify-start space-x-6 mt-6">
              <a href="#" className="text-blue-500 text-xl hover:text-blue-700 transition">🔵</a>
              <a href="#" className="text-blue-500 text-xl hover:text-blue-700 transition">🐦</a>
              <a href="#" className="text-blue-500 text-xl hover:text-blue-700 transition">💼</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
