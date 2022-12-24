import React, { useEffect, useState } from "react";

function Card({ color, data }) {
  const [profileColor, setProfileColor] = useState("");
  const [stresId, setStresId] = useState("");

  const stres = ["ringan", "sedang", "berat"];

  const colors = {
    red: "#ef4444",
    orange: "#f97316",
    green: "#22c55e",
    blue: "#3b82f6",
  };

  useEffect(() => {
    const stresId = Number(data.id_tingkat_stres.match(/\d/g).join("")) - 1;
    setStresId(stresId);

    detBgColor();
  }, []);

  const detBgColor = () => {
    if (color === "red") return setProfileColor(colors.red);
    if (color === "orange") return setProfileColor(colors.orange);
    if (color === "green") return setProfileColor(colors.green);
    if (color === "blue") return setProfileColor(colors.blue);
    return setProfileColor("salmon");
  };

  const generateCharacterOfName = (name) => {
    const firstName = name.split(" ")[0];

    return firstName.split("")[0];
  };

  return (
    <div className="bg-white py-4 px-5 mb-5 flex items-center justify-between rounded-lg transition-all">
      <div className={`flex items-center gap-5`}>
        <div
          className={`w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center text-white`}
          style={{ backgroundColor: profileColor }}
        >
          <h2 className="text-xl font-bold">
            {generateCharacterOfName(data.nama_user)}
          </h2>
        </div>
        <div>
          <h3 className="text-md font-bold">{data.nama_user}</h3>
          <span className="text-gray-400 text-sm">3 jam yang lalu</span>
        </div>
      </div>
      <span className="text-sm font-medium">{stres[stresId]}</span>
    </div>
  );
}

export default Card;
