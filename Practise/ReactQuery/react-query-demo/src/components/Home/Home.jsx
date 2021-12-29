import { useState } from 'react';
import '../../App.css';

import Navbar from '../Navbar/Navbar';
import Planets from '../Planets/Planets';
import People from '../People/People';

const Home = () => {

    const [page, setPage] = useState('planets');

    return (
        <div className="App">
            <h1>Star Wars Info</h1>
            <Navbar setPage={setPage} />
            <div className="content">
                {page === 'planets' ? <Planets /> : <People />}
            </div>
        </div>
    )
}

export default Home;