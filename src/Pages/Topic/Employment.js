import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../Styles/Employment.css";

import E1 from "../../assests/Img/Employment verification.svg";
import E2 from "../../assests/Img/Address check2.png";
import E3 from "../../assests/Img/Academic verification1.png";
import E4 from "../../assests/Img/Reference check.png";
import E5 from "../../assests/Img/Past Employment Check1.png";
import E6 from "../../assests/Img/Criminal record verification.png";
import Footer from "../Common/Footer";
// import R7 from "../../assests/Img/history.png";
// import R8 from "../../assests/Img/Shadowing.jpg";
// import R9 from "../../assests/Img/RTO (return to origin) check.png";
// import R10 from "../../assests/Img/Claim investigation.avif";
// import R11 from "../../assests/Img/Document pickup.avif";

function Employment() {
  return (
    <>
      <Container>
        <div className="div_Employment_title">
          <h1> Employment Verification in Corporates </h1>
        </div>
      </Container>
      {/*  */}

      <div className="Employment_container">
        <Container>
          <div className="Employment_box">
            <Row>
              <Col sm="12" md="12" lg="4">
                <div className="Employment_left_side">
                  <img src={E1} className="img-fluid w-100 mb-3" alt="no-img" />
                </div>
              </Col>
              <Col sm="12" md="12" lg="8">
                <div className="Employment_right_side">
                  <h2>Employment verification</h2>
                  <p>
                    Employment verification is a process in which an employer
                    verifies the employment history of a job candidate or an
                    existing employee. The process involves contacting the
                    candidate’s previous employers to confirm the candidate’s
                    job title, employment dates, and reason for leaving the job.
                    The purpose is to confirm that the candidate has the
                    experience and skills required for the job they are applying
                    for. It also helps in identifying any discrepancies in the
                    candidate’s resume or application. Also, an employee is the
                    basic unit and the biggest asset of a company, an employee
                    is the reason as to why and how a company reaches greater
                    heights. Therefore, it becomes important for a company to
                    know every detail about its employees as they are the reason
                    for the growth. Ample secure provides employment
                    verification services to help employers verify the
                    employment history and helps the employer in making informed
                    decisions when hiring new employees.
                  </p>
                </div>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col sm="12" md="12" lg="8">
                <div className="Employment_right_side">
                  <h2>Address check</h2>
                  <p>
                    Address Check is a process in which an employer verifies the
                    current address of a job candidate or an existing employee.
                    The process involves obtaining the candidate&#39;s or
                    employee&#39;s address details and cross-checking them with
                    the official records to ensure that the address provided is
                    accurate. The purpose of an Address Check is to confirm that
                    the candidate or employee is providing accurate information
                    about their place of residence. Ample Secure provides
                    Address Check services to help employers verify the address
                    details of their candidates and employees. The service
                    includes obtaining the address details, cross-checking them
                    with official records, and providing a comprehensive report
                    to the employer. This helps in ensuring that the employer
                    has accurate information about the employee&#39;s place of
                    residence and can communicate effectively with them.
                  </p>
                </div>
              </Col>
              <Col sm="12" md="12" lg="4">
                <div className="Employment_left_side">
                  <img src={E2} className="img-fluid w-100 mb-3" alt="no-img" />
                </div>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col sm="12" md="12" lg="4">
                <div className="Employment_left_side">
                  <img src={E3} className="img-fluid w-100 mb-3" alt="no-img" />
                </div>
              </Col>
              <Col sm="12" md="12" lg="8">
                <div className="Employment_right_side">
                  <h2>Academic verification</h2>
                  <p>
                    Academic Verification is a process in which an employer
                    verifies the educational qualifications and academic
                    credentials of a job candidate or an existing employee. The
                    process involves contacting the educational institutions
                    where the candidate or employee claims to have studied and
                    verifying the authenticity of their academic qualifications.
                    The purpose of Academic Verification is to confirm that the
                    candidate or employee has the necessary educational
                    qualifications required for the job they are applying for.
                    We often see employees who tamper, edit or manipulate their
                    marksheets in order to get these jobs. Ample Secure provides
                    Academic Verification services to help employers verify the
                    educational qualifications of their candidates and
                    employees. The service includes contacting the educational
                    institutions, verifying the authenticity of the educational
                    qualifications, and providing a comprehensive report to the
                    employer. This helps in ensuring that the employer has
                    accurate information about the educational qualifications of
                    the employee and can make informed decisions when hiring new
                    employees or promoting existing ones.
                  </p>
                </div>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col sm="12" md="12" lg="8">
                <div className="Employment_right_side">
                  <h2>Reference check</h2>
                  <p>
                    Reference Check is a process in which an employer verifies
                    the professional or personal references provided by a job
                    candidate or an existing employee. The process involves
                    contacting the references provided by the candidate or
                    employee and verifying the accuracy of the information
                    provided. The purpose of a Reference Check is to confirm the
                    candidate&#39;s or employee&#39;s work experience, job
                    performance, and character. Ample Secure provides Reference
                    Check services to help employers verify the references
                    provided by their candidates and employees. The service
                    includes contacting the references, verifying the accuracy
                    of the information provided, and providing a comprehensive
                    report to the employer. We also cross-examine how genuine
                    the references are, for how long they know the employee,
                    what are their views regarding the integrity of the
                    employee, etc. This helps in ensuring that the employer has
                    accurate information about the candidate&#39;s or
                    employee&#39;s work experience and can make informed
                    decisions when hiring or promoting employees.
                  </p>
                </div>
              </Col>

              <Col sm="12" md="12" lg="4">
                <div className="Employment_left_side">
                  <img src={E4} className="img-fluid w-100 mb-3" alt="no-img" />
                </div>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col sm="12" md="12" lg="4">
                <div className="Employment_left_side">
                  <img src={E5} className="img-fluid w-100 mb-3" alt="no-img" />
                </div>
              </Col>
              <Col sm="12" md="12" lg="8">
                <div className="Employment_right_side">
                  <h2>Past Employment Check</h2>
                  <p>
                    Past Employment Check is a process in which an employer
                    verifies the employment history of a job candidate or an
                    existing employee. The process involves contacting the
                    previous employers of the candidate or employee and
                    verifying the accuracy of the information provided about
                    their employment history. The purpose of a Past Employment
                    Check is to confirm the candidate&#39;s or employee&#39;s
                    work experience, job performance, and reasons for leaving
                    their previous employment. Ample Secure provides Past
                    Employment Check services to help employers verify the
                    employment history of their candidates and employees. The
                    service includes contacting the previous employers,
                    verifying the accuracy of the information provided, and
                    providing a comprehensive report to the employer. This helps
                    in ensuring that the employer has accurate information about
                    the candidate&#39;s or employee&#39;s work experience and
                    can make informed decisions when hiring or promoting
                    employees. Apart from this, there are also dummy firms in
                    the market that are known for issuing fake experience
                    certificates for monetary benefits.
                  </p>
                </div>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col sm="12" md="12" lg="8">
                <div className="Employment_right_side">
                  <h2>Criminal record verification</h2>
                  <p>
                    Criminal Record Verification is a process in which an
                    employer verifies the criminal history of a job candidate or
                    an existing employee. The process involves conducting a
                    background check on the candidate or employee to determine
                    if they have a criminal record. The purpose of Criminal
                    Record Verification is to identify any potential red flags
                    or concerns related to a candidate&#39;s or employee&#39;s
                    criminal history. Ample Secure provides Criminal Record
                    Verification services to help employers verify the criminal
                    history of their candidates and employees. The service
                    includes conducting a background check, verifying the
                    accuracy of the information provided, and providing a
                    comprehensive report to the employer. This helps in ensuring
                    that the employer has accurate information about the
                    candidate&#39;s or employee&#39;s criminal history and can
                    make informed decisions when hiring or promoting employees.
                  </p>
                </div>
              </Col>

              <Col sm="12" md="12" lg="4">
                <div className="Employment_left_side">
                  <img src={E6} className="img-fluid w-100 mb-3" alt="no-img" />
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

export default Employment;
