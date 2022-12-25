import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../../components/Button";
import { useAppContext } from "../../context/app-context";
import conclusion from "../../data/conclusion.json";

function InferenceAdmin() {
  const [hasil, setHasil] = useState([]);
  const [expToken, setExpToken] = useState("");
  const [state, dispatch] = useAppContext();
  const { id, sesi } = useParams();
  const [rule, setRule] = useState([]);

  useEffect(() => {
    getInference();

    setRule(Indicators());
    dispatch({ type: "SET_SIDEBAR", payload: "test" });
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
        setExpToken(decoded.exp);
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  const getInference = async () => {
    try {
      const { data } = await axiosJWT.get(
        `http://192.168.18.253:5000/quiz/inference?id=${id}&sesi=${sesi}`
      );
      setHasil(data.payload.data.inference);
    } catch (err) {
      console.log(err);
    }
  };

  const Indicators = () => {
    const skala = ["ringan", "sedang", "berat"];

    let result = [];
    for (let i = 0; i < skala.length; i++) {
      for (let j = 0; j < skala.length; j++) {
        for (let k = 0; k < skala.length; k++) {
          result.push([skala[i], skala[j], skala[k]]);
        }
      }
    }

    return result;
  };

  return hasil ? (
    <>
      <h2 className="text-xl text-gray-600 font-medium mb-5">
        Inference Engine
      </h2>
      <Link to={"/admin/test"}>
        <Button text="← Back" color="primary" />
      </Link>
      <div className="w-full mx-auto bg-white rounded-lg my-10">
        <header className="px-5 py-4 border-b border-gray-100">
          <h2 className="text-xl text-gray-600 font-medium mb-5">
            Hasil Tes {id}
          </h2>
        </header>
        <div className="p-3">
          <div className="overflow-x-auto">
            <code>
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">NO.</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">IF</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Dimensi 1</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">AND</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Dimensi 2</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">AND</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Dimensi 3</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">THEN</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        &alpha;-predikat
                      </div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Zi</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100 text-gray-500">
                  {hasil.map((value, index) => (
                    <tr
                      key={index}
                      className="animate-fadeIn opacity-0"
                      style={{ animationDelay: `${index / 45}s` }}
                    >
                      <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-gray-800">
                          {index + 1}.
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-gray-800">IF</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        {rule[index][0]}
                        <span className="text-red font-bold">
                          ({JSON.parse(value.a)[0].toFixed(2)})
                        </span>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">AND</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        {rule[index][1]}
                        <span className="text-red font-bold">
                          ({JSON.parse(value.a)[1].toFixed(2)})
                        </span>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">AND</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        {rule[index][2]}
                        <span className="text-red font-bold">
                          ({JSON.parse(value.a)[2].toFixed(2)})
                        </span>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">THEN</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-bold">
                          {value.a_predikat.toFixed(2)}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap font-bold">
                        <div className="text-left">{value.z.toFixed(2)}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </code>
          </div>
        </div>
      </div>
    </>
  ) : (
    <span>Loading...</span>
  );
}

export default InferenceAdmin;
