import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          I am a computer engineering student passionate about developing .Net-based technologies, and I am currently focused on designing mobile, web, and desktop applications. My goal is to create innovative and high-performing applications using the latest advancements in .Net technology.

As a developer, I am motivated to explore the various options offered by .Net technologies to design cutting-edge applications. I am constantly staying updated with the latest trends and best practices in the field of .Net development.

My experience and knowledge in computer engineering enable me to understand the complexities of software development and apply them effectively in my projects. I strive to deliver efficient and reliable solutions that meet the needs of users and businesses.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
           
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
