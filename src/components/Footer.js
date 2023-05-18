import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { AiFillGithub } from "react-icons/ai";

import { FaLinkedinIn } from "react-icons/fa";

import '.././App.css';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="footer fixed-bottom">
      <Container>
        <Row>
          <Col className="text-center">
            <a href="https://www.linkedin.com/in/younes-moujib-37186321a/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="social-icon linkedin-icon" />
            </a>
            <a href="https://github.com/younesmoujib" target="_blank" rel="noopener noreferrer">
              <AiFillGithub className="social-icon github-icon" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
