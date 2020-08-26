import React, {useState, useCallback} from 'react';
import './MainPage.scss';
import SideNavBar from '../../components/SideNavBar/SideNavBar';
import ProfilePage from '../ProfilePage/ProfilePage';

const MainPage = () => {
    
    return (
        <div className="mainContainer">
            <SideNavBar />
            <div className="pageContainer">
                <ProfilePage/>
            </div>
        </div>
    )

}

export default MainPage;