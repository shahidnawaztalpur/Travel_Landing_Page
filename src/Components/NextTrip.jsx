import React from 'react';

const NextTrip = ({ leftCard, rightCard }) => {
  return (
    <div className="bg-gray-100 flex justify-center items-center py-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
        
        {/* Left Card */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-8 text-center">
            {leftCard.title}
          </h1>

          {/* Card Items */}
          <div className="grid grid-cols-1 gap-6">
            {leftCard.items.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 shadow rounded-lg p-4 flex flex-col sm:flex-row items-center sm:items-start gap-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="text-center sm:text-start">
                  <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          <img
            src={rightCard.image}
            alt={rightCard.title}
            className="w-full h-auto object-cover rounded-lg mb-4"
          />
          <h2 className="text-lg sm:text-xl font-semibold mb-2 w-full text-start">{rightCard.title}</h2>
          <p className="text-gray-600 text-sm mb-4 w-full text-start">{rightCard.description}</p>

          {/* Icon Images */}
          <div className="flex justify-start gap-4 mb-4 w-full">
            <img src={rightCard.LeafImage} alt="Leaf" className="w-12 h-12 object-cover" />
            <img src={rightCard.SendImage} alt="Send" className="w-12 h-12 object-cover" />
            <img src={rightCard.MapImage} alt="Map" className="w-12 h-12 object-cover" />
          </div>

          {/* Rating */}
          <div className="flex justify-start w-full">
            <p className="text-gray-600 text-sm">{rightCard.Rating}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NextTrip;
