import React, { useState, useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Styles
import '../../styles/ratings.scss';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// Action
import { fetchHeader } from '../../actions/header';
import { getFetch } from '../../actions/getFetch';

// Constants
import { getHeader, trainer_user_type, user_logout } from '../../constants/constants';
import { fine_res } from '../../constants/api_env';

// Router
import { withRouter } from 'react-router-dom';

import dp from '../../images/dp.png';

function Header(props) {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [userType, setUserType] = useState({});
    const [userLoggedDetails, setUserLogged] = useState({});
    const toggle = () => setDropdownOpen(prevState => !prevState);

    const dispatch = useDispatch();

    const userInfo = useSelector(state => state.postFetch);

    const dispatchCheckUser=()=> {
        if(userInfo.hasOwnProperty('userLogged')) {
            setUserLogged(userInfo.userLogged);
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
        console.log("User Logged Details: ", userLoggedDetails);
        if(userLoggedDetails) {      
            return(
                <span>
                    <span className="name">
                        {userLoggedDetails.fullName}
                    </span>
                    <span className="email">
                        {userLoggedDetails.email}
                    </span>
                </span>
            )       
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
        console.log("Loc: ", location);
    }

    const logout=()=> {
        dispatch(getFetch(user_logout));
    }

    const logUser = useSelector(state => state.getApi);

    if(logUser.hasOwnProperty('logout')) {
        if(logUser.logout.status === fine_res) {
            console.log("Fine");
            props.history.push("/signup");
        }
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
                <span className="name user-logout" style={{color: "#fff"}} onClick={()=>logout()}>
                    <i className="icon-logout name"></i>LogOut
                </span>
            }
        </div>
    )
}

export default withRouter(Header);