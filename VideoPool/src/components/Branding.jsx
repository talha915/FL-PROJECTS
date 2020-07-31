import React from 'react';

/* Components */
import Header from './Header';
import Sidebar from './Sidebar';
import Brandings from './Branding/Brandings';
import Footer from './Footer';

/* Styles */
import '../styles/main.css';

function Branding() {
    return(
        <div id="page">
            <div className="dashboard-page">
                <Header />
                <main>
                    <div className="dashboard-wrap">
                        <div className="container-fluid">
                            <div className="main-tabs-wrap">
                                <Sidebar />
                                <div className="main-tabs-content tab-content">
                                    <Brandings />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    )
}
export default Branding;