"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const rows = [
  {
    id: 1,
    col1: "E001",
    col2: "John",
    col3: "Doe",
    col4: "Male",
    col5: "1990-05-14",
    col6: "New York",
    col7: "john.doe@example.com",
    col8: "123456",
    col9: "Software Engineer",
    co20: "IT",
    co21: "Jane Smith",
  },
  {
    id: 2,
    col1: "E002",
    col2: "Alice",
    col3: "Brown",
    col4: "Female",
    col5: "1995-07-21",
    col6: "Los Angeles",
    col7: "alice.brown@example.com",
    col8: "789012",
    col9: "Product Manager",
    co20: "Management",
    co21: "John Doe",
  },
];

// Define columns
const columns = [
  { field: "col1", headerName: "Employee No", width: 150 },
  { field: "col2", headerName: "First Name", width: 150 },
  { field: "col3", headerName: "Last Name", width: 100 },
  { field: "col4", headerName: "Gender", width: 100 },
  { field: "col5", headerName: "Date of Birth", width: 120 },
  { field: "col6", headerName: "Location", width: 120 },
  { field: "col7", headerName: "Email", width: 200 },
  { field: "col8", headerName: "EPF NO", width: 100 },
  { field: "col9", headerName: "Designation", width: 150 },
  { field: "co20", headerName: "Department", width: 150 },
  { field: "co21", headerName: "Reporting Person", width: 150 },
  {
    field: "co22",
    headerName: "Action",
    width: 200,
    renderCell: (params) => (
      <Stack direction="row" spacing={1}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<EditIcon />}
          onClick={() => handleUpdate(params.row.id)}
        >
          Update
        </Button>
        <Button
          variant="contained"
          color="error"
          size="small"
          startIcon={<DeleteIcon />}
          onClick={() => handleDelete(params.row.id)}
        >
          Delete
        </Button>
      </Stack>
    ),
  },
];

// Update Function
const handleUpdate = (id) => {
  console.log(`Update User with ID: ${id}`);
  // Implement update logic here
};

// Delete Function
const handleDelete = (id) => {
  console.log(`Delete User with ID: ${id}`);
  // Implement delete logic here
};

export default function Event() {
  return (
    <Box sx={{ width: "100%", p: 2 }}>
      {/* Add User Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <Button variant="contained" color="success" onClick={() => console.log("Add User Clicked")}>
          Add User
        </Button>
      </Box>

      {/* Data Grid Table */}
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </Box>
  );
}
