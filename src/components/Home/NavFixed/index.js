import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../../images/logo.svg";
function NavFixed() {
  const navLinks = ["Home", "What's on", "Shortcodes", "News", "Contact"];
  const [isShow, setIsShow] = useState(false);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", function (event) {
      const top = window.pageYOffset || document.documentElement.scrollTop;
      setPosition(top);
    });
  }, []);

  return (
    <div
      className={`bg-[#101010] fixed top-0 w-full z-50 py-2 transform transition-all duration-500 ${
        position > 200 ? "translate-y-0" : " -translate-y-full"
      }`}
    >
      <div className="xl:max-w-[1140px] lg:max-w-[960px] max-w-[690px] md:max-w-[730px] my-0 mx-auto p-2 md:p-0 w-full">
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
              <ul className="bg-black/90 text-center">
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
      </div>
    </div>
  );
}

export default NavFixed;
