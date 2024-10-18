import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import SubjectCard from "../components/subject/SubjectCard";
import SubjectBackButton from "../components/subject/SubjectBackButton";

const subjects = [
  { name: "ENGLISH", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/59030c2bf2708c5fa048d49eeeeaaf40eb744c6ffd9f379e449ce78027d18cce?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345" },
  { name: "GENERAL KNOWLEDGE", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/512dbc97e2549aece4fafb33af5835a26c609a6d4a133a008bd3a5c8bbf7d17e?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345" },
  { name: "ACCOUNT", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/742cdbf66a7b93c8d59721880d68ca4e914beef2ae5e3c3bcb4f57e89d25f02e?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345" },
  { name: "COMMERCE", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8b56de51c1414f401c238a49c62d3eba4f60fa6b3d430f59ff8221d4b7520c9d?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345" },
  { name: "SCIENCE", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ce7c14703f700db591194524c142aa901f283c6d4947121a487e720bb44c0291?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345" }
];

function SubjectSelection() {
  return (
    <main className="flex overflow-hidden relative flex-col min-h-[718px]">
      <section className="flex relative flex-col pt-5 pr-20 pb-32 pl-10 w-full max-md:px-5 max-md:pb-24 max-md:max-w-full" style={{ backgroundImage: `url('/images/SUBJECT SCREEN 7.png')` }}>
        <img loading="lazy" src="\images\logo.png" alt="Logo" className="object-contain max-w-full aspect-[2.43] w-[107px]" />
        <div className="flex relative flex-col self-center pt-5 pr-5 pb-12 pl-16 mt-16 mb-0 w-full max-w-[1021px] min-h-[469px] max-md:pl-5 max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
          <img loading="lazy" src="\images\DIGITAL-SCREEN 1.png" alt="" className="object-cover absolute rounded-[20px] inset-0 size-full" />
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
            {subjects.map((subject, index) => (
              <Link to="/select-year" key={index} className="flex flex-col">
                <SubjectCard name={subject.name} image={subject.image} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default SubjectSelection;
