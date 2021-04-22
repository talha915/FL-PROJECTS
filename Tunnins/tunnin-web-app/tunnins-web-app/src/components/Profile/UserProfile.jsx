import React, { useEffect } from 'react';
import {
    Button, Form, FormGroup, Label, Input, Row, Col
} from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { userProfile } from '../../actions/userProfile';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { user_profile, user_edit_profile, get_profile } from '../../constants/constants';

// Styles
import '../../styles/profile.scss';

// Actions
import { getFetchParam } from '../../actions/getFetchParam';

// Components
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

import profileCover from '../../images/profile-cover.png';
import profileDp from '../../images/profile-dp.png';
function UserProfile(props) {

    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.postFetch);
    
    let userId;

    useEffect(()=> {
        getUserTrainerId();
        dispatchUserProfile();
    });

    const getUserTrainerId = () => {
        if (userInfo.hasOwnProperty('userLogged')) {
            if (userInfo.userLogged) {
                userId = userInfo.userLogged._id;
            }
        }
    }

    const dispatchUserProfile=()=> {
        if(props.history.location.pathname === "/edit-user-profile") {
            dispatch(userProfile(user_edit_profile));
        }
        else {
            dispatch(getFetchParam(get_profile, userId));
            dispatch(userProfile(user_profile));
        }
    }

    const users = useSelector(state => state.userProfile);
    
    // User Profile
    const usersProfile = useSelector(state=> state.getApi);

    const getUpperPart=()=> {
        if(users.hasOwnProperty('data')) {
            let upper = users.data;
            return(
                <Row className="mb-3">
                    <Col className="d-flex align-items-center col-6">
                        <h6 className="title m-0">
                            <i className="icon-chevron-left" onClick={()=>props.history.goBack()}></i>
                            {upper.title}
                        </h6>
                    </Col>

                    {getBtns(upper.btns)}

                </Row>
            )
        }
    }

    const routeTo=(location)=> {
        props.history.push(location);
    }

    const getBtns=(data)=> {
        let btns = data.map((items, index)=> {
            return(
                <Col className="add-btn-wrapper col-6" key={index}>
                    {
                        items.flag ?
                        <Button className="addBtn" onClick={()=>routeTo(items.route)}>
                            <i className={items.iconClass}></i>
                            {items.title}
                        </Button>
                        :
                        ''
                    }
                </Col>
            );
        });
        return btns;
    }

    const getProfile=()=> {
        if(users.hasOwnProperty('data') && usersProfile.hasOwnProperty('userProfile')) {
            let profile = users.data.userDetails;
            let usersProfile = usersProfile.userProfile;
            return(
                <Col>
                <div className="d-flex align-items-center">
                    <span className="profile-img-wrapper position-relative">
                        <img src={profileDp} />
                        
                        {props.history.location.pathname === "/edit-user-profile"
                        ?
                            <span className="delete-overlay">
                                <span className="delete-img-wrapper">
                                    <i className="icon-delete"></i>
                                </span>
                            </span>
                        :
                            ''
                        } 
                    </span>
                    <span className="profile-name-wrapper">
                        <span className="profile-name">
                            {profile.name}
                        </span>
                        <span className="username">
                            {profile.id}
                        </span>
                    </span>
                </div>
                    
                    
                </Col>
            ); 
        }
    }

    const getProfileImages=()=> {
        if(users.hasOwnProperty('data')) {
            let profileDetail = users.data.userDetails.coverImages.map((data, index)=> {
                return(
                    <Col className="cover-images" key={index}>
                        <div className="position-relative">
                            <img src={profileCover} alt={data.alt}/>
                            {props.history.location.pathname === "/edit-user-profile"
                            ?
                                <span className="delete-overlay">
                                    <span className="delete-img-wrapper">
                                        <i className="icon-delete"></i>
                                    </span>
                                </span>
                            :
                                ''
                            }
                        </div>
                    </Col>
                );
            })
            return profileDetail;
        }
    }

    const getUserForm=()=> {
        if(users.hasOwnProperty('data')  && usersProfile.hasOwnProperty('userProfile')) {
            let usersProfile = usersProfile.userProfile;
            let form = users.data.userDetails.userform.map((data, index)=> {
                return(
                    <Col className={data.paddingClass} key={index}>
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
                    <Col>
                        <div className="profile-right-container">
                            <div className="profile-header mt-4">
                                {getUpperPart()}
                            </div>
                            <Row  className="user-profile-wrapper">
                                {getProfile()}
                            </Row >
                            <Row className="profile-cover-wrapper">
                                {getProfileImages()}
                            </Row>
                            <Form className="tunnin-form">
                                <Row className={props.history.location.pathname==="/user-profile" ? "user-profile-form-read-only" : "user-profile-form-edit"}>
                                    {getUserForm()}
                                </Row>                            
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default withRouter(UserProfile);