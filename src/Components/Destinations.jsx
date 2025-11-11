import React from 'react'

const Destinations = ({ heading, cards }) => {
  return (
          <>
          <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10 mt-10">
            {/* Main Heading */}
            <h1 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              {heading}
            </h1>
      
            {/* 4 Cards in One Line */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden w-96 place-items-center"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-auto place-items-center"
                  />
                </div>
              ))}
            </div>
          </div>
          </>      
  )
}

export default Destinations