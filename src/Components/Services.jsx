import React from 'react'

const Services = ({ heading, cards }) => {
  return (
    <>
    <div className=" bg-gray-100 flex flex-col items-center p-10 mt-10">
      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        {heading}
      </h1>

      {/* 4 Cards in One Line */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden w-72 place-items-center"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-24 h-24"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Services