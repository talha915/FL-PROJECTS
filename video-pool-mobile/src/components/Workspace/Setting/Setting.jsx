import React, { Component } from 'react';

class Setting extends Component {
    render() {
        return (
            <main>
                <div className="content-wrap">
                    <form action="#" className="form-info">
                        <div className="content-group">
                            <div className="content-row">
                                <div className="text-wrap">
                                    <strong className="subtitle">Workspace Name</strong>
                                    <div className="text-area">My Workspace</div>
                                </div>
                                <a href="#" className="link">Edit</a>
                            </div>
                        </div>
                        <div className="content-group">
                            <strong className="title">Collaborators</strong>
                            <div className="content-row">
                                <div className="text-wrap">
                                    <strong className="subtitle">Invite by email</strong>
                                </div>
                                <a href="#" className="btn btn-primary">Invite</a>
                            </div>
                            <div className="content-row">
                                <div className="text-wrap">
                                    <div className="user-box">
                                        <div className="img-box">
                                            <span>FX</span>
                                        </div>
                                        <div className="text-box">
                                            <strong className="name">Enter Name</strong>
                                            <a className="mail" href="#">foxylady@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="link">Admin</a>
                            </div>
                        </div>
                        <div className="content-group">
                            <strong className="title">Personal/Company</strong>
                            <div className="content-row input-row justify-content-start">
                                <label htmlFor="fname">First Name :</label>
                                <div className="input-box">
                                    <input id="fname" type="text" />
                                </div>
                            </div>
                            <div className="content-row input-row justify-content-start">
                                <label htmlFor="lname">Last Name :</label>
                                <div className="input-box">
                                    <input id="lname" type="text" />
                                </div>
                            </div>
                            <div className="content-row input-row justify-content-start">
                                <label>Photo :</label>
                                <div className="photo-box">
                                    <i className="icon-tick"></i>
                                    <div className="photo"><img src="/images/img04.png" width="53" height="52" alt="img description" /></div>
                                    <label className="btn-photo">
                                        <input className="file" type="file" />
										change photo
									</label>
                                </div>
                            </div>
                            <div className="content-row input-row justify-content-start">
                                <label htmlFor="company">Company Name :</label>
                                <div className="input-box">
                                    <input id="company" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="content-group">
                            <strong className="title">Delete Workspace</strong>
                            <div className="content-row">
                                <div className="text-wrap">
                                    <div className="text-area">
                                        <strong className="subtitle">Delete your space "Workspace"</strong>
                                        <p>This will delete your work and all content within it and remove all team members from it</p>
                                    </div>
                                </div>
                                <a href="#" className="link">Delete Workspace</a>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        )
    }
}

export default Setting;