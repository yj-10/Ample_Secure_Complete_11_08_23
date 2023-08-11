import React from "react";
import "../../Styles/Risk.css";
import { Col, Container, Row } from "react-bootstrap";
import R1 from "../../assests/Img/Profile Verificatio1.png";
import R2 from "../../assests/Img/Discreet check.1.png";
import R3 from "../../assests/Img/Document verification.png";
import R4 from "../../assests/Img/Advisor verification.jpg";
import R5 from "../../assests/Img/Vendor check.avif";
import R6 from "../../assests/Img/Branch audit.avif";
import R7 from "../../assests/Img/history.png";
import R8 from "../../assests/Img/Shadowing.jpg";
import R9 from "../../assests/Img/RTO (return to origin) check.png";
import R10 from "../../assests/Img/Claim investigation.avif";
import R11 from "../../assests/Img/Document pickup.avif";
import Footer from "../Common/Footer";

function Risk() {
  return (
    <>
      <Container>
        <div className="div_Risk_title mb-2">
          <h1> Risk Investigation For Insurance Industry </h1>
        </div>
      </Container>
      {/*  */}

      <div className="Risk_container">
        <Container>
          <div className="Risk_box">
            <Row>
              <Col sm="12" md="12" lg="4">
                <div className="Risk_left_side">
                  <img src={R1} className="img-fluid w-100 mb-3" alt="no-img" />
                </div>
              </Col>
              <Col sm="12" md="12" lg="8">
                <div className="Risk_right_side">
                  <h2>Profile Verification (Pre and Post Policy)</h2>
                  <p>
                    Profile verification is a critical service that Ample Secure
                    provides to its insurance industry clients. It involves
                    conducting a thorough investigation into the background and
                    history of an individual or organization to verify the
                    accuracy of the information provided in their insurance
                    policy application. The process typically involves two
                    stages: pre-policy verification and post-policy
                    verification. Pre-policy verification is conducted before an
                    insurance policy is issued. During this stage, Ample Secure
                    will work closely with the insurance company to verify the
                    identity, background, and claims history of the policy
                    applicant. Post-policy verification is conducted after a
                    policy has been issued. During this stage, Ample Secure will
                    conduct ongoing monitoring and verification of the
                    policyholder&#39;s information to ensure that it remains
                    accurate and up-to-date.
                  </p>
                </div>
              </Col>
            </Row>

        <hr/>

            <Row>
              <Col sm="12" md="12" lg="8">
                <div className="Risk_right_side">
                  <h2>Discreet check</h2>
                  <p>
                    In the field of verification and management, not every
                    detail can be verified physically through the second party.
                    At times a discreet check is required. To fulfil this
                    service Ample secure sends their executives to the
                    neighbourhood of policy holders in order to cross examine
                    and check the details. Our executives have the job to
                    secretly go around their place, and indirectly investigate
                    details about them. These discreet investigations are needed
                    to make certain details be unsurfaced. Our executives
                    question certain households from the neighbourhood, acting
                    as a complete stranger, about the recent activities of the
                    policy applicant or his/her family. These cross checking
                    processes and the responses obtained from them become
                    important to validate the integrity or claims of the policy
                    applicant.
                  </p>
                </div>
              </Col>

              
              <Col sm="12" md="12" lg="4">
                <div className="Risk_left_side">
                  <img src={R2} className="img-fluid w-100 mb-3" alt="no-img" />
                </div>
              </Col>


              <hr/>



            </Row>

            <Row>
              <Col sm="12" md="12" lg="4">
                <div className="Risk_left_side">
                  <img src={R3} className="img-fluid w-100 mb-3" alt="no-img" />
                </div>
              </Col>
              <Col sm="12" md="12" lg="8">
                <div className="Risk_right_side">
                  <h2>Document verification</h2>
                  <p>
                    In the insurance sector, a whole bunch of documents are
                    required, from a birth certificate to official papers, to
                    apply for a particular policy. And hence, with the
                    requirement of such number of documents, comes the need to
                    verify the authenticity and validity of those documents.
                    There have been cases when applicants fake their ID &amp;
                    Address Proofs, Financial docs or employment details, etc
                    while applying for policies. Document forgery is a common
                    case nowadays. This is where Ample Secure comes in the
                    picture. Our role to cross verify all the documents
                    submitted by an applicant in the insurance company. This is
                    usually done by contacting the issuing authority of those
                    documents like hospitals, government offices, etc. After
                    examining and analysing these documents, their sources and
                    their truthfulness, our team sends a full-fledged report
                    with valid conclusions to insurance companies.
                  </p>
                </div>
              </Col>
            </Row>



          <hr/>



            <Row>
              <Col sm="12" md="12" lg="8">
                <div className="Risk_right_side">
                  <h2>Advisor verification</h2>
                  <p>
                    An advisor in an insurance company, or any company in
                    general, has an important task of helping the board members
                    and the head with precious pieces of advice that are
                    beneficial for the firm. An advisor is an important human
                    resource for an insurance company, as he directly generates
                    the business for it. Since, an advisor has a firm hold and
                    directly or indirectly influences the actions of a company,
                    he/she being truthful and completely trustworthy is
                    necessary. And if there are any integrity issues with the
                    advisor, it will directly affect the business. It will also
                    lead to the harm in reputation as well as monetary loss to
                    the company. Hence, Ample Secure, unlike any verification,
                    comes in role to verify and check the personal details
                    (phone number, address, etc) provided by the advisor. We
                    also examine whether there is any past record of fraudulent
                    activities or not. In addition to this, we also have a role
                    to check whether the details shared by the advisor with the
                    insurance firm is authentic or not. This secures from any
                    internal threat or malice by advisors or employees working
                    in the firm.
                  </p>
                </div>
              </Col>

              <Col sm="12" md="12" lg="4">
                <div className="Risk_left_side">
                  <img src={R4} className="img-fluid w-100 mb-3" alt="no-img" />
                </div>
              </Col>
            </Row>


<hr/>

            <Row>
              <Col sm="12" md="12" lg="4">
                <div className="Risk_left_side">
                  <img src={R5} className="img-fluid w-100 mb-3" alt="no-img" />
                </div>
              </Col>
              <Col sm="12" md="12" lg="8">
                <div className="Risk_right_side">
                  <h2>Vendor check</h2>
                  <p>
                    various small vendors are often hired by big firms for their
                    daily and essential services. This may include courier
                    services, house-keeping services, consultants, service
                    providers, supplier, travel agents and other third-party
                    vendors. These services are provided by various small
                    vendors on a daily basis, and it becomes our duty to do a
                    thorough integrity check about these vendors, we dig every
                    possible details about the vendors and we also cross check
                    the details, market reputation and employment history
                    provided by them. Apart from this we also look into the
                    reputation and past records of these vendors to spot any
                    unusual information. This service secures a company from the
                    regular vendors visiting their offices.
                  </p>
                </div>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col sm="12" md="12" lg="8">
                <div className="Risk_right_side">
                  <h2>Branch audit</h2>
                  <p>
                    branch audit is one of many services where we cross check
                    the ethics and punctuality of a branch of any company. This
                    is usually done with the companies having a pan India
                    coverage and a bunch of branches sprawling over the country.
                    Our executive visits these branches as dummy customers to
                    check whether the rules and regulations are being followed
                    or not. This include checking if there’s any watchman or
                    not, is he keeping track of the visitors, what are the
                    waiting periods, are the employees following the work ethics
                    or not, whether they are sharing the policy information of
                    another person, etc. These verifications and checking can
                    range from anything to anything.
                  </p>
                </div>
              </Col>

              <Col sm="12" md="12" lg="4">
                <div className="Risk_left_side">
                  <img src={R6} className="img-fluid w-100 mb-3" alt="no-img" />
                </div>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col sm="12" md="12" lg="4">
                <div className="Risk_left_side">
                  <img src={R7} className="img-fluid w-100 mb-3" alt="no-img" />
                </div>
              </Col>
              <Col sm="12" md="12" lg="8">
                <div className="Risk_right_side">
                  <h2>Mystery shopping/mystery calling</h2>
                  <p>
                    mystery calling, or mystery shopping are done with the
                    purpose to find out what exactly is going over there at a
                    policy applicant’s place. In this, the executive of Ample
                    Secure calls/visits the policy applicant as a stranger and
                    tries to find more information through questions. Our
                    professionals are experienced in this, and provide an
                    accurate and sure shot report on their findings.
                  </p>
                </div>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col sm="12" md="12" lg="8">
                <div className="Risk_right_side">
                  <h2>Shadowing</h2>
                  <p>
                    Shadowing is a specialized that involves the use of
                    experienced investigators to shadow and observe a particular
                    individual in order to gather information and evidence
                    related to their activities. This service is typically used
                    by companies, organizations, and individuals who suspect
                    that someone is engaging in fraudulent or illegal
                    activities. The shadowing service involves the use of a team
                    of experienced investigators who are trained in surveillance
                    techniques and covert operations. They will follow and
                    observe the target(s) of the investigation without being
                    detected, and they will gather evidence related to their
                    activities.
                  </p>
                </div>
              </Col>

              <Col sm="12" md="12" lg="4">
                <div className="Risk_left_side">
                  <img src={R8} className="img-fluid w-100 mb-3" alt="no-img" />
                </div>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col sm="12" md="12" lg="4">
                <div className="Risk_left_side">
                  <img src={R9} className="img-fluid w-100 mb-3" alt="no-img" />
                </div>
              </Col>
              <Col sm="12" md="12" lg="8">
                <div className="Risk_right_side">
                  <h2>RTO (return to origin) check</h2>
                  <p>
                    The &quot;Return to Origin Check&quot; service provided by
                    Ample Secure is a specialized service that involves
                    investigating the reasons for the return of a parcel to its
                    origin. This service is typically used by companies or
                    individuals who regularly send parcels or packages to their
                    customers or clients. In such cases, the Return to Origin
                    Check service comes into play. Ample Secure&#39;s team will
                    conduct a thorough investigation to determine the reason for
                    the return of the parcel and identify any potential
                    fraudulent or illegal activity involved. This investigation
                    may involve interviews with the sender, recipient, and any
                    other relevant parties, as well as a review of documentation
                    related to the shipment.
                  </p>
                </div>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col sm="12" md="12" lg="8">
                <div className="Risk_right_side">
                  <h2>Claim investigation</h2>
                  <p>
                    Claim investigation is a service that involves investigating
                    insurance claims to determine their authenticity and
                    accuracy. This service is typically used by insurance
                    companies to investigate claims made by their policyholders.
                    When an insurance claim is made, it is important for the
                    insurance company to verify the validity of the claim and
                    ensure that the claim is not fraudulent. This is where the
                    Claim Investigation service comes into play. The
                    investigation may involve gathering evidence, conducting
                    interviews, and reviewing documentation related to the
                    claim. The investigator will also verify the details of the
                    claim, such as the cause of the loss, the extent of the
                    damage, and the value of the loss.
                  </p>
                </div>
              </Col>

              <Col sm="12" md="12" lg="4">
                <div className="Risk_left_side">
                  <img
                    src={R10}
                    className="img-fluid w-100 mb-3"
                    alt="no-img"
                  />
                </div>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col sm="12" md="12" lg="4">
                <div className="Risk_left_side">
                  <img
                    src={R11}
                    className="img-fluid w-100 mb-3"
                    alt="no-img"
                  />
                </div>
              </Col>
              <Col sm="12" md="12" lg="8">
                <div className="Risk_right_side">
                  <h2>Document pickup</h2>
                  <p>
                    Document pickup is one of other services provided by Ample
                    Secure. At certain times, there are policy holders/clients
                    of companies who live in such remote areas where no branch
                    of companies is available within the 100km radius. In this
                    situation, the executives of Ample Secure visit the client’s
                    place, collect the important document from them and then
                    submit it to the company. This service provide hassle free
                    collection and submission of documents, without any security
                    breach.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      {/*  */}
      <Footer />
    </>
  );
}

export default Risk;
