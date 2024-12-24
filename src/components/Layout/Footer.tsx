import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Footer: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      text: "“Saman has everything I need! A fantastic shopping experience with seamless transactions. Highly recommended!”",
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      text: "“Amazing variety and excellent customer service! Shopping here is always a pleasure!”",
      name: "Jane Smith",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      text: "“The best online store I've ever used! Fast delivery and great prices!”",
      name: "David Williams",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="bg-black text-white py-8">
      <footer className="container mx-auto px-4">
        {/* Footer Grid - Adjusted spacing for even gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-semibold mb-4">About Us</h4>
            <p className="text-sm">
              Saman is your go-to e-commerce platform offering a wide range of
              products. Whether you're looking for fashion, electronics, or home
              goods, we have it all!
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-500" : "hover:text-gray-400"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-500" : "hover:text-gray-400"
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/terms"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-500" : "hover:text-gray-400"
                  }
                >
                  Terms & Conditions
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="text-sm">
              Email:
              <a
                href="mailto:yoyuehappy@gmail.com"
                className="text-white hover:text-gray-400"
              >
                yoyuehappy@gmail.com
              </a>
            </p>
            <p className="text-sm">
              Phone:
              <a href="tel:+9779814202188" className="hover:text-gray-400">
                9814202188
              </a>
            </p>
          </div>

          {/* Testimonials Section */}
          <div className="flex flex-col gap-4 justify-center items-center">
            <h4 className="text-xl font-semibold mb-4">Testimonials</h4>
            <div className="relative w-full max-w-xs">
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={prevTestimonial}
                  className="text-white text-2xl"
                >
                  ❮
                </button>
                <div className="flex flex-col items-center">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt="User Avatar"
                    className="w-24 h-24 rounded-full mb-4"
                  />
                  <p className="text-sm italic text-center">
                    {testimonials[currentTestimonial].text}
                  </p>
                </div>
                <button
                  onClick={nextTestimonial}
                  className="text-white text-2xl"
                >
                  ❯
                </button>
              </div>
              <p className="text-sm font-semibold text-center">
                {testimonials[currentTestimonial].name}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 text-center">
          <p className="text-sm">&copy; 2024 Saman Evo. All Rights Reserved.</p>
        </div>

        {/* Social Icons Section */}
        <div className="mt-4 text-center">
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/happilli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://x.com/yoyuehappy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <RiTwitterXFill size={24} />
            </a>
            <a
              href="https://www.facebook.com/safal.lama.726/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/happilli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
