import React from "react";
import { Link } from "react-router-dom"; 

import SubjectBackButton from "../components/subject/SubjectBackButton";
import SubjectCard from "../components/Subject/SubjectCard";

const subjects = [
  { name: "ENGLISH", image: "/images/English.png" },
  { name: "GENERAL KNOWLEDGE", image: "/images/Knowledge.png" },
  { name: "ACCOUNT", image: "/images/account.png" },
  { name: "COMMERCE", image: "/images/commerce.png" },
  { name: "SCIENCE", image: "/images/Science.png" }
];

function SubjectSelection() {
  const handleSubjectClick = (subject) => {
    // Handle click if needed, otherwise can be omitted
    console.log('Subject clicked:', subject.name);
  };

  return (
    <main className="flex overflow-hidden relative flex-col">
      <section 
        className="flex relative flex-col pt-5 pr-20 pl-10 w-full md:px-5 max-md:px-5 md:h-screen max-md:max-w-full" 
        style={{ backgroundImage: `url('/images/SUBJECT SCREEN 7.png')` }}
      >
        <img 
          loading="lazy" 
          src="/images/logo.png" 
          alt="Logo" 
          className="object-contain max-w-full aspect-[2.43] w-[107px]" 
        />
        <div className="flex relative flex-col self-center pt-5 pr-5 pb-12 pl-16 mt-16 mb-0 w-full max-w-[1021px] min-h-[469px] max-md:pl-5 max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
          <img 
            loading="lazy" 
            src="/images/DIGITAL-SCREEN 1.png" 
            alt="" 
            className="object-cover absolute rounded-[20px] inset-0 size-full" 
          />
          <div className="flex relative flex-wrap gap-10 items-start self-end max-w-full w-[840px]">
            <div className="flex-auto self-end mt-8 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[79%] max-md:ml-0 max-md:w-full">
                  <h1 className="self-stretch ml-10 text-4xl font-semibold text-teal-700 tracking-[5px] max-md:mt-10 max-md:max-w-full">
                    SELECT SUBJECT
                  </h1>
                </div>
              </div>
            </div>
            <SubjectBackButton />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative mt-20 max-md:mt-10">
            {subjects.map((subject, index) => (
              <Link 
                to="/select-year" 
                key={index} 
                className="flex flex-col"
              >
                <SubjectCard 
                  subject={subject} 
                  onClick={handleSubjectClick}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default SubjectSelection;
