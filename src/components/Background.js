import React from "react";

function Background() {
  return (
    <div className="absolute flex w-full overflow-hidden">
      <div className="bg-red-300 w-60 h-60 rounded-full blur-3xl transform translate-x-20"></div>
      <div className="bg-yellow-300 w-60 h-60 rounded-full blur-3xl"></div>
      <div className="bg-blue-300 w-60 h-60 rounded-full blur-3xl transform -translate-x-20"></div>
    </div>
  );
}

export default Background;
