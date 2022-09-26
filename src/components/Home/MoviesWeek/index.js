import React from "react";
import { MdNavigateNext, MdAccessTimeFilled } from "react-icons/md";
function MoviesWeek() {
  const dataMoviesWeek = [
    {
      id: 1,
      image: "https://cyber-movie-bootstrap.vercel.app/img/movie-5.jpg",
      title: "Captain America: The First Avenger",
      description:
        "European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.",
    },
    {
      id: 2,
      image: "https://cyber-movie-bootstrap.vercel.app/img/movie-6.jpg",
      title: "It's over",
      description:
        "European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.",
    },
    {
      id: 3,
      image: "https://cyber-movie-bootstrap.vercel.app/img/movie-7.jpg",
      title: "Captain America: The First Avenger",
      description:
        "European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.",
    },
    {
      id: 4,
      image: "https://cyber-movie-bootstrap.vercel.app/img/movie-8.jpg",
      title: "Captain America: The First Avenger",
      description:
        "European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.",
    },
  ];
  return (
    <div className="w-[100%] ">
      <div className="w-[80%] my-0 mx-auto mt-[200px]">
        <ul className="flex items-center ">
          <li
            className="text-[18px] font-[400] border-b-[1px] border-gray-300 cursor-pointer text-[#333]  pb-[20px] relative transition-all w-min-content
           before:h-1 before:absolute before:bottom-0 before:right-0 before:transition-all before:duration-500
          before:w-full before:left-0 before:bg-[#ec7532] px-[25px] mt-[20px] mb-[15px]"
          >
            MON
          </li>
          <li
            className="text-[18px] font-[400] border-b-[1px] border-gray-300 cursor-pointer text-[#333] pb-[20px] relative transition-all w-min-content
          before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-[#fbbd61] before:transition-all before:duration-500
          hover:before:w-full hover:before:left-0 hover:before:bg-[#ec7532] px-[25px] mt-[20px] mb-[15px]"
          >
            TUE
          </li>
          <li
            className="text-[18px] font-[400] border-b-[1px] border-gray-300 cursor-pointer text-[#333] pb-[20px] relative transition-all w-min-content
          before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-[#fbbd61] before:transition-all before:duration-500
          hover:before:w-full hover:before:left-0 hover:before:bg-[#ec7532] px-[25px] mt-[20px] mb-[15px]"
          >
            TODAY
          </li>
          <li
            className="text-[18px] font-[400] border-b-[1px] border-gray-300 cursor-pointer text-[#333] pb-[20px] relative transition-all w-min-content
          before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-[#fbbd61] before:transition-all before:duration-500
          hover:before:w-full hover:before:left-0 hover:before:bg-[#ec7532] px-[25px] mt-[20px] mb-[15px]"
          >
            THU
          </li>
          <li
            className="text-[18px] font-[400] border-b-[1px] border-gray-300 cursor-pointer text-[#333] pb-[20px] relative transition-all w-min-content
          before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-[#fbbd61] before:transition-all before:duration-500
          hover:before:w-full hover:before:left-0 hover:before:bg-[#ec7532] px-[25px] mt-[20px] mb-[15px]"
          >
            FRI
          </li>
          <li
            className="text-[18px] font-[400] border-b-[1px] border-gray-300 cursor-pointer text-[#333] pb-[20px] relative transition-all w-min-content
          before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-[#fbbd61] before:transition-all before:duration-500
          hover:before:w-full hover:before:left-0 hover:before:bg-[#ec7532] px-[25px] mt-[20px] mb-[15px]"
          >
            SAT
          </li>
          <li
            className="text-[18px] font-[400] border-b-[1px] border-gray-300 cursor-pointer text-[#333] pb-[20px] relative transition-all w-min-content
          before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-[#fbbd61] before:transition-all before:duration-500
          hover:before:w-full hover:before:left-0 hover:before:bg-[#ec7532] px-[25px] mt-[20px] mb-[15px]"
          >
            SUN
          </li>
        </ul>
        <div className="mt-[40px]">
          {dataMoviesWeek.map((data, index) => {
            return (
              <div className="flex mb-[40px] pb-[30px] border-b-[1px] border-gray-400" key={index}>
                <img
                  src={data.image}
                  alt="movies"
                  className="rounded-2xl"
                />
                <div className="ml-[40px]">
                  <h4 className="text-[#ec7532]">ACTION, ADVENTURE, FANTASY</h4>
                  <h2 className="text-[30px] font-[300] my-[6px]">
                    {data.title}
                  </h2>
                  <p className="text-[15px] text-[#666]">
                    European mercenaries searching for black powder become
                    embroiled in the defense of It's over of China against a
                    horde of monstrous creatures.
                  </p>
                  <span className="flex items-center my-[20px] text-[#ec7532]">
                    <span>FULL SYNOPSIS</span>
                    <span>
                      <MdNavigateNext />
                    </span>
                  </span>
                  <div className="w-[100%] flex items-center justify-between">
                    <div className="flex items-center">
                      <span>
                        <MdAccessTimeFilled />
                      </span>
                      <span className="mx-[5px]">VIEWING TIMES</span>
                      <div className="flex items-center">
                        <button className="py-[10px] px-[15px] rounded-md text-[#fff] mx-[5px] bg-[#e3e2e2]">
                          10:30
                        </button>
                        <button className="py-[10px] px-[15px] rounded-md text-[#fff] mx-[5px] bg-[#d2d1d1]">
                          12:30
                        </button>
                        <button className="py-[10px] px-[15px] rounded-md text-[#fff] mx-[5px] bg-[#9b9999]">
                          14:30
                        </button>
                        <button className="py-[10px] px-[15px] rounded-md text-[#fff] mx-[5px] bg-[#5d5d5d]">
                          16:30
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-[13px]">105 MINS </span>
                      <span className="p-[10px] ml-[5px] rounded-[50%] bg-[#454545] text-[#fff] font-bold">
                        15
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MoviesWeek;
