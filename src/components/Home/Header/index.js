import React, { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import logo from "../../../images/logo.svg";
function Header() {
  const [isRadio, setIsRadio] = useState(1);
  //   let urlImage ="https://cyber-movie-bootstrap.vercel.app/img/hero-1.jpg"
  const handlerSelectRadio = (e) => {
    setIsRadio(+e.currentTarget.value);
  };
  //   useEffect(() => {
  //     if(isRadio = 1) {

  //     }
  //   }, [isRadio])
  return (
    <div
      className={
        isRadio === 1
          ? `w-full h-[80vh] bg-cover bg-[url("https://cyber-movie-bootstrap.vercel.app/img/hero-1.jpg")] relative`
          : isRadio === 2
          ? `w-full h-[80vh] bg-cover bg-[url("https://cyber-movie-bootstrap.vercel.app/img/hero-2.jpg")] relative`
          : `w-full h-[80vh] bg-cover bg-[url("https://cyber-movie-bootstrap.vercel.app/img/hero-3.jpg")] relative`
      }
    >
      <div className="w-[80%] my-0 mx-auto pt-[20px]">
        <div className="w-full flex justify-end items-center text-[#fff] font-bold text-[16px]">
          <span className="">
            <FiPhone />
          </span>
          <span className="mx-[20px]">
            096.105.1014 <span className="mx-[5px]"></span>|
          </span>
          <span className="">
            <BiSearchAlt2 />
          </span>
        </div>
        <div className="flex items-center justify-between">
          <img src={logo} alt="logo" className="cursor-pointer" />
          <div>
            <ul className="flex items-center ">
              <li
                className="text-[18px] font-[400] border-b-[1px] border-gray-300 cursor-pointer text-[#fff]  pb-[20px] relative transition-all w-min-content
           before:h-1 before:absolute before:bottom-0 before:right-0 before:transition-all before:duration-500
          before:w-full before:left-0 before:bg-[#ec7532] px-[25px] mt-[20px] mb-[15px]"
              >
                HOME
              </li>
              <li
                className="text-[18px] font-[400] border-b-[1px] border-gray-300 cursor-pointer text-[#fff] pb-[20px] relative transition-all w-min-content
          before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-[#fbbd61] before:transition-all before:duration-500
          hover:before:w-full hover:before:left-0 hover:before:bg-[#ec7532] px-[25px] mt-[20px] mb-[15px]"
              >
                WHAT'S ON
              </li>
              <li
                className="text-[18px] font-[400] border-b-[1px] border-gray-300 cursor-pointer text-[#fff] pb-[20px] relative transition-all w-min-content
          before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-[#fbbd61] before:transition-all before:duration-500
          hover:before:w-full hover:before:left-0 hover:before:bg-[#ec7532] px-[25px] mt-[20px] mb-[15px]"
              >
                SHORTCODES
              </li>
              <li
                className="text-[18px] font-[400] border-b-[1px] border-gray-300 cursor-pointer text-[#fff] pb-[20px] relative transition-all w-min-content
          before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-[#fbbd61] before:transition-all before:duration-500
          hover:before:w-full hover:before:left-0 hover:before:bg-[#ec7532] px-[25px] mt-[20px] mb-[15px]"
              >
                NEW
              </li>
              <li
                className="text-[18px] font-[400] border-b-[1px] border-gray-300 cursor-pointer text-[#fff] pb-[20px] relative transition-all w-min-content
          before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-[#fbbd61] before:transition-all before:duration-500
          hover:before:w-full hover:before:left-0 hover:before:bg-[#ec7532] px-[25px] mt-[20px] mb-[15px]"
              >
                CONTACT
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute top-[40%]">
          <div className="animate-fade-in-down">
            <span className="text-[#fbbd61] font-medium ">
              ACTION, ADVENTURE, FANTASY
            </span>
          </div>
          <div className="my-[5px] text-[60px] text-[#fff] font-[500] animate-fade-in-down">
            {isRadio ===  1 ? "End of the World: Part I": isRadio ===  2 ? "End of the World: Part II": isRadio ===  3 ? "End of the World: Part III" : null}
          </div>
          <div className="text-[#fff] font-medium animate-fade-in-up">
            Claritas est etiam processus dynamicus, qui sequitur mutationem
            consuetudium lectorum. Mirum est notare quam <br /> littera gothica,
            quam nunc putamu.
          </div>
          <div className="flex items-center animate-fade-in-up">
            <div className="w-[50px] h-[50px] mt-[20px] rounded-[50%] border-[2px] border-white relative mr-[10px]">
              <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#fff]">
                PG
              </span>
            </div>
            <div className="w-[250px] mt-[20px] h-[50px] bg-gradient-to-r from-[#fbbd61] to-[#ec7532] rounded-3xl relative cursor-pointer ">
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#fff] flex items-center">
                <span>
                  <BsFillPlayFill />
                </span>
                <span className="font-medium">PLAY TRAILER</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center absolute bottom-10">
          <input
            type="radio"
            className="w-4 h-4 mx-[5px]"
            name="image1"
            onChange={handlerSelectRadio}
            value="1"
            checked={isRadio === 1}
          />
          <input
            type="radio"
            className="w-4 h-4 mx-[5px]"
            name="image1"
            onChange={handlerSelectRadio}
            value="2"
            checked={isRadio === 2}
          />
          <input
            type="radio"
            className="w-4 h-4 mx-[5px]"
            name="image1"
            onChange={handlerSelectRadio}
            value="3"
            checked={isRadio === 3}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
