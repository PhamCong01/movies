import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
function MoviesNew() {
  const dataMoviesNew = ["The last post", "Dark and lonely", "Venture", "Hush"];
  return (
    <div className="xl:max-w-[1140px] md:max-w-[690px] lg:max-w-[960px] max-w-[510px] my-[70px] mx-auto w-full p-2 md:p-0">
      <div className="w-[100%] border-b-[1px] border-gray-300">
        <h2 className="link active w-32 text-lg py-4 text-[#ec7532]">NEW IN</h2>
        <div className="-mt-[1px] border-b border-white/20"></div>
      </div>
      <div className="grid grid-cols-2 gap-8 mt-[50px] md:grid-cols-4">
        {dataMoviesNew.map((name, index) => (
          <div key={name} className="flex flex-col items-center">
            <div className="group relative image rounded-lg">
              <img
                className="rounded-lg sm:h-[330px] md:h-[194px] lg:h-full"
                src={`https://cyber-movie-bootstrap.vercel.app/img/movie-${
                  index + 1
                }.jpg`}
                alt="movie"
              />
              <div className="image-overlay"></div>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-1000 absolute text-white inset-0 flex flex-col justify-center items-center text-5xl">
                <div className="p-4 border-2 border--white rounded-full">
                  <BsFillPlayFill />
                </div>
                <div className="tracking-[0.2rem] text-sm mt-4 uppercase">
                  Readmore
                </div>
                <div className="text-base mt-4">Released: 7 Mar, 2017</div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center mt-4">
              <div className="text-[#4a4a4a] text-lg">{name}</div>
              <div className="flex text-[#fbbd61] mt-4 text-xl">
                {[...Array(5).keys()].map((value) => (
                  <div key={value}>
                    <AiFillStar />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesNew;
