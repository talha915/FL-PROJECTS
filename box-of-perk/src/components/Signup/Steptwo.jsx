import React, { useState, useEffect } from 'react';
import { Row, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import data from '../Data/Data.json';
// Styles
import '../../styles/signup.scss';

function Steptwo() {
    const [steptwo, setsteptwo] = useState([]);

    useEffect(() => {
        setStepTwoForm(data);
    }, []);

    const setStepTwoForm=(data)=> {
        setsteptwo(data.register.step2);
    }

    const getStep2Form=()=> {
        if(steptwo instanceof Array) {
            let form = steptwo.map((data, index) => {
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
            <h2>Contact Person</h2>
            <Form>
                <Row> 
                    {getStep2Form()}                
                </Row>
            </Form>
        </div>
    )
}
export default Steptwo;