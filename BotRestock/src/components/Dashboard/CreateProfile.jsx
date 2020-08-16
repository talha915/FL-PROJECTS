import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
class CreateProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            createType: 0
        }
    }

    closeProfile = () => {
        this.props.closeProfile(false);
    }

    setAddress = (data) => {
        this.setState({ createType: data });
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
                                            <ul class="tabset">
                                                <li className={this.state.createType === 0 ? "active" : ""} onClick={() => this.setAddress(0)}><a href="#">Details/Card</a></li>
                                                <li className={this.state.createType === 1 ? "active" : ""} onClick={() => this.setAddress(1)}><a href="#">Address</a></li>
                                            </ul>
                                            {this.state.createType === 0 ?
                                            <div>
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
                                            </div>
                                            :
                                            <div>
                                                <div class="form-row">
                                                    <div class="form-group">
                                                        <i class="icon icon-user"></i>
                                                        <input type="text" placeholder="Full Name" />
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group">
                                                        <i class="icon icon-zipcode"></i>
                                                        <input type="text" placeholder="Address" />
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group">
                                                        <i class="icon icon-zipcode"></i>
                                                        <input type="text" placeholder="Address 2" />
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group">
                                                        <i class="icon icon-zipcode"></i>
                                                        <div class="custom-select">
                                                            <select>
                                                                <option>Country</option>
                                                                <option>Country</option>
                                                                <option>Country</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <i class="icon icon-zipcode"></i>
                                                        <div class="custom-select">
                                                            <select>
                                                                <option>State</option>
                                                                <option>State</option>
                                                                <option>State</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group">
                                                        <i class="icon icon-zipcode"></i>
                                                        <div class="custom-select">
                                                            <select>
                                                                <option>City</option>
                                                                <option>City</option>
                                                                <option>City</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <i class="icon icon-zipcode"></i>
                                                        <div class="custom-select">
                                                            <select>
                                                                <option>Zipcode</option>
                                                                <option>Zipcode</option>
                                                                <option>Zipcode</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            }
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