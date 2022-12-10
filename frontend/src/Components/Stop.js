import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import stops from '../utils.js'
export default function Stop(props) {
  return (
    <ListGroup>
      {props.stops.map(item=>{
        return <ListGroup.Item key={item.id} variant="primary">{item.name}</ListGroup.Item>;
      })}
    </ListGroup>
  )
}
