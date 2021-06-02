import React, { useContext } from "react";
import { Container, Jumbotron, Button } from "reactstrap";
import { keranjangContext } from "../../../App";

function Tagihan() {
  const countCountext = useContext(keranjangContext);

  return (
    <Container>
      <Jumbotron>
        <h1 className="display-3">Tagihan</h1>
        <p className="lead">
          ({countCountext.keranjangState.jumlah}x) Action Figure Naruto
        </p>
        <hr className="my-2" />
        <p>Harga Total Rp. {countCountext.keranjangState.hargatotal}</p>
        <p className="lead">
          <Button color="primary">Lanjutkan Pembayaran</Button>
        </p>
      </Jumbotron>
    </Container>
  );
}

export default Tagihan;
