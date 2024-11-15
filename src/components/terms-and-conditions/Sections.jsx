import React, { useState } from 'react';

function Section({ content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Split content into paragraphs
  const paragraphs = content.body.split(/(?<=\.)\s+/); // Split by sentence-ending periods
  const subHeading = content.subHeading;

  return (
    <section className="flex-grow basis-[calc(50%-1rem)] min-w-[280px]">
      <div className="prose prose-sm text-black">
        <h2 className="font-bold text-lg mb-4">{subHeading}</h2>
        <div className="indent-0 pl-6">
          {paragraphs.slice(0, isExpanded ? paragraphs.length : 3).map((para, index) => (
            <p key={index} className="mb-4">
              {para}
            </p>
          ))}
        </div>
        {paragraphs.length > 3 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-500 hover:underline mt-4"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        )}
      </div>
    </section>
  );
}

export default Section;
