import React from 'react';
import { BiSolidBadgeCheck } from "react-icons/bi";
import BannerAnimation from '../../../components/BannerAnimation/BannerAnimation';


const BannerSection = () => {
    return (
      <section className=" bg-gradient-to-br from-[#ffffff] to-[#f0f4ff] dark:from-[#1d232a] dark:to-[##1a1f26]">
        <div className="flex flex-col-reverse md:flex-row py-10 gap-10 items-center justify-between max-w-7xl mx-auto px-5 md:px-10 h-auto md:h-[600px]">
          <div className="space-y-5">
            <h1 className="text-3xl md:text-5xl font-bold capitalize">
              Limitless learning at <br /> your fingertips
            </h1>
            <p className="text-lg font-semibold text-gray-400">
              Online study marketplace with 5K+ courses & 10M <br /> students.
              Taught by experts to help you acquire new skills.
            </p>
            <div className="flex gap-2 *:flex *:items-center *:text-md *:gap-2 flex-wrap">
              <p>
                <BiSolidBadgeCheck />
                Learn with experts
              </p>
              <p>
                <BiSolidBadgeCheck />
                Get certificate
              </p>
              <p>
                <BiSolidBadgeCheck />
                Get membership
              </p>
            </div>
            <button className="btn btn-outline btn-primary">Get Started</button>
          </div>
          <div className="relative">
            <div className="max-w-sm w-full relative z-1  overflow-hidden">
              <img
                src="https://themes.stackbros.in/eduport_r/assets/07-CK3ZrEuH.png"
                alt="banner image"
                className='object-cover object-top w-full'
              />
            </div>
            <div className="absolute top-20 right-3 md:right-10 w-full">
              <BannerAnimation />
            </div>
          </div>
        </div>
      </section>
    );
};

export default BannerSection;