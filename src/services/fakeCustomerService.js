const customers = [
  {
    _id: "1",
    name: "Loigi Deliguer",
    age: 23,
    vaccine: "Covid-19",
    schedule: "02/22/22",
    address: "Sto. Nino, San Agustin, Surigao del Sur",
    status: "Booked",
    phone: "09387093842",
  },
  {
    _id: "2",
    name: "Romnick Cailing",
    age: 24,
    vaccine: "Anti-Rabies",
    schedule: "02/23/22",
    address: "Bayabas, Surigao del Sur",
    status: "Booked",
    phone: "09387093842",
  },
  {
    _id: "3",
    name: "Donald Delumen",
    age: 23,
    vaccine: "Covid-19",
    schedule: "02/24/22",
    address: "Tago, Surigao del Sur",
    status: "Booked",
    phone: "09387093842",
  },
  {
    _id: "4",
    name: "Wilson S. Lago",
    age: 27,
    vaccine: "Covid-19",
    schedule: "02/25/22",
    address: "Sto. Nino, San Agustin, Surigao del Sur",
    status: "Booked",
    phone: "09387093842",
  },
  {
    _id: "5",
    name: "Nathaniel Orzales",
    age: 24,
    vaccine: "Covid-19",
    schedule: "02/26/22",
    address: "Tandag City, Surigao del Sur",
    status: "Booked",
    phone: "09387093842",
  },
  {
    _id: " 6",
    name: "Raymart Gallardo",
    age: 27,
    vaccine: "Covid-19",
    schedule: "02/27/22",
    address: "Tandag City, Surigao del Sur",
    status: "Booked",
    phone: "09387093842",
  },
  {
    _id: "7",
    name: "Ronald Quijada",
    age: 24,
    vaccine: "Covid-19",
    schedule: "02/28/22",
    address: "Bislig City, Surigao del Sur",
    status: "Booked",
    phone: "09387093842",
  },
  {
    _id: "8",
    name: "Mariel Malicse",
    age: 25,
    vaccine: "Covid-19",
    schedule: "02/28/22",
    address: "Tandag City, Surigao del Sur",
    status: "Pending",
    phone: "09387093842",
  },
  {
    _id: "9",
    name: "Jalique Diana",
    age: 28,
    vaccine: "Covid-19",
    schedule: "03/1/22",
    address: "San Miguel, Surigao del Sur",
    status: "Booked",
    phone: "09387093842",
  },
];

export function getCustomers() {
  return customers;
}

export function getCustomer(id) {
  return customers.find((c) => c._id === id);
}

export function saveCustomer(customer) {
  let customerInDb = customers.find((c) => c._id === customer._id) || {};
  customerInDb.name = customer.name;
  customerInDb.age = customer.age;
  customerInDb.vaccine = customer.vaccine;
  customerInDb.schedule = customer.schedule;
  customerInDb.address = customer.address;
  customerInDb.phone = customer.phone;
  customerInDb.status = customer.status;

  if (!customerInDb._id) {
    customerInDb._id = Date.now().toString();
    customers.push(customerInDb);
  }

  return customerInDb;
}

export function deleteCustomer(id) {
  let customerInDb = customers.find((m) => m._id === id);
  customers.splice(customers.indexOf(customerInDb), 1);
  return customerInDb;
}
