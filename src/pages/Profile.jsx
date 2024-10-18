import React from "react";

import ProfileSection from "../components/userProfile/ProfileSection";
import ActionItem from "../components/userProfile/ActionItem";
import ActionButton from "../components/userProfile/ActionButton";
import NavHeader from "../components/userProfile/navHeader/NavHeader";


function Profile() {
  const actionItems = [
    { icon: "/Icons/User.png", text: "Enter Your Name" },
    { icon: "/Icons/flowbite_mobile-phone-solid.png", text: "Enter Your Mobile Number" },
    { icon: "/Icons/ic_baseline-bookmark.png", text: "Bookmarks" },
    { icon: "/Icons/maki_arrow.svg", text: "Invite Friends" },
    { icon: "/Icons/material-symbols_delete.png", text: "Delete Account", className: "text-red-500 text-xs" },
    { icon:"/Icons/streamline_star-badge-solid (1).png", text: "Badges" },
    { icon: "", text: "Coin History" },
    { icon: "", text: "Share App" }
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
