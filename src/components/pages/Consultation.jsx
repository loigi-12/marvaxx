import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { DataGrid } from "@mui/x-data-grid";
import {
  getConsultations,
  deleteConsultation,
} from "../../services/consultationService";

export default function Consultation() {
  const [consultations, setConsultations] = useState([]);

  useEffect(() => {
    async function fetchConsultationsAPI() {
      const { data } = await getConsultations();
      setConsultations(data);
    }

    fetchConsultationsAPI();
  });

  const handleDelete = async (consultation) => {
    const originalConsultation = consultations;
    const _consultations = consultations.filter(
      (c) => c._id !== consultation._id
    );
    setConsultations(_consultations);

    try {
      await deleteConsultation(consultation._id);

      toast.info(`Customer \"${consultation.name}\" deleted successfully.`);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error("This post has already been deleted.");
      }
      setConsultations({ consultations: originalConsultation });
    }
  };

  const columns = [
    // { field: "_id", headerName: "ID", flex: 30 },
    {
      field: "",
      headerName: "#",
      width: 30,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 2,
      renderCell: (params) => {
        return (
          <Link to={`/consultation/${params.row._id}`}>{params.row.name}</Link>
        );
      },
    },
    { field: "age", headerName: "Age", width: 60 },
    { field: "purpose", headerName: "Purpose", flex: 1 },
    { field: "dateOfInquiry", headerName: "Date", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    {
      field: "message",
      headerName: "Message",
      flex: 1,
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
      <Link to="/consultation/new" style={{ marginBottom: 20 }}>
        Add new Consultation
      </Link>
      <h2 className="title">Consultations</h2>
      <DataGrid
        rows={consultations}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        // checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
}
