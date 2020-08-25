import React, { Component } from 'react';

// Data
import BrandingIntro from '../../Data/Branding.json';

// Scrollbar
import { Scrollbars } from 'react-custom-scrollbars';

class BrandingSound extends Component {

    constructor(props) {
        super(props);
        this.state = {
            brandingIntro: ''
        }
    }

    componentDidMount() {
        this.setBrandingSound();
    }

    setBrandingSound = () => {
        this.setState({ brandingIntro: BrandingIntro.brandingSound });
    }

    getBrandSoundList = () => {
        if (this.state.brandingIntro) {
            let list = this.state.brandingIntro.map((data, index) => {
                return (
                    <li>
                        <div className="sound-leftsize">
                            <div className="icon-wrap">
                                <a href="#">
                                    <img src={data.img} width="45" height="45" alt="play button" />
                                </a>
                            </div>
                            <div className="sound-detail">
                                <strong className="title">{data.heading1}</strong>
                                <span className="subtitle">{data.heading2}</span>
                            </div>
                        </div>
                        <a href="#" className="btn btn-warning rounded-btn">{data.btn}</a>
                    </li>
                )
            })
            return list;
        }
    }


    render() {
        return (
            <div className="tab-pane fade show active" id="logo-sound">
                <div className="inner-tabs-holder w-100">
                    <Scrollbars className="scroll-area sm-scroll">
                        <ul className="intro-sound-list list-unstyled">
                            {this.getBrandSoundList()}
                        </ul>
                    </Scrollbars>
                </div>
            </div>
        )
    }
}

export default BrandingSound;