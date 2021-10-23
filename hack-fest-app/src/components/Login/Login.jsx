import React, { useEffect, useState } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';
import '../styles/login.css';
// Data
import data from '../Data/Data.json';
import allowLogin from '../Data/tempLogin.json';
// Router
import { withRouter } from 'react-router-dom';

function Login(props) {
    const [loginData, setLoginData] = useState('');
    useEffect(()=>{
        setLoginForm();
    },[]);

    const setLoginForm=()=> {
        if(props.history.location.pathname == "/") {
            if(data.hasOwnProperty('login')) {
                setLoginData(data.login);
            }
        }
        else {
            if(data.hasOwnProperty('signup')) {
                setLoginData(data.signup);
            }
        }
    }

    const getLoginForm=()=> {
        if(loginData.hasOwnProperty('form')) {
            let loginForm = loginData.form.map((data, index)=> {
                return(
                    <FormGroup key={index}>
                        <Label>{data.label}</Label>
                        <Input
                            type={data.type}
                            name={data.name}
                            placeholder={data.placeholder}
                            onChange={(e)=>formValues(data.name, e.target.value)}
                        />
                    </FormGroup>
                );
            });
            return loginForm;
        }
    }

    let form={};

    const formValues=(field, value)=> {
        form[field] = value;
        console.log(form);
    }

    const routeTo=(route)=> {
        props.history.push(route);
    }

    const loginForm=()=> {
        if(form.hasOwnProperty('email') && form.hasOwnProperty('password')) {
            let tempLogin = allowLogin.allows;
            for(let i=0; i<tempLogin.length; i++) {
                if (tempLogin[i].username === form['email'] && tempLogin[i].password === form['password']) {
                    props.history.push('/dashboard');
                }
            }
        }
    }

    return (
        <div className="App">
            <h2>{props.history.location.pathname == "/"? "Sign In": "Sign Up"}</h2>
            <Form className="form">
                {getLoginForm()}
                <div>
                    {props.history.location.pathname == "/" ?
                        <div className="btns">
                            <Button color="success" className="class-col" onClick={()=>loginForm()}>Login</Button>
                            <Button color="link" className="class-col" onClick={()=>routeTo(loginData.route)}>Signup</Button>
                        </div>
                        :
                        <div className="btns">
                            <Button color="success" size="lg" className="class-col" onClick={()=>routeTo("/")} block>Signup</Button>
                        </div>
                    }
                </div>
            </Form>
        </div>
    )
}
export default withRouter(Login);