import React, { useState, useEffect } from 'react';
import {
    Button, Form, FormGroup, Label, Input, Row, Col, Card
} from 'reactstrap';


// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { sessionModal } from '../../actions/sessionModal';
import { addSession } from '../../actions/addSession';
import { addedSession } from '../../actions/addedSession';
import { getFetch } from '../../actions/getFetch';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { add_session, add_session_modal, categories_list, create_session } from '../../constants/constants';

// Styles
import '../../styles/newsession.scss';

// Action
import { postFetch } from '../../actions/postFetch';

// Components
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Popup from './Popup';

function AddSession(props) {

    let sessionForm = {};

    const dispatch = useDispatch();
    const [uploaded_image, setImage] = useState([]);
    const [uploadedImageFile, setUploadedFile] = useState([]);
    const [form, setform] = useState({});
    const [editForm, setEditForm] = useState({});

    const newSession = useSelector(state => state.addSession);

    const editSession = useSelector(state => state.addedSession);

    const categories = useSelector(state => state.signupCategories);

    const userFetch = useSelector(state => state.postFetch);

    const dispatchCategories = () => {
        dispatch(getFetch(categories_list));
    }


    useEffect(() => {
        dispatchNewSession();
        dispatchEditSession();
        dispatchCategories();
    }, []);


    const dispatchNewSession = () => {
        dispatch(addSession(add_session));
    }

    const dispatchEditSession=()=> {
        if(Object.keys(editSession).length > 0) {
            setEditForm(editSession.addedNewSession);
        }
    }

    const getSessionTop = () => {
        if (newSession.hasOwnProperty('data')) {
            console.log("Edit Session", editSession);
            return (
                <Row className="mb-3">
                    <Col className="d-flex align-items-center col-sm-6">
                        <h6 className="title m-0">
                            <i className="icon-chevron-left" onClick={()=>props.history.goBack()}></i>
                            {props.history.location.pathname === "/edit-session" ? 'Edit Session' : newSession.data.title}
                        </h6>
                    </Col>
                    <Col className="add-btn-wrapper col-sm-6">
                        <Button className="addBtn" onClick={()=>dispatchAction()}>
                            {props.history.location.pathname === "/edit-session" ? 'SAVE' : newSession.data.btnTitle}
                        </Button>
                    </Col>
                </Row>
            );
        }
    }

    const dispatchAction=()=> {
        dispatch(addedSession(sessionForm));   
        if(props.history.location.pathname === "/edit-session") {
            //props.history.push('/home-past');
            dispatchEditSession();
        }
        else {
            dispatch(sessionModal(add_session_modal));
            dispatchCreateSession();
        }
    }

    const dispatchEditSession=()=> {
        let bodyFormData = new FormData();
        if(userFetch.hasOwnProperty('userLogged')) {
            console.log("Uploaded Image: ", uploadedImageFile);
            bodyFormData.append("trainerId", userFetch.userLogged._id);
            bodyFormData.append("catId", sessionForm.category);
            bodyFormData.append("title", sessionForm.name_of_class);
            bodyFormData.append("fromDate", Date.parse(sessionForm.start_date));
            bodyFormData.append("toDate", Date.parse(sessionForm.end_date));
            bodyFormData.append("fromTime", sessionForm.start_time);
            bodyFormData.append("toTime", sessionForm.end_time);
            bodyFormData.append("price", sessionForm.session_price);
            bodyFormData.append("userLimit", userFetch.userLogged._id);
            bodyFormData.append("requirements", sessionForm.what_you_need);
            bodyFormData.append("detail", sessionForm.about);
            bodyFormData.append("images", uploadedImageFile);
            bodyFormData.append("competencylevel", "Beginner");
        }
        console.log("Body Form Data: ", bodyFormData);
        dispatch(postFetch(create_session, bodyFormData));
    }

    const dispatchCreateSession=()=> {
        let bodyFormData = new FormData();
        if(userFetch.hasOwnProperty('userLogged')) {
            console.log("Uploaded Image: ", uploadedImageFile);
            bodyFormData.append("trainerId", userFetch.userLogged._id);
            bodyFormData.append("catId", sessionForm.category);
            bodyFormData.append("title", sessionForm.name_of_class);
            bodyFormData.append("fromDate", Date.parse(sessionForm.start_date));
            bodyFormData.append("toDate", Date.parse(sessionForm.end_date));
            bodyFormData.append("fromTime", sessionForm.start_time);
            bodyFormData.append("toTime", sessionForm.end_time);
            bodyFormData.append("price", sessionForm.session_price);
            bodyFormData.append("userLimit", userFetch.userLogged._id);
            bodyFormData.append("requirements", sessionForm.what_you_need);
            bodyFormData.append("detail", sessionForm.about);
            bodyFormData.append("images", uploadedImageFile);
            bodyFormData.append("competencylevel", "Beginner");
        }
        console.log("Body Form Data: ", bodyFormData);
        dispatch(postFetch(create_session, bodyFormData));
    }

    const popup = useSelector(state => state.sessionModal);

    const getImages = () => {
        if (newSession.hasOwnProperty('data')) {
            return (
                <Row>
                    <Col sm="12">
                        <p className="upload-title">
                            {newSession.data.upload}
                        </p>
                    </Col>
                    <Col sm="8">
                        <Row>
                            {getuploads()}
                        </Row>
                    </Col>
                </Row>
            )
        }
    }

    const getuploads=()=> {
        if (newSession.hasOwnProperty('data')) {
            let cards = newSession.data.cardList;
            let cardList = cards.map((data, index)=> {
                return(
                    <Col sm="3" key={index}>
                        <Card className="uploads">
                            <label htmlFor="fileUpload">
                                <div className="d-none upload-icon-wrapper">
                                    {data.icon}
                                </div>
                                {props.history.location.pathname === "/add-new-session"
                                    ?
                                    <i className="icon-cloud"></i>
                                    :
                                    <span className="delete-img-wrapper">
                                        <i className="icon-delete"></i>
                                    </span>
                                }
                            </label>
                            {/* {uploaded_image && uploaded_image} */}
                            <input hidden id="fileUpload" type="file" onChange={(e)=>uploadedFile(e)} />
                        </Card>
                    </Col>
                );
            });
            return cardList;
        }
    }

    const getUploadedImages=()=> {
        if(uploaded_image) {
            let images = uploaded_image.map((data, index)=> {
                return(
                    <span key={index} >
                        {data}
                    </span>
                );
            });
            return images;
        }
    }

    const ImageThumb = ({ image }) => {
        return <img src={URL.createObjectURL(image)} alt={image.name} />;
      };

    const uploadedFile=(event)=> {
        let imageFile = event.target.files[0];
        if(uploadedImageFile < 4) {
            setUploadedFile(...uploadedImageFile, imageFile);
        }
        let image = URL.createObjectURL(imageFile);
        console.log("Images: ", imageFile);
        setImage(uploaded_image=>[...uploaded_image, <img src={image} alt={image.name} style={{height: "150px"}}/>]);
        //uploaded_image = <img src={image} alt={image.name} />;
        console.log("Uploaded Image: ",(uploaded_image));
    }

    const getForm=()=> {
        if (newSession.hasOwnProperty('data')) {
            let form = newSession.data.sessionForm;
            let formList = form.map((data, index)=> {
                return(
                    <Col key={index} sm={data.size}>
                        <FormGroup>
                            <Label className={data.title !="" ? "form-title": "form-empty-title"}>
                                {data.title}
                            </Label>
                            {data.type == "select" ?
                                // <select className="form-control" name={data.name} defaultValue={editSession.addedNewSession[data.name]} onChange={(e)=>{getNewSession(data.name, e.target.value)}} >
                                //     {getOptions(data.options)}
                                // </select>
                                <select className="form-control" name={data.name} onChange={(e)=>{getNewSession(data.name, e.target.value)}}>
                                    {getOptions(categories.data)}
                                </select>                   
                                :
                                <Input placeholder={data.placeholder} type={data.type} name={data.name} defaultValue={editSession.addedNewSession[data.name]} onChange={(e)=>{getNewSession(data.name, e.target.value)}} />
                            }                  
                        </FormGroup>
                    </Col>
                );
            });
            return formList;
        }
    }

    const getNewSession=(key, value)=> {
        sessionForm[key] = value;
        console.log("SessionForm : ", sessionForm);
    }

    const getOptions=(data)=> {
        if(categories.hasOwnProperty('data')) {
            let options = data.map((data, index)=> {
                return(
                    <option value={data._id} key={index}>
                        {data.categoryName}
                    </option>
                );
            });
            return options;
        }
    }


    return (
        <div className="new-session">
            {popup.popUp ?            
                <Popup modalState={popup} action_type={add_session_modal} />
                :
                <div>
                    <Header />
                    <div className="container-fluid">
                        <Row>
                            <Col className="left-container">
                                <Sidebar />
                            </Col>
                            <Col  className="mt-3">
                                <div className="add-session-right-container">
                                    {getSessionTop()}
                                    {getImages()}
                                    {getUploadedImages()}
                                    <Form className="tunnin-form mt-5">
                                        <Row>
                                            {getForm()}
                                        </Row>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            } 
        </div>
    )
}

export default withRouter(AddSession);