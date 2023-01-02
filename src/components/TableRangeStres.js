import axios from "axios";
import React, { useEffect, useState } from "react";

function TableRangeStres() {
  const [dataStres, setDataStres] = useState([]);

  useEffect(() => {
    getDataTingkatStres();
  }, []);

  const getDataTingkatStres = async () => {
    try {
      const { data } = await axios.get(
        `http://${process.env.REACT_APP_HOST}:5000/stres`
      );

      setDataStres(data.payload.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
          <tr>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-left">ID Stres</div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-left">Tingkat Stres</div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-left">Dari</div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-left">Sampai</div>
            </th>
          </tr>
        </thead>
        <tbody className="text-sm divide-y divide-gray-100">
          {dataStres.map((data, index) => (
            <tr key={index}>
              <td className="p-2 whitespace-nowrap">
                <div className="font-medium text-gray-800">
                  {data.id_tingkat_stres}
                </div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left font-medium">
                  {data.tingkat_stres}{" "}
                </div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left font-medium text-gray-500">
                  {data.skala_stres - 12}
                </div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left font-medium text-gray-500">
                  {data.skala_stres}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableRangeStres;
