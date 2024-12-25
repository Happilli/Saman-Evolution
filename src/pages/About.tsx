import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout"; 

const About: React.FC = () => {
  return (
    <Layout
      title="About Us - Saman" 
      description="Learn more about Saman, your trusted e-commerce platform." 
      author="Safal Lama" 
      keywords="About Saman, E-commerce, Saman" 
      viewport="width=device-width, initial-scale=1.0"
    >
      <div className="min-h-screen flex flex-col justify-center items-center bg-white text-gray-800 p-12 border border-purpletheme rounded-lg shadow-lg">
        {/* Main Title */}
        <h1 className="text-5xl font-extrabold mb-6 text-gray-900 transition-all duration-500 ease-in-out transform hover:scale-105 border-b-4 border-purpletheme pb-4">
          About Us
        </h1>

        {/* Introduction Section */}
        <p className="text-xl text-center max-w-3xl mb-8 text-gray-600 leading-relaxed border-b-2 border-gray-200 pb-4">
          Welcome to Saman, where technology meets ambition, and ambition meets
          coffee! This platform was crafted by one man who had nothing but a
          laptop, an unrelenting passion for e-commerce, and an extreme dislike
          for sleep. That’s right, folks, Safal Lama built this masterpiece from
          the ground up: from back-end spaghetti code to front-end sorcery, with
          some DevOps wizardry thrown in just to keep things interesting.
        </p>

        {/* The Vision */}
        <p className="text-xl text-center max-w-3xl text-gray-600 leading-relaxed border-b-2 border-gray-200 pb-4">
          At Saman, we don’t just sell products; we sell the dream of
          hassle-free shopping. Every click is engineered to be smoother than
          your best pickup line, and the shopping experience is designed to
          leave you thinking, “How did they make it so easy?” Spoiler alert:
          Safal did it all. He’s the secret sauce, the engine, and the
          occasional caffeinated messiah who keeps this platform running like a
          well-oiled machine.
        </p>

        {/* Call to Action Button */}
        <div className="mt-12">
          <Link to="/">
            <button className="bg-black text-white py-3 px-8 rounded-lg text-lg shadow-lg hover:bg-white hover:text-black hover:shadow-xl transform transition-all duration-300 ease-in-out border-2 border-black">
              Start Shopping (Before Safal Takes a Nap)
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default About;
