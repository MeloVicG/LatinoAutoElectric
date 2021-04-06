import React, {useState, useEffect} from 'react';
import repair from '../static/images/vehicle_repair.jpg';
import engine from '../static/images/engine2.jpg';
import mustang from '../static/images/ev-mustang.jpg';
import Carousel from 'react-bootstrap/Carousel';


const SliderCarousel = () => {
    const [index, setIndex] = useState(0);
    const handleImage = (newIndex) => {
        setIndex(newIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleImage} className="w-70" height="400px">
                <Carousel.Item className="w-100" height="400px">        
                    <img
                    key="0"
                    className="d-block w-100 p-5"
                    height="700px"
                    src={mustang}
                    alt="Unavailable"
                    />
                </Carousel.Item>
                <Carousel.Item className="w-100" height="400px">        
                    <img
                    key="1"
                    className="d-block w-100 p-5"
                    height="700px"
                    src={engine}
                    alt="Unavailable"
                    />
                </Carousel.Item>
                <Carousel.Item className="w-100" height="400px">        
                    <img
                    key="2"
                    className="d-block w-100 p-5"
                    height="700px"
                    src={repair}
                    alt="Unavailable"
                    />
                </Carousel.Item>
        </Carousel>
    )
}

export default SliderCarousel;
