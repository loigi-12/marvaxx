import React from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";

class CustomersTable extends React.Component {
  columns = [
    { path: "id", label: "ID" },
    {
      path: "name",
      label: "Name",
      content: (customer) => (
        <Link to={`/bookings/${customer._id}`}>{customer.name}</Link>
      ),
    },
    { path: "age", label: "Age" },
    { path: "vaccine", label: "Vaccine" },
    { path: "Schedule", label: "Schedule" },
    { path: "address", label: "Address" },
    { path: "status", label: "Status" },
    { path: "phone", label: "Phone No." },
  ];

  deleteColumn = {
    key: "delete",
    content: (customer) => (
      <button
        onClick={() => this.props.onDelete(customer)}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    ),
  };

  render() {
    const { users, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={users}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default CustomersTable;
