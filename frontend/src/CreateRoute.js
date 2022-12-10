import { useState, React } from "react";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function CreateRoute() {
  const [name, setName] = useState("");
  const [direction, setDirection] = useState("");
  // const [id,setId]=useState("");
  const [status, setStatus] = useState(false);
  // function handleNameChange(){

  // }
  return (
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
    </Row>
  );
}
