import React from 'react';
import './landing-page.styles.scss';
import Header from '../../components/header/header.component';
import { ReactComponent as OctopusLogo } from '../../assets/svg_octopus.svg';

const LandingPage = () => {
    return (
        <div className='landingPageContainer'>
            <Header />
            <div className='mainPanel'>
                <div className='mainPanelText'>
                    <p className='mainPanelTitle'>Subí y solidifica tus modelos</p>
                    <p className='mainPanelSubTitle'>Arrastra y solta donde quieras tu archivo. Configura la impresión. <br/>Cotiza tu modelo por mas de 10.000 makers</p>
                </div>
                <div className="mainPanelButton">
                    <div className="mainPanelButtonInner">
                        <a className="loadButton" href="#">Cargar un modelo</a>
                    </div>
                    <div>
                        <p className='modelButton'>¿ Necesitas un modelo ?</p>
                    </div>
                </div>
                <div className='mainPanelImage'>
                    <OctopusLogo className='octopusLogo'/>
                </div>
            </div>
            <div className='secondPanel'>
            
            </div>
            <div className='thirdPanel'>

            </div>
        </div>
    )
}

export default LandingPage;