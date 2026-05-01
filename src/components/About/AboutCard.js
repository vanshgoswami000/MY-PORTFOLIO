import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">          
              <footer style={{ fontSize: "30px" }} className="blockquote-footer">Vansh Goswami</footer>
</span>{" "}
            from <span className="purple">UttarPradesh, India</span>.
            <br />
            I’m want to work as a{" "}
            <span className="purple">React js Developer</span> 
            <br />I have done Masters in{" "}
            <span className="purple">Computer Science</span> from{" "}
            <span className="purple">Galgotias University</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> chill with friends and family 🏖️
                          </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Vansh Goswami</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
