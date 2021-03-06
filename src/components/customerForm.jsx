import React from "react";
import { toast } from "react-toastify";
import Joi from "joi-browser";
import Form from "./common/form";

import { getCustomer, saveCustomer } from "../services/customerService";
import { getVaccines } from "./../services/vaccineService";

class CustomerForm extends Form {
  state = {
    data: {
      name: "",
      age: "",
      vaccine: "",
      schedule: "",
      address: "",
      status: "",
      phone: "",
    },
    vaccines: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    name: Joi.string().required().label("Name"),
    age: Joi.number().required().min(18).max(100).label("Age"),
    vaccine: Joi.string().required().label("Vaccine"),
    schedule: Joi.string().required().label("Schedule"),
    address: Joi.string().required().label("Address"),
    status: Joi.string().required().label("Status"),
    phone: Joi.string().required().label("Phone Number"),
  };

  async populateVaccines() {
    const { data: vaccines } = await getVaccines();
    this.setState({ vaccines });
  }

  async populateCustomer() {
    try {
      const customerId = this.props.match.params.id;
      if (customerId === "new") return;

      const { data: customer } = await getCustomer(customerId);
      this.setState({ data: this.mapToViewModel(customer) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populateVaccines();
    await this.populateCustomer();
  }

  mapToViewModel(customer) {
    return {
      _id: customer._id,
      name: customer.name,
      age: customer.age,
      vaccine: customer.vaccine,
      schedule: customer.schedule,
      address: customer.address,
      status: customer.status,
      phone: customer.phone,
    };
  }

  doSubmit = async () => {
    await saveCustomer(this.state.data);

    this.props.match.params.id === "new"
      ? toast.success("Customer Created successfully.")
      : toast.success("Customer Updated successfully.");

    this.props.history.push("/bookings");
  };

  render() {
    return (
      <div className="page-container">
        <h1>Customer Form</h1>
        <form
          onSubmit={this.handleSubmit}
          style={{ width: "50%" }}
          className="form"
        >
          {this.renderInput("name", "Name")}
          {this.renderInput("age", "Age")}
          {this.renderSelect("vaccine", "Vaccine", this.state.vaccines)}
          {this.renderInput("schedule", "Schedule", "datetime-local")}
          {this.renderInput("address", "Address")}
          {this.renderInput("status", "Status")}
          {this.renderInput("phone", "Phone #")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default CustomerForm;
