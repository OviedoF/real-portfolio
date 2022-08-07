import React from 'react';
import { faLanguage, faPalette, faBars } from '@fortawesome/free-solid-svg-icons';
import ConfigThemeButton from './ConfigThemeButton';
import CloseNavMobileButton from './CloseNavMobileButton';
import TranslateButton from './TranslateButton';

const ConfigContainer = ({setIsMobileNavActive, isMobileNavActive}) => {

    return (
        <div>
            <ConfigThemeButton 
            icon={faPalette} 
            screen={'themes'}
            />

            <TranslateButton/>

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

                @media only screen and (max-width: 645px){
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
