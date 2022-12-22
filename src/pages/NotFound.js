import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);

    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
      // setSecoundOfRedirect(secoundOfRedirect++);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[100vh] flex items-center justify-center text-center">
      <div>
        <h1 className="font-bold text-3xl text-gray-400 animate-fadeTop opacity-0">
          <span className="text-2xl">Sorry &#128540;</span>
          <br /> Page Not Found !
        </h1>
        <div className="text-gray-400 mt-5">Redirect to Home of {counter}s</div>
      </div>
    </div>
  );
}

export default NotFound;
