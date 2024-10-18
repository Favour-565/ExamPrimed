import React from 'react';

const ReviewCard = ({ imageSrc, name, review }) => (
  <div className="flex flex-wrap  gap-5 items-center">
    <img loading="lazy" src={imageSrc} alt={`${name}'s profile`} className="object-contain shrink-0 self-stretch my-auto rounded-3xl aspect-square w-[200px]" />
    <div className="flex flex-col grow shrink self-stretch my-auto w-64 min-w-[240px]">
      <h3 className="text-3xl font-semibold text-black">{name}</h3>
      <p className="mt-5 text-base text-black">{review}</p>
    </div>
  </div>
);

export default ReviewCard;