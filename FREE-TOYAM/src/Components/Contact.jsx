import React from "react";
import Navbar from "./Navbar.jsx";
import contact from "../assets/contact.jpg";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";
import "boxicons";

export default function Contact() {
  return (
    <>
      <Navbar></Navbar>

      <div className="main-contact">
        <div className="sub-contact">
          <div className="contact-img">
            <img src={contact} alt="contact-img" />
          </div>
          <div className="contact-form">
            <form>
              <div className="legend">
                <legend>
                  Talk With Us
                  <span className="contact-logo">
                    <box-icon name="contact" type="solid"></box-icon>
                  </span>
                </legend>
              </div>
              <div className="inputs">
                <input type="text" placeholder="First Name" />
              </div>
              <div className="inputs">
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="inputs">
                <input type="email" placeholder="Email" />
              </div>
              <div className="inputs">
                <input type="text" placeholder="Mob. " />
              </div>
              <div className="inputs">
                <input type="text" placeholder="City" />
              </div>
              <div className="btn">
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="discription">
          <div className="discription-intro">
            Water Is Free To All Yes This Is True Help Us Spread The Word And
            Share Our Movement With Your Friends And Family. Here We Are Working
            As A Advertiser With Water Bottles.
            <div className="webs">
              <a
                href="https://www.linkedin.com/company/free-toyam/"
                target="_blank"
              >
                <box-icon type="logo" name="linkedin"></box-icon>
              </a>
              <a href="https://www.instagram.com/freetoyam/" target="_blank">
                <box-icon name="instagram" type="logo"></box-icon>
              </a>
            </div>
          </div>

          <div className="contact-ids">
            <div className="email">
              <FontAwesomeIcon icon={faGlobe} />
              <a href="mailto:freetoyam@gmail.com">freetoyam@gmail.com</a>
            </div>

            <div className="email">
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:9310935423">9310935423</a>
            </div>
          </div>
        </div>
        <div>
          <div className="copy">&copy; 2024 Free Toyam All Rights Reserved</div>
        </div>
      </div>
    </>
  );
}
