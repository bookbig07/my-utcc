"use client";
import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import Popup from "./Popup";

interface Column {
  id:
    | "CourseCode"
    | "CourseName"
    | "CourseCredit"
    | "ConvertCode"
    | "ConvertName"
    | "ConvertCredit"
    | "Category"
    | "Setting";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "CourseCode", label: "รหัสวิชา", minWidth: 100 },
  { id: "CourseName", label: "ชื่อวิชา", minWidth: 170 },
  { id: "CourseCredit", label: "หน่วยกิต", minWidth: 100 },
  { id: "ConvertCode", label: "รหัสวิชาเทียบโอน", minWidth: 100 },
  { id: "ConvertName", label: "ชื่อวิชาเทียบโอน", minWidth: 170 },
  { id: "ConvertCredit", label: "หน่วยกิตวิชาเทียบโอน", minWidth: 100 },
  { id: "Category", label: "หมวดหมู่", minWidth: 100 },
  { id: "Setting", label: "จัดการข้อมูล", minWidth: 170 },
];

interface Data {
  CourseCode: string;
  CourseName: string;
  CourseCredit: number;
  ConvertCode: string;
  ConvertName: string;
  ConvertCredit: number;
  Category : string;
  _id: string;
  Setting?: string | number; // Add the 'setting' property with an optional string or number value
}

function createData(
  CourseCode: string,
  CourseName: string,
  CourseCredit: number,
  ConvertCode: string,
  ConvertName: string,
  ConvertCredit: number,
  Category : string,
  _id: string
): Data {
  return {
    CourseCode,
    CourseName,
    CourseCredit,
    ConvertCode,
    ConvertName,
    ConvertCredit,
    Category,
    _id,
  };
}

function CourseTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [isOpen, setIsOpen] = useState(false);
  const [buttonName, setButtonName] = useState('');

  const [data, setData] = useState<Data[]>([]);

  const [courseEdit , setcourseEdit] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/course', {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const result = await response.json();
        const formattedData = result.courses.map((item: any) => {
          return createData(
            item.course_code,
            item.course_name,
            item.course_credit,
            item.convert_code,
            item.convert_name,
            item.convert_credit,
            item.category,
            item._id
          );
        });
        setData(formattedData);
      } else {
        console.error('Error fetching data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    fetchData();
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClickButton = (name: string, row?: any) => {
    setButtonName(name);
    setIsOpen(true);
    setcourseEdit('');
    if (name === 'edit' && row) {
      setcourseEdit(row);
    }
  };

  const SettingButton = ({ row }: { row: Data }) => {
    return (
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <button
          type="button"
          className="px-4 py-2 text-sm font-bold text-white bg-green-500 border border-gray-200 rounded-l-lg hover:bg-green-800"
          onClick={() => handleClickButton("edit", row)}
        >
          Edit
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-bold text-white bg-red-500 border border-gray-200 rounded-r-md hover:bg-red-800"
        >
          Delete
        </button>
      </div>
    );
  };

  return (
    <div className="relative max-w-[100rem] ml-auto mr-auto overflow-x-auto">
      {isOpen && 
        <Popup 
          isOpen={setIsOpen} 
          buttonName={buttonName} 
          course={courseEdit} 
          fetchData={handleRefresh}
        />}

      <div className="relative mt-8 mb-4 flex flex-row justify-between">
        <span className=" font-medium text-ms md:text-2xl">
          ข้อมูลตารางการเทียบโอน
        </span>
        <button
          type="button"
          className="px-4 py-2 text-sm font-bold text-white bg-blue-700 rounded-lg hover:bg-blue-800"
          onClick={() => handleClickButton("add")}
        >
          ADD
        </button>
      </div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                            {column.id === "Setting" && (
                              <SettingButton row={row} />
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

export default CourseTable;
