import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import data from './utils.js'
export default function Stop() {
    // let data=[{"id":"1","name":"kudluGate","latitude":"12.891370186140534","longitude":"77.6399054266434"},{"id":"2","name":"eCity","latitude":"12.841265016463002","longitude":"77.67574193297797"}]
  return (
    <ListGroup>
      {data.map(item=>{
        return <ListGroup.Item key={item.id} variant="primary">{item.name}</ListGroup.Item>;
      })}
    </ListGroup>
  )
}
