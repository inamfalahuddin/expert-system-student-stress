import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../../components/Button";

function TestResult() {
  const [hasil, setHasil] = useState([]);

  useEffect(() => {
    getHasil();
  }, []);

  const getHasil = async () => {
    try {
      const { data } = await axios.get("http://192.168.18.253:5000/result/");
      setHasil(data.payload.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h2 className="text-xl text-gray-600 font-medium mb-5">
        Hasil Tes Mahasiswa
      </h2>
      <div className="flex items-center justify-between lg:col-span-2 mb-5">
        <p className="max-w-3xl text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <Button text="Tambah" color="primary" />
      </div>
      <div className="w-full mx-auto bg-white rounded-lg">
        <header className="px-5 py-4 border-b border-gray-100">
          <h2 className="text-xl text-gray-600 font-medium mb-5">Hasil Tes</h2>
        </header>
        <div className="p-3">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                <tr>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">
                      ID Hasil Konsultasi
                    </div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">ID User</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Nama User</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Z Score Total</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Sesi</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">
                      Tingkat Stress
                    </div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Action</div>
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
                        {value.id_konsultasi_hasildetail}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="font-medium text-gray-800">
                        {value.id_user}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium">
                        {value.nama_user}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">{value.z_score_total}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">{value.sesi}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">{value.tingkat_stres}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap flex items-center gap-10">
                      <Button text="Edit" color="primary" />
                      <span className="font-medium">
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
    </>
  );
}

export default TestResult;
