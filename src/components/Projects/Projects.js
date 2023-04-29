import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import nasa from "../../Assets/Projects/NASA.png";
import url from "../../Assets/Projects/URL-SHORTNER.png";
import chai from "../../Assets/Projects/TESTING WITH CHAI.png";
import ecommerse from "../../Assets/Projects/ECOMMERSE.png";
import calculator from "../../Assets/Projects/CALCULATOR.png";
import landingPage from "../../Assets/Projects/LANDING PAGE.png";

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
              imgPath={nasa}
              isBlog={false}
              title="NASA MISSION"
              description="NASA MISSION  is a project which takes help of the NASA API to get the data of all the habitable planet and launch different mission on those planets. This project also helps in maintaining the mission and aborting them if not needed in the future."
              ghLink="https://github.com/a60231023/NASA-PROJECT"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={url}
              isBlog={false}
              title="URL-SHORTNER"
              description="As the name suggests this project helps in shortning the URL of any website. Basically made this project to learn how url-shortner works."
              ghLink="https://github.com/a60231023/Url-shortner"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chai}
              isBlog={false}
              title="Test with chai"
              description="This project was made when I was learning to test my API's. Got to know about Mocha framework, so thought of learning by making project"
              ghLink="https://github.com/a60231023/Testing-with-chai"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerse}
              isBlog={false}
              title="T-shirt store"
              description="This is Ecommerse application which presently sells different categories of T-shirt. Although the backend is fully ready which involves authentication, authorization, admin, user, product, signup, login, payment system, the frontend needs some work so its a still in progress application"
              ghLink="https://github.com/a60231023/Backend-pro/tree/master/eCommerse"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="CALCULATOR"
              description="This is calculator which I build when I was learning JavaScript. It helped with understanding different concepts of JavaScript and how the logic of calculation would work."
              ghLink="https://github.com/a60231023/calculator"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={landingPage}
              isBlog={false}
              title="Landing Page"
              description="This is a landing Page which I made when I was learning HTML & CSS. I have made more than 10 pages to develop and understand concept of HTML & CSS. Do check out my github profile to see all of them."
              ghLink="https://github.com/a60231023/project15" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
