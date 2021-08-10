import React from 'react';

import Footer from '../../components/footer/footer.component';
//import FormComponent from '../../components/form/form.component';

import { Container, Row, Col, Form } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import './log-in.styles.scss';

const LogInPage = () => (
    <div className='log-in-main-div'>
        <div className='log-in-content'>
            <Container fluid className='log-in-form-container'>
                <Row className='login-row' xs={1} sm={1} md={3} lg={3}>
                    <Col className='login-col' md={3} lg={4}></Col>
                    <Col className='login-col' md={6} lg={4}>
                        <h1 className="login-title">facebook</h1>

                        <Form className='login-form' autoComplete='on'>
                            <div className='form-title'>Log in to Facebook</div>
                            <Form.Group className="mb-3">
                                <Form.Control className='_input' type="email" placeholder="Email address or phone number" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control className='_input' type="password" autoComplete="on" placeholder="Password" />
                            </Form.Group>
                            <Link className='log-in-button btn btn-primary' to=''>
                                Log In
                            </Link>
                            <br />

                            <Link className='forgot-pw' to='/forgot_password'>Forgotten password?</Link>
                        </Form>
                    </Col>
                    <Col className='login-col' md={3} lg={4}></Col>
                </Row>
            </Container>
        </div>
        <Container fluid className='footer-external-container'><Footer /></Container>
        
    </div>
);

export default LogInPage;