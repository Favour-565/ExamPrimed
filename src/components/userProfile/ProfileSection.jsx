import React from "react";

function ProfileSection() {
  return (
    <section className="flex flex-col w-[25%] max-md:ml-0 max-md:w-full">
      <div className=" items-start w-[600px] text-lg text-cyan-950 max-md:mt-10">
        <img loading="lazy" src="/Icons/Mark2.png" alt="Profile" className="object-contain max-w-full rounded-3xl aspect-square w-[171px]" />
        <h2 className="mt-5 text-2xl font-semibold">Mark Obidiegwu</h2>
        <div className="flex gap-2.5 self-stretch mt-5 whitespace-nowrap">
          <img loading="lazy" src="/Icons/uiw_mail.png" alt="" className="object-contain shrink-0 w-8 aspect-square" />
          <p className="grow shrink my-auto ">markobidiegwu@gmail.com</p>
        </div>
        <div className="flex gap-2.5 mt-2.5">
          <img loading="lazy" src="/Icons/ion_call.png" alt="" className="object-contain shrink-0 w-8 aspect-square" />
          <p className="my-auto basis-auto">+234 0812 345 6789</p>
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;