"use client";

import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

import { PlusIcon } from "@heroicons/react/20/solid";

import {
    renderEditStatus,
    renderStatus,
    STATUS_OPTIONS,
  } from './status';

const rows = [
  {
    id: 1,
    col1: "Hello",
    col2: "World",
    col3: "Hello",
    col4: "World",
    col5: "Hello",
    col6: "Pending"
  },
  {
    id: 2,
    col1: "Hello",
    col2: "World",
    col3: "Hello",
    col4: "World",
    col5: "Hello",
    col6: "Rejected"
  },
  {
    id: 3,
    col1: "Hello",
    col2: "World",
    col3: "Hello",
    col4: "World",
    col5: "Hello",
    col6: "Approved"
  },
];

const columns = [
  { field: "col1", headerName: "Claim Id", width: 150 },
  { field: "col2", headerName: "Date Submitted", width: 150 },
  { field: "col3", headerName: "Type", width: 150 },
  { field: "col4", headerName: "Amount", width: 150 },
  { field: "col5", headerName: "Status", width: 150 },
  { field: 'col6',
    headerName: 'Status',
    renderCell: renderStatus,
    renderEditCell: renderEditStatus,
    type: 'singleSelect',
    valueOptions: STATUS_OPTIONS,
    width: 150,
    editable: true, },
];

export default function ClaimHistory(){
  
  return (
    <>
      <Paper elevation={10}
      sx={{
        height: '100%',
        width: '100%',
      }}>
        <div className="flex flex-col items-center">
          <div className="w-5/6 rounded-xl">
            <div className="flex justify-end m-3">
              <button
               
                className="mx-2 bg-(color:--primary) shadow-xl rounded-full w-8 h-8 text-white"
              >
                <PlusIcon
                  aria-hidden="true"
                  className="m-2 text-white sm:size-4 "
                />
              </button>
            </div>
            <div className="flex justify-center mt-2 m-3">
              <div style={{ height: 300, width: "100%" }}>
                <DataGrid rows={rows} columns={columns} />
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </>
  );
}
