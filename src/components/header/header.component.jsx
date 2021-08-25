import React from 'react';

import { auth } from '../../firebase/firebase.utils';

import { Link } from 'react-router-dom';

const Header = ({ currentUser }) => (
    <div>
        <h4>User auth status: </h4>
        {
            currentUser ?
            <div onClick={() => auth.signOut()}>Sign out</div>
            :
            <Link to='/'>Sign in</Link>
        }
        <hr />
    </div>
);

export default Header;