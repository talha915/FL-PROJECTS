import React, { Component } from 'react';
import { withRouter } from 'react-router';
import '../../styles/main.css';

class PopupTweets extends Component {

    return=()=> {
        this.props.history.push('/settings');
    }

    render() {
        return (
            <div id="page">
                <main className="dashboard-wrap">
                    <div className="popup popup-tweets active">
                        <div className="popup-frame">
                            <div className="pupup-content">
                                <div className="tweet-popup-head">
                                    <div className="bullets">
                                        <span></span>
                                        <span className="bg-yellow"></span>
                                        <span className="bg-green"></span>
                                    </div>
                                    <div className="heading">
                                        <h3>Monitoring Tweets</h3>
                                    </div>
                                    <a onClick={this.return} className="btn small btn-danger close-tweets-popup"><i className="icon-cross"></i></a>
                                </div>
                                <div className="popup-body">
                                    <ul className="tweet-list">
                                        <li>
                                            <div className="tweet-head">
                                                <div className="tweet-head-left">
                                                    <a href="#" className="icon-wrap"><i className="icon-global"></i></a>
                                                    <a href="#" className="tag-link">@Cybersole</a>
                                                </div>
                                                <a href="#" className="btn btn-primary">Link to Tweet</a>
                                            </div>
                                            <div className="tweet-detail">
                                                <div className="live-link">
                                                    <strong className="title">Restock Live</strong>
                                                    <span className="d-block"><a href="#">https://cybersole.io/pacman/password?=H984erYTVNERSlergGUSuiv</a></span>
                                                </div>
                                                <strong className="password">Password:ff927gfeuef</strong>
                                                <time className="time" dateTime="2011-01-12">11:09:43.734 AM</time>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="tweet-head">
                                                <div className="tweet-head-left">
                                                    <a href="#" className="icon-wrap"><i className="icon-global"></i></a>
                                                    <a href="#" className="tag-link">@Cybersole</a>
                                                </div>
                                                <a href="#" className="btn btn-primary">Link to Tweet</a>
                                            </div>
                                            <div className="tweet-detail">
                                                <div className="live-link">
                                                    <strong className="title">Restock Live FCFS:</strong>
                                                    <span className="d-block"><a href="#">https://cybersole.io/password?=</a></span>
                                                </div>
                                                <time className="time" dateTime="2011-01-12">11:09:43.734 AM</time>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        )
    }
}

export default withRouter(PopupTweets);