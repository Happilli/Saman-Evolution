import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/cart", label: "Cart" },
    { to: "/category", label: "Category" },
  ];

  return (
    <>
      <div className="bg-white text-black py-2 z-50">
        <div className="container mx-auto px-4 flex justify-center items-center text-sm">
          <img
            src="/assets/SAMAN.png"
            alt="Saman Logo"
            className="h-14 w-auto sm:h-12"
          />
        </div>
      </div>

      <nav className="bg-black text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white focus:outline-none"
              >
                <Menu size={24} />
              </button>
            </div>

            <div className="hidden md:flex space-x-4 sm:space-x-8 justify-start w-full">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `text-sm sm:text-lg font-medium ${
                      isActive ? "text-purpletheme" : "hover:text-gray-400"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>

            <div className="flex items-center space-x-4 ml-auto">
              <button
                onClick={() => navigate("/login")}
                className="bg-purpletheme text-black font-semibold px-4 py-2 rounded-lg hover:bg-purple-700 transition-all"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="bg-purpletheme text-black font-semibold px-4 py-2 rounded-lg hover:bg-purple-700 transition-all"
              >
                Join
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-[50%] h-full bg-black text-white transition-transform transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden z-50 rounded-r-lg`} 
      >
        <div className="flex flex-col items-start py-10 mt-8 pl-6">
          {" "}
          {/* Align content to the left */}
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 left-4 text-white text-3xl"
          >
            <X size={32} />
          </button>
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-lg font-medium ${
                  isActive ? "text-purpletheme" : "hover:text-gray-400"
                } py-2`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* GitHub link at the bottom */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50">
          <a
            href="https://github.com/RyuZinOh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaGithub size={32} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
