import { useState, React, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SelectStopsModal from "../SelectStopsModal";
import utils from "../../utils";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
export default function EditRoute() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [name, setName] = useState(state?.name);
  const [direction, setDirection] = useState(state?.direction);
  const [status, setStatus] = useState(
    state?.status == "ACTIVE" ? true : false
  );
  const [modalShow, setModalShow] = useState(false);
  const [stops, setStops] = useState([]);
  const [checkedList, setCheckedList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:9097/stop/all").then((resp) => {
      setStops(resp.data);
      let newCheckedList = new Array(resp.data.length).fill(false);
      if (state) {
        resp.data.forEach((stop, index) => {
          if (state.stops.some((item, index) => item.name === stop.name)) {
            newCheckedList[index] = true;
          }
        });
      }
      setCheckedList(newCheckedList);
    });
  }, []);
  function createRoute() {
    let payload = {
      id: state.id,
      name: name,
      status: status == true ? "ACTIVE" : "INACTIVE",
      direction: direction,
    };
    payload.stops = stops
      .filter((item, index) => {
        return checkedList[index] == true;
      })
      .map((item) => {
        return item.id;
      });
    axios.put("http://localhost:9097/route/update", payload).then(() => {
      navigate("/");
    });
  }
  return state == null ? (
    <h1>Nothing to Edit here</h1>
  ) : (
    <Container  className="w-50">
      <div className="bg-light p-5 rounded-lg mb-3 mt-3">
        <h1 className="display-4">Edit Route</h1>
      </div>
      <SelectStopsModal
        show={modalShow}
        setShow={setModalShow}
        checkedList={checkedList}
        setCheckedList={setCheckedList}
        stops={stops}
      />
      <Form>
        <Form.Group className="mb-3" controlId="routeName">
          <Form.Label>Please type Route Name: </Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="routeDirection">
          <Form.Label>Please Select Direction:</Form.Label>
          <Form.Select
            id="enabledSelect"
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
          >
            <option value="" disabled>
              Choose Please
            </option>
            <option value="UP">UP</option>
            <option value="DOWN">DOWN</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="routeName">
          <Form.Check
            type="checkbox"
            checked={status}
            onChange={() =>
              setStatus((prev) => {
                return !prev;
              })
            }
            label="Staus"
          />
        </Form.Group>
        <Button className="me-2" variant="primary" onClick={() => setModalShow(true)}>
          Edit Stops
        </Button>
        <Button className="me-2" variant="success" onClick={createRoute}>
          Update
        </Button>
      </Form>
    </Container>
  );
}
