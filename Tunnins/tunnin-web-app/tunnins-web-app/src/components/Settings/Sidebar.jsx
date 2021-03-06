import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle } from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { settingsSidebar } from '../../actions/settingSidebar';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { setting_sidebar } from '../../constants/constants';

// Styles
import '../../styles/notifications.scss';

function SettingSidebar(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatchSidebar();
    }, []);


    const dispatchSidebar = () => {
        dispatch(settingsSidebar(setting_sidebar));
    }

    const getSideList = useSelector(state => state.SettingsSidebar);
    
    const getList=()=> {
        if(getSideList.hasOwnProperty('sidebar')) {
            let sideList = getSideList.sidebar.map((data, index)=> {
                return(
                    <li key={index} className="list" onClick={()=>routeTo(data.route)}>
                        <i></i>{data.title}
                    </li>
                )
            });
            return sideList;
        }
    }

    const routeTo=(location)=> {
        props.history.push(location);
    }

    return(
        <ul className="left-container">
            {getList()}
        </ul>
    )

}

export default withRouter(SettingSidebar);