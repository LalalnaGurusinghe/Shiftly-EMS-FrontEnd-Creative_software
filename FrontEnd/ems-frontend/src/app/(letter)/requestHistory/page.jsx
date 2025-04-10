"use client";
import React, { use } from "react";
import { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const requests = [
  {
    id: 123,
    name: "Brooklyn Simmons",
    date: "12 NOV 2024",
    type: "Salary Confirmation Letter",
  },
  {
    id: 567,
    name: "Brooklyn Simmons",
    date: "08 OCT 2024",
    type: "Employment Confirmation Letter",
  },
  {
    id: 567,
    name: "Brooklyn Simmons",
    date: "08 OCT 2024",
    type: "Employment Confirmation Letter",
  },
  {
    id: 567,
    name: "Brooklyn Simmons",
    date: "08 OCT 2024",
    type: "Employment Confirmation Letter",
  },
  {
    id: 567,
    name: "Brooklyn Simmons",
    date: "08 OCT 2024",
    type: "Employment Confirmation Letter",
  },
  {
    id: 567,
    name: "Brooklyn Simmons",
    date: "08 OCT 2024",
    type: "Employment Confirmation Letter",
  },
  {
    id: 890,
    name: "Brooklyn Simmons",
    date: "01 SEP 2024",
    type: "Salary Confirmation Letter",
  },
];

const rowsPerPageOptions = [5, 10];

export default function page() {
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const totalPages = Math.ceil(requests.length / rowsPerPage);

  const handleChangePage = (direction) => {
    setCurrentPage((prev) => {
      if (direction === "prev") return Math.max(prev - 1, 0);
      if (direction === "next") return Math.min(prev + 1, totalPages - 1);
      return prev;
    });
  };

  const currentData = requests.slice(
    currentPage * rowsPerPage,
    (currentPage + 1) * rowsPerPage
  );
  return (
    <>
      <div className="container w-4/5 mt-20 ml-60 mr-0 pt-5 pb-5 pl-20 shadow bg-white rounded-xl">
        <div className="text-4xl text-red-600 font-bold ">Letter</div>
        <div className="sub-path">
          <span className="text-gray-400 mx-2 ">
            Letter <span> ›</span>{" "}
          </span>
          <span className="text-gray-500 mx-2 ">
            {" "}
            Request History <span>›</span>
          </span>
        </div>
      </div>

      <div className="w-auto mr-0 ml-60 mt-10 pt-20 pl-20 pr-30 shadow-md bg-white rounded-2xl">
        <table className="w-full table-auto text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-3 font-semibold">REQUEST ID</th>
              <th className="px-4 py-3 font-semibold">REQUEST BY</th>
              <th className="px-4 py-3 font-semibold">REQUEST ON</th>
              <th className="px-4 py-3 font-semibold">LETTER TYPE</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={index} className="gap-10 border-gray-200 border-b">
                <td className="px-4 py-3">{item.id}</td>
                <td className="px-4 py-3">{item.name}</td>
                <td className="px-4 py-3">{item.date}</td>
                <td className="px-4 py-3">{item.type}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-600">
          <div className="pb-5">
            Rows per page:
            <select
              className="ml-2 border rounded px-2 py-1"
              value={rowsPerPage}
              onChange={(e) => {
                setRowsPerPage(Number(e.target.value));
                setCurrentPage(0);
              }}
            >
              {rowsPerPageOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-4">
            <span>
              {currentPage * rowsPerPage + 1} -{" "}
              {Math.min((currentPage + 1) * rowsPerPage, requests.length)} of{" "}
              {requests.length}
            </span>
            <div className="flex items-center gap-4">
             
              <button
                onClick={() => handleChangePage("prev")}
                disabled={currentPage === 0}
                className="p-1 rounded text-gray-700 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeftIcon fontSize="small" />
              </button>

              <button
                onClick={() => handleChangePage("next")}
                disabled={currentPage >= totalPages - 1}
                className="p-1 rounded text-gray-700 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRightIcon fontSize="small" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
