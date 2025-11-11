import React from 'react';

const Testimonials = ({ testimonialsCard, RatingCard }) => {
  return (
    <div className="bg-gray-100 flex justify-center items-center py-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
        
        {/* Left Card */}
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col justify-center items-center text-center">
          <h3 className="text-1xl sm:text-2xl font-semibold text-gray-700 mb-4">
            {testimonialsCard.title}
          </h3>
          <h1 className="text-2xl sm:text-4xl text-gray-800">
            {testimonialsCard.Subtitle}
          </h1>
        </div>

        {/* Right Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col">
          <img
            src={RatingCard.image}
            alt={RatingCard.title}
            className="w-24 h-24 mb-4 rounded-full object-cover"
          />
          <p className="text-gray-600 text-sm mb-6 mx-12">{RatingCard.description}</p>

          <div className="mb-4">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mx-12">{RatingCard.NameTitle}</h3>
            <p className="text-gray-500 text-sm mx-12">{RatingCard.location}</p>
          </div>

          <div className='mx-[15%]'>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700">{RatingCard.SecondName}</h3>
            <p className="text-gray-500 text-sm">{RatingCard.position}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;
