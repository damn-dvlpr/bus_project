import React from "react";
import Stop from "../Stop";
import { Container } from "react-bootstrap";
import utils from "../../utils";
export default function RoutePage() {
  return (
    <Container>
      <h1>{utils.routes.name}</h1>
      <Stop stops={utils.routes.stops}></Stop>
    </Container>
  );
}
