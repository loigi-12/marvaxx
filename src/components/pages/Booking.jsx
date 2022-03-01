import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { DataGrid } from "@mui/x-data-grid";
import { getCustomers, deleteCustomer } from "../../services/customerService";
import { getCategories } from "../../services/categoryService";
import { getVaccines } from "../../services/vaccineService";
import { link } from "joi";

export default function Booking() {
  const [customers, setCustomers] = useState([]);
  const [vaccines, setVaccines] = useState([]);

  useEffect(() => {
    async function fetchVaccines() {
      const { vaccines } = await getVaccines();
      setVaccines(vaccines);
    }

    async function fetchCustomersAPI() {
      const { data } = await getCustomers();
      setCustomers(data);
    }

    fetchVaccines();
    fetchCustomersAPI();
  });

  const handleDelete = async (customer) => {
    const originalCustomers = customers;
    const _customers = customers.filter((c) => c._id !== customer._id);
    setCustomers(_customers);

    try {
      await deleteCustomer(customer._id);

      toast.info(`Customer \"${customer.name}\" deleted successfully.`);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error("This post has already been deleted.");
      }
      setCustomers({ customers: originalCustomers });
    }
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 30 },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      renderCell: (customer) => {
        return (
          <Link to={`/customer/${customer.row._id}`}>{customer.row.name}</Link>
        );
      },
    },
    { field: "age", headerName: "Age", width: 60 },
    {
      field: "vaccine",
      headerName: "Vaccine",
      flex: 1,
      renderCell: (params) => {
        return params.row.vaccine;
      },
    },
    {
      field: "schedule",
      headerName: "Schedule",
      flex: 2,
      renderCell: (params) => {
        return params.row.schedule;
      },
    },
    { field: "address", headerName: "Address", flex: 1 },
    {
      field: "status",
      headerName: "Status",
      width: 90,
    },
    { field: "phone", headerName: "Phone #", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => {
        return <button onClick={() => handleDelete(params.row)}>Delete</button>;
      },
    },
  ];

  return (
    <div className="page-container" style={{ height: "460px" }}>
      <Link to="/customer/new" style={{ marginBottom: 20 }}>
        Add new customer
      </Link>
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
