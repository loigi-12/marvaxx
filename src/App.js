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
import "./app.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Topbar />
        <main className="container">
          <Sidebar />
          <Switch>
            <Route path="/booking" component={Booking} />
            <Route path="/consultation" component={Consultation} />
            <Route path="/vaccine" component={Vaccine} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/messages" component={Messages} />
            <Route from="/dashboard" component={Dashboard} />
            <Redirect from="/" exact to={"dashboard"} />
          </Switch>
        </main>
      </div>
    );
  }
}
