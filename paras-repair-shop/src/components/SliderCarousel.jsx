import React, { useState, useEffect } from 'react';

import repair from '../static/images/vehicle_repair2.jpg';
import engine from '../static/images/engine3.jpg';
import mustang from '../static/images/mustang2.jpg';
import Carousel from 'react-bootstrap/Carousel';


const SliderCarousel = () => {
    const [index, setIndex] = useState(0);
    const handleImage = (newIndex) => {
        setIndex(newIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleImage} className="w-60" height="800px">
            <Carousel.Item >
                <img
                    key="0"
                    className="d-block w-100 p-5 border-0"
                    height="700px"
                    src={mustang}
                    alt="Unavailable"
                />
                <div className="carousel-caption d-none d-lg-block text-white bg-dark" style={{ 'zIndex': "1" }}>
                    <h5>Custom Builds</h5>
                    <p>Building and maintaining the highest quality vehicles.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    key="1"
                    className="d-block w-100 p-5 border-0"
                    height="700px"
                    src={engine}
                    alt="Unavailable"
                />
                <div className="carousel-caption d-none d-lg-block text-white bg-dark" style={{ 'zIndex': "1" }}>
                    <h5>Services</h5>
                    <p>Full service and maintenance.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    key="2"
                    className="d-block w-100 p-5 border-0"
                    height="700px"
                    src={repair}
                    alt="Unavailable"
                />
                <div className="carousel-caption d-none d-lg-block text-white bg-dark" style={{ 'zIndex': "1" }}>
                    <h5>Repair</h5>
                    <p>Available 7 days a week!</p>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}

export default SliderCarousel;
