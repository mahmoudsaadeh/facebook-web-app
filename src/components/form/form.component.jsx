import React, { useState } from 'react';

import './form.styles.scss';

import { Modal, Form, Button, Row, Col } from 'react-bootstrap';

import { IoMdHelpCircle } from 'react-icons/io';
import { IoCloseSharp } from 'react-icons/io5';
//import { GrFormDown } from 'react-icons/gr';

import { Link } from 'react-router-dom';

//import { BrowserRouter } from 'react-router-dom';
// import SignUpFormComponent from '../sign-up-form/sign-up-form.component';

// <a className='forgot-password' href="#">Forgotten password?</a>

const FormComponent = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Form className='form' autoComplete='on'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='input_' type="email" placeholder="Email address or phone number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='input_' type="password" autoComplete="on" placeholder="Password" />
                </Form.Group>
                <Link className='log-in-button btn btn-primary' to='/log-in-page'>
                    Log In
                </Link>
                <br />

                <Link className='forgot-password' to='/forgot_password'>Forgotten password?</Link>

                <hr />
                <Button className='new-account-button' variant="success" onClick={handleShow}>
                    Create New Account
                </Button>

            </Form>
            <div className='create-page'>
                <Link className='create-page-link' to='/create-a-page'>Create a Page </Link>
                for a celebrity, band or business.
            </div>



            {

                console.log(setShow)

            }

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className='modal-form'
                size="md"
                centered
            >
                <Modal.Header className='modal-header'>
                    <Modal.Title>
                        <div className='close-modal'>
                            <IoCloseSharp onClick={handleClose} />
                        </div>
                        <div className='sign-up-title'>Sign Up</div>
                        <div className='sign-up-muted'>It's quick and easy.</div>

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-body'>
                    <div>
                        <Form>
                            <Row >
                                <Form.Group as={Col} className='rem-padding'>
                                    <Form.Control className='signup-input' type="text" placeholder="First name" />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Control className='signup-input' type="text" placeholder="Surname" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3">
                                <Form.Control className='signup-input' type='email' type='tel' placeholder="Mobile number or email address" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control className='signup-input' type="password" placeholder="New password" />
                            </Form.Group>

                            <Row>
                                <div id='dob'>
                                    Date of Birth
                                    <IoMdHelpCircle size={17} className='help-icon' title='Click for more information.' />
                                </div>
                            </Row>

                            <Row>
                                <Form.Group as={Col} className='date rem-padding'>
                                    <select className='form-control day'>
                                        <option>1</option>
                                        <option selected>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                        <option>13</option>
                                        <option>14</option>
                                        <option>15</option>
                                        <option>16</option>
                                        <option>17</option>
                                        <option>18</option>
                                        <option>19</option>
                                        <option>20</option>
                                        <option>21</option>
                                        <option>22</option>
                                        <option>23</option>
                                        <option>24</option>
                                        <option>25</option>
                                        <option>26</option>
                                        <option>27</option>
                                        <option>28</option>
                                        <option>29</option>
                                        <option>30</option>
                                        <option>31</option>
                                    </select>
                                </Form.Group>

                                <Form.Group as={Col} className='date rem-padding'>
                                    <select className='form-control month'>
                                        <option>Jan</option>
                                        <option>Feb</option>
                                        <option>Mar</option>
                                        <option>Apr</option>
                                        <option>May</option>
                                        <option>Jun</option>
                                        <option>Jul</option>
                                        <option>Aug</option>
                                        <option>Sep</option>
                                        <option>Oct</option>
                                        <option>Nov</option>
                                        <option>Dec</option>
                                    </select>
                                </Form.Group>

                                <Form.Group as={Col} className='date'>
                                    <select className='form-control year'>
                                        <option>1999</option>
                                        <option>2000</option>
                                        <option>2001</option>
                                        <option>2002</option>
                                        <option>2003</option>
                                        <option>2004</option>
                                        <option>2005</option>
                                        <option>2006</option>
                                        <option>2007</option>
                                        <option>2008</option>
                                        <option>2009</option>
                                        <option>2010</option>
                                        <option>2011</option>
                                        <option>2012</option>
                                        <option>2013</option>
                                        <option>2014</option>
                                        <option>2015</option>
                                        <option>2016</option>
                                        <option>2017</option>
                                        <option>2018</option>
                                        <option>2019</option>
                                        <option>2020</option>
                                        <option>2021</option>
                                        <option>2022</option>

                                    </select>
                                </Form.Group>
                            </Row>

                            <Row>
                                <div id='gender'>
                                    Gender
                                    <IoMdHelpCircle size={17} className='help-icon' title='Click for more information.' />
                                </div>
                            </Row>

                            <Row>
                                <Form.Group as={Col} className='gender-group rem-padding'>
                                    <div className='form-control gender-div'>
                                        <label className='radio-label'>Female</label>
                                        <input type='radio' name='radio-group' className='radio-btn' />
                                    </div>
                                </Form.Group>

                                <Form.Group as={Col} className='gender-group rem-padding'>
                                    <div className='form-control gender-div'>
                                        <label className='radio-label'>Male</label>
                                        <input type='radio' name='radio-group' className='radio-btn' />
                                    </div>
                                </Form.Group>

                                <Form.Group as={Col} className='gender-group'>
                                    <div className='form-control gender-div'>
                                        <label className='radio-label'>Custom</label>
                                        <input type='radio' name='radio-group' className='radio-btn' />
                                    </div>
                                </Form.Group>
                            </Row>
                            <Row>
                                <div className='terms-privacy'>
                                    By clicking Sign Up, you agree to our <a className='terms-privacy-links'>Terms</a>, <a className='terms-privacy-links'>Data Policy</a> and <a className='terms-privacy-links'>Cookie Policy</a>. You may receive SMS notifications from us and can opt out at any time.
                                </div>
                            </Row>
                            <Row>
                                <Col className='text-center'>
                                    <Button className='sign-up-button' variant="success">
                                        Sign Up
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Modal.Body>

            </Modal>

        </div>
    );

};

export default FormComponent;

/*
<Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
        Close
    </Button>
    <Button variant="primary">Understood</Button>
</Modal.Footer>
*/

/*
const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Form className='form' autoComplete='on'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='input_' type="email" placeholder="Email address or phone number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='input_' type="password" autoComplete="on" placeholder="Password" />
                </Form.Group>
                <Link className='log-in-button btn btn-primary' to='/log-in-page'>
                    Log In
                </Link>
                <br />

                <Link className='forgot-password' to='/forgot_password'>Forgotten password?</Link>

                <hr />
                <Button className='new-account-button' variant="success" onClick={handleShow}>
                    Create New Account
                </Button>

            </Form>
            <div className='create-page'>
                <Link className='create-page-link' to='/create-a-page'>Create a Page </Link>
                for a celebrity, band or business.
            </div>



            {

                console.log(setShow)

            }

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className='modal-form'
                size="md"
                centered
            >
                <Modal.Header className='modal-header'>
                    <Modal.Title>
                        <div className='close-modal'>
                            <IoCloseSharp onClick={handleClose} />
                        </div>
                        <div className='sign-up-title'>Sign Up</div>
                        <div className='sign-up-muted'>It's quick and easy.</div>

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-body'>
                    <div>
                        <Form>
                            <Row >
                                <Form.Group as={Col} className='rem-padding'>
                                    <Form.Control className='signup-input' type="text" placeholder="First name" />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Control className='signup-input' type="text" placeholder="Surname" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3">
                                <Form.Control className='signup-input' type='email' type='tel' placeholder="Mobile number or email address" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control className='signup-input' type="password" placeholder="New password" />
                            </Form.Group>

                            <Row>
                                <div id='dob'>
                                    Date of Birth
                                    <IoMdHelpCircle size={17} className='help-icon' title='Click for more information.' />
                                </div>
                            </Row>

                            <Row>
                                <Form.Group as={Col} className='date rem-padding'>
                                    <select className='form-control day'>
                                        <option>1</option>
                                        <option selected>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                        <option>13</option>
                                        <option>14</option>
                                        <option>15</option>
                                        <option>16</option>
                                        <option>17</option>
                                        <option>18</option>
                                        <option>19</option>
                                        <option>20</option>
                                        <option>21</option>
                                        <option>22</option>
                                        <option>23</option>
                                        <option>24</option>
                                        <option>25</option>
                                        <option>26</option>
                                        <option>27</option>
                                        <option>28</option>
                                        <option>29</option>
                                        <option>30</option>
                                        <option>31</option>
                                    </select>
                                </Form.Group>

                                <Form.Group as={Col} className='date rem-padding'>
                                    <select className='form-control month'>
                                        <option>Jan</option>
                                        <option>Feb</option>
                                        <option>Mar</option>
                                        <option>Apr</option>
                                        <option>May</option>
                                        <option>Jun</option>
                                        <option>Jul</option>
                                        <option>Aug</option>
                                        <option>Sep</option>
                                        <option>Oct</option>
                                        <option>Nov</option>
                                        <option>Dec</option>
                                    </select>
                                </Form.Group>

                                <Form.Group as={Col} className='date'>
                                    <select className='form-control year'>
                                        <option>1999</option>
                                        <option>2000</option>
                                        <option>2001</option>
                                        <option>2002</option>
                                        <option>2003</option>
                                        <option>2004</option>
                                        <option>2005</option>
                                        <option>2006</option>
                                        <option>2007</option>
                                        <option>2008</option>
                                        <option>2009</option>
                                        <option>2010</option>
                                        <option>2011</option>
                                        <option>2012</option>
                                        <option>2013</option>
                                        <option>2014</option>
                                        <option>2015</option>
                                        <option>2016</option>
                                        <option>2017</option>
                                        <option>2018</option>
                                        <option>2019</option>
                                        <option>2020</option>
                                        <option>2021</option>
                                        <option>2022</option>

                                    </select>
                                </Form.Group>
                            </Row>

                            <Row>
                                <div id='gender'>
                                    Gender
                                    <IoMdHelpCircle size={17} className='help-icon' title='Click for more information.' />
                                </div>
                            </Row>

                            <Row>
                                <Form.Group as={Col} className='gender-group rem-padding'>
                                    <div className='form-control gender-div'>
                                        <label className='radio-label'>Female</label>
                                        <input type='radio' name='radio-group' className='radio-btn' />
                                    </div>
                                </Form.Group>

                                <Form.Group as={Col} className='gender-group rem-padding'>
                                    <div className='form-control gender-div'>
                                        <label className='radio-label'>Male</label>
                                        <input type='radio' name='radio-group' className='radio-btn' />
                                    </div>
                                </Form.Group>

                                <Form.Group as={Col} className='gender-group'>
                                    <div className='form-control gender-div'>
                                        <label className='radio-label'>Custom</label>
                                        <input type='radio' name='radio-group' className='radio-btn' />
                                    </div>
                                </Form.Group>
                            </Row>
                            <Row>
                                <div className='terms-privacy'>
                                    By clicking Sign Up, you agree to our <a className='terms-privacy-links'>Terms</a>, <a className='terms-privacy-links'>Data Policy</a> and <a className='terms-privacy-links'>Cookie Policy</a>. You may receive SMS notifications from us and can opt out at any time.
                                </div>
                            </Row>
                            <Row>
                                <Col className='text-center'>
                                    <Button className='sign-up-button' variant="success">
                                        Sign Up
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Modal.Body>

            </Modal>

        </div>
*/