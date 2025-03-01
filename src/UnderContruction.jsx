// UnderConstruction.jsx
import React from 'react';

const UnderConstruction = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-gray-800/50  rounded-lg shadow-lg p-8 border border-gray-700">
        {/* Header */}
        <h1 className="text-3xl font-mono text-white text-center mb-6">
          NUVION TECHNOLOGIES &trade;
        </h1>

        {/* Main Message */}
        <div className="text-center space-y-4">
          <h2 className="text-xl font-mono text-gray-200">
            Under Construction
          </h2>
          <p className="text-gray-400 font-mono text-sm leading-relaxed">
            We're building something exceptional. Stay tuned for the launch.
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-pulse"></div>
            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-pulse animation-delay-200"></div>
            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-pulse animation-delay-400"></div>
          </div>
        </div>

        {/* Contact */}
        <p className="text-center text-gray-500 font-mono text-xs mt-6">
          Contact: <a href="mailto:info@yoursoftwareco.com" className="text-gray-400 hover:text-gray-300">info@nuviontech.com</a>
        </p>

        {/* Footer */}
        <p className="text-center text-gray-600 font-mono text-xs mt-4">
          © {new Date().getFullYear()} NUVION TECHNOLOGIES
        </p>
      </div>
    </div>
  );
};

export default UnderConstruction;