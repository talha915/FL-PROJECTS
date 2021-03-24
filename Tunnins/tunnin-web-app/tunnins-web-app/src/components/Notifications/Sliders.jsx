import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import userSlider from '../../images/user-slider-image.png';

class Sliders extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={userSlider} />
                </div>
                <div>
                    <img src={userSlider} />
                </div>
                <div>
                    <img src={userSlider} />
                </div>
            </Carousel>
        );
    }
}

export default Sliders;