import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/pages/Dashboard";
import Consultation from "./components/pages/Consultation";
import Booking from "./components/pages/Booking";
import Messages from "./components/pages/Messages";
import Calendar from "./components/pages/Calendar";
import Vaccine from "./components/pages/Vaccine";
import NotFound from "./components/pages/NotFound";
import "./app.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Topbar />
        <main className="container">
          <Sidebar />
          <Switch>
            <Route path="/bookings" component={Booking} />
            <Route path="/bookings/:id" component={Dashboard} />
            <Route path="/consultations" component={Consultation} />
            <Route path="/vaccines" component={Vaccine} />
            <Route path="/calendars" component={Calendar} />
            <Route path="/messages" component={Messages} />
            <Route from="/dashboard" component={Dashboard} />
            <Route from="/not-found" component={NotFound} />
            <Redirect from="/" exact to="dashboard" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </div>
    );
  }
}
