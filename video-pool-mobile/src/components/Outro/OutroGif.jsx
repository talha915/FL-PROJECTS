import React, { Component } from 'react';

/* Data */
import outroData from '../../Data/Outro.json';

class OutroGif extends Component {

    constructor(props) {
        super(props);
        this.state = {
            outroGif: ''
        }
    }

    componentDidMount() {
        this.setOutroGif();
    }

    setOutroGif=()=> {
        this.setState({outroGif: outroData.outroGif});
    }

    getOutroList=()=> {
        if(this.state.outroGif) {
            let gifList = this.state.outroGif.map((data, index)=> {
                return(
                    <li key={index}><a href="#"><img src={data.img} width="200" height="161" alt="image description" /></a></li>
                )
            })
            return gifList;
        }
    }

    render() {
        return (
            <div className="tab-pane fade show active" id="gif">
                <div className="inner-tabs-holder w-100">
                    <div className="scroll-area sm-scroll">
                        <form className="search-form">
                            <div className="search-wrap">
                                <input type="search" className="form-control" placeholder="Search for GIFs" />
                                <button type="submit" className="btn-search btn"><i className="icon-search"></i></button>
                            </div>
                        </form>
                        <div className="gif-block-wrap">
                            <ul className="gif-bloks-list list-unstyled">
                                {this.getOutroList()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OutroGif;