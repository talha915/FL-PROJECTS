import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
class CreateProfile extends Component {

    closeProfile=()=> {
        this.props.closeProfile(false);
    }

    render() {
        return (
            <div className="popup-profile-active">
                <div className="popup popup-profile">
                    <div className="popup-frame">
                        <div className="pupup-content">
                            <div className="pupup-head">
                                <div className="heading">
                                    <span className="icon-wrap">
                                        <i className="icon-user"></i>
                                    </span>
                                    <h2>Profiles</h2>
                                </div>
                                <a onClick={this.closeProfile} className="close-profile-popup"><span className="circle"></span></a>
                            </div>
                            <div className="popup-body">
                                <form>
                                    <div className="columns">
                                        <div className="filed-colum">
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <i className="icon icon-user"></i>
                                                    <input type="text" placeholder="Profile Name" />
                                                </div>
                                                <div className="form-group">
                                                    <i className="icon icon-user"></i>
                                                    <input type="text" placeholder="Full Name" />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <i className="icon icon-email"></i>
                                                    <input type="email" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <i className="icon icon-user"></i>
                                                    <input type="text" placeholder="Card Number" />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <i className="icon icon-card"></i>
                                                    <input type="text" placeholder="MM/YY" />
                                                </div>
                                                <div className="form-group">
                                                    <i className="icon icon-card"></i>
                                                    <input type="text" placeholder="CVV" />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <i className="icon icon-zipcode"></i>
                                                    <input type="text" placeholder="Zipcode" />
                                                </div>
                                            </div>
                                            <div className="btn-blocks">
                                                <button type="reset" className="btn btn-danger small"><i className="icon-cross"></i></button>
                                                <button type="submit" className="btn btn-primary"><i className="icon-plus"></i> Create Profile</button>
                                            </div>
                                        </div>
                                        <div className="card-info">
                                            <Scrollbars style={{ height: 285 }}>
                                            <ul>
                                                <li>
                                                    <div className="card-icon">
                                                        <img src="images/card01.png" width="50" height="29" alt="" />
                                                    </div>
                                                    <div className="card-detail">
                                                        <strong className="card-title">Debit 1</strong>
                                                        <span className="card-number"><span className="dots">&#8226;&#8226;&#8226;&#8226;</span><span className="dots">&#8226;&#8226;&#8226;&#8226;</span><span className="dots">&#8226;&#8226;&#8226;&#8226;</span>2643</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="card-icon">
                                                        <img src="images/card01.png" width="50" height="29" alt="" />
                                                    </div>
                                                    <div className="card-detail">
                                                        <strong className="card-title">Debit 1</strong>
                                                        <span className="card-number"><span className="dots">&#8226;&#8226;&#8226;&#8226;</span><span className="dots">&#8226;&#8226;&#8226;&#8226;</span><span className="dots">&#8226;&#8226;&#8226;&#8226;</span>2643</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="card-icon">
                                                        <img src="images/card01.png" width="50" height="29" alt="" />
                                                    </div>
                                                    <div className="card-detail">
                                                        <strong className="card-title">Debit 1</strong>
                                                        <span className="card-number"><span className="dots">&#8226;&#8226;&#8226;&#8226;</span><span className="dots">&#8226;&#8226;&#8226;&#8226;</span><span className="dots">&#8226;&#8226;&#8226;&#8226;</span>2643</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="card-icon">
                                                        <img src="images/card01.png" width="50" height="29" alt="" />
                                                    </div>
                                                    <div className="card-detail">
                                                        <strong className="card-title">Debit 1</strong>
                                                        <span className="card-number"><span className="dots">&#8226;&#8226;&#8226;&#8226;</span><span className="dots">&#8226;&#8226;&#8226;&#8226;</span><span className="dots">&#8226;&#8226;&#8226;&#8226;</span>2643</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="card-icon">
                                                        <img src="images/card01.png" width="50" height="29" alt="" />
                                                    </div>
                                                    <div className="card-detail">
                                                        <strong className="card-title">Debit 1</strong>
                                                        <span className="card-number"><span className="dots">&#8226;&#8226;&#8226;&#8226;</span><span className="dots">&#8226;&#8226;&#8226;&#8226;</span><span className="dots">&#8226;&#8226;&#8226;&#8226;</span>2643</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="card-icon">
                                                        <img src="images/card01.png" width="50" height="29" alt="" />
                                                    </div>
                                                    <div className="card-detail">
                                                        <strong className="card-title">Debit 1</strong>
                                                        <span className="card-number"><span className="dots">&#8226;&#8226;&#8226;&#8226;</span><span className="dots">&#8226;&#8226;&#8226;&#8226;</span><span className="dots">&#8226;&#8226;&#8226;&#8226;</span>2643</span>
                                                    </div>
                                                </li>
                                            </ul>
                                            </Scrollbars>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateProfile;