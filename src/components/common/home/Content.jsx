import React from "react";
import MobileCtaContainer from "../../MobileCtaContainer";

const Content = () => {
  return (
    <>
      {/* Exam description and illustration content section   */}

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
            <img src="/images/home-img-asset1.png" />
          </div>
          <div className="mt-5 flex w-full justify-center space-y-9 font-Poppins md:mt-8 lg:mt-10 lg:items-start lg:justify-between lg:space-y-0">
            <p className="hidden w-[38%] text-pretty lg:block">
              ed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <img src="/images/home-img-asset2.png" />
          </div>
        </div>
      </section>

      {/* subject description and illustration content */}

      {/* both content sections are seprated cause of the background gradient based on UI design  */}

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
                ed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </aside>
            <img src="/images/home-img-asset3.png" />
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
                ed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </aside>
            <img src="/images/home-img-asset4.png" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
