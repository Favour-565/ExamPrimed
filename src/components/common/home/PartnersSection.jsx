import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { twMerge } from "tailwind-merge";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

const PartnersSection = () => {
  const partners = [
    { imgUrl: "/images/9mobile.svg", bgColor: "bg-[#015E43]" },
    { imgUrl: "/images/Airtel.svg", bgColor: "bg-white" },
    { imgUrl: "/images/Mtn.svg", bgColor: "bg-[#FCCB04]" },
    { imgUrl: "/images/Martad logo.png", bgColor: "bg-white" },
    { imgUrl: "/images/screenClass.png", bgColor: "bg-[#0968AC]" }
  ];

  return (
    <section className="section-bg-gradient">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center gap-6 py-20 font-Poppins shadow-md shadow-inherit drop-shadow-lg">
        <h1 className="text-center text-[28px] font-normal">
          Our <span className="font-semibold text-[#015758]">Partners</span>
        </h1>

        <div className="slider-container w-full">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: -75,
              depth: 250,
              modifier: 3.5,
              slideShadows: false,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            className="w-full py-16" // Increased padding to accommodate larger cards
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <PartnerBlock
                  imgUrl={partner.imgUrl}
                  className={partner.bgColor}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* <div className="slider-nav mt-8 flex justify-center gap-4">
            <div className="swiper-button-prev flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-100 shadow-md transition-colors hover:bg-gray-200">
              <ArrowLeft size={20} />
            </div>
            <div className="swiper-button-next flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-100 shadow-md transition-colors hover:bg-gray-200">
              <ArrowRight size={20} />
            </div>
          </div> */}
        </div>

        <h3 className="text-center text-base sm:text-[18px]">
          <span className="font-medium text-[#015758]">Trusted by 100+ </span>
          Top Companies
        </h3>
      </div>
    </section>
  );
};

const PartnerBlock = ({ className, imgUrl }) => {
  return (
    <div
      className={twMerge(
        "mx-auto flex h-80 w-64 items-center justify-center rounded-2xl px-5 py-10 duration-150 hover:-translate-y-3 hover:scale-105 hover:transition-all",
        className,
      )}
    >
      <div className="relative h-52 w-52">
        <img 
          src={imgUrl} 
          alt="" 
          className="absolute inset-0 h-full w-full object-contain"
        />
      </div>
    </div>
  );
};

export default PartnersSection;