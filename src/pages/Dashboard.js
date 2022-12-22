import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import NavbarAdmin from "../components/NavbarAdmin";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import LinePercentace from "../components/LinePercentace";

ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard() {
  const data = {
    labels: ["Berat", "Sedang", "Ringan"],
    datasets: [
      {
        label: ["berat", "sedang", "ringan"],
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
    <div
      className={`bg-no-repeat bg-cover bg-top lg:justify-center lg:items-center lg:h-[100vh]`}
    >
      <NavbarAdmin />
      <div className="container p-5  text-gray-700">
        <h1 className="capitalize font-bold my-5">Update data mahasiswa</h1>
        {/* graphic */}
        <div className="w-ful grid lg:grid-cols-12 mb-10">
          <div className="lg:col-span-7 lg:-translate-x-5">
            <Doughnut data={data} plugins={plugins} />
          </div>
          <div className="lg:col-span-5 pt-14">
            <div className="bg-gray-50 rounded-md p-4 mb-5">
              <div className="flex justify-between items-center">
                <span className="font-bold">Berat</span>
                <span className="font-bold text-sm">25%</span>
              </div>
              <LinePercentace percentace="75" color="orange" />
            </div>
            <div className="bg-gray-50 rounded-md p-4 mb-5">
              <div className="flex justify-between items-center">
                <span className="font-bold">Berat</span>
                <span className="font-bold text-sm">25%</span>
              </div>
              <LinePercentace percentace="60" color="blue" />
            </div>
            <div className="bg-gray-50 rounded-md p-4 mb-5">
              <div className="flex justify-between items-center">
                <span className="font-bold">Berat</span>
                <span className="font-bold text-sm">25%</span>
              </div>
              <LinePercentace percentace="25" color="green" />
            </div>
          </div>
        </div>
        {/* terakhir ditambahkan */}
        <div>
          <div className="flex justify-between items-center mb-5">
            <h2 className="capitalize font-bold ">Terakhir kali ditambahkan</h2>
            <span className="text-sm text-gray-400">Lihat semua</span>
          </div>
          <div>
            <Card color="red" />
            <Card color="green" />
            <Card color="blue" />
            <Card color="orange" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
