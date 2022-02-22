import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { getCustomers, deleteCustomer } from "../../services/customerService";
import { getCategories } from "../../services/categoryService";

export default function Booking() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    async function fetchCustomersAPI() {
      const { data } = await getCustomers();
      setCustomers(data);
    }

    fetchCustomersAPI();
  });

  const columns = [
    { field: "_id", headerName: "ID", width: 30 },
    {
      field: "name",
      headerName: "Name",
      width: 140,
      renderCell: (customer) => {
        return (
          <Link to={`/customer/${customer.row._id}`}>{customer.row.name}</Link>
        );
      },
    },
    { field: "age", headerName: "Age", width: 50 },
    { field: "vaccine", headerName: "Vaccine", width: 100 },
    { field: "schedule", headerName: "Schedule", width: 120 },
    { field: "address", headerName: "Address", width: 270 },
    {
      field: "status",
      headerName: "Status",
      width: 90,
      renderCell: (customer) => {
        return customer.row.status ? "Booked" : "Pending";
      },
    },
    { field: "phone", headerName: "Phone #", width: 100 },
  ];

  return (
    <div className="page-container" style={{ height: "460px" }}>
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
