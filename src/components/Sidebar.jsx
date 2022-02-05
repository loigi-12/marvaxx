import React from "react";
import { Link } from "react-router-dom";
import {
  Dashboard,
  Book,
  Medication,
  Vaccines,
  CalendarToday,
  Message,
} from "@mui/icons-material";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <Dashboard />
              <Link className="sidebar-nav list-item" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="sidebarListItem">
              <Book />
              <Link className="sidebar-nav list-item" to="/booking">
                Booking
              </Link>
            </li>
            <li className="sidebarListItem">
              <Medication />
              <Link className="sidebar-nav list-item" to="/consultation">
                Consultation
              </Link>
            </li>
            <li className="sidebarListItem">
              <Vaccines />
              <Link className="sidebar-nav list-item" to="/vaccine">
                Vaccine
              </Link>
            </li>
            <li className="sidebarListItem">
              <CalendarToday />
              <Link className="sidebar-nav list-item" to="/calendar">
                Calendar
              </Link>
            </li>
            <li className="sidebarListItem">
              <Message />
              <Link className="sidebar-nav list-item" to="/messages">
                Messages
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
