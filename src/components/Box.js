import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "reactsymbols-kit/ReactSymbolsKit.css";
import { RSButton } from "reactsymbols-kit";
import mapboxgl from "mapbox-gl";
import "./Box.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoibGVvZG90bmciLCJhIjoiY2pjczI4ZHh4MG5uczMybnFyMDMxdXBraSJ9.ROR14qeGOQPXNr6MTyzPjA";

  const mapbStyles = {
    width: "300px"
  }

class Box extends Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      lng: -71.9720165,
      lat: -13.5240063,
      zoom: 13.5
    };
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [lng, lat],
      zoom
    });
    // added mapbox navigation controls below
    map.addControl(
      new mapboxgl.ScaleControl({
        maxWidth: 30,
        unit: "imperial"
      })
    );
    map.addControl(new mapboxgl.NavigationControl());
    map.on("load", function() {
      map.loadImage(
        "/images/icon.png",
        function(error, image) {
          if (error) throw error;
          map.addImage("bp", image);
          map.addLayer({
            id: "points",
            type: "symbol",
            source: {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features: [
                  {
                    type: "Feature",
                    geometry: {
                      type: "Point",
                      coordinates: [-71.98215490000001, -13.5178622]
                    }
                  },
                  {
                    type: "Feature",
                    geometry: {
                      type: "Point",
                      coordinates: [-71.97731569999996, -13.5122056]
                    }
                  },
                  {
                    type: "Feature",
                    geometry: {
                      type: "Point",
                      coordinates: [-71.98107140000002, -13.5161739]
                    }
                  },
                  {
                    type: "Feature",
                    geometry: {
                      type: "Point",
                      coordinates: [-71.98384959999999, -13.5156302]
                    }
                  },
                  {
                    type: "Feature",
                    geometry: {
                      type: "Point",
                      coordinates: [-71.9805093, -13.5195037]
                    }
                  },
                  {
                    type: "Feature",
                    geometry: {
                      type: "Point",
                      coordinates: [-71.98504020000001, -13.5214454]
                    }
                  },
                  {
                    type: "Feature",
                    geometry: {
                      type: "Point",
                      coordinates: [-71.98216259999998, -13.5161239]
                    }
                  },
                  {
                    type: "Feature",
                    geometry: {
                      type: "Point",
                      coordinates: [-71.98190369999998, -13.5160066]
                    }
                  },
                  {
                    type: "Feature",
                    geometry: {
                      type: "Point",
                      coordinates: [-71.97985210000002, -13.5151929]
                    }
                  },
                  {
                    type: "Feature",
                    geometry: {
                      type: "Point",
                      coordinates: [-71.97821770000002, -13.5199641]
                    }
                  }

                ]
              }
            },
            layout: {
              "icon-image": "bp",
              "icon-size": 0.2
            }
          });
        }
      );
    });
    map.on("move", () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });

    // map.on('move', function(event) {
    //   if (event.originalEvent) {
    //   console.log('A human moved the map');
    //   }
    //  });
  }

  render() {
    const { lng, lat, zoom } = this.state;

    return (
      <div>
        <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
          
        </div>
        <div>
        <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
        </div>
        <div className="mapbStyles" ref={el => (this.mapContainer = el)} className="Map-window" />
        
      </div>
    );
  }
}

export default Box;
