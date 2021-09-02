import React from 'react';

import { Modal, Form, Button, Row, Col } from 'react-bootstrap';

import { IoCloseSharp } from 'react-icons/io5';

import { auth } from '../../firebase/firebase.utils';

import './add-account-form.styles.scss';

import { Link } from 'react-router-dom';


class AddAccountForm extends React.Component {

    constructor(props) {
        super(props);
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
            this.props.handleClose();

            this.props.history.push('/');
        } catch (error) {
            console.error(error);
        }
    };


    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {

        const { email, password } = this.state;

        return (
            <div>
                <Modal
                    show={this.props.show}
                    onHide={this.props.handleClose}
                    backdrop="static"
                    keyboard={false}
                    className='add-account-modal'
                    size="md"
                    centered
                >
                    <Modal.Header className='add-account-modal-header'>
                        <Modal.Title>
                            <div className='close-modal'>
                                <IoCloseSharp onClick={this.props.handleClose} />
                            </div>
                            <div className='add-account-title'>Log in to Facebook</div>

                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='add-account-modal-body'>
                        <div>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Control className='add-account-input' type='email' placeholder="Mobile number or email address" name='email' onChange={this.handleChange} value={email} required />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Control className='add-account-input' type="password" placeholder="Password" name='password' onChange={this.handleChange} value={password} autoComplete='on' required />
                                </Form.Group>


                                <Row>
                                    <Col>
                                        <Button className='login-btn' type='submit' variant="primary">
                                            Log In
                                        </Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='text-center'>
                                        <Link className='forgot-password' to='/forgot_password'>Forgotten password?</Link>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Modal.Body>

                </Modal>
            </div>
        );
    }
}

export default AddAccountForm;