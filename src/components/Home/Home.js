import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/image.jpeg";
import Image from 'react-bootstrap/Image';

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Moujib Younes</strong>
              </h1>
              <p className="heading-description blockquote">
              I am a Software Engineer student with a deep passion for developing innovative solutions through programming. I am currently enrolled in a Software Engineering program at Ensa , where I am sharpening my skills in software design, development, and maintenance. My experience involves collaborating on diverse projects, both independently and in teams, which has provided me with a broad exposure to different programming languages , frameworks and development methodologies.
              </p>
            </Col>

            <Col md={5}>
              <Image src={myImg} style={{ marginTop: '150px', width: '350px', height: '300px' }} roundedCircle />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
