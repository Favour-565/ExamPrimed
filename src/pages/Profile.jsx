import React from "react";

import ProfileSection from "../components/userProfile/ProfileSection";
import ActionItem from "../components/userProfile/ActionItem";
import ActionButton from "../components/userProfile/ActionButton";
import NavHeader from "../components/userProfile/navHeader/NavHeader";


function Profile() {
  const actionItems = [
    { icon: "/Icons/User.png", text: "Enter Your Name" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d73f33e8-981e-4173-831f-3c0b6cdb32ad?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345", text: "Enter Your Mobile Number" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5900356-bfb4-41d7-94a1-88b12708c1d7?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345", text: "Bookmarks" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a875fb44-c1e6-46e5-a8bb-3edaa6ab1268?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345", text: "Invite Friends" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e765a32b-875c-4743-92c3-0602f9571bbe?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345", text: "Delete Account", className: "text-red-500 text-xs" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ec01aad9-8306-4616-a4cb-7defba736800?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345", text: "Badges" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/93d126b7-9716-48a8-b7f8-165dc5c9b723?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345", text: "Coin History" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e560c36-d0c4-4f35-b52f-cbc144d93d0e?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345", text: "Share App" }
  ];

  return (
    <main className="flex overflow-hidden relative flex-col pb-32 min-h-[1024px] max-md:pb-24" >
      <img loading="lazy" src="\images\profilebg.svg" alt="" className="object-cover absolute inset-0 size-full" />
      <NavHeader/>
      
      <section className="flex relative flex-col items-end self-center px-20 py-24 mt-28 bg-white rounded-xl max-w-[1204px] max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
        <div className="self-center w-full max-w-[1004px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <ProfileSection/>
            <div className="flex flex-col ml-5 w-[72%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full text-sm text-cyan-950 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-wrap gap-9">
                  {actionItems.slice(0, 2).map((item, index) => (
                    <ActionItem key={index} icon={item.icon} text={item.text} />
                  ))}
                </div>
                <ActionButton text="SUBMIT" icon="\Icons\maki_arrow.svg" className="m-auto" />
                <div className="flex flex-wrap gap-9 mt-8">
                  {actionItems.slice(2, 4).map((item, index) => (
                    <ActionItem key={index} icon={item.icon} text={item.text} />
                  ))}
                </div>
                <div className="flex flex-wrap gap-9 mt-8">
                  {actionItems.slice(4, 6).map((item, index) => (
                    <ActionItem key={index} icon={item.icon} text={item.text} className={item.className || ''} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Align Coin History and Share App to the left */}
        <div className="flex flex-wrap gap-9 mt-6 text-sm text-cyan-950 justify-start w-[69%]">
          {actionItems.slice(6).map((item, index) => (
            <ActionItem key={index} icon={item.icon} text={item.text} />
          ))}
        </div>
        
        <ActionButton text="Logout" icon="\Icons\mdi_logout.svg" className="bg-red-700 mt-8 -mb-5 max-md:mb-2.5" />
      </section>
    </main>
  );
}

export default Profile;
