import React from "react";
import Trustedcompanies from "./TrustedCompanies";


function PartnersSection() {
  return (
    <section
      className=" relative flex overflow-hidden flex-col pt-36 w-full max-md:pt-24 max-md:max-w-full    bg-cover bg-center "
      style={{ backgroundImage: `url('/images/examSreen.png')` }}
    >
      <div className="self-center w-full max-w-[1224px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-8 max-md:max-w-full">
              <h2 className="self-end text-lg font-medium text-teal-800 max-md:mr-2.5">
                <span className="text-3xl leading-10">Our</span>{" "}
                <span className="text-3xl font-semibold text-teal-800">
                  Partners
                </span>
              </h2>
              <div className="mt-12 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow mt-9 max-md:mt-10">
                      {/* flex flex-col justify-center px-8 py-11 bg-emerald-800 rounded-3xl max-md:px-5 max-md:mr-1 */}
                      <div className="">
                        <img
                          loading="lazy"
                          src="\images\Ninemobile.svg"
                          alt="Partner logo"
                          className="object-contain   max-md:px-5 max-md:mr-1"
                        />
                      </div>
                      <div className="flex shrink-0 mt-1.5 rounded-3xl h-[234px]" />
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow mt-9 max-md:mt-10">
                      {/* flex flex-col justify-center px-11 py-20 bg-white rounded-3xl max-md:px-5 max-md:mr-1 */}
                      <div className="">
                        <img
                          loading="lazy"
                          src="\images\Airtel.svg"
                          alt="Partner logo"
                          className="object-contain  grow max-md:px-5 max-md:mr-1"
                        />
                      </div>
                      <div className="flex shrink-0 mt-1.5 rounded-3xl h-[234px]" />
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    {/* flex flex-col justify-center px-8 py-32 w-full bg-yellow-400 rounded-3xl max-md:px-5 max-md:py-24 max-md:mt-7 */}
                    <div className="">
                      <img
                        loading="lazy"
                        src="\images\Mtn.svg"
                        alt="Partner logo"
                        className="object-contain max-md:px-5 max-md:py-24 max-md:mt-7"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-32 w-full max-md:mt-10 max-md:max-w-full">
              <div className="max-md:mr-1 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    {/* flex flex-col grow justify-center px-8 py-16 w-full bg-white rounded-3xl max-md:px-5 max-md:mt-9 */}
                    <div className="">
                      <img
                        loading="lazy"
                        src="\images\NTA.svg"
                        alt="Partner logo"
                        className="object-contain px-3  max-md:px-5 max-md:mt-9"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    {/* flex flex-col grow justify-center px-2 py-11 w-full bg-white rounded-3xl max-md:mt-9 */}
                    <div className="">
                      <img
                        loading="lazy"
                        src="\images\SuperScreen.svg"
                        alt="Partner logo"
                        className="object-contain max-md:mt-9 px-2 py-0"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
            
            </div>
          </div>
          
        </div>
      </div>
      <Trustedcompanies/>
    </section>
  );
}

export default PartnersSection;
