import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useCallback, useEffect, useState } from "react";
import Alert from "../../components/Alert";
import Button from "../../components/Button";
import TableRangeStres from "../../components/TableRangeStres";
import { useAppContext } from "../../context/app-context";

function Dimensions() {
  const [dimensi, setDimensi] = useState([]);
  const [expToken, setExpToken] = useState("");
  const [token, setToken] = useState("");
  const [state, dispatch] = useAppContext();
  const [dataUpdateDimensi, setDataUpdateDimensi] = useState({});
  const [message, setMessage] = useState({});

  useEffect(() => {
    document.body.classList = "lg:h-screen";

    getDimensi();
    dispatch({ type: "SET_SIDEBAR", payload: "dimension" });
  }, []);

  const getDimensi = async () => {
    try {
      const { data } = await axiosJWT.get(
        `http://${process.env.REACT_APP_HOST}:5000/dimensi`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setDimensi(data.payload.data);
    } catch (err) {
      console.log(err);
    }
  };

  const updateDimensi = async (e) => {
    try {
      const { data } = await axiosJWT.put(
        `http://${process.env.REACT_APP_HOST}:5000/dimensi/${dataUpdateDimensi.id_dimensi}`,
        {
          nama_dimensi: dataUpdateDimensi.nama_dimensi,
          batas_bawah: dataUpdateDimensi.batas_bawah,
          batas_tengah: dataUpdateDimensi.batas_tengah,
          batas_atas: dataUpdateDimensi.batas_atas,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      getDimensi();
      return setMessage({
        msg: `Berhasil mengupdate dimensi dengan id ${dataUpdateDimensi.id_dimensi}`,
        color: "success",
      });
    } catch (err) {
      console.log(err);
      return setMessage({
        msg: err.response.message,
        color: "danger",
      });
    }
  };

  const findDimensi = useCallback(
    (e) => {
      const result = dimensi.filter((val) => val.id_dimensi === e.target.value);
      setDataUpdateDimensi(result[0]);
    },
    [dimensi]
  );

  const axiosJWT = axios.create();
  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expToken * 1000 < currentDate.getTime()) {
        const { data } = await axios.get(
          `http://${process.env.REACT_APP_HOST}:5000/user/token`
        );
        config.headers.Authorization = `Bearer ${data.payload.data.accessToken}`;

        const decoded = jwtDecode(data.payload.data.accessToken);
        setExpToken(decoded.exp);
        setToken(data.payload.data.accessToken);
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  return (
    <>
      <h2 className="text-xl text-gray-600 font-medium mb-5">
        Variabel Input & Output
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="flex items-center justify-between lg:col-span-3">
          <p className="max-w-3xl text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <Button text="Tambah" color="primary" />
        </div>

        <div className="col-span-3">
          {message.msg !== undefined ? (
            <Alert message={message.msg} bgColor={message.color} />
          ) : (
            ""
          )}
        </div>

        <div className="w-full mx-auto bg-white rounded-lg col-span-2">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="text-xl text-gray-600 font-medium mb-5">Dimensi</h2>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">ID Dimensi</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Name</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">BW</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">BT</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">BA</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Action</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {dimensi.map((value, index) => (
                    <tr
                      key={index}
                      className="animate-fadeIn opacity-0"
                      style={{ animationDelay: `${index / 20}s` }}
                    >
                      <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-gray-800">
                          {value.id_dimensi}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium">
                          {value.nama_dimensi}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left text-gray-600">
                          {value.batas_bawah}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left text-gray-600">
                          {value.batas_tengah}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left text-gray-600">
                          {value.batas_atas}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap flex items-center justify-between">
                        <span className="text-left font-medium text-gray-500">
                          <button>
                            <svg
                              className="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"
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
        </div>
        <div className="w-full mx-auto bg-white rounded-lg">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="text-xl text-gray-600 font-medium mb-5">
              Edit Dimensi
            </h2>
          </header>
          <div className="p-3">
            <div className="px-5">
              <select
                id="dimensi"
                className="mb-5 animate-fadeIn opacity-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-primary"
                onChange={findDimensi}
              >
                {dimensi.map((value, index) => (
                  <option key={index} value={value.id_dimensi}>
                    {value.id_dimensi} - {value.nama_dimensi}
                  </option>
                ))}
              </select>
              <input
                type="text"
                className="border outline-primary w-full p-2 px-4 mb-5 rounded-md animate-fadeInX opacity-0"
                placeholder="Nama Dimensi"
                value={
                  Object.keys(dataUpdateDimensi).length !== 0
                    ? dataUpdateDimensi.nama_dimensi
                    : ""
                }
                onChange={(e) => {
                  setDataUpdateDimensi({
                    ...dataUpdateDimensi,
                    nama_dimensi: e.target.value,
                  });
                }}
                style={{ animationDelay: ".25s" }}
              />
              <div className="grid grid-cols-3 gap-5">
                <input
                  type="number"
                  className="border outline-primary p-2 px-4 mb-5 rounded-md animate-fadeInX opacity-0"
                  placeholder="BW"
                  style={{ animationDelay: ".45s" }}
                  value={
                    Object.keys(dataUpdateDimensi).length !== 0
                      ? dataUpdateDimensi.batas_bawah
                      : ""
                  }
                  onChange={(e) => {
                    setDataUpdateDimensi({
                      ...dataUpdateDimensi,
                      batas_bawah: Number(e.target.value),
                    });
                  }}
                />
                <input
                  type="number"
                  className="border outline-primary p-2 px-4 mb-5 rounded-md animate-fadeInX opacity-0"
                  placeholder="BT"
                  style={{ animationDelay: ".45s" }}
                  value={
                    Object.keys(dataUpdateDimensi).length !== 0
                      ? dataUpdateDimensi.batas_tengah
                      : ""
                  }
                  onChange={(e) => {
                    setDataUpdateDimensi({
                      ...dataUpdateDimensi,
                      batas_tengah: Number(e.target.value),
                    });
                  }}
                />
                <input
                  type="number"
                  className="border outline-primary p-2 px-4 mb-5 rounded-md animate-fadeInX opacity-0"
                  placeholder="BA"
                  style={{ animationDelay: ".45s" }}
                  value={
                    Object.keys(dataUpdateDimensi).length !== 0
                      ? dataUpdateDimensi.batas_atas
                      : ""
                  }
                  onChange={(e) => {
                    setDataUpdateDimensi({
                      ...dataUpdateDimensi,
                      batas_atas: Number(e.target.value),
                    });
                  }}
                />
              </div>
              <span onClick={updateDimensi}>
                <Button text="submit" color="primary" />
              </span>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto bg-white rounded-lg col-span-3">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="text-xl text-gray-600 font-medium mb-5">
              Tabel Tingkat Stres
            </h2>
          </header>
          <div className="p-3">
            <TableRangeStres />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dimensions;
