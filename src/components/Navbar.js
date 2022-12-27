import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import IconBack from "../images/akar-icons_arrow-down.svg";

function Navbar({ name }) {
  const nav = useNavigate();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const { data } = await axios.delete(
        `http://${process.env.REACT_APP_HOST}:5000/user/logout`
      );

      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="px-5 py-6 lg:py-10 flex items-center justify-between">
        <button
          className="hover:bg-slate-100 bg-slate-100 lg:bg-white p-4 rounded-full transition-all"
          onClick={() => nav("/")}
        >
          <img src={IconBack} alt="" />
        </button>
        <div>
          <h2
            className="font-bold bg-slate-50 px-4 py-2 rounded-md cursor-pointer capitalize"
            onClick={logout}
          >
            {name} - Logout
          </h2>
          <div className="hidden font-bold bg-slate-50 px-4 py-2 rounded-lg cursor-pointer capitalize absolute translate-y-2 text-sm rounded-tl-none rounded-br-none">
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
