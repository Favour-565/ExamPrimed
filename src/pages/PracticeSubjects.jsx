import React from "react";
import { useNavigate } from "react-router-dom";
import SubjectBackButton from "../components/subject/SubjectBackButton";
import SubjectCard from "../components/Subject/SubjectCard";
import { useSubjects } from "../hooks/useSubject";

function PracticeSubjects() {
  const { subjects, loading, error } = useSubjects();
  const navigate = useNavigate();

  const handleSubjectClick = (subject) => {
    navigate('/daily-test', {
      state: {
        subjectName: subject.name,
        subjectId: subject.id
      }
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-700"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-50 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-cover bg-center relative">
      <img 
        src="/images/SUBJECT SCREEN 7.png" 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover" 
      />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <img 
          src="/images/logo.png" 
          alt="Logo" 
          className="w-[90px] sm:w-[107px] aspect-[2.43] object-contain" 
        />
        
        <div className="relative mt-8 sm:mt-12 lg:mt-16 mx-auto max-w-[1021px] rounded-[20px] md:my-52 p-4 sm:p-6 lg:p-8">
          <img 
            src="/images/DIGITAL-SCREEN 1.png" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover rounded-[20px]" 
          />

          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 sm:mb-12">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-teal-700 tracking-[10px] sm:tracking-[14px] lg:tracking-[18px]">
                SELECT SUBJECT
              </h1>
              <SubjectBackButton />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects.map((subject) => (
                <SubjectCard
                  key={subject.id}
                  subject={subject}
                  onClick={handleSubjectClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PracticeSubjects;