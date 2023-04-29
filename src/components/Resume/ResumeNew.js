import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationCards from "./CertificationCards";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/AYUSH_TIWARI.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import aws from "./CERTIFICATIONS/aws basis.png";
import blockchain_training from "./CERTIFICATIONS/Blockchain Training - Certificate of Completion.png";
import data_mining from "./CERTIFICATIONS/Data Mining.png";
import git_github from "./CERTIFICATIONS/GIT & GITHUB.png";
import htmls_css from "./CERTIFICATIONS/HTML & CSS.png";
import nosql from "./CERTIFICATIONS/Intro to nosql.png";
import machine_learning from "./CERTIFICATIONS/MACHINE LEARNING.png";
import backend from "./CERTIFICATIONS/PRO BACKEND.png";
import software_testing from "./CERTIFICATIONS/Software Testing.png";
import blockchain_foundation from "./CERTIFICATIONS/blockchain foundation and usecases.png";
import computer_networks from "./CERTIFICATIONS/google cn.png";
import operating_system from "./CERTIFICATIONS/google os.png";
import system_adminis from "./CERTIFICATIONS/google system adminis.png";
import tech_support from "./CERTIFICATIONS/google tech support fundamental.png";
import programming from "./CERTIFICATIONS/programming.png";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Container className="mt-5">
          <h1 className="project-heading">
            My Recent <strong className="purple">achievements</strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few certifications I have earned
          </p>
          <p style={{ color: "white" }}>
            Write now these certificates can be verified at this <strong className="purple">https://drive.google.com/drive/folders/1njsdjtE4k0Rfb2oM4QKZ28NmAqGSGi3i?usp=share_link </strong>
            where I have uploaded the pdf version.
          </p>

          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <CertificationCards
                imgPath={backend}
                isBlog={false}
                title="Pro-Backend"
                description="This course provided hands-on experience in Backend development through a practical project, enabling me to gain a deep understanding of the concepts and skills required in this field."
                ghLink="courses.learncodeonline.in/learn/certificate/5584380-110784"
                // demoLink="https://chatify-49.web.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <CertificationCards
                imgPath={htmls_css}
                isBlog={false}
                title="HTML & CSS"
                description="Throughout the duration of this course, I gained a comprehensive understanding of HTML and CSS."
                ghLink="courses.learncodeonline.in/learn/certificate/5584380-98072"
                // demoLink="https://blogs.soumya-jit.tech/"
              />
            </Col>

            <Col md={4} className="project-card">
              <CertificationCards
                imgPath={git_github}
                isBlog={false}
                title="GIT & GITHUB"
                description="During this course, I gained knowledge about the various concepts of Git and GitHub, including how version control systems function. "
                ghLink="https://github.com/a60231023/Testing-with-chai"
                // demoLink="https://editor.soumya-jit.tech/"
              />
            </Col>

            <Col md={4} className="project-card">
              <CertificationCards
                imgPath={tech_support}
                isBlog={false}
                title="Technical Support Fundamental"
                description="Through this course, I acquired a deep understanding of technical support fundamentals and key concepts. The knowledge I gained helped me develop critical problem-solving skills and enhanced my ability to troubleshoot technical issues."
                ghLink="https://github.com/a60231023/Backend-pro/tree/master/eCommerse"
                // demoLink="https://plant49-ai.herokuapp.com/"
              />
            </Col>

            <Col md={4} className="project-card">
              <CertificationCards
                imgPath={operating_system}
                isBlog={false}
                title="Operating Systems"
                description="This course helped me to acquire knowledge about operating systems and their related concepts. I gained a deeper understanding of how operating systems work and their importance in the field of computer science."
                ghLink="https://github.com/a60231023/calculator"
              />
            </Col>

            <Col md={4} className="project-card">
              <CertificationCards
                imgPath={system_adminis}
                isBlog={false}
                title="System Administration"
                description="Throughout this course, I have gained valuable insights into system administration, including the key concepts and principles of this field. I have learned how to manage and maintain computer systems, troubleshoot common issues, and ensure their smooth operation."
                ghLink="https://github.com/a60231023/project15"
              />
            </Col>
            <Col md={4} className="project-card">
              <CertificationCards
                imgPath={aws}
                isBlog={false}
                title="AWS"
                description="Throughout this course, I gained knowledge about Amazon Web Services (AWS) and its various related concepts."
                ghLink="https://github.com/a60231023/project15"
              />
            </Col>
            <Col md={4} className="project-card">
              <CertificationCards
                imgPath={nosql}
                isBlog={false}
                title="NoSQL"
                description="Throughout this course, I gained knowledge about NOSQL and its various related concepts. I also learned about the differences between SQL and NOSQL databases and how to work with popular NOSQL databases like MongoDB."
                ghLink="https://github.com/a60231023/project15"
              />
            </Col>
            <Col md={4} className="project-card">
              <CertificationCards
                imgPath={machine_learning}
                isBlog={false}
                title="Machine Learning"
                description="In this course, I was able to acquire a solid grasp of machine learning and its associated concepts. I was able to explore various machine learning algorithms and their applications, and gained hands-on experience in implementing these algorithms in real-world scenarios."
                ghLink="https://github.com/a60231023/project15"
              />
            </Col>
            <Col md={4} className="project-card">
              <CertificationCards
                imgPath={software_testing}
                isBlog={false}
                title="Software Testing"
                description="During this course I learned about the best practices of software testing and how to ensure software quality by using various testing techniques and methodologies. This comprehensive understanding of software testing has helped me to develop robust and error-free software products."
                ghLink="https://github.com/a60231023/project15"
              />
            </Col>
            <Col md={4} className="project-card">
              <CertificationCards
                imgPath={data_mining}
                isBlog={false}
                title="Data Mining"
                description="In this I gained a solid understanding of data mining, including its underlying principles, techniques, and applications in various fields. I also learned about the different types of data mining algorithms, data preprocessing, and data analysis methods used in the industry."
                ghLink="https://github.com/a60231023/project15"
              />
            </Col>
            <Col md={4} className="project-card">
              <CertificationCards
                imgPath={blockchain_foundation}
                isBlog={false}
                title="Blockchain Foundation"
                description="Throughout the course, I gained a fundamental understanding of blockchain and its related concepts. This included the mechanics of blockchain, its potential applications, and the underlying technologies that power it."
                ghLink="https://github.com/a60231023/project15"
              />
            </Col>
            <Col md={4} className="project-card">
              <CertificationCards
                imgPath={blockchain_training}
                isBlog={false}
                title="Blockchain Training"
                description="This course was extension to the previous one. In this I was trained to developed Blochain application with the help of different technology like Hyperledger and Solidity."
                ghLink="https://github.com/a60231023/project15"
              />
            </Col>
            <Col md={4} className="project-card">
              <CertificationCards
                imgPath={programming}
                isBlog={false}
                title="C/C++ Programming"
                description="This course taught me about the basis of programming in c and c++ which I used to learn different algorithms."
                ghLink="https://github.com/a60231023/project15"
              />
            </Col>
            <Col md={4} className="project-card">
              <CertificationCards
                imgPath={computer_networks}
                isBlog={false}
                title="Computer Networks"
                description="In this course I learned about data is transported across different nodes in a computer network. I gained a deep understanding of computer networks and its related concepts, including network protocols, topologies, and security measures."
                ghLink="https://github.com/a60231023/project15"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
