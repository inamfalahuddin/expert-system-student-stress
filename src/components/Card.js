import React, { useEffect, useState } from "react";

function Card({ color }) {
  const [profileColor, setProfileColor] = useState("");
  const colors = {
    red: "#ef4444",
    orange: "#f97316",
    green: "#22c55e",
    blue: "#3b82f6",
  };

  useEffect(() => {
    detBgColor();
  }, []);

  const detBgColor = () => {
    if (color === "red") return setProfileColor(colors.red);
    if (color === "orange") return setProfileColor(colors.orange);
    if (color === "green") return setProfileColor(colors.green);
    if (color === "blue") return setProfileColor(colors.blue);
    return setProfileColor("salmon");
  };

  return (
    <div className="p-4 shadow-md mb-5 border-2 border-slate-50 flex items-center justify-between rounded-lg hover:shadow-none transition-all">
      <div className={`flex items-center gap-5`}>
        <div
          className={`w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center text-white`}
          style={{ backgroundColor: profileColor }}
        >
          <h2 className="text-xl font-bold">R</h2>
        </div>
        <div>
          <h3 className="text-md font-bold">Leonardo Silvia</h3>
          <span className="text-gray-400 text-sm">3 jam yang lalu</span>
        </div>
      </div>
      <span className="text-sm font-medium">sedang</span>
    </div>
  );
}

export default Card;
