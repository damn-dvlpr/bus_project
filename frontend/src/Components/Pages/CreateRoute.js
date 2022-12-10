import { useState, React, useEffect } from "react";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SelectStopsModal from "../SelectStopsModal";
import utils from "../../utils";
export default function CreateRoute() {
  const [name, setName] = useState("");
  const [direction, setDirection] = useState("");
  const [status, setStatus] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [stops,setStops]=useState([]);
  const [checkedList,setCheckedList]=useState(new Array(utils.stops.length).fill(false));
  // useEffect(() => {
  //   setCheckedList(
  //     new Array(utils.stops.length).fill(false)
  //   )
  // }, [stops.length]);
  return (
    <>
    <SelectStopsModal show={modalShow} setShow={setModalShow} checkedList={checkedList} setCheckedList={setCheckedList}/>
    <Row>
      <label>Please type Route Name: </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Please Select Direction: </label>
      <select value={direction} onChange={e=>setDirection(e.target.value)}>
        <option value="" disabled>
          Choose Please
        </option>
        <option value="Up">
          Up
        </option>
        <option value="Down">
          Down
        </option>
      </select>
      <label>
        Status
        <input
          type="checkbox"
          checked={status}
          onChange={()=>setStatus((prev)=>{return !prev})}
        />
      </label>
      <Button variant="primary" onClick={()=>setModalShow(true)}>
        Add Stops.
      </Button>
    </Row>
    </>
  );
}
