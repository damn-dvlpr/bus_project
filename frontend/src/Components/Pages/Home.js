import axios from "axios";
import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [routes, setRoutes] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:9097/route/all").then((resp) => {
      setRoutes(resp.data);
    });
  }, []);
  function deleteRoute(routeId) {
    let url = "http://localhost:9097/route/" + routeId;
    axios.delete(url).then(() => {
      window.location.reload();
    });
  }
  return (
    <Container className="w-50">
      <div className="bg-light p-5 rounded-lg mb-3 mt-3 pb-1">
        <h1 className="display-4">Routing System</h1>
        <p className="lead">Project for Chloe entrance</p>
        <p>List of routes are as follows:</p>
      </div>
      {routes.map((route) => {
        return (
          <Accordion className="mb-3" key={route.id}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{route.name}</Accordion.Header>
              <Accordion.Body>
                <ul>
                  {route.stops.map((stop) => {
                    return <li key={stop.id}>{stop.name}</li>;
                  })}
                </ul>
                <Button
                  variant="danger"
                  className="me-2"
                  onClick={() => deleteRoute(route.id)}
                >
                  Delete
                </Button>
                <Button
                  variant="info"
                  className="me-2"
                  onClick={() => navigate("/editRoute", { state: route })}
                >
                  Edit
                </Button>
                <Button
                  variant="info"
                  className="me-2"
                  onClick={() => navigate("/map", { state: route })}
                >
                  View On Map
                </Button>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );
      })}
      <Button className="mt-2" onClick={() => navigate("/createRoute")}>
        Create Route
      </Button>
    </Container>
  );
}
