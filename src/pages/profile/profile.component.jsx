import React from 'react';

import './profile.styles.scss';

import Header from '../../components/header/header.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';


const ProfilePage = ({ currentUser }) => {

    return (
        <div>
            <Header currentUser={currentUser} />
            Profile Page, Welcome!!!
        </div>
    );

};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(ProfilePage);