import React from "react";
import Layout from "../components/Layout/Layout";
import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <Layout
      title="Contact Us - Safal Lama"
      description="Get in touch with Safal Lama for any queries or support."
      author="Safal Lama"
      keywords="Contact Safal Lama, Customer Support, Safal Lama"
      viewport="width=device-width, initial-scale=1.0"
    >
      <div className="min-h-screen flex items-center justify-center bg-white">
        {/* Centered Profile Card */}
        <div className="profile-card w-[400px] h-[550px] rounded-md shadow-xl overflow-hidden cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-5 transition-all duration-300 group transform hover:scale-105 hover:shadow-2xl">
          {/* Avatar Section */}
          <div className="avatar w-full pt-6 flex items-center justify-center flex-col gap-2">
            <div className="img_container w-full flex items-center justify-center relative z-40 after:absolute after:h-[8px] after:w-full after:bg-purpletheme after:top-5 after:group-hover:size-[1%] after:delay-300 after:group-hover:delay-0 after:group-hover:transition-all after:group-hover:duration-300 after:transition-all after:duration-300 before:absolute before:h-[8px] before:w-full before:bg-purpletheme before:bottom-5 before:group-hover:size-[1%] before:delay-300 before:group-hover:delay-0 before:group-hover:transition-all before:group-hover:duration-300 before:transition-all before:duration-300">
              <img
                src="https://avatars.githubusercontent.com/u/140276215?v=4"
                alt="Avatar of Safal Lama"
                className="size-48 z-40 border-4 border-white rounded-full group-hover:border-8 group-hover:transition-all group-hover:duration-300 transition-all duration-300"
              />
              {/* Hover Background Animation */}
              <div className="absolute bg-purpletheme z-10 size-[60%] w-full group-hover:size-[1%] group-hover:transition-all group-hover:duration-300 transition-all duration-300 delay-700 group-hover:delay-0 "></div>
            </div>
          </div>

          {/* Headings */}
          <div className="headings text-center leading-6">
            <p className="text-2xl font-serif font-semibold text-[#434955]">SAFAL LAMA</p>
            <p className="text-sm font-semibold text-[#434955]">DEVELOPER</p>
          </div>

          {/* Contact Info */}
          <div className="w-full items-center justify-center flex">
            <ul className="flex flex-col items-start gap-4 pb-5">
              <li className="flex items-center gap-3 border-b-[1.5px] border-b-stone-700 border-dotted text-sm font-semibold text-[#434955]">
                <FaPhone className="fill-stone-700 group-hover:fill-purpletheme" size={18} />
                <p>+977 9814202188</p>
              </li>
              <li className="flex items-center gap-3 border-b-[1.5px] border-b-stone-700 border-dotted text-sm font-semibold text-[#434955]">
                <FaEnvelope className="fill-stone-700 group-hover:fill-purpletheme" size={18} />
                <p>yoyuehappy@gmail.com</p>
              </li>
              <li className="flex items-center gap-3 border-b-[1.5px] border-b-stone-700 border-dotted text-sm font-semibold text-[#434955]">
                <FaGlobe className="fill-stone-700 group-hover:fill-purpletheme" size={18} />
                <p>safallama.com/np</p>
              </li>
              <li className="flex items-center gap-3 text-sm font-semibold text-[#434955]">
                <FaMapMarkerAlt className="fill-stone-700 group-hover:fill-purpletheme" size={18} />
                <p>Chitawan, Nepal</p>
              </li>
            </ul>
          </div>

          {/* Separator */}
          <hr className="w-full group-hover:h-6 h-4 bg-purpletheme group-hover:transition-all group-hover:duration-300 transition-all duration-300" />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
