import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/app-context";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Quiz from "./pages/Quiz";
import Register from "./pages/Register";
import Result from "./pages/Result";
import SplashScreen from "./pages/SplashScreen.";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route
          path="*"
          element={
            <AppProvider>
              <NotFound />
            </AppProvider>
          }
        />
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
        <Route
          path="/dashboard"
          element={
            <AppProvider>
              <Dashboard />
            </AppProvider>
          }
        />
      </Routes>
    </Fragment>
  );
}

export default App;
