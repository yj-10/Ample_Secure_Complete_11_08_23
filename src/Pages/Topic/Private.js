import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../Styles/Private.css";
import P1 from "../../assests/Img/private investigation1.png";
import Footer from "../Common/Footer";

function Private() {
  return (
    <>
      <Container>
        <div className="div_Private_title">
          <h1> Private Investigations </h1>
        </div>
      </Container>
      {/*  */}

      <div className="Private_container">
        <Container>
        <div className="Private_box">
          <Row>
            <Col sm="12" md="12" lg="4">
              <div className="Private_left_side">
                <img src={P1} className="img-fluid w-100 mb-3" alt="no-img" />
              </div>
            </Col>
            <Col sm="12" md="12" lg="8">
              <div className="Private_right_side">
                <h2>Private verification</h2>
                <p>
                  Private verification is a process in which an employer
                  verifies the employment history of a job candidate or an
                  existing employee. The process involves contacting the
                  candidate’s previous employers to confirm the candidate’s job
                  title, employment dates, and reason for leaving the job. The
                  purpose is to confirm that the candidate has the experience
                  and skills required for the job they are applying for. It also
                  helps in identifying any discrepancies in the candidate’s
                  resume or application. Also, an employee is the basic unit and
                  the biggest asset of a company, an employee is the reason as
                  to why and how a company reaches greater heights. Therefore,
                  it becomes important for a company to know every detail about
                  its employees as they are the reason for the growth. Ample
                  secure provides employment verification services to help
                  employers verify the employment history and helps the employer
                  in making informed decisions when hiring new employees.
                </p>
              </div>
            </Col>
          </Row>
      </div>
        </Container>
      </div>

      <Footer />
    </>
  );
}

export default Private;
