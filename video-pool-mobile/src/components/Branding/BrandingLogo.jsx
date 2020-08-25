import React, { Component } from 'react';

class BrandingLogo extends Component {
    render() {
        return(
            <div className="tab-pane fade show active" id="logo">
                <div className="inner-tabs-holder w-100">
                    <div className="scroll-area sm-scroll">
                        <form>
                            <div className="logo-select-wrap">
                                <ul className="list-unstyled">
                                    <li><a href="#"><img src="images/demo-company.jpg" width="147" height="147" alt="" /></a></li>
                                </ul>
                                <div className="text-center">
                                    <a href="#" className="btn btn-warning btn-sm rounded-btn"><i className="icon-image"></i> Select Logo</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default BrandingLogo;