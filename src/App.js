import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/app-context";
import Login from "./Login";
import Quiz from "./Quiz";
import Register from "./Register";
import Result from "./Result";
import SplashScreen from "./SplashScreen.";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route
          path="/"
          element={
            <AppProvider>
              <SplashScreen />
            </AppProvider>
          }
        />
        <Route
          path="/quiz"
          element={
            <AppProvider>
              <Quiz />
            </AppProvider>
          }
        />
        <Route
          path="/register"
          element={
            <AppProvider>
              <Register />
            </AppProvider>
          }
        />
        <Route
          path="/login"
          element={
            <AppProvider>
              <Login />
            </AppProvider>
          }
        />
        <Route
          path="/result"
          element={
            <AppProvider>
              <Result />
            </AppProvider>
          }
        />
      </Routes>
    </Fragment>
  );
}

export default App;
