import React, { Component } from 'react';

/* Data */
import outroData from '../../Data/Outro.json';
/* Router */
import { withRouter } from 'react-router-dom';

// Components
import OutroGif from './OutroGif';
import OutroText from './OutroText';
import OutroVideo from './OutroVideo';

class Outros extends Component {


    constructor(props) {
        super(props);
        this.state = {
            outrosList: ''
        }
    }

    componentDidMount() {
        this.setOutroNav();
    }

    setOutroNav = () => {
        this.setState({ outrosList: outroData.outro });
    }

    navList = () => {
        if (this.state.outrosList) {
            let navList = this.state.outrosList.map((data, index) => {
                return (
                    <li className="nav-item" key={index}>
                        <a className={data.activeStatus ? "nav-link active" : "nav-link"} data-toggle="pill" href="#video3" role="tab" aria-selected="true" onClick={() => this.outroClick(data, index)}>
                            <span className="align">
                                <i className={data.icon}></i>
                                <span className="text d-block">{data.name}</span>
                            </span>
                        </a>
                    </li>
                )
            })
            return navList;
        }
    }


    outroClick = (data, index) => {
        this.props.history.push(data.redirect);
        let outroNav = [...this.state.outrosList];
        for (let i = 0; i < outroNav.length; i++) {
            if (outroNav[i].activeStatus === true) {
                outroNav[i].activeStatus = false;
            }
        }
        data.activeStatus = true;
    }

    render() {
        return (
            <div>
                <main>
                    <div className="dashboard-wrap">
                        <div className="container-fluid">
                            <div className="main-tabs-wrap">
                                <div className="main-tabs-content tab-content">
                                    <div className="tab-pane fade show active" id="outro">
                                        <div className="d-flex flex-wrap w-100">
                                            <div className="inner-tab-container order-2">
                                                <div className="inner-tabs-wrap">
                                                    <ul className="nav inner-tabs nav-pills" role="tablist">
                                                        {this.navList()}
                                                    </ul>
                                                    <div className="inner-tabs-content tab-content">
                                                        {
                                                            window.location.pathname === "/outro/video"
                                                                ?
                                                                <OutroVideo />
                                                                :
                                                                window.location.pathname === "/outro/gif"
                                                                    ?
                                                                    <OutroGif />
                                                                    :
                                                                    <OutroText />
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="video-box order-1 text-center">
                                                <a href="#video-Modal" data-toggle="modal" className="btn-play"><img src="/images/play.png" width="76" height="76" alt="play button" /></a>
                                                <img src="/images/frame-video-mobile.png" className="img-fluid" width="394" height="218" alt="image description" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default withRouter(Outros);