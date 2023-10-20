import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              VAMOS <span className="purple"> PARA MINHA </span> INTRODUÇÃO
            </h1>
            <p className="home-about-body">
              Me chamo <b className="purple">Matheus Trevisan Olívio Ferreira</b>, tenho 17 anos🤷‍♂️
              <br />
              <br />Estou finalizando o
              <i>
                <b className="purple"> Ensino Médio</b>
              </i>
              <br />
              <br />
              Meus interesses são&nbsp;
              <i>
                <b className="purple">Nutrição, Esportes</b> e
                áreas relacionadas á{" "}
                <b className="purple">
                  Musculação
                </b>
              </i>
              <br />
              <br />
              Meu Portfólio é construído com
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ME ENCONTRE AQUI</h1>
            <p>
              onde me <span className="purple">procurar </span>?
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/trevisanpoggers77"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/trevisanmath"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/matheus-trevisan-8a7a84243/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="hhttps://www.instagram.com/trevisan_matheuss/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
