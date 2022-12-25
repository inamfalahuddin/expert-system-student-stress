import React from "react";

function Alert({ message, bgColor }) {
  const background =
    bgColor === "info"
      ? "bg-blue-50 text-blue-700"
      : bgColor === "danger"
      ? "bg-red-50 text-red-700"
      : bgColor === "success"
      ? "bg-green-50 text-green-700"
      : bgColor === "warning"
      ? "bg-yellow-50 text-yellow-700"
      : "bg-slate-50";
  return (
    <div className={`${background} my-4 p-4 rounded-md animate-fadeIn text-sm`}>
      <p>{message}</p>
    </div>
  );
}

export default Alert;
