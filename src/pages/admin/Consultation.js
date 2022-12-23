import React from "react";
import Button from "../../components/Button";

function Consultation() {
  return (
    <>
      <h2 className="text-xl text-gray-600 font-medium mb-5">
        Data Konsultasi By Name
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
          <h2 className="text-xl text-gray-600 font-medium mb-5">Dimensi</h2>
        </header>
        <div className="p-3">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                <tr>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">ID Konsultasi</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">ID User</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Nama User</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">D1</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">D2</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">D3</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Sesi</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Action</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100 text-gray-500">
                <tr>
                  <td className="p-2 whitespace-nowrap">
                    <div className="font-medium text-gray-800">D001</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="font-medium text-gray-800">D001</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium">
                      Ibnu Surya Wibowo
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">2.8</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">2.8</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">2.8</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">1</div>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Consultation;
