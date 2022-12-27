import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarAdmin from "../../components/NavbarAdmin";
import Sidebar from "../../components/Sidebar";
import { useAppContext } from "../../context/app-context";

function DashboardPage({ children }) {
  const navigate = useNavigate();
  const [state, dispatch] = useAppContext();
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    document.body.style = "background-color: #edf2f7";

    checkIsAdmin();
  }, []);

  const checkIsAdmin = async () => {
    try {
      const { data } = await axios.get(
        `http://${process.env.REACT_APP_HOST}:5000/user/token`
      );

      const decoded = jwtDecode(data.payload.data.accessToken);
      const checkUserLevel = decoded.user_level;
      const name = decoded.nama_user;

      setFullName(name);

      if (checkUserLevel === "admin") {
        dispatch({ type: "SET_LOADING", payload: false });
        return navigate("/admin/dashboard");
      }

      return navigate("/");
    } catch (err) {
      console.log(err.response.status);
      if (err.response.status === 403) {
        return navigate("/");
      }
    }
  };

  return state.isLoading ? (
    "Redirect ..."
  ) : (
    <div>
      <Sidebar name={fullName} />
      <div
        className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] pb-20"
        style={{ background: "#edf2f7" }}
      >
        <NavbarAdmin />
        <div className="p-10">{children}</div>
      </div>
    </div>
  );
}

export default DashboardPage;
