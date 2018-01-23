import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, ImplicitCallback } from '@okta/okta-react';
import 'reactsymbols-kit/ReactSymbolsKit.css';
import { RSButton } from 'reactsymbols-kit';
import mapboxgl from 'mapbox-gl';
import Home from './Home';
import './App.css';
import Logo from './images/bp.png';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-112995308-1');
ReactGA.pageview(window.location.pathname + window.location.search);

mapboxgl.accessToken = "pk.eyJ1IjoibGVvZG90bmciLCJhIjoiY2pjczI4ZHh4MG5uczMybnFyMDMxdXBraSJ9.ROR14qeGOQPXNr6MTyzPjA";

const pStyle = {
  fontSize: '15px',
  textAlign: 'center'
};

const config = {
  issuer: 'https://dev-526103.oktapreview.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '{0oadqlnatb1TIjCRw0h7}' 
}

class App extends Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      lng: 144.9303,
      lat: -37.82212,
      zoom: 10.50
    };
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom
    });
    // added mapbox navigation controls below
    map.addControl(new mapboxgl.ScaleControl({
      maxWidth: 30,
      unit: 'imperial'
  }));
    map.addControl(new mapboxgl.NavigationControl());
    map.on('load', function() {
      map.loadImage('https://pbs.twimg.com/profile_images/954481161379700736/Y4FygLho_400x400.jpg', function(error, image) {
          if (error) throw error;
          map.addImage('bp', image);
          map.addLayer({
              "id": "points",
              "type": "symbol",
              "source": {
                  "type": "geojson",
                  "data": {
                      "type": "FeatureCollection",
                      "features": [{
                          "type": "Feature",
                          "geometry": {
                              "type": "Point",
                              "coordinates": [144.9103, -37.82212]
                          }
                      }]
                  }
              },
              "layout": {
                  "icon-image": "bp",
                  "icon-size": 0.15
              }
          });
      });
  });
    map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }
  
  render() {
    const { lng, lat, zoom } = this.state;

    return (
      
      <div>
        <div>
          
        <img src={ require('./images/bp.png') } style={pStyle}/>
        <br />
        <br />
        <br />
        <br />
        <br />
        </div>
    

      
        <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
          <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
        </div>
        <div ref={el => this.mapContainer = el} className="Map-window absolute top right left bottom" />

      {/* <Router>
        <Security issuer={config.issuer}
                  client_id={config.client_id}
                  redirect_uri={config.redirect_uri}
        >
        <Route path='/' exact={true} component={Home}/>
        <Route path='/implicit/callback' component={ImplicitCallback}/>
        </Security>
      </Router> */}
      <RSButton value='Buy Points' background='Orange' />
      <RSButton value='Earn Points' />
      <RSButton value='Gift Points' />
      <RSButton value='Book Hotels' />
      <RSButton value='Book Adventure Tours' />
      </div>
    
    );
  }
}

export default App;
