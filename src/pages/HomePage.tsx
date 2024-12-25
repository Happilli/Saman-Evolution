import React, { useState, useMemo, useEffect, useCallback } from "react";
import Layout from "../components/Layout/Layout";

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = useMemo(
    () => [
      "https://github.com/RyuZinOh/saman-ecommerce/blob/main/client/src/assets/_saman.png?raw=true",
      "https://github.com/RyuZinOh/saman-ecommerce/blob/main/client/src/assets/_saman_1.png?raw=true",
    ],
    []
  );

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <Layout
      title="Welcome to Saman - Explore & Shop"
      description="Join Saman, your ultimate e-commerce platform for the best shopping experience!"
      author="Safal Lama"
      keywords="E-commerce, Shopping, Saman"
      viewport="width=device-width, initial-scale=1.0"
    >
      <div className="relative w-full h-[400px] md:h-[1080px] overflow-hidden z-0">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 relative group overflow-hidden"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out"
              />
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
                <button className=" w-[200px] h-[50px] bg-white text-black border-2 border-black font-bold text-xl rounded-md shadow-lg hover:bg-gray-200 transition duration-300">
                  Shop Now
                </button>

                <div className="bg-white text-black font-medium text-lg px-6 py-2 border-2 border-black text-center">
                  Find the Best Deals and Explore a Wide Range of Products!
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
