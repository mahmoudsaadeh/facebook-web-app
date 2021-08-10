import React from 'react';

import './recent-logins.styles.scss';

//import { Row } from 'react-bootstrap';

import CardsComponent from '../cards/cards.component';


const RecentLogins = () => (
    <div>
        <h1 className="title">facebook</h1>
        <div className="sub-title">Recent logins</div>
        <div className="text-muted muted-txt">Click your picture or add an account.</div>

        <CardsComponent />
    </div>
);


export default RecentLogins;