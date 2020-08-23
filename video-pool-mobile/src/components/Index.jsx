import React, { Component } from 'react';

// Styles
import '../styles/main.css';

// Components
import Header from './Header';
import Tabs from './Tabs';

class Index extends Component {
    render() {
        return (
            <div>
                <div id="page">
                    <div className="dashboard-page">
                        <Header />
                        <Tabs />
                    </div>
                </div>
                <div className="modal conformation-modal fade" id="conformationModal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-xs">
                        <div className="modal-content">
                            <button type="button" className="close btn-close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="modal-body text-center">
                                <form>
                                    <h3>Do you want to delete this clip?</h3>
                                    <div className="btn-wrap">
                                        <a href="#" className="btn btn-primary">Yes</a>
                                        <a href="#" className="btn btn-light">NO</a>
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

export default Index;