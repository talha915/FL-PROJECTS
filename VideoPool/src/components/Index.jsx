import React from 'react';

/* Components */
import Header from './Header';
import Footer from './Footer';

/* Styles */
import '../styles/main.css';

function Index() {
    return (
        <div id="page">
            <div className="dashboard-page">
                <Header />
                <Footer />
            </div>
        </div>
    )
}

export default Index;