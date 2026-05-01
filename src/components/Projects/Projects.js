import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import emotion from "../../Assets/Projects/emotion.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Password Generator"
              description="A password generator is a software utility designed to create secure and random passwords based on defined criteria. With increasing cybersecurity threats, strong passwords play a critical role in protecting user data and preventing unauthorized access. This project implements a password generator using Python, focusing on randomness, flexibility, and usabilityS"
              
              
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Fake News Detection"
              description="Fake news refers to misleading or false information presented as legitimate news, often spread through digital platforms. With the rapid growth of social media and online content, detecting fake news has become a critical challenge. This project applies deep learning techniques to automatically classify news articles as real or fake based on textual patterns."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
