import React from 'react';

import Footer from '../../components/footer/footer.component';
//import FormComponent from '../../components/form/form.component';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import './log-in.styles.scss';

import { auth } from '../../firebase/firebase.utils';

class LogInPage extends React.Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        // prevents the default actions of a form so that we have more control
        // we specify when to submit or not
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            // clear state if signing in succeeds
            this.setState({ email: '', password: '' });

            alert("log in successful!");

            this.props.history.push('/profile');
        } catch (error) {
            console.error(error);
        }
    }

    handleChange = event => {
        // pull the value and name out of our event.target
        const { value, name } = event.target;

        // dynamically setting the keys in our state based on the names provided in FromInput
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='log-in-main-div'>
                <div className='log-in-content'>
                    <Container fluid className='log-in-form-container'>
                        <Row className='login-row' xs={1} sm={1} md={3} lg={3}>
                            <Col className='login-col' md={3} lg={4}></Col>
                            <Col className='login-col' md={6} lg={4}>
                                <h1 className="login-title">facebook</h1>

                                <Form className='login-form' autoComplete='on' onSubmit={this.handleSubmit}>
                                    <div className='form-title'>Log in to Facebook</div>
                                    <Form.Group className="mb-3">
                                        <Form.Control className='_input' name='email' type='email' value={this.state.email} onChange={this.handleChange} placeholder="Email address or phone number" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control className='_input' name='password' type='password' value={this.state.password} autoComplete="on" onChange={this.handleChange} placeholder="Password" required />
                                    </Form.Group>
                                    <Button className='log-in-button btn btn-primary' type='submit' variant="success">
                                        Sign Up
                                    </Button>
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
    }

};

export default LogInPage;

/*
<Link className='log-in-button btn btn-primary' to=''>
                                        Log In
                                    </Link>
*/