/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue" id="main-head">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header1.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/iitr-logo.png")}
            ></img>
            <h1 className="h1-seo">IIT ROORKEE</h1>
            <h3>CHEMICAL ENGINEERING STUDENT'S SOCIETY</h3>
          </div>
          
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
