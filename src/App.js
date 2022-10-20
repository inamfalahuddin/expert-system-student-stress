import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/app-context";
import Quiz from "./Quiz";
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
      </Routes>
    </Fragment>
  );
}

export default App;
