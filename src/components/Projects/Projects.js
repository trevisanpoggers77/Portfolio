import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Matérias </strong>
        </h1>
        <p style={{ color: "white" }}>
          (Matemática, Ciências da Natureza,
          Humanas, Linguagens e Técnico)
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              demoLink="https://drive.google.com/drive/folders/1BwpNpz6W_1kZ1xMmIvnG-8r0zlJMnXSd"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
