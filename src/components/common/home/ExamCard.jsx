import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PropTypes from 'prop-types';

function ExamCard({ imageSrc, text }) {
  return (
    <div className="flex flex-col ml-[14px] w-[60%] max-md:ml-0 max-md:w-full">
      <div className="flex relative flex-col pt-80 w-full text-base text-white rounded-3xl min-h-[355px] max-md:pt-24 max-md:mt-10 max-md:max-w-full">
        <div className="absolute inset-0">
          <LazyLoadImage
            src={imageSrc}
            alt="Exam preparation"
            effect="blur"
            threshold={300}
            className="object-cover rounded-3xl size-full"
            wrapperClassName="size-full"
            placeholderSrc={imageSrc} // You can replace this with a low-res version of the image
          />
        </div>
        <div className="flex relative flex-wrap gap-5 justify-between px-8 py-3.5 bg-teal-800 rounded-none border-t-2 border-solid border-t-sky-300 max-md:px-5 max-md:max-w-full">
          <div>{text}</div>
          {/* Icon images commented out in original */}
          {/* {icons && icons.map((icon, index) => (
            <LazyLoadImage
              key={index}
              src={icon}
              alt={`Icon ${index + 1}`}
              effect="blur"
              className="object-contain shrink-0 w-4 rounded-none aspect-square"
              wrapperClassName="shrink-0"
            />
          ))} */}
        </div>
      </div>
    </div>
  );
}

// Add PropTypes for better development experience and validation
ExamCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  // icons: PropTypes.arrayOf(PropTypes.string), // Uncomment if you add back the icons
};

export default ExamCard;