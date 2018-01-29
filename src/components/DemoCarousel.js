import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

const sliderStyle = {
    height: "100px",
    width: "50px"
}
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel style={sliderStyle}>
                <div>
                    <img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://static.pexels.com/photos/20787/pexels-photo.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel;