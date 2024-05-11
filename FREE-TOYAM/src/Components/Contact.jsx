import React from "react";
import Navbar from "./Navbar";
import "./Contact.css";
import "boxicons";

import logofreetoyam from "../assets/LOGO.jpeg";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <>
      <Navbar></Navbar>

      <div className="contact-main">
        <div className="contact-submain">
          <h1>Contact With Us For Advertise Your Brand</h1>
          <div className="contactform">
            <fieldset>
              <legend>
                Send us a Message
                <span>
                  <FontAwesomeIcon icon={faHand} shake />
                </span>
              </legend>
              <form>
                <div className="input">
                  <label htmlFor="fname" id="fname"></label>
                  <input
                    type="text"
                    value={name}
                    name="fname"
                    placeholder="First Name"
                  />
                </div>
                <div className="input">
                  <label htmlFor="lname" id="lname"></label>
                  <input
                    type="text"
                    value={name}
                    name="lname"
                    placeholder="Last Name"
                  />
                </div>
                <div className="input">
                  <label htmlFor="name"></label>
                  <input
                    type="number"
                    value={name}
                    name="name"
                    placeholder="phone number"
                  />
                </div>
                <div className="input">
                  <label htmlFor="name"></label>
                  <input
                    type="email"
                    value={name}
                    name="name"
                    placeholder="Email"
                  />
                </div>
                <div className="input">
                  <label htmlFor="cname" id="cname"></label>
                  <input
                    type="text"
                    value={name}
                    name="cname"
                    placeholder="city"
                  />
                </div>
                <div className="btnsubmit">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </fieldset>
          </div>
        </div>
        <div>
          <img src={logofreetoyam} alt="" />
        </div>
      </div>
      <div className="main-bottom">
        <div className="presentation">
          <div className="datails">
            <div className="vision">
              Hey All water is free Help us spread the word and share our
              movement with your friends and family. We are the opposite of
              traditional advertising because we are not annoying. Instead of
              making the audience cringe or run for cover, we put a smile on
              their face, and from that state of happiness is when they'll be
              excited to support your brand.
            </div>
            <div className="webconnection">
              <a href="https://www.instagram.com/freetoyam/" target="_blank">
                <box-icon type="logo" name="instagram"></box-icon>
              </a>

              <a
                href="https://www.linkedin.com/company/free-toyam/"
                target="_blank"
              >
                <box-icon name="linkedin" type="logo"></box-icon>
              </a>
            </div>
            <div className="email">
              <p>
                <a href="mailto:Vikasch2802@gmail.com">Vikasch2802@gmail.com</a>
              </p>

              <p>
                <a href="mailto:khushigrewal1206@gmail.com">
                  khushigrewal1206@gmail.com
                </a>
              </p>
              <p>Mob. 9310935423</p>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p> &copy; 2024 Free Toyam All rights reserved</p>
        </div>
      </div>
    </>
  );
}
