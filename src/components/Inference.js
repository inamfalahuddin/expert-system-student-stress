import React from "react";

function Inference({ data }) {
  // console.log(data);
  return (
    <>
      <div className="p-5 border rounded-lg mb-5">
        <h2 className="font-bold mb-4">Inferensi</h2>
        <code>
          <div className="overflow-x-auto py-2">
            <table className="w-[500px] lg:w-full text-sm overflow-x-scroll">
              <thead>
                <tr>
                  <td>No.</td>
                  <td className="text-red-500">IF</td>
                  <td>D1</td>
                  <td className="text-red-500">AND</td>
                  <td>D2</td>
                  <td className="text-red-500">AND</td>
                  <td>D3</td>
                  <td className="text-red-500">THEN</td>
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
                {data
                  ? data.map((val, index) => {
                      const alpha = JSON.parse(val.a);
                      const aPredikat = val.a_predikat;
                      console.log(val);

                      console.log(aPredikat);
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td className="text-red-500">IF</td>
                          <td>S[{alpha[0]}]</td>
                          <td className="text-red-500">AND</td>
                          <td>R[{alpha[1]}]</td>
                          <td className="text-red-500">AND</td>
                          <td>T[{alpha[2]}]</td>
                          <td className="text-red-500">THEN</td>
                          <td>S[{aPredikat}]</td>
                          <td className="text-green-500">{val.z}</td>
                        </tr>
                      );
                    })
                  : "Sedang memuat data ..."}
              </tbody>
            </table>
          </div>
        </code>
      </div>
      <div className="p-5 border rounded-lg mb-5 text-sm">
        <p className="text-red-500">Catatan *</p>
        <table className="w-full text-sm">
          <thead>
            <tr>
              <td>R = Rendah</td>
              <td>S = Sedang</td>
              <td>B = Berat</td>
              <td>N = Normal</td>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
}

export default Inference;
