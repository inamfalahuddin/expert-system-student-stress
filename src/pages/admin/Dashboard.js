import React from "react";
import Card from "../../components/Card";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import LinePercentace from "../../components/LinePercentace";

ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard() {
  const data = {
    labels: ["Berat", "Sedang", "Ringan"],
    datasets: [
      {
        label: "Total",
        data: [12, 19, 3],
        backgroundColor: ["#ef4444", "#fbbf24", "#0ea5e9"],
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
        var text = "Total User",
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
        var text = "200",
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
          <Doughnut data={data} plugins={plugins} />
        </div>

        <div className="col-span-2">
          <div className="w-full mx-auto bg-white rounded-lg">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="text-xl text-gray-600 font-medium mb-5">
                Data Mahasiswa
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
                    <tr>
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
                            Alex Shatov
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">alexshatov@gmail.com</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">
                          22.40
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-md text-left">Sedang</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg"
                              width={40}
                              height={40}
                              alt="Philip Harbach"
                            />
                          </div>
                          <div className="font-medium text-gray-800">
                            Philip Harbach
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">philip.h@gmail.com</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">
                          24.20
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-md text-left">Sedang</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg"
                              width={40}
                              height={40}
                              alt="Mirko Fisuk"
                            />
                          </div>
                          <div className="font-medium text-gray-800">
                            Mirko Fisuk
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">mirkofisuk@gmail.com</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">
                          12.20
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-md text-left">Sedang</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-08.jpg"
                              width={40}
                              height={40}
                              alt="Olga Semklo"
                            />
                          </div>
                          <div className="font-medium text-gray-800">
                            Olga Semklo
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">olga.s@cool.design</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">
                          30.20
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-md text-left">Sedang</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg"
                              width={40}
                              height={40}
                              alt="Burak Long"
                            />
                          </div>
                          <div className="font-medium text-gray-800">
                            Burak Long
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">longburak@gmail.com</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">
                          33.20
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-md text-left">Sedang</div>
                      </td>
                    </tr>
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
            <Card color="red" />
            <Card color="green" />
            <Card color="blue" />
            <Card color="orange" />
            <Card color="red" />
          </div>
        </div>

        <div className="col-span-2">
          <div className="w-full mx-auto bg-white rounded-lg">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="text-xl text-gray-600 font-medium mb-5">
                Data Dimensi
              </h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">ID</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Variabel</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Tipe</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-gray-800">D001</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium">
                          Perasaan Berubah Ubah
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green">
                          input
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-gray-800">D001</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium">
                          Perasaan Berubah Ubah
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green">
                          input
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-gray-800">D001</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium">
                          Perasaan Berubah Ubah
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green">
                          input
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-gray-800">D001</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium">
                          Perasaan Berubah Ubah
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green">
                          input
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-gray-800">D001</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium">
                          Perasaan Berubah Ubah
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green">
                          input
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-gray-800">D001</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium">
                          Perasaan Berubah Ubah
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green">
                          input
                        </div>
                      </td>
                    </tr>
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
