import React from 'react';

/* Components */
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

/* Styles */
import '../styles/main.css';

function Index() {
    return (
        <div id="page">
            <div className="dashboard-page">
                <Header />
                <main>
                    <div className="dashboard-wrap">
                        <div className="container-fluid">
                            <div className="main-tabs-wrap">
                                <Sidebar />
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default Index;