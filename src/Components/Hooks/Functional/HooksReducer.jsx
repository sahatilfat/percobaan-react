import React, { useContext, useReducer } from "react";
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
import { NavLink } from "react-router-dom";
import { keranjangContext } from "../../../App";

function HooksReducer() {
  const countCountext = useContext(keranjangContext);

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
            <h3>Rp. {countCountext.keranjangState.hargasatuan} </h3>
            <Row>
              <Col>
                <Button
                  color="danger"
                  onClick={() =>
                    countCountext.keranjangDispatch({ type: "tambah" })
                  }
                >
                  +
                </Button>
              </Col>
              <Col>
                <h4>{countCountext.keranjangState.jumlah}</h4>
              </Col>
              <Col>
                <Button
                  onClick={() =>
                    countCountext.keranjangDispatch({ type: "kurang" })
                  }
                >
                  -
                </Button>
              </Col>
            </Row>
            <br />
            <Button color="success" size="lg">
              Total Rp. {countCountext.keranjangState.hargatotal}
            </Button>
            <hr />
            <NavLink to="/tagihan">Tagihan Belanja</NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HooksReducer;
