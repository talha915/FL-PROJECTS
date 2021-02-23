import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Styles
import '../../styles/ratings.scss';

// Action
import { fetchHeader } from '../../actions/header';

// Constants
import { getHeader } from '../../constants/constants';

// Router
import { withRouter } from 'react-router-dom';

import dp from '../../images/dp.png';

function Header() {

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatchHead();
    },[]);

    const dispatchHead=()=> {
        dispatch(fetchHeader(getHeader));
    }

    const getHead = useSelector(state => state.header);
    console.log("Head: ", getHead);

    const getPaths=()=> {
        if(getHead.hasOwnProperty('data')) {
            let paths = getHead.data.paths.map((data, index)=> {
                return(
                    <span className={data.class} key={index}></span>
                )
            });
            return paths;
        }
    }

    return (
        <div className="profile-actions d-flex align-items-center justify-content-end">
            <div className="user-notification-wrapper">
                <span className="icon-Group-22380">
                   {getPaths()}
                </span>
            </div>
            <div className="user-profile">
                <span className="dp-wrapper">
                    <img src={dp} alt="user-dp" />
                </span>
                <span className="credentials">
                    <span className="name">
                        Sanjay Singh
                    </span>
                    <span className="email">
                        sanjay.singh@gmail.com
                    </span>
                </span>
            </div>
        </div>
    )
}

export default Header;