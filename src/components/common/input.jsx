import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    // <div className="form-group mb-2">
    //   <label htmlFor={name}>{label}</label>
    //   <input {...rest} name={name} id={name} className="form-control" />
    //   {error && <div className="alert alert-danger">{error}</div>}
    // </div>
    <div className="col-span-6">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        {...rest}
        name={name}
        id={name}
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
      {error && <div className="text-red-300">{error}</div>}
    </div>
  );
};

export default Input;
