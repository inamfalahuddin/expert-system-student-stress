import React from "react";
import { useNavigate } from "react-router-dom";
import IconBack from "../images/akar-icons_arrow-down.svg";

function Navbar() {
  const nav = useNavigate();

  return (
    <div className="container">
      <div className="px-5 py-6 lg:py-10 flex items-center justify-between">
        <button
          className="hover:bg-slate-100 bg-slate-100 lg:bg-white p-4 rounded-full transition-all"
          onClick={() => nav("/")}
        >
          <img src={IconBack} alt="" />
        </button>
        <h2 className="font-bold bg-slate-50 px-4 py-2 rounded-md cursor-pointer">
          In'am
        </h2>
      </div>
    </div>
  );
}

export default Navbar;
