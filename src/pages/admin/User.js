import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import NavbarAdmin from "../../components/NavbarAdmin2";

function User() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    let hasil = [];
    for (let i = 0; i < 50; i++) {
      hasil.push("coba");
    }
    setUser(hasil);
  }, []);

  return (
    <div
      className={`bg-no-repeat bg-cover bg-top lg:justify-center lg:items-center lg:h-[100vh]`}
    >
      <NavbarAdmin />
      <div className="container p-5  text-gray-700">
        <div className="p-5 border rounded-lg mb-5 bg-primary animate-fadeInX opacity-0">
          <h2 className="font-bold mb-4 text-white">Identitas</h2>
          <table className="w-full">
            <thead>
              <tr key="10" className="text-gray-600">
                <td className="text-white">ID</td>
                <td className="text-white">:</td>
                <td className="text-white">id</td>
              </tr>
            </thead>
            <tbody>
              <tr key="20" className="text-gray-600">
                <td className="text-white ">Nama</td>
                <td className="text-white">:</td>
                <td className="text-white font-bold">nama</td>
              </tr>
            </tbody>
            <tbody>
              <tr key="20" className="text-gray-600">
                <td className="text-white">Email</td>
                <td className="text-white">:</td>
                <td className="text-white">email</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="capitalize font-bold my-5 text-lg">data mahasiswa</h1>
          <div className="my-5 flex justify-end text-sm">
            <Button text="Tambah" color="primary" />
          </div>
        </div>
        <div className="overflow-x-auto overflow-y-scroll max-h-[500px]">
          <table width={700} className="">
            <thead className="bg-gray-100">
              <tr>
                <td className="py-5 px-4">No.</td>
                <td className="py-5 px-4">NIM</td>
                <td className="py-5 px-4">Nama</td>
                <td className="py-5 px-4">Username</td>
                <td className="py-5 px-4">Action</td>
              </tr>
            </thead>
            <tbody>
              {user.map((val, index) => (
                <tr className={`${(index + 1) % 2 === 0 ? "bg-gray-50" : ""}`}>
                  <td className="p-4">{index + 1}.</td>
                  <td>201110057</td>
                  <td>In'am Falahuddin</td>
                  <td>inamfalahuddin@gmail.com</td>
                  <td>
                    <table>
                      <tr>
                        <td>
                          <button className="bg-blue text-white text-sm py-1 px-2 rounded-md">
                            edit
                          </button>
                        </td>
                        <td>
                          <button className="bg-red text-white text-sm py-1 px-2 rounded-md">
                            delete
                          </button>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-5 my-5 border rounded-md">
          <p>Total data mahasiswa 250</p>
        </div>
      </div>
    </div>
  );
}

export default User;
