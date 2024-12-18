import React, { useState, useEffect } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      title: 'Welcome to My Store',
      description: 'Discover the best deals on amazing products.',
      image: 'https://m.media-amazon.com/images/I/71w+qp51UyL._SX3000_.jpg',
    },
    {
      id: 2,
      title: 'Exclusive Discounts',
      description: 'Get up to 50% off on your favorite items.',
      image: 'https://m.media-amazon.com/images/I/717EN955aDL._SX3000_.jpg',
    },
    {
      id: 3,
      title: 'New Arrivals',
      description: 'Explore the latest trends and styles.',
      image: 'https://m.media-amazon.com/images/I/818WR6jtOyL._SX3000_.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slider logic
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
         <div
         key={slide.id}
         className="flex-shrink-0 w-screen h-screen sm:w-full sm:h-screen"
         style={{
           backgroundImage: `url(${slide.image})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
         }}
       >
       </div>
       
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute p-4 text-white transition -translate-y-1/2 bg-black bg-opacity-50 rounded-full top-1/2 left-6 hover:bg-opacity-70 sm:left-4 md:left-6 lg:left-8"
      >
        <FiArrowLeft size={30} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute p-4 text-white transition -translate-y-1/2 bg-black bg-opacity-50 rounded-full top-1/2 right-6 hover:bg-opacity-70 sm:right-4 md:right-6 lg:right-8"
      >
        <FiArrowRight size={30} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute flex space-x-3 transform -translate-x-1/2 bottom-6 left-1/2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full cursor-pointer ${
              index === currentIndex
                ? 'bg-white'
                : 'bg-gray-400 hover:bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
