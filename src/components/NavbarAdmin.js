import React, { useState } from "react";
import Hamburger from "./button/Hamburger";
import IconLogout from "../images/logout.png";

function NavbarAdmin() {
  return (
    <div className="bg-white shadow-md">
      <div className="container">
        <div className="p-5 flex items-center justify-between">
          <div className="flex gap-5">
            <Hamburger />
            <h2 className="text-gray-600 font-medium">Hi, Ibnu Surya</h2>
          </div>
          <button>
            <img src={IconLogout} width="30" height="30" alt="logout" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavbarAdmin;
