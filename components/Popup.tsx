import React from "react";

const Popup = ({ isOpen, buttonName }: any) => {
  return (
    <div className="fixed top-1/4 left-1/2 -translate-x-1/2 bg-white w-1/3 z-50 rounded-sm shadow-lg p-4 border">
      <div>
        <h1 className="border-b border-gray-400 font-bold text-xl py-1">
          {buttonName === "add"
            ? "เพิ่มข้อมูลวิชาเทียบโอน"
            : "แก้ไขข้อมูลวิชาเทียบโอน"}
        </h1>

        <p className="my-5 text-gray-400 font-bold text-sm">
          ข้อมูลรายวิชาของนักศึกษาที่ต้องการเทียบโอน
        </p>
        <div>
          <div className="my-2">
            <p>หมวดหมู่</p>
            <select className="w-full rounded">
              <option value="general">วิชาทั่วไป</option>
              <option value="main">วิชาเอก</option>
            </select>
          </div>
          <div className="my-2">
            <p>ชื่อวิชา</p>
            <input type="text" className="w-full rounded" />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <p>รหัสวิชา</p>
              <input type="text" className="w-full rounded" />
            </div>
            <div>
              <p>หน่วยกิต</p>
              <select className="w-full rounded">
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>
          </div>
        </div>

        <p className="my-5 text-gray-400 font-bold text-sm">
          ข้อมูลรายวิชาในมหาลัยที่สามารถเทียบโอนได้
        </p>
        <div>
          <div className="my-2">
            <p>หมวดหมู่</p>
            <select className="w-full rounded">
              <option value="general">วิชาทั่วไป</option>
              <option value="main">วิชาเอก</option>
            </select>
          </div>
          <div className="my-2">
            <p>ชื่อวิชา</p>
            <input type="text" className="w-full rounded" />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <p>รหัสวิชา</p>
              <input type="text" className="w-full rounded" />
            </div>
            <div>
              <p>หน่วยกิต</p>
              <select className="w-full rounded">
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end my-2">
        <button className="p-2 text-sm font-bold text-white bg-blue-700 rounded-lg hover:bg-blue-800 m-2">
          SAVE
        </button>
        <button
          className="p-2 text-white bg-red-700 hover:bg-red-400 rounded-lg m-2"
          onClick={() => isOpen(false)}
        >
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default Popup;
