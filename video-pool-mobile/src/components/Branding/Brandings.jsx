import React, { Component } from 'react';

/* Router */
import { withRouter } from 'react-router-dom';

/* Data */
import BrandData from '../../Data/Branding.json';

/* Components */
import BrandingLogo from './BrandingLogo';
import BrandingSound from './BrandingSound';


const Colors = () => {
    return (
        <div className="tab-pane fade" id="color">
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

    setBrandList = () => {
        this.setState({ brandList: BrandData.brandingList });
    }

    getBrands = () => {
        if (this.state.brandList) {
            let brands = this.state.brandList.map((data, index) => {
                return (
                    <li className="nav-item" key={index}>
                        <a className={data.activeStatus ? "nav-link active" : "nav-link"} data-toggle="pill" href="#color" role="tab" aria-selected="false" onClick={() => this.brands(data, index)}>
                            <span className="align">
                                <i className="icon icon-color-swatch"></i>
                                <span className="text d-block">{data.name}</span>
                            </span>
                        </a>
                    </li>
                )
            })
            return brands;
        }
    }

    brands = (data, index) => {
        this.props.history.push(data.redirect);
        let activeStates = [...this.state.brandList];
        for (let i = 0; i < activeStates.length; i++) {
            if (activeStates[i].activeStatus === true) {
                activeStates[i].activeStatus = false;
            }
        }
        data.activeStatus = true;
    }


    render() {
        return (
            <div className="tab-pane fade show active" id="branding">
                <div className="d-flex flex-wrap w-100">
                    <div className="inner-tab-container order-2">
                        <div className="inner-tabs-wrap">
                            <ul className="nav inner-tabs nav-pills" role="tablist">
                                {this.getBrands()}
                            </ul>
                            <div className="inner-tabs-content tab-content">
                                {window.location.pathname === "/branding/colors"
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
                </div>
            </div>
        )
    }
}

export default withRouter(Brandings);