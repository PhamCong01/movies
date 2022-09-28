import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import logo from "../../../images/logo.svg";
function Header() {
  const navLinks = ["Home", "What's on", "Shortcodes", "News", "Contact"];
  const [isRadio, setIsRadio] = useState(1);
  const [isShow, setIsShow] = useState(false);
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
          ? `w-full h-[660px] bg-cover bg-[url("https://cyber-movie-bootstrap.vercel.app/img/hero-1.jpg")] relative bg-center`
          : isRadio === 2
          ? `w-full h-[660px] bg-cover bg-[url("https://cyber-movie-bootstrap.vercel.app/img/hero-2.jpg")] relative bg-center`
          : `w-full h-[660px] bg-cover bg-[url("https://cyber-movie-bootstrap.vercel.app/img/hero-3.jpg")] relative bg-center`
      }
    >
      <div className="inset-0 bg-gradient-to-b from-transparent to-black absolute"></div>
      <div className="xl:max-w-[1140px] lg:max-w-[960px] max-w-[690px] md:max-w-[730px] my-0 mx-auto mt-4 p-2 md:p-0">
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
          <div
            className="flex md:hidden text-[#fbbd61] text-2xl cursor-pointer z-20"
            onClick={() => setIsShow((prev) => !prev)}
          >
            <FaBars />
          </div>
          {isShow && (
            <div className="fixed w-full left-0 right-0 p-2 top-24 z-20">
              <ul className="bg-black/80 text-center">
                {navLinks.map((link) => (
                  <li
                    key={link}
                    className={`px-5 py-4 uppercase text-white text-sm font-bold lg:px-8 lg:py-6 lg:text-base cursor-pointer ${
                      link == "Home" ? "text-[#ec7532]" : "link"
                    }`}
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="md:flex hidden">
            <ul className="flex items-center border-b border-white/20 ml-8">
              {navLinks.map((link) => (
                <li
                  key={link}
                  className={`link px-5 py-4 uppercase text-white text-sm font-bold lg:px-8 lg:py-6 lg:text-base cursor-pointer ${
                    link == "Home" ? "active" : ""
                  }`}
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="absolute top-[40%]">
          <div className="animate-fade-in-down">
            <span className="text-[#fbbd61] font-small">
              ACTION, ADVENTURE, FANTASY
            </span>
          </div>
          <div className="text-4xl md:text-5xl lg:text-6xl text-[#fff] font-[500] animate-fade-in-down">
            {isRadio === 1
              ? "End of the World: Part I"
              : isRadio === 2
              ? "End of the World: Part II"
              : isRadio === 3
              ? "End of the World: Part III"
              : null}
          </div>
          <div className="text-[#fff] font-medium animate-fade-in-up mt-4">
            Claritas est etiam processus dynamicus, qui sequitur mutationem
            consuetudium lectorum. Mirum est notare quam <br /> littera gothica,
            quam nunc putamu.
          </div>
          <div className="flex items-center animate-fade-in-up mt-8">
            <div className="w-[50px] h-[50px] rounded-[50%] border-[2px] border-white relative mr-[10px]">
              <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#fff]">
                PG
              </span>
            </div>
            <div className="button bg-gradient-to-r from-[#fbbd61] to-[#ec7532] cursor-pointer p-3 rounded-full">
              <div className="text-white flex items-center min-w-[192px] justify-center">
                <span className="flex items-center text-xl mr-2 z-10">
                  <BsFillPlayFill />
                </span>
                <span className="text-sm tracking-[0.3rem] z-10">
                  PLAY TRAILER
                </span>
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
