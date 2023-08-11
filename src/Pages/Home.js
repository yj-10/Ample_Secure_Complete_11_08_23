import React from "react";
import bgImg from "../assests/Img/Background.png";
import "../Styles/Home.css";
import { Card, Col, Container, InputGroup, Row } from "react-bootstrap";
import Footer from "./Common/Footer";
import midImg from "../assests/Img/Rectangle 9.png";
import IndustryImg from "../assests/Img/Rectangle 11.png";
import vec1 from "../assests/Img/Vik- Health Insurance.png";
import vec2 from "../assests/Img/Vik- private-removebg-preview.png";
import vec3 from "../assests/Img/Vik-corporate_company.png";
import T1 from "../assests/Img/history.png"
import T2 from "../assests/Img/our_history 1.png"
import Q2 from "../assests/Img/Quality.jpg"
import C1 from "../assests/Img/Rectangle 26.png"
import Slider from "react-slick";

// import vec4 from "../assests/Img/Rectangle 12 (3).png";
// import vec5 from "../assests/Img/Rectangle 12 (4).png";

import smartImg from "../assests/Img/Rectangle 14.png";
import postImg from "../assests/Img/Rectangle 16.png";
import teamImg1 from "../assests/Img/Rectangle 24.png";
import teamImg2 from "../assests/Img/Rectangle 25.png";
import teamImg3 from "../assests/Img/Rectangle 26.png";
import V1 from "../assests/Img/v1.png";
import V2 from "../assests/Img/v2.png";
import V3 from "../assests/Img/v3.png";
import B1 from "../assests/Img/A-1 Aditya Birla Sun Life Insurance.png";
import B2 from "../assests/Img/A-2 Bajaj Allianz Life Insurance.webp";
import B3 from "../assests/Img/A-3 Bharti Axa Life Insurance.svg";
import B4 from "../assests/Img/A-4 CANARA HSBC Life Insurance.png";
import B5 from "../assests/Img/A-5 Edelweiss Tokio Life Insurance.jpg";
import B6 from "../assests/Img/A-6 HDFC Life Insurance.svg";
import B7 from "../assests/Img/A-7 ICICI Prudential Life Insurance.png";
import B8 from "../assests/Img/A-8 Max Life Insurance.svg";
import B9 from "../assests/Img/A-9 PNB Metlife Insurance.jpg";
import B10 from "../assests/Img/A-10 Reliance Nippon Life Insurance.png";
import B11 from "../assests/Img/A-11 SBI Life Insurance.png";
import B12 from "../assests/Img/A-12 Shriram Life Insurance.webp";
import B13 from "../assests/Img/A-13 Star Union Life Insurance.png";
import B14 from "../assests/Img/A-14 TATA AIA Life Insurance.png";

import R3 from "../assests/Img/R3.png";


function Home() {
  var settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,

    cssEase:"linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ]
  };
  return (
    <>
      {/* //Header  */}
      <div className="div_home_container">
        <img src={bgImg} className="w-100 img-fluid" alt="no-img" />

        <div className="Home_headers">
          <h1 className="text-capitalize">Ample Secure, a risk investigation company</h1>
          <p className="text-capitalize">Deals with wide aspects of investigation in
insurance sector, employment verifications, as well as personal investigations in 10+ states
over the country. With an experience of 16 years and 3 lakhs+ cases, their vigilant team
provides you effective, efficient and innovative solutions with their hawk eye like skills and
professionalism.</p>
        </div>
      </div>
      {/* Headers */}

      {/* eclipse */}
      <div className="div_home_ellipse_container">
        <Container>
          <ul className="ellipse_ul">
            <li>
              <div className="ellipse_box">
                <img src={V1} />
                <h1>Transparency</h1>
                {/* <p>
                Our work deals with minute details of investigation and sharing.
                </p> */}
              </div>
            </li>
            <li>
              <div className="ellipse_box">
                <img src={V2} />
                <h1>Integerity</h1>
                {/* <p>
                  Solve on-risk/underwriting identified cases with concrete
                  facts.
                </p> */}
              </div>
            </li>
            <li>
              <div className="ellipse_box">
                <img src={V3} />
                <h1>Quality</h1>
                {/* <p>
                  Swiftly tap, identify and administer what is needful for
                  screening
                </p> */}
              </div>
            </li>
          </ul>


     


        </Container>
      </div>

      {/* eclipse */}

      {/* middle Container */}
      {/* <div className="div_home_middle_container"> */}
        {/* <Container> */}
          {/* <Row> */}
            {/* <Col md="4" lg="4" sm="12"> */}
              {/* <img
                src={midImg}
                style={{ width: "auto", height: "auto" }}
                className="img-fluid"
                alt="no-img"
              /> */}
            {/* </Col> */}
            {/* <Col md="8" sm="12" lg="8"> */}
              {/* <div className="div_home_middle_card"> */}
                {/* <h1>Director’s Message</h1> */}
                {/* <h1>Streamline Your Application Journey</h1> */}
                {/* <p> */}
                {/* <h6>Dear Visitors,</h6> */}
{/* I am proud to welcome you to Ample Secure, a company that I founded with the vision of
becoming the leading risk investigation company in India and beyond. Since our inception
in 2020, we have been working tirelessly to provide the highest quality services to our
clients in the insurance industry, corporate sector, and private investigations.<br/><br/> */}
{/* At Ample Secure, we believe in setting the highest standards for ourselves and our industry.
We follow a zero-tolerance policy for any unethical or illegal practices, and strict actions are
taken against anyone found guilty. Our commitment to transparency, integrity, and quality
is the foundation of our success, and we strive to maintain these values in all our business
dealings.<br/><br/>
Our goal is to make Ample Secure a pan-India company that can serve clients across the
country with the same level of excellence and professionalism. We are constantly working
to expand our reach and capabilities, and we are proud of the progress we have made so
far.<br/><br/>
However, our vision for Ample Secure does not stop at India. We aspire to be a global
leader in the risk investigation industry, and we are committed to achieving this goal
through hard work, dedication, and continuous improvement. Our focus is on providing
exceptional services to our clients, developing our team of experts, and staying ahead of
the curve in terms of technology and innovation.<br/><br/>
We are not satisfied with being mediocre or average. We aim to be the best, and we are
confident that with our team of experienced professionals and our commitment to
excellence, we can achieve our goals.<br/><br/>

Thank you for considering Ample Secure for your risk investigation needs. We look forward
to serving you with the highest level of professionalism, quality, and integrity.<br/>

Best regards,<br/><br/>
<b>Amit Gahoi<br/>
Founder and Director<br/> Ample Secure</b> */}
                {/* </p> */}
                {/* <button>Read More</button> */}
              {/* </div> */}
            {/* </Col> */}
          {/* </Row> */}
        {/* </Container> */}
      {/* </div> */}
      {/* Middle Container */}

      {/* Industry */}
      <div className="div_home_industry">
        <div className="Industry_headers">
          <h1>Industries We Serve!</h1>
          <div className="industry_cards">
            <ul>
              <li>
                <img src={vec1} className="img-fluid w-100" alt="nog-img" />
              <h2>insurance industry</h2>
              </li>
              <li>
                <img src={vec3} className="img-fluid w-100" alt="nog-img" />
             <h2> corporate sectors</h2>
              </li>
              <li>
                <img src={vec2} className="img-fluid w-100" alt="nog-img" />
                <h2> private sectors</h2>
                
              </li>
              {/* <li>
                <img src={""} className="img-fluid" alt="nog-img" />
              </li>{" "}
              <li>
                <img src={""} className="img-fluid" alt="nog-img" />
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      {/* Industry */}
      <Container></Container>
      <Container>
        <div className="div_home_technology_container">
          <Row className="bg">
            <Col sm="12" md="12" xl="6" lg="6" className="px-2">
              <div className="div_tech_box">
                <h1>About Ample Secure</h1>
                {/* <h1>Smart Analytics & Reporting</h1> */}
                <p className="text-capitalize">
                At Ample Secure, we understand that protecting your assets and ensuring your safety is a
top priority. That&#39;s why we offer comprehensive risk investigation and management
services to clients across the insurance industry, as well as corporate and private sectors.
Founded by Mr. Amit Gahoi, Ample Secure has quickly become a trusted name in the
industry, thanks to our commitment to providing high-quality services that are tailored to
meet the unique needs of each client.<br/><br/>
At Ample Secure, we are dedicated to providing our clients with the highest level of service
and professionalism. We work closely with our clients to understand their specific needs
and concerns, and we develop customized solutions that meet those needs and exceed
their expectations.<br/><br/>
Whether you&#39;re looking to protect your business assets, investigate a claim, or ensure the
safety of your family, Ample Secure is here to help. Contact us today to learn more about
our services and how we can help you mitigate risk and protect your interests.
                </p>
                {/* <button>learn More</button> */}
              </div>
              
            </Col>
        <Col sm="12" md="12" xl="6" lg="6" className="px-3" >
              <img src={smartImg} className="img-fluid   w-100 " alt="no-img" style={{marginTop:"55px"}}   />
            </Col>
          </Row>
          <Row>
            {/* <Col sm="12" md="6" xl="6" lg="6" className="my-5">
              <img src={postImg} className="img-fluid my-5 py-2" alt="no-img" />
            </Col> */}
            {/* <Col sm="12" md="6" xl="6" lg="6" className="my-5"> */}
              
              {/* <div className="div_tech_box"> */}
                {/* <h1>OUR VISION</h1> */}
                {/* <h1>Ongoing Post-Hire Monitoring Solution</h1> */}
                {/* <p>
                Ample Secure&#39;s vision is to be the leading risk investigation and management company in
India, dedicated to ensuring the development and success of every single company in the
country. We believe that the growth of businesses is crucial to the progress of the nation,
and we are committed to playing our part in protecting them from conspirators and
swindlers.<br/><br/>
At Ample Secure, we are passionate about protecting our clients&#39; interests and helping
them achieve their goals. We believe that by providing high-quality risk investigation and
management services, we can help companies mitigate risks and achieve greater success.
Ultimately, our vision is to be a trusted partner to businesses across India, and to help them
navigate the complex and ever-changing world of risk management with confidence and
peace of mind.
                </p> */}
                {/* <button>learn More</button> */}
              {/* </div> */}
            {/* </Col> */}


            <hr/>


            <Row>
              <Col sm="12" md="12" lg="4">
                <div className="Transparency_left_side">
                  <img src={T1} className="img-fluid w-100 mb-3" alt="no-img" />
                </div>
              </Col>
              <Col sm="12" md="12" lg="8">
                <div className="Transparency_right_side">
                  <h2>Transparency</h2>
                  <p className="text-capitalize">
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
                <div className="Integrity_right_side">
                  <h2>Integrity</h2>
                  <p className="text-capitalize">
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

              <Col sm="12" md="12" lg="4">
                <div className="Integrity_left_side">
                  <img src={T2} className="img-fluid w-100 mb-3" alt="no-img" />
                </div>
              </Col>
            </Row>


            <hr/>


            <Row>
              <Col sm="12" md="12" lg="4">
                <div className="Quality_left_side">
                  <img src={Q2} className="img-fluid w-100 mb-3" alt="no-img" />
                </div>
              </Col>
              <Col sm="12" md="12" lg="8">
                <div className="Quality_right_side">
                  <h2>Quality</h2>
                  <p className="text-capitalize">
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











          </Row>
        </div>
      </Container>










{/* Start our clint Container */}

{/* <div className="col-lg-12">
<div className="title">
<h4 className="text-center h3_title">Our Clint</h4>

</div>

</div> */}









{/* Our Client*/}

<hr/>
<div className="Our_Client_Container">
        <Container>
          <div className="Our_Client_title">
            <h1>Our Client</h1>
          </div>

          <Row className="d-flex justify-content-center ">
            <Col lg="3" md="3" xs="6" sm="6">
              <div className="Client_img">
                <div className="Client_img_box">
                  <img src={B1} className="img-fluid w-100" style={{height:"80px"}} />
                </div>   
              </div>
            </Col>
            <Col lg="3" md="3" xs="6" sm="6" >
              <div className="Client_img">
                <div className="Client_img_box">
                
                  <img src={B5} className="img-fluid w-100" style={{height:"80px"}}/>
                </div>   
              </div>
            </Col>
            <Col lg="3" md="3" xs="6" sm="6">
              <div className="Client_img">
                <div className="Client_img_box">
                  <img src={B10} className="img-fluid w-100" style={{height:"80px"}}/>
                </div>   
              </div>
            </Col>
            
            <Col lg="3" md="3" xs="6" sm="6">
              <div className="Client_img">
                <div className="Client_img_box">
                  <img src={B3} className="img-fluid w-100" style={{height:"80px"}}/>
                </div>   
              </div>
            </Col>
            <Col lg="3" md="3" xs="6" sm="6">
              <div className="Client_img">
                <div className="Client_img_box">
                  <img src={B2} className="img-fluid w-100" style={{height:"80px"}}/>
                </div>   
              </div>
            </Col>

            <Col lg="3" md="3" xs="6" sm="6">
              <div className="Client_img">
                <div className="Client_img_box">
                  <img src={B6} className="img-fluid w-100" style={{height:"80px"}}/>
                </div>   
              </div>
            </Col>

            <Col lg="3" md="3" xs="6" sm="6">
              <div className="Client_img">
                <div className="Client_img_box">
                  <img src={B8} className="img-fluid w-100" style={{height:"80px"}}/>
                </div>   
              </div>
            </Col>

            <Col lg="3" md="3" xs="6" sm="6">
              <div className="Client_img">
                <div className="Client_img_box">
                  <img src={B11} className="img-fluid w-100" style={{height:"80px"}}/>
                </div>   
              </div>
            </Col>

            <Col lg="3" md="3" xs="6" sm="6">
              <div className="Client_img">
                <div className="Client_img_box">
                  <img src={B9} className="img-fluid w-100" style={{height:"80px"}}/>
                </div>   
              </div>
            </Col>

            <Col lg="3" md="3" xs="6" sm="6">
              <div className="Client_img">
                <div className="Client_img_box">
                  <img src={B4} className="img-fluid w-100" style={{height:"80px"}}/>
                </div>   
              </div>
            </Col>

            <Col lg="3" md="3" xs="6" sm="6">
              <div className="Client_img">
                <div className="Client_img_box">
                  <img src={B7} className="img-fluid w-100" style={{height:"80px"}}/>
                </div>   
              </div>
            </Col>

            <Col lg="3" md="3" xs="6" sm="6">
              <div className="Client_img">
                <div className="Client_img_box">
                  <img src={B12} className="img-fluid w-100" style={{height:"80px"}}/>
                </div>   
              </div>
            </Col>

            <Col lg="3" md="3" xs="6" sm="6">
              <div className="Client_img">
                <div className="Client_img_box">
                  <img src={B13} className="img-fluid w-100" style={{height:"80px"}}/>
                </div>   
              </div>
            </Col>
            <Col lg="3" md="3" xs="6" sm="6">
              <div className="Client_img">
                <div className="Client_img_box">
                  <img src={B14} className="img-fluid w-100" style={{height:"80px"}}/>
                </div>   
              </div>
            </Col>

            
            
          </Row>
        </Container>
      </div>
      {/* Our Client */}














































      {/* <div className="Our-Clint"> */}




      






        {/* <div className="Our-Clint-Name">
          <h3 className="text-center">Our Client</h3>
        </div> */}
        {/* <Container> */}
          {/* <div className="Area-Expertise-Container"> */}
            {/* <div className="img-box">
              <img
                src={B1}
                alt="img-one"
                className="w-75 mx-2"
              />
            </div> */}
            {/* <div className="img-box">
              <img
                src={B2}
                alt="img-one"
                className="w-75"
              />
            </div> */}
            {/* <div className="img-box">
              <img
                src={B3}
                alt="img-one"
                className="w-75"
              />
            </div>
            <div className="img-box">
              <img
                src={B4}
                alt="img-one"
                className="w-75"
              />
            </div>
            <div className="img-box">
              <img
                src={B5}
                alt="img-one"
                className="w-75"
              />
            </div>
            <div className="img-box">
              <img
                src={B6}
                alt="img-one"
                className="w-75"
              />
            </div>
            <div className="img-box">
              <img
                src={B7}
                alt="img-one"
                className="w-75"
              />
            </div>
            <div className="img-box">
              <img
                src={B8}
                alt="img-one"
                className="w-75"
              />
            </div>{B9}
            <div className="img-box">
              <img
                src={B10}
                alt="img-one"
                className="w-75"
              />
            </div>{B11}
            <div className="img-box">
              <img
                src={B12}
                alt="img-one"
                className="w-75"
              />
            </div>{B13}
            <div className="img-box">
              <img
                src={B14}
                alt="img-one"
                className="w-75"
              />
            </div> */}
          {/* </div> */}
        {/* </Container> */}
      {/* </div> */}


      {/* End our clint Container */}







































      {/* People Heart Start */}
      {/* style={{background:"#f1f1f1"}} */}
      {/* <div className="div_home_people_container">  */}
{/* <div className="Home_slider">
  <h2 className="text-center">Our Client</h2>

</div> */}
        {/* <Container> */}
        
          {/* <Row> */}
            {/* <Col sm="12" md="12" lg="12"> */}
           {/* <div className=""> */}

            {/* <Slider {...settings}> */}
              {/* first */}
    {/* <div className=""> 
  <div>
  <img className="img-fluid px-3 mb-3"src={C1}/>
  <div className=" ">
  <h2 className="text-center"> NAME</h2>

 </div>
  </div>
    </div> */}

    {/* second section */}
    {/* <div className=""> 
    <img className="img-fluid px-3 mb-3" src={C1}/>
    <div className="">
  <h2 className="text-center"> NAME</h2>

 </div>
    </div> */}

    {/* thired section */}
    {/* <div className="">
    <img className="img-fluid px-3 mb-3"src={C1}/>
 <div className="">
  <h2 className="text-center"> NAME</h2>

 </div>
    </div> */}




    {/* thired section */}
    {/* <div className="">
    <img className="img-fluid px-3 mb-3"src={C1}/>
 <div className="">
  <h2 className="text-center"> NAME</h2>

 </div>
    </div> */}
    {/* </Slider> */}
    {/* </div> */}
              
        
            {/* </Col> */}
          {/* </Row> */}
        {/* </Container> */}
      {/* </div> */}

      {/* People Heart End */}

      {/* Our Team */}
      {/* <div className="div_home_our_tame"> */}
        {/* <Container>
          <div className="team_title">
            <h1>Our Team</h1>
          </div>

          <Row className="justify-content-center">
            <Col sm="12" md="4" xl="4" lg="4">
              <div className="Team_Card">
                <img src={teamImg1} className="img-fluid" alt="no-img" />
                <h4 className="text-center">NAME</h4>
              </div>
            </Col>
            <Col sm="12" md="4" xl="4" lg="4">
              <div className="Team_Card">
                <img src={teamImg2} className="img-fluid" alt="no-img" />
                <h4 className="text-center">NAME</h4>
              </div>
            </Col>
            <Col sm="12" md="4" xl="4" lg="4">
              <div className="Team_Card">
                <img src={teamImg3} className="img-fluid" alt="no-img" />
                <h4 className="text-center">NAME</h4>
              </div>
            </Col>
          </Row>
        </Container> */}
      {/* </div> */}
      {/* Our Team */}
      {/*  */}
      {/* <div className="div_connect"> */}
        {/* <Container className="my-4">
          <Row>
            <Col md={6} sm={12} lg={6}>
              <h2 className="text-start text-capitalize">
                Connect with us to get started with our Authentication
                Technology
              </h2>
            </Col>
            <Col md={6} sm={12} lg={6}>
              <div className="div_connect_button">
                <button className="button">GET IN TOUCH</button>
              </div>
            </Col>
          </Row>
        </Container> */}
      {/* </div> */}
      {/*  */}
      <Footer />
    </>
  );
}

export default Home;
























