import React from 'react';

const Contact = ({ title, EmailButton, SubscribeButton }) => {
  return (
    <div className="bg-blue-100 shadow-lg rounded-lg p-6 sm:p-8 flex flex-col items-center text-center w-4/5 max-w-3xl mx-auto">
  {/* Content goes here */}


      
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6 sm:mb-8">
        {title}
      </h1>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
        <button className="p-3 sm:px-6 sm:py-3 rounded-md bg-white text-gray-800 font-medium w-full sm:w-auto hover:bg-gray-100 transition">
          {EmailButton}
        </button>
        <button className="p-3 sm:px-6 sm:py-3 rounded-md bg-red-600 text-white font-medium w-full sm:w-auto hover:bg-red-700 transition">
          {SubscribeButton}
        </button>
      </div>
    </div>
  );
};

export default Contact;
