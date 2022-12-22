import React, { useEffect, useState } from "react";

function LinePercentace({ percentace, color }) {
  const [lineColor, setLineColor] = useState("");
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
    if (color === "red") return setLineColor(colors.red);
    if (color === "orange") return setLineColor(colors.orange);
    if (color === "green") return setLineColor(colors.green);
    if (color === "blue") return setLineColor(colors.blue);
    return setLineColor("salmon");
  };
  return (
    <>
      <div className="w-full h-[6px] bg-slate-200 rounded-full my-1">
        <div
          className={`h-[6px] w-0 rounded-full transition-all duration-1000`}
          style={{ width: `${percentace}%`, backgroundColor: lineColor }}
        ></div>
      </div>
    </>
  );
}

export default LinePercentace;
