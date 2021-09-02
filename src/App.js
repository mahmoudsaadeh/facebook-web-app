import './App.css';
//import { CardGroup, Card, Container, Form, Button, Row, Col } from 'react-bootstrap';
import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import FbSignInPage from './pages/fb-sign-in/fb-sign-in.component';
import ForgotPasswordPage from './pages/forgot-password/forgot-password.component';
import CreateAPage from './pages/create-a-page/create-a-page.component';
import ChangeLanguagePage from './pages/change-language/change-language.component';
import ChooseServicePage from './pages/choose-service/choose-service.component';
import LogInPage from './pages/log-in/log-in.component';
import ProfilePage from './pages/profile/profile.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// import Header from './components/header/header.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

// import { Redirect } from 'react-router-dom';

/*
xs, sm, md, lg
xs needed is 3
xs: It is used to denote the number of columns which will fit next to each other on extra-small devices having resolution < 576 pixels (phones mainly)
md: same as xs, but for larger displays (desktops)
g-4: for spacing between cards
*/

// comment in jsx: {/*<FbSignInPage />*/}

class App extends React.Component {

  /*constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }*/

  unsubscribeFromAuth = null;

  componentDidMount() {
    /*this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });*/

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // if userAuth is not null
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        /*userRef.onSnapshot(snapshot => {
          //console.log(snapshot);
          //console.log(snapshot.data());
          this.setState(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data()
              }
            }, 
            () => {
              console.log(this.state);
            }
          );
        });*/

        userRef.onSnapshot(snapshot => {
          //console.log(snapshot);
          //console.log(snapshot.data());
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      }
      else {
        // this.setState({ currentUser: userAuth });
        setCurrentUser(userAuth);
      }
    });

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }



  render() {

    const { currentUser } = this.props;

    return (
      <div>
        

        <Switch>
          {/*<Route exact path='/' component={FbSignInPage} />*/}
          <Route exact path='/' component={ProfilePage} />
          <Route path='/forgot_password' component={ForgotPasswordPage} />
          <Route path='/create-a-page' component={CreateAPage} />
          <Route path='/language-changing' component={ChangeLanguagePage} />
          <Route path='/chosen-service/:service_name' component={ChooseServicePage} />
          <Route exact path='/log-in-page' component={LogInPage} />
          {/*<Route path='/profile' component={ProfilePage} />*/}

          <Route exact path='/signin'
            render={() =>
              currentUser ?
                (<Redirect to='/' />) :
                (<FbSignInPage />)
            } />
          
        </Switch>
      </div>
    );
  }

};



const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

/*
<Route path='/profile' 
            render={() => (this.state.currentUser ? <ProfilePage /> : <Redirect to='/' />)} />
*/

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
