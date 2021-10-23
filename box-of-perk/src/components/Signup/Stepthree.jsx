import React, { useState, useEffect } from 'react';
import { Row, Col, Form, FormGroup, Input, Button, Label } from 'reactstrap';
import data from '../Data/Data.json';
// Styles
import '../../styles/login.scss';

function Stepthree() {
    return (
        <div>
            <h2>Comments</h2>
            <Form>
                <Row>
                    <Col sm={12}>
                        <FormGroup>
                            <Label>{data.title}</Label>
                            <Input type="textarea" className="form-fields" />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
            <Button color="success" style={{marginLeft: "1030px", marginTop: "10px"}}>Submit</Button>
        </div>
    )
}
export default Stepthree;