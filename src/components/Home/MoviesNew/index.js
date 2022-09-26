import React from "react";
import { AiFillStar } from "react-icons/ai";
function MoviesNew() {
  return (
    <div className="w-[80%] my-[70px] mx-auto">
      <div className="w-[100%] border-b-[1px] border-gray-300 ">
        <h2
          className="pb-[20px] w-[10%] text-[#ec7532] font-medium text-[20px] relative transition-all
           before:h-1 before:absolute before:bottom-0 before:right-0 before:transition-all before:duration-500
          before:w-full before:left-0 before:bg-[#ec7532]"
        >
          NEW IN
        </h2>
      </div>
      <div className="flex items-center justify-between mt-[50px]">
        <div className="relative">
          <div className="relative">
            <img
              className="rounded-lg"
              src="https://cyber-movie-bootstrap.vercel.app/img/movie-1.jpg"
              alt="movie"
            />
            <span className="mt-[10px] absolute left-[50%] translate-x-[-50%] font-medium">
              The last post
            </span>
          </div>
          <span className="flex items-center absolute left-[50%] translate-x-[-50%] bottom-[-60px]">
            <span className="text-[#ec7532]">
              <AiFillStar />
            </span>
            <span className="text-[#ec7532]">
              <AiFillStar />
            </span>
            <span className="text-[#ec7532]">
              <AiFillStar />
            </span>
            <span className="text-[#ec7532]">
              <AiFillStar />
            </span>
            <span className="text-[#ec7532]">
              <AiFillStar />
            </span>
          </span>
        </div>

        <div className="relative">
          <div className="relative">
            <img
              className="rounded-lg"
              src="https://cyber-movie-bootstrap.vercel.app/img/movie-2.jpg"
              alt="movie"
            />
            <span className="mt-[10px] absolute left-[50%] translate-x-[-50%] font-medium">
              Dark and lonely
            </span>
          </div>
          <span className="flex items-center absolute left-[50%] translate-x-[-50%] bottom-[-60px]">
            <span className="text-[#ec7532]">
              <AiFillStar />
            </span>
            <span className="text-[#ec7532]">
              <AiFillStar />
            </span>
            <span className="text-[#ec7532]">
              <AiFillStar />
            </span>
            <span className="text-[#ec7532]">
              <AiFillStar />
            </span>
            <span className="text-[#ec7532]">
              <AiFillStar />
            </span>
          </span>
        </div>
        <div className="relative">
          <div className="relative">
            <img
              className="rounded-lg"
              src="https://cyber-movie-bootstrap.vercel.app/img/movie-3.jpg"
              alt="movie"
            />
            <span className="mt-[10px] absolute left-[50%] translate-x-[-50%] font-medium">
              Venture
            </span>
          </div>
          <span className="flex items-center absolute left-[50%] translate-x-[-50%] bottom-[-60px]">
            <span className="text-[#ec7532]">
              <AiFillStar />
            </span>
            <span className="text-[#ec7532]">
              <AiFillStar />
            </span>
            <span className="text-[#ec7532]">
              <AiFillStar />
            </span>
            <span className="text-[#ec7532]">
              <AiFillStar />
            </span>
            <span className="text-[#ec7532]">
              <AiFillStar />
            </span>
          </span>
        </div>
        <div className="relative">
          <div className="relative">
            <img
              className="rounded-lg"
              src="https://cyber-movie-bootstrap.vercel.app/img/movie-4.jpg"
              alt="movie"
            />
            <span className="mt-[10px] absolute left-[50%] translate-x-[-50%] font-medium">
              Hush
            </span>
          </div>
          <span className="flex items-center absolute left-[50%] translate-x-[-50%] bottom-[-60px]">
            <span className="text-[#ec7532]">
              <AiFillStar />
            </span>
            <span className="text-[#ec7532]">
              <AiFillStar />
            </span>
            <span className="text-[#ec7532]">
              <AiFillStar />
            </span>
            <span className="text-[#ec7532]">
              <AiFillStar />
            </span>
            <span className="text-[#ec7532]">
              <AiFillStar />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default MoviesNew;
