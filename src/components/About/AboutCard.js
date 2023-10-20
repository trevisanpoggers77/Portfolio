import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá, eu sou <span className="purple">Matheus Trevisan </span>
            nascido em <span className="purple"> Santos, São Paulo.</span>
            <br /> Sou um estudante prestes a terminar o terceiro ano do ensino médio.
            <br />
            <br />
            Minha rotina diária:
          </p>
          <ul>
            <li className="about-activity">
               06:00 Acordar
            </li>
            <li className="about-activity">
               07:40 Aulas
            </li>
            <li className="about-activity">
               13:00 Fim da Aula
            </li>
            <li className="about-activity">
               16:00 Academia
            </li>
            <li className="about-activity">
               18:30 Estudos
            </li>
            <li className="about-activity">
               22:00 Dormir
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Certain darkness is needed to see the stars"{" "}
          </p>
          <footer className="blockquote-footer">Chris Bumstead</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
