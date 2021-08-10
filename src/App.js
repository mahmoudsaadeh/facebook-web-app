import './App.css';
//import { CardGroup, Card, Container, Form, Button, Row, Col } from 'react-bootstrap';
import React from 'react';
import { Route, Switch, BrowserRouter, withRouter } from 'react-router-dom';
import FbSignInPage from './pages/fb-sign-in/fb-sign-in.component';
import ForgotPasswordPage from './pages/forgot-password/forgot-password.component';
import CreateAPage from './pages/create-a-page/create-a-page.component';
import ChangeLanguagePage from './pages/change-language/change-language.component';
import ChooseServicePage from './pages/choose-service/choose-service.component';
import LogInPage from './pages/log-in/log-in.component';

/*
xs, sm, md, lg
xs needed is 3
xs: It is used to denote the number of columns which will fit next to each other on extra-small devices having resolution < 576 pixels (phones mainly)
md: same as xs, but for larger displays (desktops)
g-4: for spacing between cards
*/

// comment in jsx: {/*<FbSignInPage />*/}

function App() {

  return (
    <div>
      
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={FbSignInPage} />
          <Route path='/forgot_password' component={ForgotPasswordPage} />
          <Route path='/create-a-page' component={CreateAPage} />
          <Route path='/language-changing' component={ChangeLanguagePage} />
          <Route path='/chosen-service/:service_name' component={ChooseServicePage} />
          <Route path='/log-in-page' component={LogInPage} />
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*
<div>
      <FbSignInPage />

      <Switch>
        <Route exact path='/' component={FbSignInPage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
*/

/*

<div className="App">
      <Container className='main-container'>
        <Row className='row-1'>
          <Col sm>
            <Container className='container-1'>
              <h1 className="title">facebook</h1>
              <span className="sub-title">Recent logins</span>
              <br />
              <span className="muted-txt text-muted">Click your picture or add an account.</span>
              <CardGroup className='card-group'>
                <Card className='card'>
                  <Card.Img className='card-img' variant="top" src={profile} />
                  <Card.Title className='card-title'>Rachel</Card.Title>
                </Card>
                <Card className='card'>
                  <Card.Img className='card-img' variant="top" src={plus} />
                  <Card.Title className='card-title'>Add Account</Card.Title>
                </Card>
              </CardGroup>
            </Container>
          </Col>
          <Col sm>
            <Container className='container-2'>
              <Form className='form'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Email address or phone number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className='log-in-button' variant="primary" type="submit">
                  Log In
                </Button>
                <br />
                <a className='forgot-password' href="#">Forgotten password?</a>
                <hr />
                <Button className='new-account-button' variant="success" type="submit">
                  Create New Account
                </Button>
              </Form>
              <div className='create-page'>
                <a href='#' className='create-page-link'>Create a Page </a>
                for a celebrity, band or business.
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>

*/