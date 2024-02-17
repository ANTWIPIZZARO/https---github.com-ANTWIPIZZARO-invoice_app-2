import React from "react";
import { TiPlus } from "react-icons/ti";
import { Link } from "react-router-dom";

function Header({ title, message, link, linkTitle }) {
  return (
    <div className="flex items-start justify-between">
      {/* Invoice header */}
      <div>
        <h1 className="text-2xl font-bold ">{title}</h1>
        <p className="text-sm">{message}</p>
      </div>
      {/* Buttons */}
      <div className="">
        <Link
          to={link}
          className="flex items-center p-2 bg-[#7C5DF9] text-white font-bold rounded-full gap-2"
        >
          <TiPlus className="bg-white text-[#7656f8] w-10 h-10 rounded-full" />
          {linkTitle}
        </Link>
      </div>
    </div>
  );
}

export default Header;
