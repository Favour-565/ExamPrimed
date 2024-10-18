import React from "react";

function ProfileSection() {
  return (
    <section className="flex flex-col w-[25%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-start w-full text-lg text-cyan-950 max-md:mt-10">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/46e09f7ced1690220eb8d61e9de02cffc19ab9bf3ceb2d3e893b829b1ac56e5e?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345" alt="Profile" className="object-contain max-w-full rounded-3xl aspect-square w-[171px]" />
        <h2 className="mt-5 text-2xl font-semibold">Mark Obidiegwu</h2>
        <div className="flex gap-2.5 self-stretch mt-5 whitespace-nowrap">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a6b5816a888ed46cc28e6444bd46fc2ee3e6dbee480ae862f9b5fbed907e8ee?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345" alt="" className="object-contain shrink-0 w-8 aspect-square" />
          <p className="grow shrink my-auto w-[228px]">markobidiegwu@gmail.com</p>
        </div>
        <div className="flex gap-2.5 mt-2.5">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b03729b15ed77ad84fa58d681ffebfe9e864e141be8ee341ad4be7bf4e178ef6?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345" alt="" className="object-contain shrink-0 w-8 aspect-square" />
          <p className="my-auto basis-auto">+234 0812 345 6789</p>
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;