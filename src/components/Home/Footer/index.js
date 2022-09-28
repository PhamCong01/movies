import React from "react";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full bg-[#101010] flex justify-center">
      <div className="xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[730px] max-w-[510px] w-full p-2 md:p-0">
        <div className="flex xl:h-[296px] items-center">
          <div className="flex w-full flex-col py-20 gap-4 md:flex-row">
            <div className="basis-1/4">
              <h3 className="text-[#ec7532] text-[20px]">GET IN TOUCH</h3>
              <ul className="mt-4 text-sm flex flex-col gap-1">
                <li className="text-[#fff] hover:text-[#fbbd61] cursor-pointer transition-all">
                  FAQs
                </li>
                <li className="text-[#fff] hover:text-[#fbbd61] cursor-pointer transition-all">
                  Give us feedback
                </li>
                <li className="text-[#fff] hover:text-[#fbbd61] cursor-pointer transition-all">
                  Contact us
                </li>
              </ul>
            </div>
            <div className="basis-1/4">
              <h3 className="text-[#ec7532] text-[20px]">ABOUT MOVIE STAR</h3>
              <ul className="mt-4 text-sm flex flex-col gap-1">
                <li className="text-[#fff] hover:text-[#fbbd61] cursor-pointer transition-all">
                  About us
                </li>
                <li className="text-[#fff] hover:text-[#fbbd61] cursor-pointer transition-all">
                  Find us
                </li>
                <li className="text-[#fff] hover:text-[#fbbd61] cursor-pointer transition-all">
                  Schedule
                </li>
                <li className="text-[#fff] hover:text-[#fbbd61] cursor-pointer transition-all">
                  News
                </li>
              </ul>
            </div>
            <div className="basis-1/4">
              <h3 className="text-[#ec7532] text-[20px]">LEGAL STUFF</h3>
              <ul className="mt-4 text-sm flex flex-col gap-1">
                <li className="text-[#fff] hover:text-[#fbbd61] cursor-pointer transition-all">
                  Terms & Conditions
                </li>
                <li className="text-[#fff] hover:text-[#fbbd61] cursor-pointer transition-all">
                  Privacy policy
                </li>
                <li className="text-[#fff] hover:text-[#fbbd61] cursor-pointer transition-all">
                  Cookie policy
                </li>
              </ul>
            </div>
            <div className="basis-1/4">
              <h3 className="text-[#ec7532] text-[20px]">CONNECT WITH US</h3>
              <ul className="mt-4 text-sm flex flex-col gap-1">
                <li className="text-[#fff] hover:text-[#fbbd61] cursor-pointer transition-all flex items-center">
                  <div className="mr-4">
                    <FaFacebookF />
                  </div>
                  Facebook
                </li>
                <li className="text-[#fff] hover:text-[#fbbd61] cursor-pointer transition-all flex items-center">
                  <div className="mr-4">
                    <FaTwitter />
                  </div>
                  Twitter
                </li>
                <li className="text-[#fff] hover:text-[#fbbd61] cursor-pointer transition-all flex items-center">
                  <div className="mr-4">
                    <FaGooglePlusG />
                  </div>
                  Google +
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-[#fff] mt-[30px] border-t-[1px] py-[10px] border-gray-500">
          2020 © Movie Cyber / Cybersoft
        </div>
      </div>
    </div>
  );
}

export default Footer;
