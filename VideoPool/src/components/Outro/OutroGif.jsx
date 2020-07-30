import React, { Component } from 'react';

class OutroGif extends Component {
    render() {
        return (
            <div className="tab-pane fade show active" id="gif">
                <div className="inner-tabs-holder w-100">
                    <div className="scroll-area sm-scroll">
                        <form className="search-form">
                            <div className="search-wrap">
                                <input type="search" className="form-control" placeholder="Search for GIFs" />
                                <button type="submit" className="btn-search btn"><i className="icon-search"></i></button>
                            </div>
                        </form>
                        <div className="gif-block-wrap">
                            <ul className="gif-bloks-list list-unstyled">
                                <li><a href="#"><img src="/images/gif01.png" width="200" height="161" alt="image description" /></a></li>
                                <li><a href="#"><img src="/images/gif03.png" width="200" height="161" alt="image description" /></a></li>
                                <li><a href="#"><img src="/images/gif01.png" width="200" height="161" alt="image description" /></a></li>
                                <li><a href="#"><img src="/images/gif03.png" width="200" height="161" alt="image description" /></a></li>
                                <li><a href="#"><img src="/images/gif01.png" width="200" height="161" alt="image description" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default OutroGif;