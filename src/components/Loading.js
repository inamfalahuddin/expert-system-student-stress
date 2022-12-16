import React from "react";
import IconUmby from "../images/fav_icon_umby.png";

function Loading() {
  return (
    <>
      <div className="bg-white absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center animate-fadeIn">
        <div className="bg-white p-10 flex items-center justify-center rounded-full animate-bounce shadow-md border border-slate-50">
          <img className="w-10 absolute " src={IconUmby} alt="" />
        </div>
      </div>
    </>
  );
}

export default Loading;
