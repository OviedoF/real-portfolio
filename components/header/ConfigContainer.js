import React from 'react';
import { faArrowRightFromBracket, faLanguage, faPalette } from '@fortawesome/free-solid-svg-icons';
import ConfigButton from './ConfigButton';

const ConfigContainer = () => {
    const handleHeader = () =>{
        console.log('holi')
    }

    return (
        <div>
            <ConfigButton icon={faPalette} screen={'themes'}/>
            <ConfigButton icon={faLanguage} screen={'language'}/>

            <style jsx>{`
                div{
                    width: auto;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            `}</style>
        </div>
    );
}

export default ConfigContainer;
