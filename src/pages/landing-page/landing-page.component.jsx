import React from 'react';
import './landing-page.styles.scss';
import Header from '../../components/header/header.component';
import Boca from '../../assets/boca.png';

const LandingPage = () => {
    return (
        <div className='landingPageContainer'>
            <Header />
            <div className='mainPanel'>
                <img src={Boca} alt='enano'></img>
            </div>
            <div className='secondPanel'>
            
            </div>
            <div className='thirdPanel'>
            
            </div>
        </div>
    )
}

export default LandingPage;