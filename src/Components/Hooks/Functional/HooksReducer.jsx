import React, { useReducer } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "tambah":
      return state + 1;
    case "kurang":
      return state - 1;
    default:
      return state;
  }
};

function HooksReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Container>
        <br />
        <Row>
          <Col xs="6">
            <Card>
              <CardImg top width="100%" src="/img/1.png" alt="Card image cap" />
            </Card>
          </Col>
          <Col xs="6">
            <h3>Action Figure Naruto</h3>
            <p>Harga</p>
            <h3>Rp. 157.000</h3>
            <Row>
              <Col>
                <Button color="danger" onClick={() => dispatch("tambah")}>
                  +
                </Button>
              </Col>
              <Col>
                <h4>{count}</h4>
              </Col>
              <Col>
                <Button onClick={() => dispatch("kurang")}>-</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HooksReducer;
