import React from "react";
import {
  FaRegFileAlt,
  FaLock,
  FaRegUser,
  FaCogs,
  FaCookieBite,
} from "react-icons/fa"; 
import Layout from "../components/Layout/Layout"; 

const Policy: React.FC = () => {
  return (
    <Layout
      title="Privacy Policy - Saman"
      description="Read our privacy policy to understand how we collect, use, and protect your personal information."
      author="Safal Lama"
      keywords="privacy policy, terms of use, data protection, user rights"
    >
      <div className="container my-5 p-4 bg-white shadow-sm rounded-md">
        <h1 className="text-center mb-4 text-2xl font-semibold text-gray-900">
          Privacy Policy
        </h1>

        <div className="space-y-4">
          {/* Introduction Section */}
          <div className="p-4 bg-gray-50 rounded-md shadow-sm border-l-4 border-purpletheme">
            <h3 className="text-lg font-semibold text-gray-800">
              <FaRegFileAlt className="inline-block mr-2" />
              Introduction
            </h3>
            <p className="text-gray-600">
              At Saman, your privacy matters. This policy outlines how we
              collect, use, and protect your personal information.
            </p>
          </div>

          {/* Information Collection Section */}
          <div className="p-4 bg-gray-50 rounded-md shadow-sm border-l-4 border-purpletheme">
            <h3 className="text-lg font-semibold text-gray-800">
              <FaRegUser className="inline-block mr-2" />
              Information We Collect
            </h3>
            <p className="text-gray-600">We collect the following data:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Personal details (name, email, etc.)</li>
              <li>Usage data (IP, browser type, etc.)</li>
              <li>Cookies and tracking technologies</li>
            </ul>
          </div>

          {/* How We Use Your Information Section */}
          <div className="p-4 bg-gray-50 rounded-md shadow-sm border-l-4 border-purpletheme">
            <h3 className="text-lg font-semibold text-gray-800">
              <FaCogs className="inline-block mr-2" />
              How We Use Your Information
            </h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>To improve our services</li>
              <li>To communicate updates</li>
              <li>To support your inquiries</li>
            </ul>
          </div>

          {/* Data Protection Section */}
          <div className="p-4 bg-gray-50 rounded-md shadow-sm border-l-4 border-purpletheme">
            <h3 className="text-lg font-semibold text-gray-800">
              <FaLock className="inline-block mr-2" />
              Data Protection
            </h3>
            <p className="text-gray-600">
              We take reasonable security measures to protect your data, but no
              method is 100% secure.
            </p>
          </div>

          {/* Your Rights Section */}
          <div className="p-4 bg-gray-50 rounded-md shadow-sm border-l-4 border-purpletheme">
            <h3 className="text-lg font-semibold text-gray-800">
              <FaRegUser className="inline-block mr-2" />
              Your Rights
            </h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Access, correct, or delete your data</li>
              <li>Opt-out of communication</li>
              <li>Request data usage details</li>
            </ul>
          </div>

          {/* Cookies Section */}
          <div className="p-4 bg-gray-50 rounded-md shadow-sm border-l-4 border-purpletheme">
            <h3 className="text-lg font-semibold text-gray-800">
              <FaCookieBite className="inline-block mr-2" />
              Cookies
            </h3>
            <p className="text-gray-600">
              We use cookies to enhance your browsing experience. You can manage
              cookie preferences through your browser settings.
            </p>
          </div>

          {/* Changes to Policy Section */}
          <div className="p-4 bg-gray-50 rounded-md shadow-sm border-l-4 border-purpletheme">
            <h3 className="text-lg font-semibold text-gray-800">
              <FaRegFileAlt className="inline-block mr-2" />
              Policy Changes
            </h3>
            <p className="text-gray-600">
              We may update this policy periodically. All changes will be posted
              here.
            </p>
          </div>

          {/* Contact Section */}
          <div className="p-4 bg- rounded-md shadow-sm border-l-4 border-purpletheme">
            <h3 className="text-lg font-semibold text-gray-800">
              <FaRegUser className="inline-block mr-2" />
              Contact Us
            </h3>
            <p className="text-gray-600">
              For questions, please contact us at{" "}
              <a
                href="mailto:yoyuehappy@gmail.com"
                className="text-blue-600 hover:underline"
              >
                yoyuehappy@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
