import React from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";

class CustomersTable extends React.Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (booking) => (
        <Link to={`/bookings/${booking._id}`}>{booking.name}</Link>
      ),
    },
    { path: "_id", label: "ID" },
    { path: "name", label: "Name" },
    { path: "age", label: "Age" },
  ];

  deleteColumn = {
    key: "delete",
    content: (movie) => (
      <button
        onClick={() => this.props.onDelete(movie)}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    ),
  };

  render() {
    const { bookings, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={bookings}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default CustomersTable;
