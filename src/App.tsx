import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Policy from "./pages/Policy";
import Contact from "./pages/Contact";
import Pagenotfound from "./pages/PagenotFound";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Otp from "./pages/Auth/Otp";

const NoMatch = () => {
  return <Pagenotfound />;
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/contact" element={<Contact />} />

        {/* 
//auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp" element={<Otp />} /> 
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
