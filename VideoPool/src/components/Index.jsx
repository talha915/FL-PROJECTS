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
                    <div class="dashboard-wrap">
                        <div class="container-fluid">
                            <div class="main-tabs-wrap">
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