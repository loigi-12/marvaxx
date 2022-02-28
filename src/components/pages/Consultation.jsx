import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import {
  getConsultations,
  deleteConsultation,
} from "../../services/consultationService";

export default function Booking() {
  const [Consultations, setConsultations] = useState([]);

  useEffect(() => {
    async function fetchConsultationsAPI() {
      const { data } = await getConsultations();
      setConsultations(data);
    }

    fetchConsultationsAPI();
  });

  const columns = [
    { field: "_id", headerName: "ID", width: 30 },
    {
      field: "name",
      headerName: "Name",
      width: 140,
      renderCell: (Consultation) => {
        return (
          <Link to={`/Consultation/${Consultation.row._id}`}>
            {Consultation.row.name}
          </Link>
        );
      },
    },
    { field: "age", headerName: "Age", width: 50 },
    { field: "purpose", headerName: "Purpose", width: 100 },
    { field: "dateOfInquiry", headerName: "Date", width: 120 },
    { field: "address", headerName: "Address", width: 270 },
    {
      field: "message",
      headerName: "Message",
      width: 90,
    },
    { field: "phone", headerName: "Phone #", width: 100 },
  ];

  return (
    <div className="page-container" style={{ height: "460px" }}>
      <Link to="/consultation/new" style={{ marginBottom: 20 }}>
        Add new Consultation
      </Link>
      <h2 className="title">Consultations</h2>
      <DataGrid
        rows={Consultations}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        // checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
}
