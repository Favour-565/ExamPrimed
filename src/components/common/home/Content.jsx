import React, { lazy, Suspense } from "react";
import MobileCtaContainer from "../../MobileCtaContainer";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Content = () => {
  return (
    <>
      {/* Exam description and illustration content section */}
      <section className="section-bg-gradient">
        <div className="mx-auto w-full px-4 pb-20 lg:max-w-screen-xl xl:px-0">
          <MobileCtaContainer />
          <div className="flex w-full flex-col-reverse items-center gap-10 space-y-44 sm:gap-14 md:space-y-20 lg:flex-row lg:items-end lg:justify-between lg:gap-0">
            <h1 className="w-full text-wrap text-center font-Poppins text-base font-semibold sm:text-xl md:text-[24px] md:leading-normal lg:w-2/5 lg:text-left xl:text-[28px]">
              <span className="font-normal">Practice with over </span>
              <span className="text-lg text-[#015758] sm:text-2xl md:text-3xl xl:text-[40px]">
                10,000
              </span>{" "}
              Examination Past Questions
            </h1>
            <div className="w-full lg:w-1/2">
              <LazyLoadImage
                src="/images/home-img-asset1.png"
                alt="Examination illustration"
                effect="blur"
                width="100%"
                height="auto"
                threshold={300}
                className="object-contain"
                loading="eager" // Load this image immediately as it's above the fold
              />
            </div>
          </div>
          <div className="mt-5 flex w-full justify-center space-y-9 font-Poppins md:mt-8 lg:mt-10 lg:items-start lg:justify-between lg:space-y-0">
            <p className="hidden w-[38%] text-pretty lg:block">
            Tailored for students, our platform offers a seamless way to practice and track progress, ensuring you’re well-prepared for any exam. Start practicing today and achieve the scores you’ve always aimed for!"

            </p>
            <div className="w-full lg:w-1/2">
              <LazyLoadImage
                src="/images/home-img-asset2.png"
                alt="Educational content illustration"
                effect="blur"
                width="100%"
                height="auto"
                threshold={300}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* subject description and illustration content */}
      <section className="section-bg-gradient">
        <div className="mx-auto w-full px-4 py-16 lg:max-w-screen-xl xl:px-0">
          <div className="flex w-full flex-col items-center gap-10 sm:gap-14 lg:flex-row lg:justify-between lg:gap-0">
            <aside className="w-full space-y-4 text-center font-Poppins lg:w-[45%] lg:text-left">
              <h1 className="text-base font-medium sm:text-xl md:text-[24px] md:leading-normal lg:text-left xl:text-[28px]">
                <span className="text-lg font-semibold text-[#015758] sm:text-2xl md:text-3xl xl:text-[40px]">
                  30
                </span>{" "}
                Subjects Covered
              </h1>
              <p className="text-balance text-sm md:text-base lg:w-[85%] lg:text-pretty">
              Whether you're tackling core sciences, languages, or technical fields, our platform equips you with the knowledge and practice you need to succeed. Study smart, stay primed, and ace your exams with confidence!"

              </p>
            </aside>
            <div className="w-full lg:w-1/2">
              <LazyLoadImage
                src="/images/home-img-asset3.png"
                alt="Subjects covered illustration"
                effect="blur"
                width="100%"
                height="auto"
                threshold={300}
                className="object-contain"
              />
            </div>
          </div>

          <div className="mt-10 flex w-full flex-col items-center gap-10 sm:gap-14 lg:flex-row-reverse lg:justify-between lg:gap-0">
            <aside className="w-full space-y-4 text-center font-Poppins lg:w-[45%] lg:text-left">
              <h1 className="w-full text-wrap text-center font-Poppins text-base font-medium sm:text-xl md:text-[24px] md:leading-normal lg:text-left xl:text-[28px]">
                <span>Over </span>
                <span className="text-lg font-semibold text-[#015758] sm:text-2xl md:text-3xl xl:text-[40px]">
                  40 years
                </span>{" "}
                of past examinations Questions
              </h1>
              <p className="text-balance text-sm md:text-base lg:w-[85%] lg:text-pretty">
              Our platform is designed to support thorough exam preparation with authentic, time-tested questions across various subjects. Unlock deeper insights into exam patterns and build confidence for success. 

              </p>
            </aside>
            <div className="w-full lg:w-1/2">
              <LazyLoadImage
                src="/images/home-img-asset4.png"
                alt="Past examinations illustration"
                effect="blur"
                width="100%"
                height="auto"
                threshold={300}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;