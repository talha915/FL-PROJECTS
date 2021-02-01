import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle } from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { ListNotification } from '../../actions/notification';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { listed_notification } from '../../constants/constants';

// Styles
import '../../styles/notifications.scss';

function Sidebar(props) {

    const dispatch = useDispatch();
    const getNotification = useSelector(state => state.notification);

    useEffect(() => {
        dispatchNotification();
    }, []);

    const dispatchNotification=()=> {
        dispatch(ListNotification(listed_notification));
    }

    const getSidebar=()=> {
        if(getNotification.hasOwnProperty('data')) {
            let lists = getNotification.data.sideList;
            let sidebar = lists.map((data, index)=> {
                return(
                    <li key={index} className="list">
                        {data.name}
                    </li>
                )
            })
            return sidebar;
        }       
    }

    return(
        <ul>
            {getSidebar()}
        </ul>
    )

}

export default Sidebar;