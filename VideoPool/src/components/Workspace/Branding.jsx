import React, { Component } from 'react';

// Components
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';

class Branding extends Component {
    render() {
        return (
            <main>
                <div className="content-wrap">
                    <form action="#" className="cols-holder">
                        <div className="column">
                            <strong className="title">Logo</strong>
                            <div className="box">
                                <strong className="subtitle">You haven't uploaded any company logo</strong>
                                <div className="holder">
                                    <div className="img-box">
                                        <img src="/images/flooop-logo.png" width="100" height="100" alt="img description" />
                                    </div>
                                    <label className="btn-upload"><input className="file" type="file" />Upload a Logo</label>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <strong className="title">Colors</strong>
                            <div className="box">
                                <strong className="subtitle">You haven't uploaded any company logo</strong>
                                <div className="holder">
                                    <div className="input-box">
                                        <span className="color-box"></span>
                                        <div className="input-wrap">
                                            <span className="color"></span>
                                            <input type="text" placeholder="#FF006A" />
                                        </div>
                                    </div>
                                    <a className="btn-color" href="#">+ Add Color</a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        )
    }
}

export default Branding;