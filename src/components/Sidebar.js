import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/app-context";
import UmbyIcon from "../images/logo-umby.png";

function Sidebar() {
  const [state, dispatch] = useAppContext();

  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4  flex items-center ">
          <img src={UmbyIcon} alt="logo umby" width={50} />
          <h1 className="text-xl font-bold text-gray-600">Student Stress</h1>
        </div>
        <div className="mt-8 text-center">
          <img
            src="https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp"
            alt=""
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
            Cynthia J. Watts
          </h5>
          <span className="hidden text-gray-400 lg:block">Admin</span>
        </div>
        <ul className="space-y-2 tracking-wide mt-8">
          <li>
            <Link
              to={"/admin/dashboard"}
              aria-label="dashboard"
              className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl ${
                state.sidebarIsActive === "dashboard" ? "nav-actived" : ""
              }`}
              onClick={() =>
                dispatch({ type: "SET_SIDEBAR", payload: "dashboard" })
              }
            >
              <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                  className="fill-current text-cyan-400 dark:fill-slate-600"
                />
                <path
                  d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                  className="fill-current text-cyan-200 group-hover:text-cyan-300"
                />
                <path
                  d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                  className="fill-current group-hover:text-sky-300"
                />
              </svg>
              <span className="-mr-1 font-medium">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/admin/dimensi"}
              className={`px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-600 group ${
                state.sidebarIsActive === "dimension"
                  ? "nav-actived text-white"
                  : ""
              }`}
              onClick={() =>
                dispatch({ type: "SET_SIDEBAR", payload: "dimension" })
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  className="fill-current text-gray-300 group-hover:text-cyan-300"
                  fillRule="evenodd"
                  d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                  clipRule="evenodd"
                />
                <path
                  className={`fill-current ${
                    state.sidebarIsActive === "dimension"
                      ? "text-gray-50"
                      : "text-gray-600 group-hover:text-cyan-600"
                  }`}
                  d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                />
              </svg>
              <span
                className={`${
                  state.sidebarIsActive === "dimension"
                    ? "text-white font-medium"
                    : "group-hover:text-gray-700"
                }`}
              >
                Dimension
              </span>
            </Link>
          </li>
          <li>
            <Link
              to={"/admin/konsultasi"}
              className={`px-4 py-3 flex items-center space-x-4 rounded-md ${
                state.sidebarIsActive === "consultation"
                  ? "nav-actived"
                  : "text-gray-600"
              } group`}
              onClick={() =>
                dispatch({ type: "SET_SIDEBAR", payload: "consultation" })
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  className={`fill-current  ${
                    state.sidebarIsActive === "consultation"
                      ? "text-gray-50"
                      : "group-hover:text-cyan-600 text-gray-600"
                  }`}
                  fillRule="evenodd"
                  d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                  clipRule="evenodd"
                />
                <path
                  className="fill-current text-gray-300 group-hover:text-cyan-300"
                  d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                />
              </svg>
              <span
                className={`${
                  state.sidebarIsActive === "consultation"
                    ? "text-white font-medium"
                    : "group-hover:text-gray-700"
                }`}
              >
                Consultation
              </span>
            </Link>
          </li>
          <li>
            <Link
              to={"/admin/test"}
              className={`px-4 py-3 flex items-center space-x-4 rounded-md group ${
                state.sidebarIsActive === "test"
                  ? "nav-actived text-gray-50 "
                  : "text-gray-600"
              }`}
              onClick={() => dispatch({ type: "SET_SIDEBAR", payload: "test" })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  className={`fill-current ${
                    state.sidebarIsActive === "test"
                      ? "text-gray-50"
                      : "text-gray-600 group-hover:text-cyan-600"
                  }`}
                  d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                />
                <path
                  className="fill-current text-gray-300 group-hover:text-cyan-300"
                  d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                />
              </svg>
              <span
                className={`${
                  state.sidebarIsActive === "test"
                    ? "font-medium"
                    : "group-hover:text-gray-700"
                }`}
              >
                Test Results
              </span>
            </Link>
          </li>
          <li>
            <Link
              to={"/admin/user"}
              className={`px-4 py-3 flex items-center space-x-4 rounded-md  group ${
                state.sidebarIsActive === "users"
                  ? "text-gray-50 nav-actived"
                  : "text-gray-600"
              }`}
              onClick={() =>
                dispatch({ type: "SET_SIDEBAR", payload: "users" })
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  className="fill-current text-gray-300 group-hover:text-cyan-300"
                  d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                />
                <path
                  className={`fill-current ${
                    state.sidebarIsActive === "users"
                      ? "text-gray-50"
                      : "text-gray-600  group-hover:text-cyan-600"
                  }`}
                  fillRule="evenodd"
                  d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                  clipRule="evenodd"
                />
              </svg>
              <span
                className={`${
                  state.sidebarIsActive === "users"
                    ? "font-medium"
                    : "group-hover:text-gray-700"
                }`}
              >
                Users
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <span className="group-hover:text-gray-700">Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;