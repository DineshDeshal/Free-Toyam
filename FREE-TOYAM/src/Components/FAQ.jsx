import React from "react";
import Navbar from "./Navbar";
import "./FAQS.css";
import btlimg1 from "../assets/btlimg1.webp";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";
import "boxicons";

export default function FAQ() {
  const navigate = useNavigate(); // Move useNavigate hook inside the functional component body

  return (
    <>
      <Navbar></Navbar>

      <div className="faq-main">
        <div>
          <div className="faq-sub">
            <h2>Try Unique Way To Advertise Your Brand</h2>
            <div className="first">
              <div className="content">
                <b>Free Toyam</b>, a socially conscious water distribution
                company with a mission to provide free, high-quality water while
                making a positive impact.
                <br />
                <b>
                  Free Water Bottles : Consumers get our water bottles for free.
                </b>
                <b>
                  <br />
                  Unique Advertising : Your brand can be featured on our bottle
                  labels.
                </b>
                <div>
                  <button className="Btn" onClick={() => navigate("/contact")}>
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="faq-sub">
            <h2>How We Will Work?</h2>
            <div className="first">
              <div className="content">
                <b>Choose Your Package </b>: Select from 1,000, 5,000, or more
                bottles. <br /> <b>We Design Your Labe laugil</b> : Provide
                logo, tagline, and info.
              </div>
              <div className="img"></div>
            </div>
          </div>
          <div className="faq-sub">
            <h2>Why advertise with us</h2>
            <div className="first">
              <div className="content">
                <b>Visibility</b> : Thousands of distributed water bottles
                showcase your brand. <br /> <b> Social Impact </b>: Your ad
                supports both your business and charitable causes. <br />
                <b> Affordability </b>: Rates are lower than traditional
                advertising.
              </div>
              <div className="img"></div>
            </div>
          </div>
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
    </>
  );
}
