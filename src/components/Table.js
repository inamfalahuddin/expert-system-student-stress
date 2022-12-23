import React from "react";

function Table() {
  return (
    <div className="flex flex-col justify-center">
      {/* Table */}
      <div className="w-full bg-white  rounded-lg border border-gray-200">
        <header className="px-5 py-4 border-b border-gray-100">
          <div className="font-semibold text-gray-800">Manage Variable</div>
        </header>
        <div className="overflow-x-auto p-3">
          <table className="table-auto w-full">
            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
              <tr>
                <th />
                <th className="p-2">
                  <div className="font-semibold text-left">ID</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Nama Variabel</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Dari</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Sampai</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Action</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {/* record 1 */}
              <tr>
                <td className="p-2">
                  <input
                    type="checkbox"
                    className="w-5 h-5"
                    defaultValue="id-1"
                  />
                </td>
                <td className="p-2">
                  <div className="font-medium text-gray-800">TS-200</div>
                </td>
                <td className="p-2">
                  <div className="font-medium text-gray-800">Setres Berat</div>
                </td>
                <td className="p-2">
                  <div className="text-left">0</div>
                </td>
                <td className="p-2">
                  <div className="text-left font-medium text-green-500">5</div>
                </td>
                <td className="p-2">
                  <div className="flex justify-center">
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
                  </div>
                </td>
              </tr>
              {/* record 2 */}
              <tr>
                <td className="p-2">
                  <input
                    type="checkbox"
                    className="w-5 h-5"
                    defaultValue="id-2"
                  />
                </td>
                <td className="p-2">
                  <div className="font-medium text-gray-800">TS-200</div>
                </td>
                <td className="p-2">
                  <div>
                    <div className="font-medium text-gray-800">
                      Setres Ringan
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-left">6</div>
                </td>
                <td className="p-2">
                  <div className="text-left font-medium text-green-500">12</div>
                </td>
                <td className="p-2">
                  <div className="flex justify-center">
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
                  </div>
                </td>
              </tr>
              {/* record 3 */}
              <tr>
                <td className="p-2">
                  <input
                    type="checkbox"
                    className="w-5 h-5"
                    defaultValue="id-3"
                  />
                </td>
                <td className="p-2">
                  <div className="font-medium text-gray-800">TS-200</div>
                </td>
                <td className="p-2">
                  <div>
                    <div className="font-medium text-gray-800">
                      Setres Sedang
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-left">12</div>
                </td>
                <td className="p-2">
                  <div className="text-left font-medium text-green-500">24</div>
                </td>
                <td className="p-2">
                  <div className="flex justify-center">
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
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* total amount */}
        <div className="flex justify-end font-bold space-x-4 text-2xl border-t border-gray-100 px-5 py-4">
          <div>Total</div>
          <div className="text-blue-600">
            36 RM <span x-text="total.toFixed(2)" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
