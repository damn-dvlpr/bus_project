import { useRef, useEffect, useState } from 'react'
import * as tt from '@tomtom-international/web-sdk-maps'
import * as ttapi from '@tomtom-international/web-sdk-services'
import '../map.css'
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import axios from 'axios'
import { Container } from 'react-bootstrap'
import { useNavigate, useLocation } from "react-router-dom";
const Map= () => {
  const mapElement = useRef()
  const [map, setMap] = useState({})
  const [longitude, setLongitude] = useState(0)
  const [latitude, setLatitude] = useState(0)
  const { state } = useLocation();
  var API_KEY = "SL6ZH72gKwizFedpa79iWDWzxnmlcIFC"

  let URL = 'https://api.tomtom.com/routing/waypointoptimization/1/best?key=' + API_KEY

let waypoints=state.stops.map((stop)=>{
    return {"lng":parseFloat(stop.longitude),"lat":parseFloat(stop.latitude)}
})

let waypointsName=state.stops.map((stop)=>{
  return {"name":stop.name}
})
  var markers = [];

  useEffect(() => {
    let map = tt.map({
      key: "SL6ZH72gKwizFedpa79iWDWzxnmlcIFC",
      container: mapElement.current,
      stylesVisibility: {
        trafficIncidents: true,
        trafficFlow: true,
      },
      center: waypoints[0],
      bearing: 0,
      maxZoom: 21,
      minZoom: 1,
      pitch: 60,
      zoom: 13
    })
    setMap(map)
    map.on('click', function (event) {
      console.log(event.lngLat)
    })
    waypoints.forEach((position,index) => {
        const addMarker = (position) => {
        const popupOffset = {
          bottom: [0, -25]
        }
        const popup = new tt.Popup({ offset: popupOffset }).setHTML(waypointsName[index]['name'])
        const element = document.createElement('div')
        element.className = 'marker'
  
        const marker = new tt.Marker({
          draggable: true,
          element: element,
        })
          .setLngLat(position)
          .addTo(map)
  
        marker.setPopup(popup).togglePopup()
        markers.push(marker);
      }
      addMarker(position)
    });


    axios.post(URL, {
      waypoints: waypoints.map(function (element) {
        return {
          point: {
            latitude: element.lat,
            longitude: element.lng
          }
        }
      })

    })
      .then(function (response) {

        let solution = response.data.optimizedOrder
        let locations = solution.map(function (order, index) {
          let popup = new tt.Popup({ offset: 50 }).setText("Destination #" + index)
          markers[order].setPopup(popup)
          return waypoints[order]
        })
        createRoute({
          key: API_KEY,
          locations: locations
        })
      })
      .catch(function (error) {
        console.log(error)
      })

    var createRoute = function (options) {
      ttapi.services.calculateRoute(options).then(function (response) {

        var features = response.toGeoJson().features
        features.forEach(function (feature, index) {
          map.addLayer({
            'id': 'route' + index,
            'type': 'line',
            'source': {
              'type': 'geojson',
              'data': feature
            },
            'paint': {
              'line-color': 'blue',
              'line-opacity': 0.7,
              'line-width': 10,
              'line-dasharray': [1, 0, 1, 0]
            },
            'layout': {
              'line-cap': 'round',
              'line-join': 'round'
            }
          })
        })

      })}

    return () => map.remove()
  }, [longitude, latitude])

  return (
    <Container>
    <div className="bg-light p-5 rounded-lg mb-3 mt-3 pb-1">
        <h1 className="display-4">{state.name}</h1>
        <p className="lead">Map of the route is as follows:</p>
      </div>
      {map && (
        <Container className='mapContainer'>
          <div ref ={mapElement} className="map" />
        </Container>
      )}
    </Container>
  )
}

export default Map