import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TeamPageHeader from "components/Headers/TeamPageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import IndexNavbar from "components/Navbars/IndexNavbar";

function TeamPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);

  // write the const for the team details here...
  const teamMembers = [
    {
      src: require("assets/img/julie.jpg"),
      altText: "Kapil Birthala",
      name: "Kapil Birthala",
      category: "Convener",
      fbLink:"https://facebook.com",
      linkedinLink:"https://linkedin.com"
    },
    {
      src: require("assets/img/disha.jpeg"),
      altText: "Aniket Kumbhar",
      name: "Aniket Kumbhar",
      category: "Co-Convener",
      fbLink:"https://facebook.com",
      linkedinLink:"https://linkedin.com"
    },
    {
      src: require("assets/img/ryan.jpg"),
      altText: "Aniket Kumbhar",
      name: "Aniket Kumbhar",
      category: "Co-Convener",
      fbLink:"https://facebook.com",
      linkedinLink:"https://linkedin.com"
    },
    {
      src: require("assets/img/ryan.jpg"),
      altText: "Aniket Kumbhar",
      name: "Aniket Kumbhar",
      category: "Co-Convener",
      fbLink:"https://facebook.com",
      linkedinLink:"https://linkedin.com"
    },
    {
      src: require("assets/img/eva.jpg"),
      altText: "Abdulahad Khan",
      name: "Abdulahad Khan",
      category: "Techncial Head",
      fbLink:"https://facebook.com",
      linkedinLink:"https://linkedin.com"
    },
    {
      src: require("assets/img/ryan.jpg"),
      altText: "Full Name",
      name: "Full Name",
      category: "Position Head",
      fbLink:"https://facebook.com",
      linkedinLink:"https://linkedin.com"
    }
  ];

  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      {/* <ExamplesNavbar /> */}
      <IndexNavbar />
      <div className="wrapper">
        <TeamPageHeader />
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Here is our team</h2>
            <div className="team">
              <Row>
                {teamMembers.map(teamMember=> {
                  return(
                    <Col lg="4" md="4" style={{paddingTop:"50px"}}>
                      <div className="team-player">
                        <img
                          alt={teamMember.altText}
                          className="rounded-circle img-fluid img-raised"
                          src={teamMember.src}
                        ></img>
                        <h4 className="title">{teamMember.name}</h4>
                        <p className="category text-info">{teamMember.category}</p>
                        <Button
                          className="btn-icon btn-round"
                          color="info"
                          href={teamMember.fbLink}
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fab fa-facebook"></i>
                        </Button>
                        <Button
                          className="btn-icon btn-round"
                          color="info"
                          href={teamMember.linkedinLink}
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fab fa-linkedin"></i>
                        </Button>
                        {/* <Button
                          className="btn-icon btn-round"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fab fa-facebook-square"></i>
                        </Button> */}
                      </div>
                    </Col>
                  );
                })}
                
{/*                 
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/ryan.jpg")}
                    ></img>
                    <h4 className="title">Ryan Tompson</h4>
                    <p className="category text-info">Designer</p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/eva.jpg")}
                    ></img>
                    <h4 className="title">Eva Jenner</h4>
                    <p className="category text-info">Fashion</p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-youtube"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                  </div>
                </Col> */}
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Want to send us a message?</h2>
            <p className="description">Your feedbacks are very important to us.</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="First Name..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Type a message..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default TeamPage;
