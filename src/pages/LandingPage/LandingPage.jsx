import React from 'react';
import './LandingPage.scss';
import Header from '../../components/Header/Header';
import { ReactComponent as OctopusLogo } from '../../assets/LandingPage/svg-octopus.svg';
import { ReactComponent as ModelLogo } from '../../assets/LandingPage/svg-quote.svg';
import { ReactComponent as HandShakeLogo } from '../../assets/LandingPage/svg-handshake.svg';
import { ReactComponent as MercadoLibreLogo } from '../../assets/LandingPage/svg-mercado_libre.svg';
import { ReactComponent as TruckLogo } from '../../assets/LandingPage/svg-truck.svg';
import { ReactComponent as FirstTriangle } from '../../assets/LandingPage/svg-first-triangle.svg';
import { ReactComponent as SecondTriangle } from '../../assets/LandingPage/svg-second-triangle.svg';
import { Button, Icon } from 'semantic-ui-react';

const LandingPage = () => {
    return (
        <div className='landingPageContainer'>
            <Header />
            <div className='mainPanel'>
                <div className='mainPanelText'>
                    <p className='mainPanelTitle'>Subí y solidifica tus modelos</p>
                    <p className='mainPanelSubTitle'>Arrastra y solta donde quieras tu archivo. Configura la impresión. <br />Cotiza tu modelo por mas de 10.000 makers</p>
                </div>
                <div className="mainPanelButton">
                    <div className="mainPanelButtonInner">
                        <a className="loadButton" href="#">Cargar un modelo</a>
                    </div>
                    <div>
                        <p className='modelButton'>¿NECEISTAS UN MODELO?</p>
                    </div>
                </div>
                <div className='mainPanelImage'>
                    <OctopusLogo className='octopusLogo' />
                </div>
            </div>

            <div className='triangleContainer'>
                
                <FirstTriangle className='triangleSvg dark' />
            </div>

            <div className='secondPanel'>
                <div className='secondPanelText'>
                    <p className='secondPanelTitle'>¿Cómo funciona?</p>
                    <p className='secondPanelSubTitle'>¡Muy fácil!</p>
                </div>
            </div>

            <div className='triangleContainer'>
                <SecondTriangle className='triangleSvg' />
            </div>

            <div className='thirdPanel'>
                <div className='thirdPanelModel'>
                    <div className='radiusButton'>
                        <span className='radiusNumber'>1</span>
                    </div>
                    <div className='modelTitleContainer'>
                        <p className='modelTitle'>Cotiza tu modelo</p>
                    </div>
                    <div className='modelLogoContainer'>
                        <ModelLogo className='modelLogo' />
                    </div>
                    <div className='modelTextContainer'>
                        <p className='modelText'>¿Necesitas un modelo?<br />Contrata un diseñador</p>
                    </div>
                </div>
                <div className='thirdPanelModel'>
                    <div className='radiusButton'>
                        <span className='radiusNumber'>2</span>
                    </div>
                    <div className='modelTitleContainer'>
                        <p className='modelTitle'>Contrata un <br />maker</p>
                    </div>
                    <div className='modelLogoContainer'>
                        <HandShakeLogo className='modelLogo' />
                    </div>
                    <div className='modelTextContainer'>
                        <p className='modelText'>Tenemos buena gente</p>
                    </div>
                </div>
                <div className='thirdPanelModel'>
                    <div className='radiusButton'>
                        <span className='radiusNumber'>3</span>
                    </div>
                    <div className='modelTitleContainer'>
                        <p className='modelTitle'>Pagá con <br />Mercado Pago</p>
                    </div>
                    <div className='modelLogoContainer'>
                        <MercadoLibreLogo className='modelLogo' />
                    </div>
                    <div className='modelTextContainer'>
                        <p className='modelText'>En efectivo, transferencia <br />o tarjeta de crédito/débito.</p>
                    </div>
                </div>
                <div className='thirdPanelModel'>
                    <div className='radiusButton'>
                        <span className='radiusNumber'>4</span>
                    </div>
                    <div className='modelTitleContainer'>
                        <p className='modelTitle'>Recibilo en <br />tu casa</p>
                    </div>
                    <div className='modelLogoContainer'>
                        <TruckLogo className='modelLogo' />
                    </div>
                    <div className='modelTextContainer'>
                        <p className='modelText'>Así de fácil y comodo</p>
                    </div>
                </div>
            </div>

            <div className='fourthPanel'>
                <div className='fourthPanelInnerContainer'>
                    <div>
                        <p className='fourthPanelTitle'>
                            ¿Necesitas un modelo?
                        </p>
                    </div>
                    <div>
                        <p className='fourthPanelSubTitle'>
                            Contanos que es lo que necesitas.<br />
                            Por ejemplo, un objeto ya existente, o desde un plano o dibujo, o simplemente desde cero.<br />
                            Contrata al maker que mejor entendió tu idea y ellos te irán mostrando como va quedando<br />tu modelo.
                        </p>
                    </div>
                    <div className='fourthPanelButton'>
                        <Button animated>
                            <Button.Content visible>CONTANOS TU IDEA</Button.Content>
                            <Button.Content hidden>
                                <Icon name='pencil' />
                            </Button.Content>
                        </Button>
                    </div>
                </div>
            </div>

            <div className='fifthPanel'>
                <div className='fifthPanelInnerContainer'>
                    <p className='fifthPanelTitle'>¿Tenes impresora 3D? ¿Sos modelador 3D? ¿Ambas?</p>
                    <p className='fifthPanelSubTitle'>Monetiza tu talento, mucha gente necesita tu ayuda. Compartí o vende tus diseños</p>
                    <div className='fifthPanelButton'>
                    <Button className='fifthPanelButton'>SUMATE</Button>
                    </div>
                </div>
            </div>

            <div className='footerPanel'>

            </div>
        </div>
    )
}

export default LandingPage;