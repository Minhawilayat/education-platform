import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/home";
import Contact from "./components/Contact";
import CoursesOpenPage from "./components/CoursesOpenPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AboutUs from "./components/AboutUs";
import Pricing from "./components/Pricing";
import Courses from "./components/Courses";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
       <Route path="/enroll" element={<CoursesOpenPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
