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
              <Link className="sidebar-nav list-item" to="/">
                Dashboard
              </Link>
            </li>
            <li className="sidebarListItem">
              <Book />
              <Link className="sidebar-nav list-item" to="/bookings">
                Bookings
              </Link>
            </li>
            <li className="sidebarListItem">
              <Medication />
              <Link className="sidebar-nav list-item" to="/consultations">
                Consultations
              </Link>
            </li>
            <li className="sidebarListItem">
              <Vaccines />
              <Link className="sidebar-nav list-item" to="/vaccines">
                Vaccines
              </Link>
            </li>
            <li className="sidebarListItem">
              <CalendarToday />
              <Link className="sidebar-nav list-item" to="/calendars">
                Calendars
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
