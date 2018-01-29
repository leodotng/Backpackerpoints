import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Box from "./Box";
import Gmaps from "./Gmaps";
import DemoCarousel from './DemoCarousel';
import "./App.css";


// const fixImage = {
//     width: "50px",
//     height: "50px",
//     align: "middle",
//     display: "inline-block"
//   };
//   const formatMap = {
//     width: "450px",
//     height: "450px",
//     align: "middle",
//     display: "inline-block"
//   };
class Book extends Component {
    render() {
        return (
            <div>
                <div>
                    
                    {/* <DemoCarousel /> */}
                </div>
                <div>
                <Gmaps />
                    </div>
                    </div>
        )
    }
}
export default Book;