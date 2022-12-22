import React, { useState } from "react";

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="h-5 w-8 flex flex-col items-space justify-between cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span
        className={`bg-gray-600 h-1 w-full rounded-md transition-all ${
          isOpen ? "rotate-45 translate-y-2" : ""
        }`}
      ></span>
      <span
        className={`bg-gray-600 h-1 w-full rounded-md transition-all ${
          isOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`bg-gray-600 h-1 w-full rounded-md transition-all ${
          isOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      ></span>
    </div>
  );
}

export default Hamburger;
