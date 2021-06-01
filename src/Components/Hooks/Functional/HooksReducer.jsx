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

const initialState = {
  jumlah: 1,
  hargasatuan: 10000,
  hargatotal: 10000,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "tambah":
      return {
        ...state,
        jumlah: state.jumlah + 1,
        hargatotal: state.hargasatuan * state.jumlah + state.hargasatuan,
      };
    case "kurang":
      if (state.jumlah > 0) {
        return {
          ...state,
          jumlah: state.jumlah - 1,
          hargatotal: state.hargatotal - state.hargasatuan,
        };
      }
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
            <h3>Rp. {count.hargasatuan}</h3>
            <Row>
              <Col>
                <Button
                  color="danger"
                  onClick={() => dispatch({ type: "tambah" })}
                >
                  +
                </Button>
              </Col>
              <Col>
                <h4>{count.jumlah}</h4>
              </Col>
              <Col>
                <Button onClick={() => dispatch({ type: "kurang" })}>-</Button>
              </Col>
            </Row>
            <br />
            <Button color="success" size="lg">
              Total Rp.{count.hargatotal}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HooksReducer;
