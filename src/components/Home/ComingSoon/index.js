import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import { MdNavigateNext } from "react-icons/md";
import { BsFillPlayFill } from "react-icons/bs";
function ComingSoon() {
  const [isShowVideo, setIsShowVideo] = useState(false);

  return (
    <>
      {isShowVideo && (
        <div
          onClick={() => setIsShowVideo(false)}
          className="fixed inset-0 bg-black/80 z-30 flex justify-center items-center"
        >
          <div className="relative lg:w-[960px] lg:h-[540px] md:w-[640px] md:h-[360px] h-[260px] w-full p-8">
            <iframe
              className="absolute inset-0 w-[calc(100%-2rem)] h-full left-1/2 transform -translate-x-1/2"
              src="https://www.youtube.com/embed/tgB1wUcmbbw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}
      <div
        className={`w-full bg-[black] bg-cover bg-[url("https://cyber-movie-bootstrap.vercel.app/img/slide-3.png")] relative`}
      >
        <div className="xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[730px] my-[20px] mx-auto p-2 md:p-0">
          <div className="py-[60px]">
            <div className="link active text-lg w-full pb-8 text-white w-fit">
              COMING SOON
            </div>
            <div className="border-b border-black/20"></div>
            <div className="mt-20 xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[730px] p-2 md:p-0 w-full flex flex-col sm:flex-row items-center justify-between">
              <div className="min-w-[417px] mr-4">
                <h3 className="text-[#ec7532]">COMEDY, CRIME</h3>
                <h3 className="text-[#fff] font-[300] text-[40px]">
                  The Hangover Part III
                </h3>
                <div className="flex items-center">
                  <div className="my-[20px]">
                    <span className="flex items-center">
                      <span className="text-[#fbbd61] text-[20px]">
                        <AiFillStar />
                      </span>
                      <span className="text-[#fbbd61] text-[20px]">
                        <AiFillStar />
                      </span>
                      <span className="text-[#fbbd61] text-[20px]">
                        <AiFillStar />
                      </span>
                      <span className="text-[#fbbd61] text-[20px]">
                        <AiFillStar />
                      </span>
                      <span className="text-[#fbbd61] text-[20px]">
                        <AiFillStar />
                      </span>
                    </span>
                  </div>
                  <div className="text-[#fff] mx-[15px]">
                    <BiCalendar />
                  </div>
                  <span className="text-[#fff] font-medium ">
                    30 Septemper 2020
                  </span>
                </div>

                <h3 className="text-[#fff]">
                  When one of their own is kidnapped by an angry gangster, the
                  Wolf Pack must track down Mr. Chow, who has escaped from
                  prison and is on the run.
                </h3>
                <div className="flex items-center mt-[30px] text-[#ec7532]">
                  <span className="text-sm tracking-[0.2rem]">MORE INFOR </span>
                  <span className="">
                    <MdNavigateNext />
                  </span>
                </div>
              </div>
              <div
                className="relative cursor-pointer overflow-hidden md:max-w-[330px] lg:max-w-[540px]"
                onClick={() => setIsShowVideo(true)}
              >
                <img
                  src="https://cyber-movie-bootstrap.vercel.app/img/slide-3-video.png"
                  alt="movies"
                  className="w-full h-full object-cover"
                />
                <div className="absolute text-white inset-0 flex justify-center items-center text-5xl">
                  <div className="p-4 border border-[#ec7532] rounded-full">
                    <BsFillPlayFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full xl:h-[357px] p-20 bg-[#101010] flex justify-center items-center">
        <div className="xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[730px] w-full grid grid-cols-3 gap-8 lg:grid-cols-6">
          {[9, 8, 11, 13, 12, 14].map((url) => (
            <img
              key={url}
              src={`https://cyber-movie-bootstrap.vercel.app/img/movie-${url}.jpg`}
              alt="movies"
              className="w-full opacity-50 hover:opacity-100 rounded-lg transition-opacity"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ComingSoon;
