import React, { Component } from 'react';

/* Router */
import { withRouter } from 'react-router-dom';

/* Data */
import BrandData from '../../Data/Branding.json';

/* Components */
import BrandingLogo from './BrandingLogo';
import BrandingSound from './BrandingSound';

const Colors=()=> {
    return (
        <div className="tab-pane fade show active" id="color">
            <div className="inner-tabs-holder w-100">
                <div className="scroll-area">

                </div>
            </div>
        </div>
    )
}

class Brandings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            brandList: ''
        }
    }

    componentDidMount() {
        this.setBrandList();
    }

    setBrandList=()=> {
        this.setState({brandList: BrandData.brandingList});
    }

    getBrands=()=> {
        if(this.state.brandList) {
            let brands = this.state.brandList.map((data, index)=> {
                return(
                    <li className="nav-item" key={index}>
                        <a className={data.activeStatus ? "nav-link active": "nav-link"} data-toggle="pill" href="#color" role="tab" aria-selected="false" onClick={()=>this.brands(data, index)}>
                            <span className="align">
                                <i className="icon icon-color-swatch d-lg-none"></i>
                                <span className="text d-block">{data.name}</span>
                            </span>
                        </a>
                    </li>
                )
            })
            return brands;
        }
    }

    brands=(data, index)=> {
        this.props.history.push(data.redirect);
        let activeStates = [...this.state.brandList];
        for(let i=0; i<activeStates.length; i++) {
            if(activeStates[i].activeStatus === true) {
                activeStates[i].activeStatus = false;
            }
        }
        data.activeStatus = true;
    }

    render() {
        return (
            <div className="tab-pane fade show active" id="video3">
                <div className="d-flex flex-wrap flex-lg-nowrap w-100">
                    <div className="inner-tab-container order-2 order-lg-1">
                        <div className="inner-tabs-wrap">
                            <ul className="nav inner-tabs nav-pills" role="tablist">
                                {this.getBrands()}
                            </ul>
                            <div className="inner-tabs-content tab-content">
                                {   window.location.pathname === "/branding/colors"
                                        ?
                                            <Colors />
                                        : 
                                    window.location.pathname === "/branding/logo"
                                        ?
                                            <BrandingLogo />
                                        :
                                            <BrandingSound />        
                                }
                            </div>
                        </div>
                    </div>
                    <div className="video-box order-1 order-lg-2 text-center">
                        <a href="#" className="btn-paly"><img src="/images/play.png" width="76" height="76" alt="play button" /></a>
                        <div className="d-none d-lg-block">
                            <img src="/images/frame-video-desktop.png" className="img-fluid" width="364" height="718" alt="image description" />
                        </div>
                        <div className="d-lg-none">
                            <img src="/images/frame-video-mobile.png" className="img-fluid" width="394" height="218" alt="image description" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Brandings);