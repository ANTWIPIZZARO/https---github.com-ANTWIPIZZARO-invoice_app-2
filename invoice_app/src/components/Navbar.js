import React from "react";
import mainLogo from "../assets/svg/mouth.svg";
import prof from "../assets/svg/avatar.svg";
import sun from "../assets/svg/sunLogo.svg";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="w-20 flex flex-col bg-[#1F213A] bg-[#373b53] h-screen flex-none rounded-tr-2xl overflow-hidden">
      {/* Top section */}
      <div className="flex-1 overflow-hidden">
        <img
          src={mainLogo}
          onClick={() => {
            navigate("/");
          }}
          alt="navbar-logo"
          role="button"
          className="ml-1 p-1 bg-[#8466F9]  rounded-xl -rotate-90"
        />
      </div>
      {/* Bottom section */}
      <div className="w-7 mx-auto h-7 mb-5">
        <img src={sun} alt="sun" />
      </div>

      <div className="border-t-2 border-t-gray-500 mb-4"></div>
      <div className=" bg-white w-14 mx-auto h-14 rounded-full flex items-center justify-center p-3">
        <img src={prof} alt="prof" className="w-full" />
      </div>
    </div>
  );
}
