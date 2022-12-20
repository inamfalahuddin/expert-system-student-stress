import React, { useEffect, useState } from "react";
import conclusion from "../data/conclusion.json";

function Inference({ data }) {
  const [rule, setRule] = useState();
  // const [conclusion, setConclusion] = useState([]);

  useEffect(() => {
    setRule(Indicators);
  }, []);
  // console.log(data);
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

  return (
    <>
      <div className="p-5 border rounded-lg mb-5">
        <h2 className="font-bold mb-4">Inferensi</h2>
        <code>
          <div className="overflow-x-auto py-2">
            <table className="w-[600px] text-sm overflow-x-scroll">
              <thead>
                <tr className="border-b">
                  <td className="w-5">No.</td>
                  <td className="text-gray-500">IF</td>
                  <td>Dimensi 1</td>
                  <td className="text-gray-500">AND</td>
                  <td>Dimensi 2</td>
                  <td className="text-gray-500">AND</td>
                  <td>Dimensi 3</td>
                  <td className="text-gray-500">THEN</td>
                  <td>
                    &alpha;-
                    <span className="italic" style={{ fontSize: "11px" }}>
                      predikat
                    </span>
                  </td>
                  <td>&Zeta;i</td>
                </tr>
              </thead>
              <tbody>
                {data ? (
                  data.map((val, index) => {
                    const alpha = JSON.parse(val.a);
                    const aPredikat = val.a_predikat;
                    const z = val.z;

                    return (
                      <tr
                        key={index}
                        className="animate-fadeInX opacity-0"
                        style={{
                          animationDelay: `${index / 50}s`,
                          fontSize: "12px",
                        }}
                      >
                        <td>{index + 1}</td>
                        <td className="text-gray-500">IF</td>
                        <td>
                          {rule[index][0]}[{alpha[0]}]
                        </td>
                        <td className="text-gray-500">AND</td>
                        <td>
                          {rule[index][1]}[{alpha[1]}]
                        </td>
                        <td className="text-gray-500">AND</td>
                        <td>
                          {rule[index][2]}[{alpha[2]}]
                        </td>
                        <td className="text-gray-500">THEN</td>
                        <td>
                          {conclusion[index]}[{aPredikat}]
                        </td>
                        <td className="text-green-500">{z}</td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={3} className="py-10">
                      <span>Sedang memuat data ...</span>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </code>
      </div>
    </>
  );
}

export default Inference;
