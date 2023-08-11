import React, { useEffect } from "react";
import bgImg from "../assests/Img/Services.png";
import "../Styles/Services.css";
import Footer from "./Common/Footer";
import vectorone from "../assests/Img/itservice1.svg";
import vectortwo from "../assests/Img/BusinessCase-Normal-02.svg";
import vactorthree from "../assests/Img/BFSI-icon-02.svg";
import imgone from "../assests/Img/Authlead-300x200.webp";

import vector1 from "../assests/Img/fa-solution-icon-application.svg";
import vector2 from "../assests/Img/fa-solution-icon-compliant-employees-staff.svg";
import vector3 from "../assests/Img/fa-solution-icon-insights.svg";
import vector4 from "../assests/Img/fa-solution-icon-compliant.svg";

import imghelp from "../assests/Img/360_F_413785526_lRvWq8odEvaNYzPHedW1P98DbLsxusGV.jpg";

import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="div_Services_container">
        <img src={bgImg} className="w-100 img-fluid" alt="no-img" />
        <div className="Services_headers">
          <h1 className="text-capitalize">Our Services</h1>
          <p className="text-capitalize">
            AmpleSecure provides investigation services in various domains
            ranging from risk investigations for insurance industries to
            personal investigation for individuals.
          </p>
        </div>
      </div>
      {/* / Profile check & Investigation/ */}

      <div className="div_Service_Profile">
        {/* <div className="div_Profile_title"> */}
        {/* <h1> Risk Investigation For Insurance Industry </h1>
          <p>Profile verification is a critical service that AmpleSecure provides to its insurance
industry clients. It involves conducting a thorough investigation into the background and
history of an individual or organization to verify the accuracy of the information provided in
their insurance policy application.
The process typically involves two stages: pre-policy verification and post-policy
verification.
Pre-policy verification is conducted before an insurance policy is issued. During this stage,
AmpleSecure will work closely with the insurance company to verify the identity,
background, and claims history of the policy applicant.
Post-policy verification is conducted after a policy has been issued. During this stage, Ample
Secure will conduct ongoing monitoring and verification of the policyholder&#39;s information to
ensure that it remains accurate and up-to-date.</p> */}
        {/* </div> */}

        {/* <Container>
          <Row>
            <Col sm={12} xl={6} lg={6} md={12}>
              <div className="">
                <img src={imgone} className="img-fluid w-100" alt="no-img" />
              </div>
            </Col>
            <Col sm={12} xl={6} lg={6} md={12}>
              <ul className="service_ul">
                <li>
                  <img
                    src={vectorone}
                    className="img-fluid mx-3"
                    alt="no-img"
                  />
                  <p>
                  In the field of verification and management, not every detail can be verified
physically through the second party. 
                  </p>
                </li>{" "}
                <li>
                  <img
                    src={vectortwo}
                    className="img-fluid mx-3"
                    alt="no-img"
                  />
                  <p>
                  In the insurance sector, a whole bunch of documents are required, from a birth
certificate to official papers.
                  </p>
                </li>{" "}
                <li>
                  <img
                    src={vactorthree}
                    className="img-fluid mx-3"
                    alt="no-img"
                  />
                  <p>
                  An advisor in an insurance company, or any company in general, has an important
task of helping the board members.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container> */}

        <Container>
          <div className="row">
            <div className="col-sm-12 mb-2 col-md-12 col-lg-4">
              <div
                className="card"
                style={{
                  minHeight: "250px",
                  maxHeight: "250px",
                  overflow: "auto",
                }}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    Risk Investigation For Insurance Industry
                  </h5>
                  <p className="card-text text-capitalize">
                    Profile verification is a critical service that AmpleSecure
                    provides to its insurance industry clients.
                  </p>
                  <Link to={"/Risk"} className="btn btn-primary">
                    Read More
                  </Link>
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 mb-2">
              <div
                className="card"
                style={{
                  minHeight: "250px",
                  maxHeight: "250px",
                  overflow: "auto",
                }}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    Employment Verification in Corporates
                  </h5>
                  <p className="card-text text-capitalize">
                    employment verification is a process in which an employer
                    verifies the employment history of a job candidate or an
                    existing employee.
                  </p>
                  <Link to={"/Employment"} className="btn btn-primary">
                    Read More
                  </Link>
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 mb-2">
              <div
                className="card"
                style={{
                  minHeight: "250px",
                  maxHeight: "250px",
                  overflow: "auto",
                }}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    Private Investigations Industry
                  </h5>
                  <p className="card-text text-capitalize">
                    private investigation services typically involve conducting
                    investigations for individuals, businesses, or
                    organizations.
                  </p>
                  <Link to={"/Private"} className="btn btn-primary">
                    Read More
                  </Link>
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* service solution part */}

      {/* <div className="div_service_solutions"> */}
      {/* <div className="div_solutions_title"> */}
      {/* <h1> Mystery shopping/mystery calling </h1>
          <p> Mystery calling, or mystery shopping are done with the purpose to find out what
exactly is going over there at a policy applicant’s place.
In this, the executive of AmpleSecure calls/visits the policy applicant as a stranger
and tries to find more information through questions. Our professionals are experienced in
this, and provide an accurate and sure shot report on their findings.</p> */}
      {/* </div> */}

      {/* <Container>
          <Row>
            <Col sm={12} xl={3} lg={3} md={3}>
              <div className="">
                <img
                  src={vector1}
                  className="img-fluid w-100"
                  style={{ width: "180px", height: "120px" }}
                  alt="no-img"
                />
              </div>
            </Col>
            <Col sm={12} xl={3} lg={3} md={3}>
              <div className="">
                <img
                  src={vector2}
                  className="img-fluid w-100"
                  style={{ width: "180px", height: "120px" }}
                  alt="no-img"
                />
              </div>
            </Col>
            <Col sm={12} xl={3} lg={3} md={3}>
              <div className="">
                <img
                  src={vector3}
                  className="img-fluid w-100"
                  style={{ width: "180px", height: "120px" }}
                  alt="no-img"
                />
              </div>
            </Col>
            <Col sm={12} xl={3} lg={3} md={3}>
              <div className="">
                <img
                  src={vector4}
                  className="img-fluid w-100"
                  style={{ width: "180px", height: "120px" }}
                  alt="no-img"
                />
              </div>
            </Col>
          </Row>
        </Container> */}
      {/* </div> */}

      {/* service solution part */}
      {/* <div className="div_service_solution_help"> */}
      {/* <Container> */}
      {/* <div className="title"> */}
      {/* <h1>Employment Verification in Corporates</h1>
          <p>employment verification is a process in which an employer verifies the employment
history of a job candidate or an existing employee. The process involves contacting the
candidate’s previous employers to confirm the candidate’s job title, employment dates, and
reason for leaving the job.
The purpose is to confirm that the candidate has the experience and skills required
for the job they are applying for. It also helps in identifying any discrepancies in the
candidate’s resume or application. Also, an employee is the basic unit and the biggest asset
of a company, an employee is the reason as to why and how a company reaches greater
heights.</p> */}
      {/* </div> */}
      {/* <Row> */}
      {/* <Col sm={12} xl={6} lg={6} md={6}> */}
      {/* <div className="div_service_help"> */}
      {/* <h1>Private investigations</h1>
                <p>
                private investigation services typically involve conducting investigations for individuals,
businesses, or organizations to uncover information related to personal, legal, or financial
matters. These investigations can include background checks, surveillance, locating missing
persons, investigating infidelity or fraud, and more. Private investigators use a variety of
methods to gather information, including interviewing witnesses, analyzing records and
documents, and conducting physical surveillance. The information they uncover can be
used in legal proceedings, personal matters, or to protect a business&#39;s interests.
                </p> */}
      {/* </div> */}
      {/* </Col> */}
      {/* <Col sm={12} xl={6} lg={6} md={6}> */}
      {/* <div className="div_service_help_img">
                <img src={imghelp} className="img-fluid w-100" alt="" />
              </div> */}
      {/* </Col> */}
      {/* </Row> */}
      {/* </Container> */}
      {/* </div> */}
      {/* service solution part */}

      {/*  */}
      <div className="div_connect">
        <Container className="my-4">
          <Row>
            <Col md={6} sm={12} lg={6}>
              <h2 className="text-start text-capitalize">
                Connect With us to get started with our Authentication Services
              </h2>
            </Col>
            <Col md={6} sm={12} lg={6}>
              <div className="div_connect_button">
                <button className="button">GET IN TOUCH</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/*  */}

      <Footer />
    </>
  );
}

export default Services;
