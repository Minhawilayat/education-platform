import React, { useState } from "react";

function Auth() {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login & SignUp

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";

    if (!isLogin) {
      if (!formData.fullName) newErrors.fullName = "Full Name is required";
      if (!formData.confirmPassword) newErrors.confirmPassword = "Please confirm your password";
      if (formData.password !== formData.confirmPassword)
        newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log(`${isLogin ? "Login" : "Sign Up"} successful:`, formData);
      setErrors({});
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-3/4">
        {/* Left Section - Testimonials */}
        <div className="w-1/2 p-8 bg-gray-50">
          <h2 className="text-2xl font-bold">Students Testimonials</h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et.
          </p>
          <div className="mt-6">
            <p className="text-gray-800">
              "The web design course provided a solid foundation for me. The
              instructors were knowledgeable and supportive. I highly recommend it!"
            </p>
            <div className="flex items-center mt-4">
              <img
                className="w-10 h-10 rounded-full mr-2"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-vy_NfPowNzjq7wydwDwhISKYl64VscHF8wqwF7v2z8W0fVCe6-hDSVnhT0UqciahckA&usqp=CAU"
                alt="User"
              />
              <span className="font-bold">Sarah L.</span>
            </div>
          </div>
        </div>

        {/* Right Section - Login / Sign Up */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800">
            {isLogin ? "Login" : "Sign Up"}
          </h2>
          <p className="text-gray-500 text-sm">
            {isLogin ? "Welcome back! Please log in." : "Create your account now!"}
          </p>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mt-4">
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
              </div>
            )}

            <div className="mt-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>

            {!isLogin && (
              <div className="mt-4">
                <label className="block text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
                )}
              </div>
            )}

            {isLogin && (
              <div className="flex justify-between items-center mt-2">
                <div>
                  <input type="checkbox" className="mr-2" />
                  <span>Remember Me</span>
                </div>
                <a href="#" className="text-blue-500 text-sm">
                  Forgot Password?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full mt-4 bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          <div className="text-center mt-4 text-gray-500">OR</div>

          <button className="w-full mt-4 flex justify-center items-center bg-gray-200 py-2 rounded-md hover:bg-gray-300">
            <img
              className="w-5 h-5 mr-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHjvVSPHydv9qdLqTclS4W7XOg96IXHvZP_8XUcTl6HP95KWUljSZga5PipvdSUYpWS-Q&usqp=CAU"
              alt="Google"
            />
            {isLogin ? "Login" : "Sign Up"} with Google
          </button>

          <p className="text-center text-sm mt-4">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-500 underline"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Auth;
