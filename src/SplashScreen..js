import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroImage from "./images/hero-img.svg";
import Button from "./components/Button";
import { useAppContext } from "./context/app-context";
import Loading from "./components/Loading";

function SplashScreen() {
  const [state, dispatch] = useAppContext();
  const [isImage, setIsImage] = useState(false);

  useEffect(() => {
    document.title = "ES | Tingkat Stres Mahasiswa";
    // setTimeout(() => {
    dispatch({ type: "SET_LOADING", payload: false });
    // }, 2000);
  }, []);

  return (
    <>
      {state.isLoading === false ? (
        <div
          className={`bg-no-repeat bg-cover bg-top lg:flex lg:justify-center lg:items-center lg:h-[100vh]`}
        >
          <div className="container px-5 py-28">
            <div>
              <div
                role="status"
                className={`animate-pulse ${isImage ? "hidden" : ""}`}
              >
                <div className="h-52 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4 mx-auto"></div>
              </div>
              <img
                className={`w-90 transform -translate-x-7 mx-auto`}
                src={HeroImage}
                alt=""
                onLoad={() => setIsImage(true)}
              />
            </div>
            <h1 className="opacity-0 font-bold text-3xl  text-center pt-10 pb-2 animate-fadeIn">
              Hai, Selamat Datang.
            </h1>
            <h2
              className={`opacity-0 font-medium text-2xl text-center pb-5 animate-fadeIn`}
              style={{ animationDelay: ".25s" }}
            >
              Seberapa setreskah kamu padasaat ini
            </h2>
            <p
              className="opacity-0 text-center max-w-xs mx-auto text-gray-500 pb-5 animate-fadeIn"
              style={{ animationDelay: ".5s" }}
            >
              ukur tingkat kesetresan kamu bersama kami dengan gratis
            </p>
            <Link
              to={"/register"}
              className="opacity-0 flex justify-center animate-fadeIn"
              style={{ animationDelay: ".75s" }}
            >
              <Button text="Start Now →" color="primary" />
            </Link>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default SplashScreen;
