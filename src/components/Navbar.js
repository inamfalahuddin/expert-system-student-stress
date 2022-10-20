import React from "react";
import { useNavigate } from "react-router-dom";
import IconBack from "../images/akar-icons_arrow-down.svg";

function Navbar() {
  const nav = useNavigate();

  return (
    <div className="container">
      <div className="px-5 py-6 lg:py-10 " onClick={() => nav("/")}>
        <button className="hover:bg-slate-100 bg-slate-100 lg:bg-white p-4 rounded-full transition-all">
          <img src={IconBack} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
