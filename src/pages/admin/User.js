import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

function User() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const { data } = await axios.get("http://192.168.18.253:5000/users");

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
          <Button text="Tambah" color="primary" />
        </div>
      </div>
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
