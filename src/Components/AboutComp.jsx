import React, { useContext } from "react";
import { Jumbotron, Button, Container, Row, Col } from "reactstrap";
import { CartContext } from "../CartContext";
import CardComp from "./CardComp";

function AboutComp(props) {
  return (
    <div>
      <Jumbotron className="tron">
        <h1 className="display-3">About Us</h1>
        <p className="lead">
          This is a simple hero unit, a simple Jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-2" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>

      <div>
        <Container>
          <Row>
            <Col>
              <CardComp
                id="1"
                judul="Belajar React"
                tanggal="22/6/2020"
                img="/img/1.png"
              />
            </Col>
            <Col>
              <CardComp
                id="2"
                judul="Belajar Golang"
                tanggal="23/6/2020"
                img="/img/2.png"
              />
            </Col>
            <Col>
              <CardComp
                id="3"
                judul="Belajar PHP"
                tanggal="24/6/2020"
                img="/img/3.png"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AboutComp;
