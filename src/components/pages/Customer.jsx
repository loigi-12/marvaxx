import React, { Component } from "react";

export default class Customer extends Component {
  state = {
    customers: [],
    currentPage: 1,
    pageSize: 5,
    searchQuery: "",
    sortColumn: { path: "id", order: "asc" },
  };

  async componentDidMount() {
    const { data: customers } = await getMovies();
    this.setState({ movies, genres });
  }

  render() {
    return <div></div>;
  }
}
