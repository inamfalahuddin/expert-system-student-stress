import React, { useEffect, useState } from "react";
import Answers from "./components/Answers";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Progres from "./components/Progres";
import { useAppContext } from "./context/app-context";
import PrevIcon from "./images/ic_round-navigate-next.svg";
import data from "./data/questions.json";
import answers from "./data/answers.json";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Skeleton from "./components/Skeleton";
import { Navigate, useNavigate } from "react-router-dom";
import Loading from "./components/Loading";

function Quiz() {
  const [state, dispatch] = useAppContext();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [expToken, setExpToken] = useState("");
  const navigate = useNavigate("");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestion();
  }, []);

  useEffect(() => {
    document.title = "ES | Questions";

    dispatch({ type: "NUM_OF_MAX", payload: data.length });
    dispatch({ type: "SET_ANIMATE", payload: true });
    // dispatch({ type: "SET_LOADING", payload: true });
  }, [state.count, state.answers]);

  const btnNext = () => {
    if (state.count < state.numOfMax) {
      dispatch({ type: "SET_ANIMATE", payload: false });
      dispatch({ type: "SET_FOCUS", payload: 0 });
    }
    dispatch({ type: "INCREMENT", payload: 1 });
  };

  const btnFinish = async () => {
    console.log(state.answers);
    try {
      const { data } = await axiosJWT.post(
        "http://192.168.18.253:5000/quiz/answers",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          username: username,
          answers: state.answers,
        }
      );
    } catch (err) {
      console.log(err);
    }
    navigate("/result");
  };

  const axiosJWT = axios.create();
  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expToken * 1000 < currentDate.getTime()) {
        const { data } = await axios.get(
          "http://192.168.18.253:5000/user/token"
        );
        config.headers.Authorization = `Bearer ${data.payload.data.accessToken}`;
        setToken(data.payload.data.accessToken);

        const decoded = jwt_decode(data.payload.data.accessToken);
        setName(decoded.nama_user.split(" ")[0]);
        setExpToken(decoded.exp);
        setUsername(decoded.username);

        dispatch({ type: "SET_LOADING", payload: false });
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  const getQuestion = async () => {
    try {
      const { data } = await axiosJWT.get(
        "http://192.168.18.253:5000/quiz/questions",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setQuestions(data.payload.data.questions);
    } catch (err) {
      navigate("/login");
    }
  };

  const btnPrev = () => {
    dispatch({ type: "DECREMENT", payload: 1 });
    if (state.count > 1) dispatch({ type: "SET_ANIMATE", payload: false });
  };

  return state.isLoading ? (
    <Loading />
  ) : (
    <div className={`bg-no-repeat bg-cover bg-top`}>
      <Navbar name={name} />
      <div className="container px-5">
        <Progres />
        <div className="questions py-5">
          <span className="text-orange-500 my-1 inline-block text-sm">
            Question {state.count}/{state.numOfMax}
          </span>
          <p className="text-xs py-2 text-orange-500">
            Mohon jangan refresh halaman selama anda mengisi kuis ini.
          </p>
          <div>
            {questions.length > 0 ? (
              <h2
                className={`font-bold text-2xl pb-5 opacity-0 ${
                  state.animate ? "animate-fadeInX" : ""
                }`}
              >
                {questions[state.count - 1].pernyataan}
              </h2>
            ) : (
              <Skeleton />
            )}
          </div>
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
          {state.count === state.numOfMax ? (
            <div onClick={btnFinish}>
              <Button text={"Finish"} color="primary" />
            </div>
          ) : (
            <div onClick={btnNext}>
              <Button text={"Next"} color="primary" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
