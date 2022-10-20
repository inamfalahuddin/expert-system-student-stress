/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useAppContext } from "../context/app-context";
import CheckIcon from "../images/bi_check.svg";

function Answers({ text, delay, index }) {
  const [state, dispatch] = useAppContext();

  useEffect(() => {
    dispatch({ type: "SET_ANIMATE", payload: true });
  }, []);

  const btnAnswer = () => {
    dispatch({ type: "SET_FOCUS", payload: index + 1 });
    dispatch({ type: "SET_ANSWERS", payload: newAnswer() });
  };

  const newAnswer = () => {
    let ans = state.answers;
    ans.splice(state.count - 1, 1, index + 1);

    return ans;
  };

  return (
    <div
      className={`w-full  rounded-md h-14  flex items-center  bg-no-repeat bg-right mb-5 opacity-0 cursor-pointer ${
        state.answers[state.count - 1] === index + 1
          ? "bg-primary text-white bg-BgBuble"
          : "border-2 text-gray-500 hover:bg-slate-100 transition-all"
      } ${state.animate ? "animate-fadeIn" : ""}`}
      style={{ animationDelay: delay }}
      onClick={btnAnswer}
    >
      <div className="px-5 flex items-center gap-5 w-full">
        {state.answers[state.count - 1] === index + 1 ? (
          <div className="w-8 h-8 bg-dark-primary rounded-full flex items-center justify-center animate-scale overflow-hidden">
            <img className="w-full animate-fadeTop" src={CheckIcon} alt="" />
          </div>
        ) : null}

        <span className="capitalize">{text}</span>
      </div>
    </div>
  );
}

export default Answers;
