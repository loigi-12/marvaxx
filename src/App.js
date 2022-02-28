import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/pages/Dashboard";
import Consultation from "./components/pages/Consultation";
import ConsultationForm from "./components/consultationForm";
import Booking from "./components/pages/Booking";
import CustomerForm from "./components/customerForm";
import Messages from "./components/pages/Messages";
import Vaccine from "./components/pages/Vaccine";
import NotFound from "./components/pages/NotFound";
// import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import "./app.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ToastContainer />
        <Topbar />
        <main className="container">
          <Sidebar />
          <Switch>
            <Route path="/bookings" component={Booking} />
            <Route path="/customer/:id" component={CustomerForm} />
            <Route path="/consultations" component={Consultation} />
            <Route path="/consultation/:id" component={ConsultationForm} />
            <Route path="/vaccines" component={Vaccine} />
            <Route path="/messages" component={Messages} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="dashboard" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </div>
    );
  }
}
