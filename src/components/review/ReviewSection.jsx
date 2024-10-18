import React, { useEffect, useState } from 'react';

const ReviewSection = () => {
  const [content, setContent] = useState({
    title: "Our wide range of services",
    description: "We are ready to give you a new experience",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  });

  useEffect(() => {
    // Optional: Fetch content from an API if needed
    // Example: 
    // fetch('/api/review-content')
    //   .then(response => response.json())
    //   .then(data => setContent(data));
  }, []);

  return (
    <section className="flex flex-col justify-center items-center px-16 py-9  w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="w-full max-w-[1102px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/16b62a8f82a4805a586ef726a1b5678868f6bc8bd2ea163b57d43257a5d51645?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345" alt="Service illustration" className="object-contain grow w-full rounded-xl aspect-[2.05] shadow-[-1px_1px_4px_rgba(0,0,0,0.25)] max-md:mt-7 max-md:max-w-full" />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start self-stretch my-auto text-black max-md:mt-10 max-md:max-w-full">
              <h2 className="text-3xl font-semibold text-teal-700">{content.title}</h2>
              <p className="mt-1 text-2xl font-medium max-md:max-w-full">{content.description}</p>
              <p className="self-stretch mt-9 text-sm max-md:max-w-full">{content.details}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
