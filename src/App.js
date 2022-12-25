import { Fragment, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/app-context";
import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Quiz from "./pages/Quiz";
import Register from "./pages/Register";
import Result from "./pages/Result";
import SplashScreen from "./pages/SplashScreen.";
import DashboardPage from "./pages/admin/DashboardPage";
import Dimensions from "./pages/admin/Dimensions";
import Consultation from "./pages/admin/Consultation";
import TestResult from "./pages/admin/TestResult";
import User from "./pages/admin/User";
import axios from "axios";
import jwtDecode from "jwt-decode";

function App() {
  const [expToken, setExpToken] = useState("");

  const axiosJWT = axios.create();
  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expToken * 1000 < currentDate.getTime()) {
        const { data } = await axios.get(
          "http://192.168.18.253:5000/user/token"
        );
        config.headers.Authorization = `Bearer ${data.payload.data.accessToken}`;

        const decoded = jwtDecode(data.payload.data.accessToken);
        setExpToken(decoded.exp);
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

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
          path="/admin/dashboard"
          element={
            <AppProvider>
              <DashboardPage>
                <Dashboard />
              </DashboardPage>
            </AppProvider>
          }
        />
        <Route
          path="/admin/dimensi"
          element={
            <AppProvider>
              <DashboardPage>
                <Dimensions />
              </DashboardPage>
            </AppProvider>
          }
        />
        <Route
          path="/admin/konsultasi"
          element={
            <AppProvider>
              <DashboardPage>
                <Consultation />
              </DashboardPage>
            </AppProvider>
          }
        />
        <Route
          path="/admin/test"
          element={
            <AppProvider>
              <DashboardPage>
                <TestResult />
              </DashboardPage>
            </AppProvider>
          }
        />
        <Route
          path="/admin/user"
          element={
            <AppProvider>
              <DashboardPage>
                <User />
              </DashboardPage>
            </AppProvider>
          }
        />
      </Routes>
    </Fragment>
  );
}

export default App;
