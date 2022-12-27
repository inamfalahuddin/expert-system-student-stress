import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import jwt_decode from "jwt-decode";
import Inference from "../components/Inference";
import Navbar from "../components/Navbar";

function Result() {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [, setExpToken] = useState("");
  const [id, setId] = useState("");
  const [zScore, setZScore] = useState("");

  const [answer, setAnswer] = useState([]);
  const [dimensi, setDimensi] = useState("");
  const [stress, setStress] = useState("");
  const [inference, setInference] = useState([]);
  const [render, setRender] = useState(false);

  const navigate = useNavigate(0);

  useEffect(() => {
    document.title = "ES | Hasil";

    refreshToken();

    if (id !== "") {
      getResult(id);
      getInference(id);
    }
  }, [id]);

  const getResult = async (id) => {
    try {
      const result = await axios.get(
        `http://${process.env.REACT_APP_HOST}:5000/user/result?id=${id}&session=0`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const answer = await axios.get(
        `http://${process.env.REACT_APP_HOST}:5000/quiz/answers?id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAnswer(JSON.parse(answer.data.payload.data.answers.jawaban));
      setDimensi([
        "Perasaan Berubah-ubah",
        "Perasaan Tidak Terkendali",
        "Perassaan Terbebani Lebih",
      ]);

      const idStress = result.data.payload.data.resultOfStress.id_tingkat_stres;

      setZScore(result.data.payload.data.resultOfStress.z_score_total);
      setStress(
        idStress === "TS01"
          ? "ringan"
          : idStress === "TS02"
          ? "sedang"
          : idStress === "TS03"
          ? "berat"
          : "normal"
      );
    } catch (err) {
      console.log(err);
    }
  };

  const getInference = async () => {
    try {
      const { data } = await axios.get(
        `http://${process.env.REACT_APP_HOST}:5000/quiz/inference?id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setInference(data.payload.data);
    } catch (err) {
      console.log(err);
    }
  };

  const refreshToken = async () => {
    try {
      const { data } = await axios.get(
        `http://${process.env.REACT_APP_HOST}:5000/user/token`
      );

      setToken(data.payload.data.accessToken);

      const decoded = jwt_decode(data.payload.data.accessToken);
      setName(decoded.nama_user);
      setId(decoded.id);
      setUsername(decoded.username);
      setExpToken(decoded.exp);

      setRender(true);
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  return render ? (
    <div className={`bg-no-repeat bg-cover bg-top`}>
      <Navbar name={name.split(" ")[0]} />
      <div className="container px-5 pt-5 pb-8">
        <div className="p-5 border rounded-lg mb-5 bg-primary animate-fadeInX opacity-0">
          <h2 className="font-bold mb-4 text-white">Identitas</h2>
          <table className="w-full">
            <thead>
              <tr key="10" className="text-gray-600">
                <td className="text-white">ID</td>
                <td className="text-white">:</td>
                <td className="text-white">{id}</td>
              </tr>
            </thead>
            <tbody>
              <tr key="20" className="text-gray-600">
                <td className="text-white ">Nama</td>
                <td className="text-white">:</td>
                <td className="text-white font-bold">{name}</td>
              </tr>
            </tbody>
            <tbody>
              <tr key="20" className="text-gray-600">
                <td className="text-white">Email</td>
                <td className="text-white">:</td>
                <td className="text-white">{username}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-5 border rounded-lg mb-5 opacity-0 animate-fadeTop">
          <h2 className="font-bold mb-4">Hasil</h2>
          <table className="w-full">
            <thead>
              <tr key="1" className="text-gray-600 font-bold">
                <td className="p-2">No</td>
                <td className="p-2">Variabel</td>
                <td className="p-2">Score</td>
              </tr>
            </thead>
            {answer.length > 0 ? (
              answer.map((val, index) => {
                return (
                  <tbody key={index}>
                    <tr
                      className={`text-gray-600 animate-fadeInX opacity-0 ${
                        (index + 1) % 2 === 1 ? "bg-gray-50" : ""
                      }`}
                      style={{ animationDelay: `${index / 2.56}s` }}
                    >
                      <td className="text-sm p-2 animate-fadeInX ">
                        {index + 1}.
                      </td>
                      <td className="text-sm p-2 animate-fadeInX ">
                        {dimensi[index]}
                      </td>
                      <td className="text-sm p-2 animate-fadeInX ">{val}</td>
                    </tr>
                  </tbody>
                );
              })
            ) : (
              <tbody>
                <tr>
                  <td className="text-sm p-2">Loading ...</td>
                </tr>
              </tbody>
            )}
            <thead>
              <tr>
                <td className="text-md font-bold p-2 pt-7" colSpan={2}>
                  Z Score
                </td>
              </tr>
            </thead>
            <tbody>
              <tr
                className="bg-gray-50 opacity-0 animate-fadeInX"
                style={{ animationDelay: `${4 / 2.56}s` }}
              >
                <td className="text-sm font-bold p-2">Total</td>
                <td className="text-sm font-bold p-2"></td>
                <td className="text-sm font-bold p-2">{zScore}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Inference data={inference.inference} />

        <div className="p-5 border rounded-lg mb-5 ">
          <h2 className="font-bold mb-4">Hasil Kesimpulan</h2>
          <p className="text-sm text-gray-600">
            Dari hasil analisisi sistem, didapatkan bahwa anda memiliki
            kecenderungan tingkat <strong>stres yang {stress}</strong>.
          </p>
        </div>
        <div className="p-5 border rounded-lg mb-5">
          <p className="text-sm text-orange-500">
            <span className="text-red-500">*</span> Bila ada pertanyaan lebih
            lanjut silahkan hubungi pakar psikologi yang bisa anda dapatkan di
            sekitar.
          </p>
        </div>
        <Link
          to={"/"}
          className="opacity-0 flex justify-end animate-fadeInX "
          style={{ animationDelay: ".25s" }}
        >
          <Button text="Finish →" color="primary" />
        </Link>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Result;
