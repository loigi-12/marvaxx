import React from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import "./booking.css";

export default function Booking() {
  const columns = [
    { field: "id", headerName: "ID", width: 30 },
    {
      field: "name",
      headerName: "Name",
      width: 140,
      renderCell: (customer) => {
        return (
          <Link to={`/bookings/${customer.row.id}`}>{customer.row.name}</Link>
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

  const rows = [
    {
      id: 1,
      name: "Loigi Deliguer",
      age: 23,
      vaccine: "Covid-19",
      schedule: "02/22/22",
      address: "Sto. Nino, San Agustin, Surigao del Sur",
      status: "Booked",
      phone: "09387093842",
    },
    {
      id: 2,
      name: "Romnick Cailing",
      age: 24,
      vaccine: "Anti-Rabies",
      schedule: "02/23/22",
      address: "Bayabas, Surigao del Sur",
      status: "Booked",
      phone: "09387093842",
    },
    {
      id: 3,
      name: "Donald Delumen",
      age: 23,
      vaccine: "Covid-19",
      schedule: "02/24/22",
      address: "Tago, Surigao del Sur",
      status: "Booked",
      phone: "09387093842",
    },
    {
      id: 4,
      name: "Wilson S. Lago",
      age: 27,
      vaccine: "Covid-19",
      schedule: "02/25/22",
      address: "Sto. Nino, San Agustin, Surigao del Sur",
      status: "Booked",
      phone: "09387093842",
    },
    {
      id: 5,
      name: "Nathaniel Orzales",
      age: 24,
      vaccine: "Covid-19",
      schedule: "02/26/22",
      address: "Tandag City, Surigao del Sur",
      status: "Booked",
      phone: "09387093842",
    },
    {
      id: 6,
      name: "Raymart Gallardo",
      age: 27,
      vaccine: "Covid-19",
      schedule: "02/27/22",
      address: "Tandag City, Surigao del Sur",
      status: "Booked",
      phone: "09387093842",
    },
    {
      id: 7,
      name: "Ronald Quijada",
      age: 24,
      vaccine: "Covid-19",
      schedule: "02/28/22",
      address: "Bislig City, Surigao del Sur",
      status: "Booked",
      phone: "09387093842",
    },
    {
      id: 8,
      name: "Mariel Malicse",
      age: 25,
      vaccine: "Covid-19",
      schedule: "02/28/22",
      address: "Tandag City, Surigao del Sur",
      status: "Pending",
      phone: "09387093842",
    },
    {
      id: 9,
      name: "Jalique Diana",
      age: 28,
      vaccine: "Covid-19",
      schedule: "03/1/22",
      address: "San Miguel, Surigao del Sur",
      status: "Booked",
      phone: "09387093842",
    },
  ];

  return (
    <div className="booking" style={{ height: 400, width: "100%" }}>
      <h2 className="title">Booking</h2>

      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        // checkboxSelection
      />
    </div>
  );
}
