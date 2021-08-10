import React from 'react';

import './fb-content.styles.scss';

/*import profile from '../../images/profile.jpg';
import plus from '../../images/plus-icon.svg';
import profile2 from '../../images/profile-2.jpg';
import logo from '../../logo.svg';*/

import FormComponent from '../form/form.component';
import RecentLogins from '../recent-logins/recent-logins.component';

import { Container, Row, Col } from 'react-bootstrap';

const FbContent = () => (
    <div className='fb-content-div'>
        <Container fluid className='fb-content-container'>
            <Container className='fb-content-container-2'>
                <Row className='rowz' xs={1} sm={1} md={2} lg={2}>
                    <Col lg={7} className='col first-col'>
                        <RecentLogins />
                    </Col>
                    <Col lg={5} className='col col-second'>
                        <FormComponent />
                    </Col>
                </Row>
            </Container>
        </Container>
    </div>
);

export default FbContent;


/*
<div className='fb-content-div'>
    <Container fluid className='fb-content-container'>
        <Container className='fb-content-container-2'>
            <Row className='rowz' xs={1} sm={1} md={2} lg={2}>
                <Col lg={7} className='col first-col'>
                    <h1 className="title">facebook</h1>
                    <div className="sub-title">Recent logins</div>
                    <div className="text-muted muted-txt">Click your picture or add an account.</div>

                    <Row xs={2} md={3} className="g-4 cards-row">
                        {
                            Array.from({ length: 4 }).map((_, idx) => (
                                <Col className='cards-col-1'>
                                    <Card className='card'>
                                        <Card.Img className='card-img' variant="top" src={profile} fluid />
                                        <Card.Title className='card-title'>Rachel</Card.Title>
                                    </Card>
                                </Col>
                            ))
                        }
                        {
                            Array.from({ length: 1 }).map((_, idx) => (
                                <Col className='cards-col-1'>
                                    <Card className='card'>
                                        <Card.Img className='card-img' variant="top" src={plus} fluid />
                                        <Card.Title className='card-title'>Add Account</Card.Title>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Col>
                <Col lg={5} className='col col-second'>
                    <FormComponent />
                </Col>
            </Row>
        </Container>
    </Container>
</div>
*/