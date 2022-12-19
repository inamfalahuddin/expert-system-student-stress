import React from "react";

function Skeleton() {
  return (
    <div role="status" className="animate-pulse">
      <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
      <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-8/12 mb-4"></div>
      <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-6/12 mb-4"></div>
    </div>
  );
}

export default Skeleton;
