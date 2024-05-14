import React from "react";
import Navbar from "./Navbar"; // Corrected import name
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import btl from "../assets/Bottles.png";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const history = useNavigate();

  const handleAdvertisementClick = () => {
    history("/contact");
  };

  return (
    <>
      <Navbar />
      <div className="main">
        <div className="theme">
          Spread your Brands like Water
          <span className="drop">
            <FontAwesomeIcon icon={faDroplet} />
          </span>
        </div>
        <div>
          <button className="Btn" onClick={handleAdvertisementClick}>
            Advertisement With Us
          </button>
        </div>
        <div className="btl-img">
          <img src={btl} alt="" />
        </div>
      </div>
    </>
  );
}
