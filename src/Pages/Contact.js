import React from "react";
import bgImg from "../assests/Img/Contact.png";
import "../Styles/Contact.css";
import Footer from "./Common/Footer";
import G1 from "../assests/Img/Vector.png";
import G2 from "../assests/Img/Vector (1).png";
import G3 from "../assests/Img/Vector (2).png";
import Hand from "../assests/Img/Handshake 1.png";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
function Contact() {
  return (
    <>
      <div className="div_Contact_container">
        <img src={bgImg} className="w-100 img-fluid" alt="no-img" />
        <div className="Contact_headers">
          <h1 className="text-capitalize">Contact us</h1>
        </div>
      </div>
      <div className="div_contact_middle_container">
        <ul className="contact_ul">
          <li className="text-capitalize">
            Have no more horrible nightmares to onboard defaulters. Contact Us.
          </li>

          <li className="text-capitalize">
          Ample Secure can help you to cut off from fraudsters who oftentimes
            tend to falsify and degrade your company’s dignity & reputation. You
            are not alone. We are here to see, screen and dramatically mitigate
            the risk in profile & background authentication digitally or
            physically. You are worth to convert only those who are valid.
          </li>
          <li className="text-capitalize">
            Raise your concern via a call or an email. We will come back to you
            shortly thereafter.
          </li>
        </ul>
      </div>

      {/* leader container */}
      <Container>
        <div className="Contact_middle_Container my-5">
          <Row className="contact-row">
            <Col sm="12" md="4" lg="4">
              <div className="Contact_Card ">
                <img src={G1} className="img-fluid p-3" alt="no-img" />
                <h3 className="text-center">Get Directions</h3>
                <p className="text-capitalize">
                  CB-201, Office no -54 , Naraina Ring Road, Near Indian oil
                  Petrol Pump New Delhi-110028
                </p>
              </div>
            </Col>
            <Col sm="12" md="4" lg="4">
              <div className="Contact_Card">
                <img src={G2} className="img-fluid p-3" alt="no-img" />
                <h3 className="text-center">Call Us Now</h3>
                <p className="text-capitalize">Telephone :- 04723-787934 Mobile :- 9876543210</p>
              </div>
            </Col>
            <Col sm="12" md="4" lg="4">
              <div className="Contact_Card">
                <img src={G3} className="img-fluid p-3" alt="no-img" />
                <h3 className="text-center">Email Us</h3>
                <p>Abc@gmail.com</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      {/* leader container */}

      {/* Contact with us  form  */}
      <div className="form_Contact_with">
        <div className="Contact_heading">
          <h1 className="text-capitalize">Let’s build a secure world together.</h1>
        </div>

        <Container
          className=" w-50 p-5 container-box"
          style={{ backgroundColor: "#b8d6ee", borderRadius: "30px" }}
        >
          <div className="div_contact_title mb-5">
            <img src={Hand} className="img-fluid " alt="" />
            <h2 className="text-capitalize">Contact With Us</h2>
          </div>

          <div className="div_contact_form">
            <Form>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  {/* <Form.Label>Name</Form.Label> */}
                  <Form.Control type="name" placeholder="Name" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  {/* <Form.Label>Email address</Form.Label> */}
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  {/* <Form.Label>Email address</Form.Label> */}
                  <Form.Control
                    type="Phone Number"
                    placeholder="Phone Number"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  {/* <Form.Label>Email address</Form.Label> */}
                  <Form.Control
                    type="Phone Number"
                    placeholder="Company Name"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  {/* <Form.Label>Email address</Form.Label> */}
                  <Form.Control type="Company Name" placeholder="Country" />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  {/* <Form.Label>Example textarea</Form.Label> */}
                  <Form.Control as="textarea" rows={4} placeholder="Massage" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="I have read and accept the AuthBridge’s"
                  />
                </Form.Group>

                <Button
                  type="submit"
                  style={{
                    padding: "5px 40px",
                    backgroundColor: "#0D4F84",
                    borderRadius: "100px",
                  }}
                >
                  Submit
                </Button>
              </Form>
            </Form>
          </div>
        </Container>
      </div>

      {/* contact with us form */}

      <br />

      <Footer />
    </>
  );
}

export default Contact;

// import React from 'react'

// function Contact() {
//   return (
//     <div>Contact</div>
//   )
// }

// export default Contact
