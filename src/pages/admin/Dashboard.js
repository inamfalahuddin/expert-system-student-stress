import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard() {
  const [dataTes, setDataTes] = useState([]);
  const [dimensi, setDimensi] = useState([]);
  const [userRecent, setUserRecent] = useState([]);
  const [userByScore, setUserByScore] = useState([]);

  const color = ["red", "orange", "blue", "green"];

  useEffect(() => {
    getDataResult();
    getDimensi();
    getUserRecent();
    getUserByScore();
  }, []);

  const getDataResult = async () => {
    try {
      const { data } = await axios.get("http://192.168.18.253:5000/result/");
      const result = data.payload.data;

      const TSRendah = result.filter(
        (val) => val.id_tingkat_stres === "TS01"
      ).length;
      const TSSedang = result.filter(
        (val) => val.id_tingkat_stres === "TS02"
      ).length;
      const TSBerat = result.filter(
        (val) => val.id_tingkat_stres === "TS03"
      ).length;

      setDataTes({
        ringan: TSRendah,
        sedang: TSSedang,
        berat: TSBerat,
        total: result.length,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getDimensi = async () => {
    try {
      const { data } = await axios.get("http://192.168.18.253:5000/dimensi");

      setDimensi(data.payload.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getUserRecent = async () => {
    try {
      const { data } = await axios.get(
        "http://192.168.18.253:5000/result/?recent=3"
      );

      setUserRecent(data.payload.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getUserByScore = async () => {
    try {
      const { data } = await axios.get(
        "http://192.168.18.253:5000/result/?limit=5"
      );

      setUserByScore(data.payload.data);
    } catch (err) {
      console.log(err);
    }
  };

  const data = {
    labels: ["Ringan", "Sedang", "Berat"],
    datasets: [
      {
        label: "Total",
        data: [dataTes.ringan, dataTes.sedang, dataTes.berat],
        backgroundColor: ["#0ea5e9", "#fbbf24", "#ef4444"],
        borderWidth: 0,
        borderRadius: 10,
        offset: 20,
        cutout: "60%",
      },
    ],
  };

  const plugins = [
    {
      beforeDraw: function (chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = (height / 400).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "bottom";
        var text = "Total Konsultasi",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
      afterDraw: function (chart) {
        var width = chart.width,
          height = chart.height + 30,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = (height / 160).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "top";
        var text = dataTes.total,
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];

  return (
    <>
      <h2 className="text-xl text-gray-600 font-medium mb-5">Data Mahasiswa</h2>
      <div className="w-full grid lg:grid-cols-3 text-gray-500 gap-10">
        <div className="bg-white w-full rounded-lg p-5">
          {dataTes.total ? (
            <Doughnut data={data} plugins={plugins} />
          ) : (
            <span>Loading</span>
          )}
        </div>
        <div className="col-span-2">
          <div className="w-full mx-auto bg-white rounded-lg">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="text-xl text-gray-600 font-medium mb-5">
                Data Tes Terbaru
              </h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Name</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Email</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">z-Score</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Stres</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {userByScore.map((value, index) => (
                      <tr
                        key={index}
                        className="animate-fadeInX opacity-0"
                        style={{ animationDelay: `${index / 10}s` }}
                      >
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img
                                className="rounded-full"
                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                                width={40}
                                height={40}
                                alt="Alex Shatov"
                              />
                            </div>
                            <div className="font-medium text-gray-800">
                              {value.nama_user}
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{value.username}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium text-green-500">
                            {value.z_score_total}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-md text-left">
                            {value.tingkat_stres}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl text-gray-600 font-medium mb-5">
              Data Mahasiswa Terbaru
            </h2>
            <span className="text-sm text-gray-400">Lihat semua</span>
          </div>
          <div>
            {userRecent.map((user, index) => (
              <Card key={index} color={color[index]} data={user} />
            ))}
          </div>
        </div>

        <div className="col-span-2">
          <div className="w-full mx-auto bg-white rounded-lg">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="text-xl text-gray-600 font-medium mb-5">
                Dimensi
              </h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          ID Dimensi
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Name</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          Batas Bawah
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          Batas Tengah
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          Batas Atas
                        </div>
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
                          <div className="font-medium text-blue">
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
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
