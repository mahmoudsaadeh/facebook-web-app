import React from 'react';

import { auth } from '../../firebase/firebase.utils';

import { Link, useHistory, withRouter } from 'react-router-dom';

import { Button } from 'react-bootstrap';

const Header = ({ currentUser, history }) => {

    // const history = useHistory();

    return (
        <div>
            <h4>User auth status: </h4>
            {
                currentUser ?
                    <Button variant="primary" onClick={() => {
                        //history.push('/signin');
                        auth.signOut();
                    }}>
                        Log Out
                    </Button>
                    :
                    history.push('/signin')
            }
            <hr />
        </div>
    );

};

export default withRouter(Header);

/*
{
            currentUser ?
            <Link onClick={() => auth.signOut()}>Sign out</Link>
            :
            <Link to='/signin'>Sign in</Link>
        }
*/