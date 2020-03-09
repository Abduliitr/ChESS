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
            href="https://www.facebook.com/qadbury0123456789"
            target="_blank"
          >
            Abdulahad Khan
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
