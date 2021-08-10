import React from 'react';

import './footer.styles.scss';

import { Container } from 'react-bootstrap';
import { BsPlus } from 'react-icons/bs';

import { Icon } from '@iconify/react';
import adChoices from '@iconify-icons/mdi/ad-choices';

import LANGS from '../../data/languages.data';
import SERVICES from '../../data/services.data';

import { Link } from 'react-router-dom';

import ChangeLanguagePage from '../../pages/change-language/change-language.component';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            langs: LANGS,
            services: SERVICES
        }
    }

    render() {

        const { langs } = this.state;
        const { services } = this.state;

        return (
            <footer className='footer-container'>
                <Container fluid className='footer-inner-container'>
                    <div className='languages-div'>
                        <ul className='languages-ul'>
                            {
                                langs.map(lang => (
                                    <li>
                                        <Link className='link' to='language-changing' key={lang.id} title={lang.title}>{lang.name}</Link>
                                    </li>
                                ))
                            }
                            <li className='more-langs-li'>
                                <a role='button' className='more-langs-btn' rel='dialog' href='#'
                                    title='Show more languages'>
                                    <BsPlus className='plus-icon' size={22} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <hr className='hr-line'></hr>
                    <div className='services-div'>
                        <ul className='services-ul'>
                            {
                                services.map(service => (
                                    <li key={service.id}>
                                        <Link to={`/chosen-service/${service.service_name}`} title={service.service_description} 
                                                    className={`${service.class_name} service`}>
                                            {service.service_name}
                                            <Icon icon={adChoices} className='ad-icon' />
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='copyright-div'>
                        Facebook &copy; 2021
                    </div>
                </Container>
            </footer>
        )
    }
}

export default Footer;