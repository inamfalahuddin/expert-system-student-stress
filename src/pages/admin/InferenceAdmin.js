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
  const [score, setScore] = useState(0);
  const [name, setName] = useState("");
  const [tingkatStres, setTingkatStres] = useState("");

  useEffect(() => {
    getInference();
    getResult();

    setRule(Indicators());
    dispatch({ type: "SET_SIDEBAR", payload: "test" });
  }, []);

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
        `http://${process.env.REACT_APP_HOST}:5000/quiz/inference?id=${id}&sesi=${sesi}`
      );
      const response = data.payload.data.inference;

      let dataAlpha = response.map((data) => data.a_predikat);
      let dataZ = response.map((data) => data.z);

      setScore(zScore(dataAlpha, dataZ));

      setHasil(response);
    } catch (err) {
      console.log(err);
    }
  };

  const getResult = async () => {
    try {
      const { data } = await axiosJWT.get(
        `http://192.168.18.253:5000/result?id=${id}&sesi=${sesi}`
      );
      const response = data.payload.data[0];

      setName(response.nama_user);
      setTingkatStres(response.tingkat_stres);

      console.log(response);
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

  const zScore = (aPredikat, z) => {
    let resultOfZ = 0;
    let resultOfAlpha = 0;
    for (let i = 0; i < z.length; i++) {
      resultOfZ += z[i] * aPredikat[i];
      resultOfAlpha += aPredikat[i];
    }

    return Number((resultOfZ / resultOfAlpha).toFixed(2));
  };

  return hasil ? (
    <>
      <h2 className="text-xl text-gray-600 font-medium mb-5">
        Inference Engine
      </h2>
      <Link to={"/admin/test"}>
        <Button text="← Back" color="primary" />
      </Link>
      {/* inference engine */}
      <div className="w-full mx-auto bg-white rounded-lg my-10">
        <header className="px-5 py-4 border-b border-gray-100">
          {/* <h2 className="text-xl text-gray-600 font-medium">
            Hasil Tes {id} - Sesi {sesi}
          </h2> */}
          <table className="text-xl text-gray-600 font-medium lg:w-1/2">
            <tbody>
              <tr>
                <td>ID User</td>
                <td>:</td>
                <td>{id}</td>
              </tr>
              <tr>
                <td>Nama User</td>
                <td>:</td>
                <td className="capitalize">{name ? name : "Loading ..."}</td>
              </tr>
            </tbody>
          </table>
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

      {/* difuzzyfikasi */}
      <div className="w-full mx-auto bg-white rounded-lg my-10">
        <header className="px-5 py-4 border-b border-gray-100">
          <h2 className="text-xl text-gray-600 font-medium">Fuzzifikasi</h2>
        </header>
        <div className="p-3">
          <div className="overflow-x-auto">
            <code>
              <table>
                <tbody>
                  <tr>
                    <td>Z</td>
                    <td width="40" className="text-center">
                      =
                    </td>
                    <td className="border-b border-gray-500 text-center">
                      {hasil.map((value, i) => (
                        <span key={i}>
                          ({value.a_predikat}
                          <b className="text-red">*</b>
                          {value.z}){i !== 26 ? "+" : ""}
                        </span>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td width="40" className="text-center"></td>
                    <td className="text-center">
                      {hasil.map((value, i) => (
                        <span key={i}>
                          {value.a_predikat}
                          {i !== 26 ? <b className="text-red">*</b> : ""}
                        </span>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>Z</td>
                    <td width="40" className="text-center">
                      =
                    </td>
                    <td className="border-b border-gray-500">
                      {hasil.map((value, i) => (
                        <span key={i}>
                          {value.a_predikat * value.z}
                          {i !== 26 ? <b className="text-red">+</b> : ""}
                        </span>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td width="40" className="text-center"></td>
                    <td className="">
                      {hasil.map((value, i) => (
                        <span key={i}>
                          {value.a_predikat}
                          {i !== 26 ? <b className="text-red">+</b> : ""}
                        </span>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>Z</td>
                    <td width="40" className="text-center">
                      =
                    </td>
                    <td>{score}</td>
                  </tr>
                </tbody>
              </table>
            </code>
          </div>
        </div>
      </div>

      {/* difuzzyfikasi */}
      <div className="w-full mx-auto bg-white rounded-lg my-10">
        <header className="px-5 py-4 border-b border-gray-100">
          <h2 className="text-xl text-gray-600 font-medium">Kesimpulan</h2>
        </header>
        <div className="p-3">
          <p className="text-gray-600 px-2">
            Dari hasil analisisi sistem, didapatkan bahwa{" "}
            <b className="capitalize">{name}</b> memiliki kecenderungan tingkat{" "}
            <b>{tingkatStres}</b>.
          </p>
        </div>
      </div>
    </>
  ) : (
    <span>Loading...</span>
  );
}

export default InferenceAdmin;
