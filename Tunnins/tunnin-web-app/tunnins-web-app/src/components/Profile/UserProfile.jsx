import React, { useEffect } from 'react';
import {
    Button, Form, FormGroup, Label, Input, Row, Col, Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { userProfile } from '../../actions/userProfile';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { user_profile } from '../../constants/constants';

// Styles
import '../../styles/profile.scss';

// Components
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

function UserProfile() {

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatchUserProfile();
    }, []);

    const dispatchUserProfile=()=> {
        dispatch(userProfile(user_profile));
    }

    const users = useSelector(state => state.userProfile);
    console.log("Users: ", users);

    const getUpperPart=()=> {
        if(users.hasOwnProperty('data')) {
            let upper = users.data;
            return(
                <Row className="mb-3">
                    <Col className="d-flex align-items-center col-sm-11">
                        <h6 className="title m-0">
                            <i className="icon-chevron-left"></i>
                            {upper.title}
                        </h6>
                    </Col>
                    <Col className="add-btn-wrapper col-sm-1">
                        <Button className="addBtn">
                            {upper.editBtn}
                        </Button>
                    </Col>
                </Row>
            )
        }
    }

    const getProfile=()=> {
        if(users.hasOwnProperty('data')) {
            let profile = users.data.userDetails;
            return(
                <Row>
                    <Col>
                        <span>
                            <img src={profile.img} />
                        </span>
                        <span>
                            {profile.name}
                            {profile.id}
                        </span>
                    </Col>
                </Row>
            ); 
        }
    }

    const getProfileImages=()=> {
        if(users.hasOwnProperty('data')) {
            let profileDetail = users.data.userDetails.coverImages.map((data, index)=> {
                return(
                    <Col key={index}>
                        <img src={data.img} alt={data.alt}/>
                    </Col>
                );
            })
            return profileDetail;
        }
    }

    const getUserForm=()=> {
        if(users.hasOwnProperty('data')) {
            let form = users.data.userDetails.userform.map((data, index)=> {
                return(
                    <Col key={index} sm={data.size}>
                        <FormGroup>
                            <Label className={data.title !="" ? "form-title": "form-empty-title"}>
                                {data.title}
                            </Label>
                            <Input placeholder={data.placeholder} type={data.type} name={data.name} disabled />                
                        </FormGroup>
                    </Col>
                )
            });
            return form;
        }
    }

    return(
        <div className="profiles">
           <Header />
            <div className="container-fluid">
                <Row>
                    <Col className="left-container">
                        <Sidebar />
                    </Col>
                    <Col sm="9" className="custom-offset">
                        {getUpperPart()}
                        {getProfile()}
                        <Row>
                            {getProfileImages()}
                        </Row>
                        <Row>
                            {getUserForm()}
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default UserProfile;