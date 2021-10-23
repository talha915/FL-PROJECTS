import React from 'react';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import { Container, Row, Col } from 'reactstrap';

function Dashboard() {
    return(
        <div >
            <Row>
                <Col sm="2">
                    <LeftMenu />
                </Col>
                <Col sm="10">
                    <RightMenu />
                </Col>
            </Row>
        </div>
    )
}
export default Dashboard;