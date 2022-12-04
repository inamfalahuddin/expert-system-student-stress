import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./components/Button";

function Login() {
  const [time, setTime] = useState("");
  const [hiddenPassword, setHiddenPassword] = useState(true);

  useEffect(() => {
    document.title = "ES | Login";

    let hour = new Date().getHours();

    setTime(
      "Selamat " + ((hour < 12 && "Pagi") || (hour < 18 && "Sore") || "Malam")
    );
  }, []);

  return (
    <>
      <div
        className={`bg-no-repeat bg-cover bg-top lg:flex lg:justify-center lg:items-center lg:h-[100vh]`}
      >
        <div className="container px-5 py-28">
          <h1 className="opacity-0 font-bold text-3xl  text-center pt-10 pb-2 animate-fadeIn">
            Halo, {time}
          </h1>
          <h2
            className={`opacity-0 font-medium text-2xl text-center pb-5 animate-fadeIn`}
            style={{ animationDelay: ".25s" }}
          >
            Silahkan mendaftar terlebih dahulu ya 😊
          </h2>

          <div className="px-5">
            <input
              type="email"
              className="border outline-primary w-full p-2 px-4 mb-5 rounded-md animate-fadeInX opacity-0"
              placeholder="Email"
              style={{ animationDelay: ".45s" }}
            />
            <div className="flex gap-2 mb-5">
              <input
                type={hiddenPassword ? "password" : "text"}
                className="border outline-primary w-full p-2 px-4 rounded-md animate-fadeInX opacity-0"
                placeholder="Password"
                style={{ animationDelay: ".65s" }}
              />
              <div
                className="opacity-0 border rounded-md px-4 flex items-center cursor-pointer hover:bg-slate-50 transition-all animate-fadeInX"
                style={{ animationDelay: ".80s" }}
                onClick={() => setHiddenPassword(!hiddenPassword)}
              >
                {hiddenPassword ? (
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.3512 7.875L13.125 10.64V10.5C13.125 9.80381 12.8484 9.13613 12.3562 8.64384C11.8639 8.15156 11.1962 7.875 10.5 7.875H10.3512ZM6.58875 8.575L7.945 9.93125C7.90125 10.115 7.875 10.2987 7.875 10.5C7.875 11.1962 8.15156 11.8639 8.64384 12.3562C9.13613 12.8484 9.80381 13.125 10.5 13.125C10.6925 13.125 10.885 13.0988 11.0687 13.055L12.425 14.4112C11.8387 14.7 11.1913 14.875 10.5 14.875C9.33968 14.875 8.22688 14.4141 7.40641 13.5936C6.58594 12.7731 6.125 11.6603 6.125 10.5C6.125 9.80875 6.3 9.16125 6.58875 8.575M1.75 3.73625L3.745 5.73125L4.13875 6.125C2.695 7.2625 1.5575 8.75 0.875 10.5C2.38875 14.3412 6.125 17.0625 10.5 17.0625C11.8562 17.0625 13.1512 16.8 14.3325 16.3275L14.7087 16.695L17.2637 19.25L18.375 18.1387L2.86125 2.625M10.5 6.125C11.6603 6.125 12.7731 6.58594 13.5936 7.40641C14.4141 8.22688 14.875 9.33968 14.875 10.5C14.875 11.06 14.7612 11.6025 14.56 12.0925L17.1237 14.6562C18.4362 13.5625 19.4862 12.1275 20.125 10.5C18.6112 6.65875 14.875 3.9375 10.5 3.9375C9.275 3.9375 8.1025 4.15625 7 4.55L8.89875 6.43125C9.3975 6.23875 9.93125 6.125 10.5 6.125Z"
                      fill="#BDBDBD"
                    />
                  </svg>
                ) : (
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"
                      fill="#BDBDBD"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>

          <p
            className="opacity-0 text-center max-w-xs mx-auto text-gray-500 pb-5 animate-fadeIn"
            style={{ animationDelay: ".5s" }}
          >
            Belum memiliki akun ? &nbsp;
            <Link
              to="/register"
              className="text-primary hover:text-dark-primary"
            >
              Register
            </Link>
          </p>

          <Link
            to={"/quiz"}
            className="opacity-0 flex justify-center animate-fadeIn"
            style={{ animationDelay: ".75s" }}
          >
            <Button text="Login →" color="primary" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
