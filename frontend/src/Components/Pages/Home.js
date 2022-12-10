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
  function deleteRoute(routeId){
    let url="http://localhost:9097/route/"+routeId;
    axios.delete(url).then(()=>{
        window.location.reload();
  });
  }
  return(
  <Container>
  {routes.map((route) => {
    return (
        <Accordion key={route.id}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{route.name}</Accordion.Header>
            <Accordion.Body>
              <ul>
                {route.stops.map((stop) => {
                  return <li key={stop.id}>{stop.name}</li>;
                })}
              </ul>
              <Button variant="danger" onClick={()=>deleteRoute(route.id)}>Delete</Button>
              <Button variant="info" onClick={()=>navigate("/editRoute",{state:route})}>Edit</Button>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
    );
  })}
  <Button onClick={()=>navigate("/createRoute")}>Create Route</Button> 
  </Container>
  )
}
