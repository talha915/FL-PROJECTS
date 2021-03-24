import React, { useState, useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Styles
import '../../styles/ratings.scss';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';

// Action
import { fetchHeader } from '../../actions/header';

// Constants
import { getHeader, trainer_user_type } from '../../constants/constants';

// Router
import { withRouter } from 'react-router-dom';

import dp from '../../images/dp.png';

function Header(props) {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [userType, setUserType] = useState({});
    const toggle = () => setDropdownOpen(prevState => !prevState);

    const dispatch = useDispatch();

    const userInfo = useSelector(state => state.postFetch);

    const dispatchCheckUser=()=> {
        if(userInfo.hasOwnProperty('userLogged')) {
            setUserType(userInfo.userLogged.userType);  
        }
        else {
            setUserType(trainer_user_type);
        }
    }

    useEffect(()=> {
        dispatchHead();
        dispatchCheckUser();
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
                        <i className={data.iconClass}></i>
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
            {userType === trainer_user_type ?  
            <div className="user-notification-wrapper">
                <span className="icon-Group-22380">
                   {getPaths()}
                </span>
            </div>
            : '' }  
            <Dropdown className="profile-dropdown" isOpen={dropdownOpen} size="sm" toggle={toggle}>
                    <DropdownToggle>
                        <div className="user-profile">
                            <span className="dp-wrapper">
                                <img src={dp} alt="user-dp" />
                            </span>
                            <span className="credentials">
                                {getCredentials()}
                            </span>
                            {userType === trainer_user_type ?               
                            <i className="icon-chevron-down"></i> 
                            : '' }
                        </div>
                    </DropdownToggle>
                    <DropdownMenu>
                        {getDropDownItems()}
                    </DropdownMenu>
            </Dropdown>
            {userType === trainer_user_type ? ''
                : 
                <span className="name" style={{color: "#fff"}} >
                    <i className="icon-logout name"></i>LogOut
                </span>
            }
        </div>
    )
}

export default withRouter(Header);