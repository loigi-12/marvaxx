import React from "react";
import { toast } from "react-toastify";
import { getVaccine, saveVaccine } from "../services/vaccineService";
import { getCategories } from "../services/categoryService";
import Joi from "joi-browser";
import Form from "./common/form";

class VaccineForm extends Form {
  state = {
    data: {
      name: "",
      categoryId: "",
      numberInStock: "",
    },
    categories: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    name: Joi.string().required().label("Name"),
    categoryId: Joi.string().required().label("Category"),
    numberInStock: Joi.number().required().min(0).max(100).label("Stock"),
  };

  async populateCategories() {
    const { data: categories } = await getCategories();
    this.setState({ categories });
  }

  async populateVaccine() {
    try {
      const vaccineId = this.props.match.params.id;
      if (vaccineId === "new") return;

      const { data: vaccine } = await getVaccine(vaccineId);
      this.setState({ data: this.mapToViewModel(vaccine) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populateCategories();
    await this.populateVaccine();
  }

  mapToViewModel(vaccine) {
    return {
      _id: vaccine._id,
      name: vaccine.name,
      categoryId: vaccine.category._id,
      numberInStock: vaccine.numberInStock,
    };
  }

  doSubmit = async () => {
    await saveVaccine(this.state.data);
    toast.success("Vaccine created successfully.");

    this.props.history.push("/vaccines");
  };

  render() {
    return (
      <div className="page-container">
        <h1>Vaccine Form</h1>

        <form onSubmit={this.handleSubmit} style={{ width: "50%" }}>
          {this.renderInput("name", "Name")}
          {this.renderSelect("categoryId", "Category", this.state.categories)}
          {this.renderInput("numberInStock", "Stock")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default VaccineForm;
