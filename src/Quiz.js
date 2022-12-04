import React, { useEffect } from "react";
import Answers from "./components/Answers";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Progres from "./components/Progres";
import { useAppContext } from "./context/app-context";
import PrevIcon from "./images/ic_round-navigate-next.svg";
import data from "./data/questions.json";
import answers from "./data/answers.json";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const [state, dispatch] = useAppContext();
  const navigate = useNavigate();

  const btnNext = () => {
    if (state.count < state.numOfMax) {
      dispatch({ type: "SET_ANIMATE", payload: false });
      dispatch({ type: "SET_FOCUS", payload: 0 });
    }
    dispatch({ type: "INCREMENT", payload: 1 });
  };

  const btnPrev = () => {
    dispatch({ type: "DECREMENT", payload: 1 });
    if (state.count > 1) dispatch({ type: "SET_ANIMATE", payload: false });
  };

  const btnFinish = () => {
    navigate("/result");
  };

  useEffect(() => {
    document.title = "ES | Questions";

    dispatch({ type: "NUM_OF_MAX", payload: data.length });
    dispatch({ type: "SET_ANIMATE", payload: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.count, state.answers]);

  return (
    <div className={`bg-no-repeat bg-cover bg-top`}>
      <Navbar />
      <div className="container px-5">
        <Progres />
        <div className="questions py-5">
          <span className="text-orange-500 my-1 inline-block text-xs">
            Question {state.count}/{state.numOfMax}
          </span>
          <h2
            className={`font-bold text-2xl pb-5 opacity-0 ${
              state.animate ? "animate-fadeInX" : ""
            }`}
          >
            {data[state.count - 1].question}
          </h2>
        </div>
        <div>
          {answers.map((answer, index) => (
            <Answers
              key={index}
              delay={(answer.id / 6) * 0.6 + "s"}
              text={answer.answer}
              index={index}
            />
          ))}
        </div>
        <div className="flex gap-10 justify-end items-center pt-5 pb-20">
          <button
            className={`flex items-center hover:opacity-70 transition-all ${
              state.count === 1 ? "opacity-50" : ""
            }`}
            onClick={btnPrev}
          >
            <img className="w-7 h-7" src={PrevIcon} alt="" />
            <span className="text-primary">Prev</span>
          </button>
          <div onClick={state.count === state.numOfMax ? btnFinish : btnNext}>
            <Button
              text={state.count === state.numOfMax ? "Finish" : "Next"}
              color="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
