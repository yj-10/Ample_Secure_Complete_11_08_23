import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assests/Img/Logo.png";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import {
  GrLinkedinOption,
  GrFacebookOption,
  GrTwitter,
  GrInstagram,
} from "react-icons/gr";
import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="Footer_box">
          <div className="Footer_content">
            <div className="div_footer_title mb-3">
              <img src={Logo} alt="no-img" />{" "}
            </div>
            <p>
              <AiOutlineHome className="h2" /> &nbsp; Headquarters
              <br />
              Sapna Sangeeta Road, 207, Capital Tower
              <br /> Indore, Madhya Pradesh 452001, IN
            </p>
          </div>
          <div className="Footer_content">
            <div className="div_footer_title mb-3">
              <h1>Link</h1>
            </div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Career">Career</Link>
              </li>
              <li>
                <Link to="/Services">Services</Link>
              </li>
            </ul>
          </div>
          <div className="Footer_content">
            <div className="div_footer_title mb-3">
              <h1>Contact</h1>
            </div>
            <ul>
              <li className="d-flex justify-content-start align-items-center">
                <BsTelephone className="text-white" />
                &nbsp; <Link to="#">9826722500</Link>
              </li>
              <li className="d-flex justify-content-start align-items-center">
                <AiOutlineMail className="text-white" /> &nbsp;
                <Link to="#">amit.gahoi@amplesecure.in</Link>
              </li>
            </ul>

            <div className="d-flex">
              <ul className="div_ul_box d-flex  ">
                <li>
                  <Link to="/">
                    <GrLinkedinOption className="text-white" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <GrFacebookOption className="text-white" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <GrTwitter className="text-white" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <GrInstagram className="text-white" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="div_footer_box">
        <div className="div_footer_copyright">
          <p>© AmpleSecure {new Date().getFullYear()} – All Rights Reserved</p>
        </div>
        <div className="div_footer_privacy_term">
          <Link to="">Privacy Policy</Link>
          <Link to="">Term and Condition</Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
