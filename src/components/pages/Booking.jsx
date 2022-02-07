import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { getCustomers } from "./../../services/fakeCustomerService";
import "../../css/pages.css";

export default function Booking() {
  const [customers, setCustomers] = useState([]);
  const [test, setTest] = useState([]);

  useEffect(() => {
    setCustomers(getCustomers());

    setTest(getCustomers());
  });

  const columns = [
    { field: "_id", headerName: "ID", width: 30 },
    {
      field: "name",
      headerName: "Name",
      width: 140,
      renderCell: (customer) => {
        return (
          <Link to={`/bookings/${customer.row._id}`}>{customer.row.name}</Link>
        );
      },
    },
    { field: "age", headerName: "Age", width: 50 },
    { field: "vaccine", headerName: "Vaccine", width: 100 },
    { field: "schedule", headerName: "Schedule", width: 120 },
    { field: "address", headerName: "Address", width: 270 },
    { field: "status", headerName: "Status", width: 90 },
    { field: "phone", headerName: "Phone #", width: 100 },
  ];

  return (
    <div className="page-container" style={{ height: 400, width: "100%" }}>
      <h2 className="title">Booking</h2>

      <DataGrid
        rows={customers}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        // checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
}
