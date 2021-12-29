import '../../App.css';

const Navbar=({setPage})=> {
    return(
        <nav>
            <button onClick={()=> setPage('planets')} className="nav-btn">
                Planets
            </button>
            <button onClick={()=> setPage('People')} className="nav-btn">
                People
            </button>
        </nav>
    )
}

export default Navbar;