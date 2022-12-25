import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../../components/Alert";
import Button from "../../components/Button";
import { useAppContext } from "../../context/app-context";

function User() {
  const [user, setUser] = useState([]);
  const [expToken, setExpToken] = useState([]);
  const [state, dispatch] = useAppContext();
  const [token, setToken] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({});
  const [hiddenPassword, setHiddenPassword] = useState(false);
  const [userLevel, setUserLevel] = useState("");

  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    getUser();

    dispatch({ type: "SET_SIDEBAR", payload: "users" });
  }, []);

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
        setToken(data.payload.data.accessToken);
        setExpToken(decoded.exp);
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  const getUser = async () => {
    try {
      const { data } = await axiosJWT.get("http://192.168.18.253:5000/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(data.payload.data);
    } catch (err) {
      console.log(err);
    }
  };

  const generateRandomColor = () => {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const colorCode = "rgb(" + x + "," + y + "," + z + ")";

    return colorCode;
  };

  const generateCharacterOfName = (name) => {
    const firstName = name.split(" ")[0];

    return firstName.split("")[0];
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      if (name === "") {
        return setMessage({
          msg: "Nama Lengkap wajid diisi!",
          color: "danger",
        });
      }
      if (email === "") {
        return setMessage({ msg: "Email wajib diisi", color: "danger" });
      }
      if (password === "") {
        return setMessage({ msg: "Password wajib diisi", color: "danger" });
      }

      const url = `http://192.168.18.253:5000/user/register/?level=${userLevel}`;
      const { data } = await axios.post(url, {
        nama: name,
        username: email,
        password: password,
        user_level: userLevel,
      });

      // setName("");
      // setEmail("");
      // setPassword("");

      getUser();
      setMessage({ msg: data.message, color: "success" });
    } catch (err) {
      setMessage({ msg: err.response.data.message, color: "danger" });
    }
  };

  return (
    <div className="">
      {/* row data mahasiswa */}
      <div className="mb-5">
        <h2 className="text-xl text-gray-600 font-medium mb-5">
          Data Mahasiswa
        </h2>
        <div className="flex items-center justify-between lg:col-span-2">
          <p className="max-w-3xl text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <span onClick={() => setOpenForm(!openForm)}>
            <Button text="Tambah" color="primary" />
          </span>
        </div>
      </div>

      {openForm ? (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg col-span-2 mb-10 bg-white p-4 animate-scale">
          <h2 className="my-2 font-medium text-md text-gray-500">
            Tambah Data Mahasiwa
          </h2>
          {message.msg !== undefined ? (
            <Alert message={message.msg} bgColor={message.color} />
          ) : (
            ""
          )}
          <form className="grid lg:grid-cols-2 gap-5">
            <input
              type="text"
              className="border outline-primary w-full p-2 px-4 rounded-md animate-fadeInX opacity-0"
              placeholder="Nama Lengkap"
              style={{ animationDelay: ".2s" }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="border outline-primary w-full p-2 px-4 rounded-md animate-fadeInX opacity-0"
              placeholder="Email"
              style={{ animationDelay: ".2s" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex gap-2">
              <input
                type={hiddenPassword ? "password" : "text"}
                className="border outline-primary w-full p-2 px-4 rounded-md animate-fadeInX opacity-0"
                placeholder="Password"
                style={{ animationDelay: ".65s" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            <select
              id="userLevel"
              className="animate-fadeIn opacity-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-primary"
              style={{ animationDelay: ".2s" }}
              value={userLevel}
              onChange={(e) => setUserLevel(e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <span onClick={submit}>
              <Button text="Submit" color="primary" />
            </span>
          </form>
        </div>
      ) : (
        ""
      )}

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg col-span-2">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 pl-6 w-1">
                No.
              </th>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                ID of Mahasiswa
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {user.map((value, index) => (
              <tr
                key={index}
                className="animate-fadeIn opacity-0 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                style={{ animationDelay: `${index / 45}s` }}
              >
                <td className="py-3 pl-6 w-1">{index + 1}.</td>
                <th
                  scope="row"
                  className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div
                    className="w-10 h-10 rounded-full bg-orange flex items-center justify-center text-xl text-white capitalize"
                    style={{ backgroundColor: generateRandomColor() }}
                  >
                    {generateCharacterOfName(value.nama_user)}
                  </div>
                  <div className="pl-3">
                    <div className="text-base font-semibold capitalize">
                      {value.nama_user}
                    </div>
                    <div className="font-normal text-gray-500">
                      {value.username}
                    </div>
                  </div>
                </th>
                <td className="py-4 px-6">{value.id}</td>
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <div
                      className={`h-2.5 w-2.5 rounded-full ${
                        value.user_level === "user" ? "bg-green" : "bg-red"
                      } mr-2`}
                    />
                    {value.user_level}
                  </div>
                </td>
                <td className="py-4 px-6 flex items-center justify-between">
                  <Link
                    to={""}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit user
                  </Link>
                  <span className="font-medium">
                    <button>
                      <svg
                        className="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-white p-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                    </button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;
