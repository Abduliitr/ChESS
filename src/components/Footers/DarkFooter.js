/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>

            <li>
              <a
                href="#"
                // target="_blank"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                // target="_blank"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Developed by{" "}
          <a
            // href="https://www.linkedin.com/in/abdulahad-khan-profile/"
            href="/profile-page"
            target="_blank"
          >
            Abdulahad Khan {" "}
            <img
                alt="..."
                src={require("assets/img/flags/IN.png")}
            ></img>
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
