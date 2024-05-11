import React from "react";
import Navbar from "./Navbar";
import "./Advertise.css";

import btl1 from '../assets/btl.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPiggyBank,
  faTree,
  faBottleWater,
  faLifeRing,
} from "@fortawesome/free-solid-svg-icons";

export default function Advertise() {
  return (
    <>
      <Navbar></Navbar>
      <div className="Advertise-main">
        <div className="aim-portion">
          <div className="aim">
            <FontAwesomeIcon icon={faPiggyBank} beat className="logo" />
            <div>
              <h2>Save Money</h2>
              <h3>Bottle Cost is less than to limited Advertisement</h3>
            </div>
          </div>
          <div className="aim">
            <FontAwesomeIcon icon={faTree} beat className="logo" />
            <div>
              <h2>Eco Friendly</h2>
              <h3>Our goal is to be net positive by 2032</h3>
            </div>
          </div>
          <div className="aim">
            <FontAwesomeIcon icon={faBottleWater} beat className="logo" />
            <div>
              <h2>Premium Water</h2>
              <h3> very rich water quality with contains Minerals </h3>
            </div>
          </div>
          <div className="aim">
            <FontAwesomeIcon icon={faLifeRing} beat className="logo" />
            <div>
              <h2>human Connected</h2>
              <h3> giving the clean water and fullfill the needs of water </h3>
            </div>
          </div>
        </div>
        <div className="add-portion">
          <div className="btl-img">
            <div className="add-details">
              <img src={btl1} alt="btl1" />
              <p>
                FreeToyam is an innovative advertising platform that utilizes
                premium spring water as a new type of advertising medium while
                prioritizing philanthropy and sustainability. Ten cents from
                each beverage is donated to charity to fight the global water
                crisis. We only need 10% of Indians to choose FreeToyam so we
                can solve the global water crisis permanently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
