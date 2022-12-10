import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Row } from "react-bootstrap";
import utils from "../utils";

function SelectStopsModal(props) {
  const handleClose = () => props.setShow(false);
  const handleShow = () => props.setShow(true);
  const handleCheck = (position) => {
    const updatedCheckedState = props.checkedList.map((item, index) =>
      index === position ? !item : item
    );
    props.setCheckedList(updatedCheckedState);
  };
  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Stops Available</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <div className="Stops">
              {utils.stops.map((item, index) => (
                <div key={item.id}>
                  <input
                    value={item.id}
                    type="checkbox"
                    onChange={()=>handleCheck(index)}
                    checked={props.checkedList[index]}
                  />
                  <span className="checkboxInput">{item.name}</span>
                </div>
              ))}
            </div>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default SelectStopsModal;
