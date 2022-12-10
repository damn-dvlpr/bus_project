import { useState, React, useEffect } from "react";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SelectStopsModal from "../SelectStopsModal";
import utils from "../../utils";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function CreateRoute() {
  const [name, setName] = useState("");
  const [direction, setDirection] = useState("");
  const [status, setStatus] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [stops, setStops] = useState([]);
  const [checkedList, setCheckedList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:9097/stop/all").then((resp) => {
      setStops(resp.data);
      setCheckedList(new Array(resp.data.length).fill(false));
    });
  }, []);
  function createRoute() {
    let payload = { name: name, status: status?"ACTIVE":"INACTIVE", direction: direction};
    payload.stops=stops.filter((item,index)=>{
      return checkedList[index]==true;
    }).map(item=>{
      return item.id;
    })
    axios.post("http://localhost:9097/route/save",payload).then(()=>{
      navigate("/");
    });
  }
  return (
    <>
      <SelectStopsModal
        show={modalShow}
        setShow={setModalShow}
        checkedList={checkedList}
        setCheckedList={setCheckedList}
        stops={stops}
      />
      <Row>
        <label>Please type Route Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Please Select Direction: </label>
        <select
          value={direction}
          onChange={(e) => setDirection(e.target.value)}
        >
          <option value="" disabled>
            Choose Please
          </option>
          <option value="UP">UP</option>
          <option value="DOWN">DOWN</option>
        </select>
        <label>
          Status
          <input
            type="checkbox"
            checked={status}
            onChange={() =>
              setStatus((prev) => {
                return !prev;
              })
            }
          />
        </label>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Add Stops.
        </Button>
        <Button variant="primary" onClick={createRoute}>
          Create
        </Button>
      </Row>
    </>
  );
}
