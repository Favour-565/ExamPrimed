import React from 'react';

function AboutUs() {
  return (
    <main className="mt-30 w-full max-w-[1288px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="\images\About.png"
            alt="Descriptive image of content"
            className="object-contain grow w-full aspect-[0.89] max-md:mt-10 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <p className="mt-20 text-lg font-medium text-black text-left max-md:text-center max-md:mt-10 max-md:max-w-full">
          ExamPrimed is a product of Martad Education & Skills Development Ltd., designed to make learning fun and revision easy.
            <br /><br />
            Our online platform combines entertainment with education, offering a vast array of engaging exams across various subjects. 
            <br /><br />
            These interactive exams foster critical thinking and problem-solving skills, tailored to different age groups for a more enjoyable and accessible learning experience.

          </p>
        </div>
      </div>
    </main>
  );
}

export default AboutUs;
