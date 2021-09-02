import React from 'react';

import './sign-up-form.styles.scss';

import { Modal, Form, Button, Row, Col } from 'react-bootstrap';

import { IoMdHelpCircle } from 'react-icons/io';
import { IoCloseSharp } from 'react-icons/io5';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import validator from 'validator';

// import { Link, Redirect } from 'react-router-dom';


class SignUpForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            surName: '',
            emailOrPhone: '',
            password: '',
            day: '15',
            month: '5',
            year: '2005',
            gender: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        // same as in App.js when making google auth (but this time, we are manually creating it)
        const { firstName, surName, emailOrPhone, password, day, month, year, gender }
            = this.state;

        const fullName = firstName + ' ' + surName;
        const dob = day + '-' + month + '-' + year;

        console.log(typeof(firstName)); // string
        // console.log(typeof(fullName)); // string
        console.log(dob);

        const userInfo = {
            fullName2: fullName,
            dob2: dob,
            gender2: gender
        };

        console.log(typeof(userInfo)); // object
        console.log(typeof(userInfo.gender2)); // string


        if (!validator.isEmail(emailOrPhone)) {
            alert('Please enter a valid email!');
            return;
        }

        try {
            // we added brackets to 'user' because an object is returned
            const { user } = await auth.createUserWithEmailAndPassword(emailOrPhone, password);

            //console.log('user1' + {user}); // object
            //console.log('userInfo1 ' + userInfo); // object

            await createUserProfileDocument(user, userInfo);

            //console.log('user2' + {user}); // object
            //console.log('userInfo2 ' + userInfo); // object

            // this will clear our form
            this.setState({
                firstName: '',
                surName: '',
                emailOrPhone: '',
                password: '',
                day: '15',
                month: '5',
                year: '2005',
                gender: ''
            });

            //<Redirect to='/profile' />
            this.props.handleClose();
            alert("Sign up successful!");
            // this.props.history.push('/log-in-page');
        } catch (error) {
            console.error(error);
        }
    }


    handleChange = event => {
        const { name, value } = event.target; // check in console for 'target'
        this.setState({ [name]: value });
    }

    render() {

        const { firstName, surName, emailOrPhone, password, day, month, year, gender } = this.state;

        return (
            <div>
                <Modal
                    show={this.props.show}
                    onHide={this.props.handleClose}
                    backdrop="static"
                    keyboard={false}
                    className='modal-form'
                    size="md"
                    centered
                >
                    <Modal.Header className='modal-header'>
                        <Modal.Title>
                            <div className='close-modal'>
                                <IoCloseSharp onClick={this.props.handleClose} />
                            </div>
                            <div className='sign-up-title'>Sign Up</div>
                            <div className='sign-up-muted'>It's quick and easy.</div>

                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='modal-body'>
                        <div>
                            <Form onSubmit={this.handleSubmit}>
                                <Row >
                                    <Form.Group as={Col} className='rem-padding'>
                                        <Form.Control className='signup-input' type="text" placeholder="First name" name='firstName' onChange={this.handleChange} value={firstName} required />
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Control className='signup-input' type="text" placeholder="Surname" name='surName' onChange={this.handleChange} value={surName} required />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Control className='signup-input' type='email' placeholder="Mobile number or email address" name='emailOrPhone' onChange={this.handleChange} value={emailOrPhone} required />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Control className='signup-input' type="password" placeholder="New password" name='password' onChange={this.handleChange} value={password} autoComplete='on' required />
                                </Form.Group>

                                <Row>
                                    <div id='dob'>
                                        Date of Birth
                                        <IoMdHelpCircle size={17} className='help-icon' title='Click for more information.' />
                                    </div>
                                </Row>

                                <Row>
                                    {
                                        /* https://www.w3schools.com/react/react_forms.asp */
                                        // check select explanation at bottom
                                    }
                                    <Form.Group as={Col} className='date rem-padding'>
                                        <select className='form-control day'
                                            name='day'
                                            defaultValue='5'
                                            onChange={this.handleChange}
                                            required>
                                            <option value='1'>1</option>
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                            <option value='5'>5</option>
                                            <option value='6'>6</option>
                                            <option value='7'>7</option>
                                            <option value='8'>8</option>
                                            <option value='9'>9</option>
                                            <option value='10'>10</option>
                                            <option value='11'>11</option>
                                            <option value='12'>12</option>
                                            <option value='13'>13</option>
                                            <option value='14'>14</option>
                                            <option value='15'>15</option>
                                            <option value='16'>16</option>
                                            <option value='17'>17</option>
                                            <option value='18'>18</option>
                                            <option value='19'>19</option>
                                            <option value='20'>20</option>
                                            <option value='21'>21</option>
                                            <option value='22'>22</option>
                                            <option value='23'>23</option>
                                            <option value='24'>24</option>
                                            <option value='25'>25</option>
                                            <option value='26'>26</option>
                                            <option value='27'>27</option>
                                            <option value='28'>28</option>
                                            <option value='29'>29</option>
                                            <option value='30'>30</option>
                                            <option value='31'>31</option>
                                        </select>
                                    </Form.Group>

                                    <Form.Group as={Col} className='date rem-padding'>
                                        <select className='form-control month'
                                            name='month'
                                            defaultValue='May'
                                            onChange={this.handleChange}
                                            required>
                                            <option value='Jan'>Jan</option>
                                            <option value='Feb'>Feb</option>
                                            <option value='Mar'>Mar</option>
                                            <option value='Apr'>Apr</option>
                                            <option value='May'>May</option>
                                            <option value='Jun'>Jun</option>
                                            <option value='Jul'>Jul</option>
                                            <option value='Aug'>Aug</option>
                                            <option value='Sep'>Sep</option>
                                            <option value='Oct'>Oct</option>
                                            <option value='Nov'>Nov</option>
                                            <option value='Dec'>Dec</option>
                                        </select>
                                    </Form.Group>

                                    <Form.Group as={Col} className='date'>
                                        <select className='form-control year'
                                            name='year'
                                            defaultValue='2001'
                                            onChange={this.handleChange}
                                            required>
                                            <option value='1999'>1999</option>
                                            <option value='2000'>2000</option>
                                            <option value='2001'>2001</option>
                                            <option value='2002'>2002</option>
                                            <option value='2003'>2003</option>
                                            <option value='2004'>2004</option>
                                            <option value='2005'>2005</option>
                                            <option value='2006'>2006</option>
                                            <option value='2007'>2007</option>
                                            <option value='2008'>2008</option>
                                            <option value='2009'>2009</option>
                                            <option value='2010'>2010</option>
                                            <option value='2011'>2011</option>
                                            <option value='2012'>2012</option>
                                            <option value='2013'>2013</option>
                                            <option value='2014'>2014</option>
                                            <option value='2015'>2015</option>
                                            <option value='2016'>2016</option>
                                            <option value='2017'>2017</option>
                                            <option value='2018'>2018</option>
                                            <option value='2019'>2019</option>
                                            <option value='2020'>2020</option>
                                            <option value='2021'>2021</option>
                                            <option value='2022'>2022</option>

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
                                            <input type='radio' name='gender' className='radio-btn'
                                                value="female"
                                                onChange={this.handleChange}
                                                required />
                                        </div>
                                    </Form.Group>

                                    <Form.Group as={Col} className='gender-group rem-padding'>
                                        <div className='form-control gender-div'>
                                            <label className='radio-label'>Male</label>
                                            <input type='radio' name='gender' className='radio-btn' value="male"
                                                onChange={this.handleChange}
                                                required />
                                        </div>
                                    </Form.Group>

                                    <Form.Group as={Col} className='gender-group'>
                                        <div className='form-control gender-div'>
                                            <label className='radio-label'>Custom</label>
                                            <input type='radio' name='gender' className='radio-btn' value="custom"
                                                onChange={this.handleChange}
                                                required />
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
                                        
                                            <Button className='sign-up-button' type='submit' variant="success">
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
    }
}

export default SignUpForm;