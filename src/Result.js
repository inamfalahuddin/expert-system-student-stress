import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./components/Button";

function Result() {
  useState(() => {
    document.title = "ES | Hasil";
  }, []);

  return (
    <>
      <div
        className={`bg-no-repeat bg-cover bg-top lg:flex lg:justify-center lg:items-center lg:h-[100vh]`}
      >
        <div className="container px-5 py-28">
          <div className="p-5 border rounded-lg mb-5 bg-primary">
            <h2 className="font-bold mb-4 text-white">Identitas</h2>
            <table className="w-full">
              <thead>
                <tr key="10" className="text-gray-600">
                  <td className="text-white">ID</td>
                  <td className="text-white">:</td>
                  <td className="text-white">201110057</td>
                </tr>
              </thead>
              <tbody>
                <tr key="20" className="text-gray-600">
                  <td className="text-white">Nama</td>
                  <td className="text-white">:</td>
                  <td className="text-white">In'am Falahuddin</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-5 border rounded-lg mb-5">
            <h2 className="font-bold mb-4">Hasil</h2>
            <table className="w-full">
              <thead>
                <tr key="1" className="text-gray-600 font-bold">
                  <td className="p-2">No</td>
                  <td className="p-2">Variabel</td>
                  <td className="p-2">Z Score</td>
                  <td className="p-2">Tingkat Stres</td>
                </tr>
              </thead>
              <tbody>
                <tr key="2" className="text-gray-600 bg-gray-50">
                  <td className="text-sm p-2">1</td>
                  <td className="text-sm p-2">Penurunan performa</td>
                  <td className="text-sm p-2">25.5</td>
                  <td className="text-sm p-2">Stres Sedang</td>
                </tr>
                <tr key="3" className="text-gray-600">
                  <td className="text-sm p-2">2</td>
                  <td className="text-sm p-2">Penurunan performa</td>
                  <td className="text-sm p-2">25.5</td>
                  <td className="text-sm p-2">Stres Sedang</td>
                </tr>
                <tr key="4" className="text-gray-600 bg-gray-50">
                  <td className="text-sm p-2">3</td>
                  <td className="text-sm p-2">Penurunan performa</td>
                  <td className="text-sm p-2">25.5</td>
                  <td className="text-sm p-2">Stres Sedang</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-5 border rounded-lg mb-5 ">
            <h2 className="font-bold mb-4">Hasil Kesimpulan</h2>
            <p className="text-sm text-gray-600">
              Dari hasil analisisi sistem, didapatkan bahwa anda memiliki
              kecenderungan tingkat <strong>stres yang rendah</strong>.
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
    </>
  );
}

export default Result;
