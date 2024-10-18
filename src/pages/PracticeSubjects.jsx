import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import SubjectBackButton from "../components/subject/SubjectBackButton";
import SubjectCard from "../components/Subject/SubjectCard";

function PracticeSubjects() {
  const [subjects] = useState([
    { 
      id: 1,
      name: "ENGLISH", 
      image: "/images/practice1.png",
      path: "/daily-test"
    },
    { 
      id: 2,
      name: "GENERAL KNOWLEDGE", 
      image: "/images/practice2.png",
      path: "/daily-test"
    },
  ]);

  const navigate = useNavigate();

  const handleSubjectClick = (subject) => {
    
    navigate(subject.path, { 
      state: { 
        subjectName: subject.name,
        subjectId: subject.id 
      } 
    });
  };

  return (
    <main className="flex overflow-hidden relative flex-col min-h-[718px]">
      <section 
        className="flex relative flex-col pt-5 pr-20 pb-32 pl-10 w-full max-md:px-5 max-md:pb-24 max-md:max-w-full" 
        style={{ backgroundImage: `url('/images/SUBJECT SCREEN 7.png')` }}
      >
        <img 
          loading="lazy" 
          src="\images\logo.png" 
          alt="Logo" 
          className="object-contain max-w-full aspect-[2.43] w-[107px]" 
        />
        <div className="flex relative flex-col self-center pt-5 pr-5 pb-12 pl-16 mt-16 mb-0 w-full max-w-[1021px] min-h-[469px] max-md:pl-5 max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
          <img 
            loading="lazy" 
            src="\images\DIGITAL-SCREEN 1.png" 
            alt="" 
            className="object-cover absolute rounded-[20px] inset-0 size-full" 
          />
          <div className="flex relative flex-wrap gap-10 items-start self-end max-w-full w-[840px]">
            <div className="flex-auto self-end mt-8 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[79%] max-md:ml-0 max-md:w-full">
                  <h1 className="self-stretch my-auto ml-10 text-4xl font-semibold text-teal-700 tracking-[18px] max-md:mt-10 max-md:max-w-full">
                    SELECT SUBJECT
                  </h1>
                </div>
              </div>
            </div>
            <SubjectBackButton />
          </div>
          <div className="flex relative flex-wrap gap-3 self-start mt-20 text-xs font-bold text-zinc-50 max-md:mt-10">
            {subjects.map((subject) => (
              <SubjectCard
                key={subject.id}
                name={subject.name} 
                image={subject.image}
                onClick={() => handleSubjectClick(subject)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default PracticeSubjects;