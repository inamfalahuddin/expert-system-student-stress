import React, { useEffect } from "react";
import NavbarAdmin from "../../components/NavbarAdmin";
import Sidebar from "../../components/Sidebar";

function DashboardPage({ children }) {
  useEffect(() => {
    document.body.style = "background-color: #edf2f7";
  }, []);

  return (
    <div>
      <Sidebar />
      <div
        className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] pb-20"
        style={{ background: "#edf2f7" }}
      >
        <NavbarAdmin title={"Dashboard"} />
        <div className="p-10">{children}</div>
      </div>
    </div>
  );
}

export default DashboardPage;
