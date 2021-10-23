import React, { useState, useEffect } from 'react';
import { Row, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import data from '../Data/Data.json';
// Styles
import '../../styles/signup.scss';

function StepOne() {
    const [stepone, setstepone] = useState([]);

    useEffect(() => {
        setStepOneForm(data);
    }, []);

    const setStepOneForm=(data)=> {
        setstepone(data.register.step1);
    }

    const getStep1Form=()=> {
        if(stepone instanceof Array) {
            let form = stepone.map((data, index) => {
                return (
                    <Col sm={data.size} key={index}>
                        <FormGroup>
                            <Label>{data.title}</Label>
                            <Input type={data.type} className="form-fields" />
                        </FormGroup>
                    </Col>
                )
            });
            return form;
        }
    }

    return (
        <div>
            <h2>Company Information</h2>
            <Form>
                <Row> 
                    {getStep1Form()}                
                </Row>
            </Form>
        </div>
    )
}
export default StepOne;