import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

function CardComp(props) {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.img} style={{ width: 400 }} />
        <CardBody>
          <CardTitle tag="h5">
            <h3>{props.judul}</h3>
          </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {props.tanggal}
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>
            <Link
              to={{
                pathname: `/detail/${props.id}`,
                state: {
                  judul: props.judul,
                  tanggal: props.tanggal,
                },
              }}
            >
              Detail
            </Link>
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default CardComp;
