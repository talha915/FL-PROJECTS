import React, { useState, useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Styles
import '../../styles/ratings.scss';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// Action
import { fetchHeader } from '../../actions/header';

// Constants
import { getHeader } from '../../constants/constants';

// Router
import { withRouter } from 'react-router-dom';

import dp from '../../images/dp.png';

function Header(props) {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatchHead();
    },[]);

    const dispatchHead=()=> {
        dispatch(fetchHeader(getHeader));
    }

    const getHead = useSelector(state => state.header);

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

    const getCredentials=()=> {
        if(getHead.hasOwnProperty('data')) {
            let credentials = getHead.data.credentials.map((data, index)=> {
                return(
                    <span className={data.class} key={index}>
                        {data.title}
                    </span>
                )
            });
            return credentials;
        }
    }

    const getDropDownItems=()=> {
        if(getHead.hasOwnProperty('data')) {
            let drops = getHead.data.dropdown.map((data, index)=> {
                return(
                    <DropdownItem key={index} onClick={()=>routeTo(data.route)}>
                        {data.title}
                    </DropdownItem>
                )
            });
            return drops;
        }
    }

    const routeTo=(location)=> {
        props.history.push(location);
    }

    return (
        <div className="profile-actions d-flex align-items-center justify-content-end">
            <div className="user-notification-wrapper">
                <span className="icon-Group-22380">
                   {getPaths()}
                </span>
            </div>
            <div className="user-profile">
                <Dropdown isOpen={dropdownOpen} size="sm" toggle={toggle}>
                    <DropdownToggle caret>
                        <span className="dp-wrapper">
                            <img src={dp} alt="user-dp" />
                        </span>
                        <span className="credentials">
                            {getCredentials()}
                        </span>
                    </DropdownToggle>
                    <DropdownMenu>
                        {getDropDownItems()}
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>
    )
}

export default withRouter(Header);