import React, { useState } from "react";
import ComingSoon from "./ComingSoon";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import MoviesNew from "./MoviesNew";
import MoviesWeek from "./MoviesWeek";
import { GrFormNext } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
function Home() {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="flex flex-col items-center relative overflow-hidden">
      <div
        className={`absolute inset-0 bg-slate-700 z-[999999] w-full min-h-full opacity-[0.5] ${
          isShow ? "block" : "hidden"
        } overflow-hidden`}
        onClick={() => setIsShow(false)}
      ></div>
      <div
        className={`w-[320px] translate-x-[100%] min-h-full bg-white  absolute right-0 z-[999999999] ${
          isShow ? "translate-x-[0%] " : "translate-x-[100%]"
        } `}
      >
        <div className="flex m-[40px] items-center">
          <span className="text-[24px] text-[#999]">
            <FaUserCircle />
          </span>
          <span className="ml-[30px] text-[24px] text-[#666] ">Đăng nhập</span>
          <span className="flex ml-[60px] text-[25px]">
            <GrFormNext />
          </span>
        </div>
        <div className="py-[20px] px-[40px] hover:bg-slate-200 hover:text-[#ec7532] cursor-pointer mb-[10px]">
          <span className="text-[20px] text-[#666] ">Lịch chiếu</span>
        </div>
        <div className="py-[20px] px-[40px] hover:bg-slate-200 hover:text-[#ec7532] cursor-pointer mb-[10px]">
          <span className="text-[20px] text-[#666] ">Cụm rạp</span>
        </div>
        <div className="py-[20px] px-[40px] hover:bg-slate-200 hover:text-[#ec7532] cursor-pointer mb-[10px]">
          <span className="text-[20px] text-[#666] ">Tin tức</span>
        </div>
        <div className="py-[20px] px-[40px] hover:bg-slate-200 hover:text-[#ec7532] cursor-pointer mb-[10px]">
          <span className="text-[20px] text-[#666] ">Ứng dụng</span>
        </div>
        <div className="py-[20px] px-[40px] hover:bg-slate-200 hover:text-[#ec7532] cursor-pointer mb-[10px]">
          <span className="text-[20px] text-[#666] ">Đăng ký</span>
        </div>
      </div>

      {/* <NavFixed /> */}
      <Header setIsShow={setIsShow} />
      <MoviesNew />
      <MoviesWeek />
      <ComingSoon />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
