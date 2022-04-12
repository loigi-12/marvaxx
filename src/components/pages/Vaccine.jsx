import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { DataGrid } from "@mui/x-data-grid";
import { getVaccines, deleteVaccine } from "../../services/vaccineService";

export default function Vaccine() {
  const [vaccines, setVaccines] = useState([]);

  useEffect(() => {
    async function fetchVaccinesAPI() {
      const { data } = await getVaccines();
      setVaccines(data);
    }

    fetchVaccinesAPI();
  });

  const handleDelete = async (vaccine) => {
    const originalVaccines = vaccines;
    // const _vaccines = vaccines.filter((c) => c._id !== vaccine._id);
    // setVaccines(_vaccines);

    try {
      await deleteVaccine(vaccine._id);

      toast.info(`Vaccine \"${vaccine.name}\" deleted successfully.`);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error("This post has already been deleted.");
      }
      setVaccines({ vaccines: originalVaccines });
    }
  };

  const columns = [
    { field: "_id", headerName: "ID", flex: 1 },
    {
      field: "name",
      headerName: "Name",
      width: 140,
      renderCell: (params) => {
        return <Link to={`/vaccine/${params.row._id}`}>{params.row.name}</Link>;
      },
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      renderCell: (params) => {
        return params.row.category.name;
      },
    },
    { field: "numberInStock", headerName: "Stock", flex: 1 },
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
      <Link to="/vaccine/new" style={{ marginBottom: 20 }}>
        Add new Vaccine
      </Link>
      <h2 className="title">Vaccines</h2>
      <DataGrid
        rows={vaccines}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        // checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
}
