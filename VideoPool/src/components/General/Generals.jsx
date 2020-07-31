import React, { Component } from 'react';

/* Components */
import Exports from './Exports';
import Settings from './Settings';

/* Data */
import GeneralData from '../../Data/General.json';

/* Router */
import { withRouter } from 'react-router-dom';


class Generals extends Component {

    constructor(props) {
        super(props);
        this.state = {
            generalList: ''
        }
    }

    componentDidMount() {
        this.setGeneralList();
    }

    setGeneralList=()=> {
        this.setState({generalList: GeneralData.generalList});
    }

    getGeneralList=()=> {
        if(this.state.generalList) {
            let generals = this.state.generalList.map((data, index) => {
                return(
                    <li className="nav-item" key={index}>
                        <a className={data.activeStatus ? "nav-link active" : "nav-link"} data-toggle="pill" href="#setting" role="tab" aria-selected="true" onClick={()=>this.generalClick(data, index)}>
                            <span className="align">
                                <i className="icon icon-interface d-lg-none"></i>
                                <span className="text d-block">{data.name}</span>
                            </span>
                        </a>
                    </li>
                )
            })
            return generals;
        }
    }

    generalClick=(data, index)=> {
        this.props.history.push(data.redirect);
        let activeStates = [...this.state.generalList];
        for(let i=0; i<activeStates.length; i++) {
            if(activeStates[i].activeStatus === true) {
                activeStates[i].activeStatus = false;
            }
        }
        data.activeStatus = true;
    }

    render() {
        return (
            <div className="tab-pane fade show active" id="g-setting">
                <div className="d-flex flex-wrap flex-lg-nowrap w-100">
                    <div className="inner-tab-container order-2 order-lg-1">
                        <div className="inner-tabs-wrap">
                            <ul className="nav inner-tabs nav-pills" role="tablist">
                                {this.getGeneralList()}
                            </ul>
                            <div className="inner-tabs-content tab-content">
                                {window.location.pathname === "/general/settings"
                                    ?
                                    <Settings />
                                    :
                                    <Exports />
                                }               
                            </div>
                        </div>
                    </div>
                    <div className="video-box d-none d-lg-block order-1 order-lg-2 text-center">
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
export default withRouter(Generals);