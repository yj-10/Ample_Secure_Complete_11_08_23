import React from "react";
import bgImg from "../assests/Img/Career.png";
import CareerJoin from "../assests/Img/CareerImg.png";
import imgone from "../assests/Img/Rectangle 71.png";
import imgtwo from "../assests/Img/Rectangle 72.png";
import imgthree from "../assests/Img/Rectangle 73.png";
import imgfour from "../assests/Img/Rectangle 74.png";
import "../Styles/Career.css";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "./Common/Footer";
function Career() {
  return (
    <>
      <div className="div_Career_container">
        <img src={bgImg} className="w-100 img-fluid" alt="no-img" />
        <div className="Career_headers">
          <h1 className="text-capitalize">Grow Your Career with First Advantage</h1>
        </div>
      </div>

      <Container>
        <div className="div_Career_middle_container">
          <ul className="Career_ul">
            <li className="mb-3">
              <h1>Join our transformation.</h1>
            </li>
            <li>
              <p className="text-capitalize">
                We don’t stop innovating just because we’re one of the top
                screening solutions providers in the world. We are transforming
                human capital technology, and we’re looking for hands-on,
                collaborative innovators to help us continue to lead this
                charge. Our agile, data-driven work enables our clients and
                people like you to achieve their dreams. Want to make a positive
                impact on global organizations, and accomplish your career goals
                along the way? Come work with the best.
              </p>
            </li>
            <li className="text-center">
              <img src={CareerJoin} className="img-fluid" alt="no-img" />
            </li>
          </ul>
        </div>

          {/* <div className="Drivers">
            <h1>Our Key Drivers</h1> 
          </div> */}








            {/* our key Drivers */}

      <div className="div_OurKey_container">
        <Container>
          <div className="div_Ourkey_title mb-2">
            <h2 className="text-capitalize">Our key Drivers</h2>
          </div>
          <div className="div_Ourkey_box mb-3">
            <Row>
              <Col lg="3" xl="3" sm="12" md="3">
                <div className="div_ourkey_occupation">
                  <h2 className="text-capitalize"> Software Engineer</h2>
                </div>
              </Col>
              <Col lg="6" xl="6" sm="12" md="6">
                <ul className="div_ourkey_ul">
                  <li>
                    <p className="text-capitalize">3 to 5 year</p>
                  </li>
                  <li>
                    <p className="text-capitalize">BTech / MCA</p>
                  </li>
                  <li>
                    <p className="text-capitalize">Indore,india</p>
                  </li>
                </ul>
              </Col>
              <Col lg="3" xl="3" sm="12" md="3">
                <div className="div_Ourkey_Button">
                  <button className="text-capitalize">view</button>
                </div>
              </Col>
            </Row>
          </div>

          <div className="div_Ourkey_box mb-3">
            <Row>
              <Col lg="3" xl="3" sm="12" md="3">
                <div className="div_ourkey_occupation">
                  <h2>UI/UX Lead3</h2>
                </div>
              </Col>
              <Col lg="6" xl="6" sm="12" md="6">
                <ul className="div_ourkey_ul">
                  <li>
                    <p>3 to 5 year</p>
                  </li>
                  <li>
                    <p>BTech / MCA</p>
                  </li>
                  <li>
                    <p className="text-capitalize">Indore,india</p>
                  </li>
                </ul>
              </Col>
              <Col lg="3" xl="3" sm="12" md="3">
                <div className="div_Ourkey_Button">
                  <button>view</button>
                </div>
              </Col>
            </Row>
          </div>


          <div className="div_Ourkey_box mb-3">
            <Row>
              <Col lg="3" xl="3" sm="12" md="3">
                <div className="div_ourkey_occupation">
                  <h2> React JS Tech Lead</h2>
                </div>
              </Col>
              <Col lg="6" xl="6" sm="12" md="6">
                <ul className="div_ourkey_ul">
                  <li>
                    <p>3 to 5 year</p>
                  </li>
                  <li>
                    <p>BTech / MCA</p>
                  </li>
                  <li>
                    <p>Indore,india</p>
                  </li>
                </ul>
              </Col>
              <Col lg="3" xl="3" sm="12" md="3">
                <div className="div_Ourkey_Button">
                  <button>view</button>
                </div>
              </Col>
            </Row>
          </div>




          <div className="div_Ourkey_box mb-3">
            <Row>
              <Col lg="3" xl="3" sm="12" md="3">
                <div className="div_ourkey_occupation">
                  <h2> Manager Sales</h2>
                </div>
              </Col>
              <Col lg="6" xl="6" sm="12" md="6">
                <ul className="div_ourkey_ul">
                  <li>
                    <p>3 to 5 year</p>
                  </li>
                  <li>
                    <p>BTech / MCA</p>
                  </li>
                  <li>
                    <p>Indore,india</p>
                  </li>
                </ul>
              </Col>
              <Col lg="3" xl="3" sm="12" md="3">
                <div className="div_Ourkey_Button">
                  <button>view</button>
                </div>
              </Col>
            </Row>
          </div>





        </Container>
      </div>

      {/* our key Drivers */}











      </Container>
      {/* // life ample secure */}
      <div className="div_Career_LifeAmpleSecure">
        <Container>
          <div className="Career_LifeAmple_title">
            <h1 className="text-capitalize">Life at Ample Secure</h1>
            <p className="text-capitalize">
              We are committed to on-the-job satisfaction of our employees and
              believe that fun at work is equally important. We have 5 clubs
              -AuthCelebrate, AuthInnovate, AuthSocial, AuthWellness and
              AuthWomen that each of our employees can join as per their
              preference and find like-minded individuals to bond with. Besides,
              our teams celebrate annual events and festivals together and go
              for outings together. Additionally, we have an active insurance
              plan in place. We also offer paid maternity and paternity leaves.
            </p>
          </div>
          <Row>
            <Col sm="12" md="6" lg="6">
              <img src={imgone} className="img-fluid p-2 m-3" alt="no-img" />
            </Col>
            <Col sm="12" md="6" lg="6">
              <img src={imgtwo} className="img-fluid p-2 m-3" alt="no-img" />
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="6" lg="6">
              <img src={imgthree} className="img-fluid p-2 m-3" alt="no-img" />
            </Col>
            <Col sm="12" md="6" lg="6">
              <img src={imgfour} className="img-fluid p-2 m-3" alt="no-img" />
            </Col>
          </Row>
        </Container>
      </div>
      {/* // life ample secure */}
      {/*  */}
      {/* <div className="div_connect">
        <Container className="my-4">
          <Row>
            <Col md={6} sm={12} lg={6}>
              <h2 className="text-start text-capitalize">
                Connect with us to get started with our Authentication Services
              </h2>
            </Col>
            <Col md={6} sm={12} lg={6}>
              <div className="div_connect_button">
                <button className="button">GET IN TOUCH</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}
      {/*  */}

      <Footer />
    </>
  );
}

export default Career;


// import React from 'react'

// function Career() {
//   return (
//     <div>Career</div>
//   )
// }

// export default Career