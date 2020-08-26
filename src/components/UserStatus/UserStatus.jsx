import React from 'react';
import './UserStatus.scss';
import UserStatusStarsInfo from './UserStatusStarsInfo/UserStatusStarsInfo';
import UserStatusComment from './UserStatusComment/UserStatusComment';

const UserStatus = () => {
    
    return (
        <div className="userStatus">
            <div className="userStatusInfo">
                <div className="userStatusStarsContainer">
                    <UserStatusStarsInfo title="Calidad de impresión" value="5"/>
                    <UserStatusStarsInfo title="Velocidad" value="2.6"/>
                    <UserStatusStarsInfo title="Atención" value="4.2"/>
                </div>
                <div className="userStatusInfoCount">
                    2.3<span>/5</span>
                </div>
            </div>            
            <div className="userStatusCommentsContainer">
                <UserStatusComment userName="Elwa Son" comment="Un divino"/>
                <UserStatusComment userName="Perón" comment="Hermosa herramienta para los trabajadores"/>
            </div>
        </div>
    )

}

export default UserStatus;
