import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navber() {
  return (
    <div className="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/advertise">Advertise</Link>
        </li>
        <li>
          <Link to="/" className="logo">
            FREE~<span className="name">TOYAM</span>
          </Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
