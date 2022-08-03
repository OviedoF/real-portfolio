import React, { useState } from 'react';
import { faLanguage, faPalette, faBars } from '@fortawesome/free-solid-svg-icons';
import ConfigButton from './ConfigButton';
import CloseNavMobileButton from './CloseNavMobileButton';

const ConfigContainer = ({setIsMobileNavActive, isMobileNavActive}) => {

    return (
        <div>
            <ConfigButton 
            icon={faPalette} 
            screen={'themes'}
            />

            <ConfigButton 
            icon={faLanguage} 
            screen={'language'}
            />

            <CloseNavMobileButton
                icon={faBars}
                setIsMobileNavActive={setIsMobileNavActive} 
                isMobileNavActive={isMobileNavActive}
            />

            <style jsx>{`
                div{
                    width: auto;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                @media only screen and (max-width: 550px){
                    div{
                        width: 100%;
                        justify-content: flex-end;
                    }
                }
            `}</style>
        </div>
    );
}

export default ConfigContainer;
