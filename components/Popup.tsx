"use client";
import React, { useState, useEffect } from "react";

const Popup = ({ isOpen, buttonName , course , fetchData }: any) => {
  const [coursecode , setcoursecode] = useState('');
  const [coursename , setcoursename] = useState('');
  const [coursecredit, setcoursecredit] = useState(3);
  const [convertcode , setconvertcode] = useState('');
  const [convertname , setconvertname] = useState('');
  const [category , setcategory] = useState('วิชาศึกษาทั่วไป');
  const [convertcredit, setconvertcredit] = useState(3);
  const [indexCourse , setindexCourse] = useState('');

  useEffect(() => {
    if (course) {
      setindexCourse(course._id || '')
      setcoursecode(course.CourseCode || '');
      setcoursename(course.CourseName || '');
      setcoursecredit(course.CourseCredit || 3);
      setconvertcode(course.ConvertCode || '');
      setconvertname(course.ConvertName || '');
      setconvertcredit(course.ConvertCredit || 3);
      setcategory(course.Category || 'วิชาศึกษาทั่วไป')
    }
  }, [course]);

  const handlecoursecredit = (e: { target: { value: any; }; }) => {
    setcoursecredit(e.target.value);
  };

  const handleconvertcredit = (e: { target: { value: any; }; }) => {
    setconvertcredit(e.target.value);
  };

  const handlecategory = (e: { target: { value: any; }; }) => {
    setcategory(e.target.value);
  };

  const handleSave = async () => {
    const requestBody = {
      indexCourse,
      coursecode,
      coursename,
      coursecredit,
      convertcode,
      convertname,
      convertcredit,
      category,
    };
  
    const fetchEndpoint = buttonName === 'add' ? 'addCompareSubject' : 'editCompareSubject';
  
    try {
      const response = await fetch('http://localhost:8080/course/' + fetchEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
  
      if (!response.ok) {
        const errorMessage = await response.text(); // Get the error message from the response body
        throw new Error(`Failed to ${buttonName === 'add' ? 'add' : 'edit'} subject. Error: ${errorMessage}`);
      }
      isOpen(false)
      fetchData()
      console.log(`${buttonName === 'add' ? 'Add' : 'Edit'} request successful`);
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };
  
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
            <p>ชื่อวิชา</p>
            <input
              required 
              value={coursename}
              onChange={(e) => setcoursename(e.target.value)}
              type="text" 
              className="w-full rounded" 
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <p>รหัสวิชา</p>
              <input 
                required
                value={coursecode}
                onChange={(e) => setcoursecode(e.target.value)}
                type="text" 
                className="w-full rounded" 
              />
            </div>
            <div>
              <p>หน่วยกิต</p>
              <select className="w-full rounded" value={coursecredit} onChange={handlecoursecredit}>
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
            <select className="w-full rounded" value={category} onChange={handlecategory}>
              <option value="วิชาศึกษาทั่วไป">วิชาศึกษาทั่วไป</option>
              <option value="วิชาเฉพาะ">วิชาเฉพาะ</option>
            </select>
          </div>
          <div className="my-2">
            <p>ชื่อวิชา</p>
            <input 
              required
              value={convertname}
              onChange={(e) => setconvertname(e.target.value)}
              type="text" 
              className="w-full rounded" 
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <p>รหัสวิชา</p>
              <input 
                required
                value={convertcode}
                onChange={(e) => setconvertcode(e.target.value)}
                type="text" 
                className="w-full rounded" 
              />
            </div>
            <div>
              <p>หน่วยกิต</p>
              <select className="w-full rounded" value={convertcredit} onChange={handleconvertcredit}>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end my-2">
        <button onClick={handleSave} className="p-2 text-sm font-bold text-white bg-blue-700 rounded-lg hover:bg-blue-800 m-2">
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
