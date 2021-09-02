import React, { useState } from 'react';

import './cards.styles.scss';

// import CARDS_CONTENT from '../../data/cards.data';

import { Card, Col, Row } from 'react-bootstrap';

import { IoClose } from 'react-icons/io5';
//import { BsCircle } from 'react-icons/bs';

import AddAccountForm from '../add-account-form/add-account-form.component';
import { createStructuredSelector } from 'reselect';
import { getCardsSelector } from '../../redux/cards/cards.selectors';
import { connect } from 'react-redux';


const CardsComponent = ({ cards }) => {

    const array_size = cards.length;

    // console.log(cards);
    // console.log(typeof(cards));
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Row xs={2} md={3} className="g-4 cards-row">
                {
                    cards
                        .filter((content_1, index) => index < (array_size - 1))
                        .map(content => (
                            <Col className='cards-col-1' key={content.id}>
                                <Card className='card' title={content.title}>
                                    <IoClose title='Remove account from this page' className='close' size={18} />

                                    <div className='notification' title={`${content.notifications} new notifications`}>
                                        {content.notifications}
                                    </div>
                                    <Card.Img className='card-img' variant="top" src={content.imageSrc} fluid="true" />
                                    <Card.Title className='card-title'>{content.title}</Card.Title>
                                </Card>
                            </Col>
                        ))
                }
                {
                    //.filter((item, index) => index < 4)
                    cards
                        .filter((content_1, index) => index > (array_size - 2))
                        .map(content => (
                            <Col className='cards-col-1' key={content.id}>
                                <Card className='card' onClick={handleShow}>
                                    <Card.Img className='card-img' variant="top" src={content.imageSrc} fluid="true" />
                                    <Card.Title className='card-title'>{content.title}</Card.Title>
                                </Card>
                            </Col>
                        ))
                }
                <AddAccountForm show={show} handleClose={handleClose} />
            </Row>


        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cards: getCardsSelector
});

export default connect(mapStateToProps)(CardsComponent);


/*
class CardsComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            cards_content: CARDS_CONTENT
        }
    }

    render() {
        const { cards_content } = this.state;

        const array_size = cards_content.length;

        //
        // <BsCircle className='notification' size={22} />
        //console.log(this.state.notis);

        // need to check ig notifications are 1 or 0 and change english grammar or remove notis
        // div

        return (
            <div>
                <Row xs={2} md={3} className="g-4 cards-row">
                    {
                        //.filter((item, index) => index < 4)
                        cards_content
                            .filter((content_1, index) => index < (array_size - 1))
                            .map(content => (
                                <Col className='cards-col-1' key={content.id}>
                                    <Card className='card' title={content.title}>
                                        <IoClose title='Remove account from this page' className='close' size={18} />

                                        <div className='notification' title={`${content.notifications} new notifications`}>
                                            {content.notifications}
                                        </div>
                                        <Card.Img className='card-img' variant="top" src={content.imageSrc} fluid="true" />
                                        <Card.Title className='card-title'>{content.title}</Card.Title>
                                    </Card>
                                </Col>
                            ))
                    }
                    {
                        //.filter((item, index) => index < 4)
                        cards_content
                            .filter((content_1, index) => index > (array_size - 2))
                            .map(content => (
                                <Col className='cards-col-1' key={content.id}>
                                    <Card className='card' onClick={handleShow}>
                                        <Card.Img className='card-img' variant="top" src={content.imageSrc} fluid="true" />
                                        <Card.Title className='card-title'>{content.title}</Card.Title>
                                    </Card>
                                </Col>
                            ))
                    }
                    <AddAccountForm show={show} handleClose={handleClose} />
                </Row>


            </div>
        );
    }
}

export default CardsComponent;
*/