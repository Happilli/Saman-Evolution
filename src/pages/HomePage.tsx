import React, { useState, useMemo, useEffect, useCallback } from "react";
import Layout from "../components/Layout/Layout";
import { Parallax } from "react-parallax";

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const mobileImages = useMemo(
    () => [
      "https://github.com/RyuZinOh/static-assets/blob/main/Saman_mobile1.png?raw=true",
      "https://github.com/RyuZinOh/static-assets/blob/main/Saman_mobile2.png?raw=true",
    ],
    []
  );

  const desktopImages = useMemo(
    () => [
      "https://github.com/RyuZinOh/saman-ecommerce/blob/main/client/src/assets/_saman.png?raw=true",
      "https://github.com/RyuZinOh/saman-ecommerce/blob/main/client/src/assets/_saman_1.png?raw=true",
    ],
    []
  );

  const images = isMobile ? mobileImages : desktopImages;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 768);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

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
      <div className="relative w-full h-[720px] md:h-[1080px] overflow-hidden">
        {/* Parallax scrolling effect for carousel */}
        <div className="relative w-full h-full">
          <Parallax
            bgImage={images[currentSlide]}
            strength={300} 
            className="w-full h-[720px] md:h-[1080px] bg-cover bg-center"
            style={{ transform: `translate3d(0, ${currentSlide * 10}px, 0)` }}
          >
            {/* Parallax content overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
              <button className="w-[150px] h-[40px] md:w-[200px] md:h-[50px] bg-white text-black border-2 border-black font-bold text-lg md:text-xl rounded-md shadow-lg hover:bg-gray-200 transition duration-300">
                Shop Now
              </button>
              <div className="bg-white text-black font-medium text-sm md:text-lg px-4 md:px-6 py-2 border-2 border-black text-center">
                Find the Best Deals and Explore a Wide Range of Products!
              </div>
            </div>
          </Parallax>
        </div>

        {/* Carousel transition effect */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 relative group overflow-hidden"
            >
              <div
                className="w-full h-[720px] md:h-[1080px] bg-cover bg-center"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundPosition: "left center",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
