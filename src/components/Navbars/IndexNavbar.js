import React from "react";
// import { Link } from "react-router-dom";
// reactstrap components
import {
  // Button,
  Collapse,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
  // UncontrolledTooltip
} from "reactstrap";
import Hscroll from "components/Hscroll";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  // React.useEffect(() => {
    
  // })

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };

  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar 
        className={"fixed-top " + navbarColor} expand="lg" color="info"
        style={{fontSize:"1.2rem"}}  
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              id="navbar-brand"
              className="page-scroll"
              href="/index"
              onClick={e => {
                e.preventDefault();
                // this.Delay();
                // window.setTimeout(()=> {
                //   this.history.push('/index')
                // },1000)
                document
                  .getElementById("main-head")
                  // setTimeout("1000")
                  .scrollIntoView();
              }}
            >
              <img src={require('assets/img/chess-logo.png')} style={{borderRadius:'50%'}} width="30" height="30" alt="" />
              {"  "}{" "}
              ChESS IIT ROORKEE
            </NavbarBrand>
            {/* <UncontrolledTooltip target="#navbar-brand">
              Designed and Coded by Abdulahad.
            </UncontrolledTooltip> */}
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink 
                  className="page-scroll"
                  href="/index"
                  onClick={e => {
                    e.preventDefault();
                    // this.Delay();
                    // window.setTimeout(()=> {
                    //   this.history.push('/index')
                    // },1000)
                    document
                      .getElementById("alumni-section")
                      // setTimeout("1000")
                      .scrollIntoView();
                  }}
                >
                  <i className="now-ui-icons users_circle-08"></i>
                  <p>Alumni</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  className="page-scroll"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("carousel")
                      .scrollIntoView();
                  }}
                >
                  <i className="now-ui-icons sport_trophy"></i>
                  <p>Events</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  className="page-scroll"
                  href="https://www.iitr.ac.in/departments/CH/pages/People.html"
                  target="_blank"
                  // onClick={e => {
                  //   e.preventDefault();
                  //   document
                  //     .getElementById("carousel")
                  //     .scrollIntoView();
                  // }}
                >
                  <i className="now-ui-icons business_briefcase-24"></i>
                  <p>Staffs</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  className="page-scroll"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("studentsCorner")
                      .scrollIntoView();
                  }}
                >
                  <i className="now-ui-icons emoticons_satisfied"></i>
                  <p>Students-Corner</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  className="page-scroll"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("download-section")
                      .scrollIntoView();
                  }}
                >
                  <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                  <p>Reach-Us</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  className="page-scroll"
                  href="/team-page"
                  // onClick={e => {
                  //   e.preventDefault();
                  //   document
                  //     .getElementById("download-section")
                  //     .scrollIntoView();
                  // }}
                >
                  <i className="now-ui-icons design_bullet-list-67"></i>
                  <p>Team</p>
                </NavLink>
              </NavItem>
              
              {/* <NavItem>
                <NavLink
                  href="https://twitter.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Container>
        
      </Navbar>
      <Hscroll />
    </>
  );
}

export default IndexNavbar;
