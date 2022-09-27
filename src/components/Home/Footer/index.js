import React from "react";

function Footer() {
  return (
    <div className="w-full bg-[black]">
      <div className="w-[80%] my-0 mx-auto pb-[20px]">
        <div className="flex items-center justify-between py-[50px]">
          <div>
            <h3 className="mb-[20px] text-[#ec7532] text-[20px]">
              GET IN TOUCH
            </h3>
            <ul>
              <li className="my-[5px] text-[#fff] hover:text-[#ec7532]">
                FAQs
              </li>
              <li className="my-[5px] text-[#fff] hover:text-[#ec7532]">
                Give us feedback
              </li>
              <li className="my-[5px] text-[#fff] hover:text-[#ec7532]">
                Contact us
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-[20px] text-[#ec7532] text-[20px]">
              ABOUT MOVIE STAR
            </h3>
            <ul>
              <li className="my-[5px] text-[#fff] hover:text-[#ec7532]">
                About us
              </li>
              <li className="my-[5px] text-[#fff] hover:text-[#ec7532]">
                Find us
              </li>
              <li className="my-[5px] text-[#fff] hover:text-[#ec7532]">
                Schedule
              </li>
              <li className="my-[5px] text-[#fff] hover:text-[#ec7532]">
                News
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-[20px] text-[#ec7532] text-[20px]">
              LEGAL STUFF
            </h3>
            <ul>
              <li className="my-[5px] text-[#fff] hover:text-[#ec7532]">
                Terms & Conditions
              </li>
              <li className="my-[5px] text-[#fff] hover:text-[#ec7532]">
                Privacy policy
              </li>
              <li className="my-[5px] text-[#fff] hover:text-[#ec7532]">
                Cookie policy
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-[20px] text-[#ec7532] text-[20px]">
              CONNECT WITH US
            </h3>
            <ul>
              <li className="my-[5px] text-[#fff] hover:text-[#ec7532]">
                Facebook
              </li>
              <li className="my-[5px] text-[#fff] hover:text-[#ec7532]">
                Twitter
              </li>
              <li className="my-[5px] text-[#fff] hover:text-[#ec7532]">
                Google +
              </li>
            </ul>
          </div>
        </div>
        <div className="text-[#fff] mt-[30px] border-t-[1px] py-[10px] border-gray-500">2020 © Movie Cyber / Cybersoft</div>
      </div>
    </div>
  );
}

export default Footer;
