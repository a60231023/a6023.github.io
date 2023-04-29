import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Ayush Tiwari </span>
            from <span className="purple"> Kolkata, India.</span>
            <br />I am a junior pursuing a Bachelor of Technology degree in Computer Science and Engineering from Chandigarh University..
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning about finance
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching movies and web series
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Focus on the process, A person who shows up everyday cannot lose in the long run"{" "}
          </p>
          <footer className="blockquote-footer">Ayush</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
