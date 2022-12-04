import React from "react";
import { useAppContext } from "../context/app-context";

function Progres() {
  const [state] = useAppContext();
  // const percentace = (100 / state.numOfMax) * state.count;
  // const percentace = (100 / state.answers.filter((val) => val > 0).length)
  const percentace =
    (100 / state.numOfMax) * state.answers.filter((val) => val > 0).length;

  return (
    <div className="w-full h-[6px] bg-slate-200 rounded-full my-5">
      <div
        className={`h-[6px] w-0 bg-primary rounded-full transition-all duration-1000`}
        style={{ width: `${percentace}%` }}
      ></div>
    </div>
  );
}

export default Progres;
