import React from "react";
import { toast } from "react-toastify";
import Joi from "joi-browser";
import Form from "./common/form";

import {
  getConsultation,
  saveConsultation,
} from "../services/consultationService";

class ConsultationForm extends Form {
  state = {
    data: {
      name: "",
      age: "",
      purpose: "",
      dateOfInquiry: "",
      address: "",
      message: "",
      phone: "",
    },
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    name: Joi.string().required().label("Name"),
    age: Joi.number().required().min(18).max(100).label("Age"),
    purpose: Joi.string().required().label("Vaccine"),
    dateOfInquiry: Joi.string().required().label("Date"),
    address: Joi.string().required().label("Address"),
    message: Joi.string().required().min(5).max(500).label("Message"),
    phone: Joi.string().required().label("Phone Number"),
  };

  async populateConsultation() {
    try {
      const consultationId = this.props.match.params.id;
      if (consultationId === "new") return;

      const { data: consultation } = await getConsultation(consultationId);
      this.setState({ data: this.mapToViewModel(consultation) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populateConsultation();
  }

  mapToViewModel(consultation) {
    return {
      _id: consultation._id,
      name: consultation.name,
      age: consultation.age,
      purpose: consultation.purpose,
      dateOfInquiry: consultation.dateOfInquiry,
      address: consultation.address,
      message: consultation.message,
      phone: consultation.phone,
    };
  }

  doSubmit = async () => {
    await saveConsultation(this.state.data);
    toast.success("Consultation created successfully.");

    this.props.history.push("/consultations");
  };

  render() {
    return (
      <div className="page-container">
        <h1>Consultation Form</h1>
        <form onSubmit={this.handleSubmit} style={{ width: "50%" }}>
          {this.renderInput("name", "Name")}
          {this.renderInput("age", "Age")}
          {this.renderInput("purpose", "Purpose")}
          {this.renderInput("dateOfInquiry", "Date", "datetime-local")}
          {this.renderInput("address", "Address")}
          {this.renderInput("phone", "Phone #")}
          {this.renderInput("message", "Message")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default ConsultationForm;
