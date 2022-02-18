import React, { Component } from "react";

class ListBox extends Component {
  render() {
    const { name, label, options, error, ...rest } = this.props;
    return (
      <div className="form-group mb-2">
        <label htmlFor={name}> {label} </label>
        {
          <select {...rest} name={name} id={name} className="form-control">
            <option value="" />
            {options.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </select>
        }
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    );
  }
}

export default ListBox;
