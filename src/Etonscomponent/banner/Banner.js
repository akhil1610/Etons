import React from 'react'
import ban1 from "../../assets/banner/ban1.png"
import ban2 from "../../assets/banner/ban2.png"
import ban3 from "../../assets/banner/ban3.png"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';

function Banner() {
    return (
            <Carousel>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src={ban1}
                        alt="Image One"
                    />
                    <Carousel.Caption>
                        <h3>Label for first slide</h3>
                        <p>Sample Text for Image One</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src={ban2}
                        alt="Image One"
                    />
                    <Carousel.Caption>
                        <h3>Label for first slide</h3>
                        <p>Sample Text for Image One</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src={ban3}
                        alt="Image Two"
                    />
                    <Carousel.Caption>
                        <h3>Label for second slide</h3>
                        <p>Sample Text for Image Two</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    )
}

export default Banner
