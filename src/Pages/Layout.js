import Container from "react-bootstrap/Container";
import "../Styles/Layout.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assests/Img/Logo.png";
import { Link } from "react-router-dom";
function Layout() {
  return (
    <Navbar bg="light" expand="lg">
     
        <Navbar.Brand>
          <Link to="/">
            <img
              src={Logo}
              style={{
                width: "150px",
                // padding: "10px"
                marginLeft: "60px"
              }}
              className={"img-fluid"}
              alt="Logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav ">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/About">About Us</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Services">Services</Link>
            </Nav.Link>{" "}
            <Nav.Link>
              <Link to="/Career">Career</Link>
            </Nav.Link>{" "}
            <Nav.Link>
              <Link to="/Contact">Contact Us</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className="btn" style={{backgroundColor:"rgba(46, 179, 236, 1)", padding:"10px", marginRight: "60px", fontWeight:"500"}}>Log in</div>
      
    </Navbar>
  );
}

export default Layout;
