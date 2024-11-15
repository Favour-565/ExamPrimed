import React, { useState, useEffect } from 'react';
import ReviewCard from './ReviewCard';

const reviewsData = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8818f29323f7ad8d91bd151041e3e41c68eeaf357ed8cac1f93b4c417ebfba48?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345",
    name: "Shade Thomas",
    review: "I love how organized and easy-to-use the platform is. ExamPrimed gave me access to resources I couldn’t find anywhere else!"

  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2f2a8436d29623f01eb81ca2c451a2f8f01cb6a318a64afe6e6f222fa2888260?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345",
    name: "Solomon Kalu",
    review: "The best study tool I’ve come across! ExamPrimed’s vast question bank made it easy to prepare and feel ready for anything on exam day."
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8818f29323f7ad8d91bd151041e3e41c68eeaf357ed8cac1f93b4c417ebfba48?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345",
    name: "Shade Thomas",
    review: "ExamPrimed is an absolute lifesaver. It’s like having a personal tutor guiding me through the exact topics I need to focus on!"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2f2a8436d29623f01eb81ca2c451a2f8f01cb6a318a64afe6e6f222fa2888260?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345",
    name: "Solomon Kalu",
    review: "Using ExamPrimed improved my grades significantly. With so many past questions, I was fully prepared and knew exactly what to expect."
  }
];

const ReviewCarousel = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentReviewIndex]);

  const handleNext = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
  };

  const handlePrev = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel Wrapper */}
      <div className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentReviewIndex * 100}%)` }}>
        {reviewsData.map((review, index) => (
          <div key={index} className="min-w-full">
            <ReviewCard {...review} />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button 
        aria-label="Previous review" 
        onClick={handlePrev} 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10" className="w-6 h-6 text-black">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1L1 5l4 4"/>
        </svg>
      </button>

      <button 
        aria-label="Next review" 
        onClick={handleNext} 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10" className="w-6 h-6 text-black">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 9l4-4-4-4"/>
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {reviewsData.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentReviewIndex === index ? 'bg-blue-600' : 'bg-gray-400'}`}
            onClick={() => setCurrentReviewIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;
